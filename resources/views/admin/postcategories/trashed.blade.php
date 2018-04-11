@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_posts)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('postcategories.index')}}">Back to categories</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('postcategories.trashed')}}">Trashed Categories</a>
                    </span>
                </ol>
                <hr>
				<div class="row">
					@if(count($postcategories) > 0)
							<table class="table table-striped table-hover">
						         <thead>
						            <tr>
						                <th>Category</th>
						                <th>Posts</th>
						                <th>Date</th>
						            </tr>
						         </thead>
						         <tbody>
						         	@foreach ($postcategories as $postcategory)
						            <tr>
						               <td>
						                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $postcategory->image ) }}" alt="{{$postcategory->title}}" > {{$postcategory->title}}
						             </td>
						               <td>{{count($postcategory->posts)}}</td>
						               <td>{{$postcategory->created_at}}</td>
						               <td><a href="{{route('postcategories.restore', $postcategory->slug)}}">Restore</a></td>
						               <td><a href="{{route('postcategories.kill', $postcategory->slug)}}">Permanent Delete</a></td>
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
	</div>
</section>

	
@endsection


