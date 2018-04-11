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
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('posts.create')}}">Create a new Post</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('posts.trashed')}}">Trashed Posts</a>
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
				<div class="row mb-4">
					<div class="col-md-8">
			            <div class="under-meta">
			            	<i class="fa fa-user"></i> Author: <a href="">Domingo</a>         
							<i class="fa fa-tag"></i> Category: <a href="{{route('postcategories.show', $post->postcategory->slug)}}">{{$post->postcategory->title }}</a>
			            	<i class="far fa-clock"></i> Posted: {{$post->created_at->diffForHumans()}}
			            </div>
			        </div>
					<div class="col-md-4">
			            <div class="row">
			            	<a type="button" class="col-md-6 btn btn-secondary" href="{{route('posts.edit', $post->slug)}}">Edit</a>
			            	<div class="col-md-6">
				            	{!! Form::open(['route' => ['posts.destroy', $post->slug], 'method' => 'DELETE']) !!}

								{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

								{!! Form::close() !!}
							</div>
			            </div>
			        </div>
		        </div>

				<div class="row">        
				    <div class="col-md-4">
		                <!-- Preview Image -->
		                <figure>
		                	<img class="img-responsive" src="{{URL::to('/images/' . $post->image)}}" alt="{{ $post->title }}" name="{{ $post->title }}">
		                </figure>
	            	</div>
	                <div class="col-md-8">
		                <h3>{{ $post->subtitle }}</h3>
		                <!-- Post Content -->
		                {!! $post->body !!}
	                </div>
	           	</div>
			</div>
		</div>
	</div>
</section>

@endsection
