@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_pages)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-pages.index')}}">Back to pages</a>
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-pages.create')}}">Create a new Page</a>
                    </span>
                </ol>
                <hr>
		            	
			    @if(count($errors) > 0)
			        <ul class="list-group">
			            @foreach($errors->all() as $error)
			                <li class="list-group-item text-danger">{{$error}}</li>
			            @endforeach
			        </ul>
			    @endif
		
			<div class="row">
						@if(count($pages) > 0)
								<table class="table table-striped table-hover">
							         <thead>
							            <tr>
							                <th>Page</th>
							                <th>Status</th>
							                <th>Date</th>
							            </tr>
							         </thead>
							         <tbody>
							         	@foreach ($pages as $page)
							            <tr>
							               <td><a href="{{route('admin-pages.show', $page->slug)}}">
							               	<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $page->image ) }}" alt="{{$page->title}}" > {{$page->title}}</a></td>
							               <td>{{$page->status}}</td>
							               <td>{!! $page->created_at !!}</td>
							               <td><a href="{{route('admin-pages.restore', $page->slug)}}">Restore</a></td>
				               				<td><a href="{{route('admin-pages.kill', $page->slug)}}">Permanent Delete</a></td>
							            </tr>
							            @endforeach
							         </tbody>
							      </table>
						@else
						<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
				@endif
			</div>	
		</div>
	</div>
</section>

@endsection

