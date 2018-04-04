@extends('layouts.app')
@section ('title', "| $post->title")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{{ $post->subtitle }}</h2>

			<div class="row">
				<div class="col-md-12">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title=" {{$post->postcategory->title}}" href="{{route('postcategories.show', $post->postcategory->slug) }}"> {{$post->postcategory->title}}</a>
						{!! $page_name !!}
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


                <!-- Preview Image -->
                <figure>
                	<img class="img-responsive" src="{{URL::to('/images/' . $post->image)}}" alt="{{ $post->title }}" name="{{ $post->title }}">
                </figure>
                <hr>
                <!-- Post Content -->
                {!! $post->body !!}
                <hr>


		</div>	
		
	</div>
</section>

	
@endsection

