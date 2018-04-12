@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Pages: {{count($all_pages)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-pages.create')}}">Create a new Page</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-pages.trashed')}}">Trashed Pages</a>
                    </span>
                </ol>
                <hr>

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
							               <td>
							               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('admin-pages.edit', $page->slug)}}">Edit</a>
								            	<div class="col-md-6">
									            	{!! Form::open(['route' => ['admin-pages.destroy', $page->slug], 'method' => 'DELETE']) !!}

													{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

													{!! Form::close() !!}
												</div>
							               </td>
							            </tr>
							            @endforeach
							         </tbody>
							      </table>
						@else
							<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
						@endif
				</div>	
				<div class="text-center">
			        {{ $pages->links() }}
			    </div>	
		    </div>	
	    </div>	
	</div>
</section>

	
@endsection


