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
			<h2>{!! $post->subtitle !!} </h2>
			<div class="row">
				<div class="col-md-9">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title=" {{$post->postcategory->title}}" href="{{route('newscategories.show', $post->postcategory->slug) }}"> {{$post->postcategory->title}}</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-3">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{ URL::to('/newscategories/' . $post->postcategory->slug) }}">Back to {{$post->postcategory->title}}</a> 
		            </div>
		        </div>					
			</div>
        	<hr>
			<div class="row mb-12">
				<div class="col-md-10">
		            <div class="under-meta pb-5">
		            	<i class="fa fa-user"></i> Author: <a href="">Domingo</a>         
						<i class="fa fa-tag"></i> Category: <a href="{{route('postcategories.show', $post->postcategory->slug)}}">{{$post->postcategory->title }}</a>
		            	<i class="far fa-clock"></i> Posted: {{$post->created_at->diffForHumans()}}
		            </div>
		        </div>

	        </div>


                <!-- Preview Image -->
                <figure>
                	<img class="img-responsive" src="{{URL::to('/images/' . $post->image)}}" alt="{{ $post->title }}" name="{{ $post->title }}">
                </figure>
                <hr>
                <h3>{{ $post->subtitle }}</h3>
                <!-- Post Content -->
                {!! $post->body !!}
                <hr>


		</div>	
		
	</div>
</section>

	
@endsection

