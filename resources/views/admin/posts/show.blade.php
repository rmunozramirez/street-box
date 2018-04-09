@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Categories: {{count($all_postcategories)}}</span> </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						Blog Posts

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i><a href="{{route('posts.index')}}">Back to Posts</a>
		            </div>
		        </div>
	        </div>
        	<hr>
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
</section>

	
@endsection

