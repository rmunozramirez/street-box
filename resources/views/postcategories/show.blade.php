@extends('layouts.app')
@section ('title', "| $postcategory->title")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">
		<div class="inside">
			<h2>{{ $postcategory->subtitle }}</h2>
			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						hier breadcrumb
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="meta pull-right">
						{{$postcategory->posts_count}} posts in {{ $postcategory->title }}
		            </div>
		        </div>
	        </div>
        	<hr>
			<div class="row">
				@foreach ($posts as $post)
				<div class="col-lg-3 col-md-4">	
					<div class="card hovercard">
						<img class="cardheader" src="{{URL::to('/images/' . $post->image)}}">
							<h3><a href="{{route('posts.show', $post->slug)}}">{{ $post->title }}</a></h3>
						<div class="card-body">					
				   
							<p>
								Event Rating:<br />
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star"></i>
								<i class="fa fa-star-o"></i>
								(14)
							</p>	
							<hr>

							<a href="{{route('posts.show', $post->slug)}}">View</a>

							| Edit | <a href="event.php">Delete</a>
						</div>
					</div>
					
				</div>
				@endforeach
			</div>	
			<div class="text-center">
		        {{ $posts->links() }}
		    </div>		
		</div>		
	</div>
</section>

	
@endsection


