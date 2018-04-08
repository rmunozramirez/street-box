@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_posts)}}</span> </h2>
			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('posts.create')}}">Create a new Post</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('posts.trashed')}}">Trashed Posts</a>

		            </div>
		        </div>
	        </div>
        	<hr>

		<div class="row">
				@if(count($posts) > 0)
						<table class="table table-striped table-hover">
					         <thead>
					            <tr>
					                <th>Post</th>
					                <th>Category</th>
					                <th>Date</th>
					            </tr>
					         </thead>
					         <tbody>
					         	@foreach ($posts as $post)
					            <tr>
					               <td><a href="{{route('posts.show', $post->slug)}}">
					               	<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $post->image ) }}" alt="{{$post->title}}" > {{$post->title}}</a></td>
					               <td><a href="{{route('postcategories.show', $post->postcategory->slug)}}">{{$post->postcategory->title}}</a></td>
					               <td>{{$post->created_at}}</td>
					               <td>
					               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('posts.edit', $post->slug)}}">Edit</a>
						            	<div class="col-md-6">
							            	{!! Form::open(['route' => ['posts.destroy', $post->slug], 'method' => 'DELETE']) !!}

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
	        {{ $posts->links() }}
	    </div>		
	</div>
</section>

	
@endsection


