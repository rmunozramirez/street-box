@extends('layouts.app')
@section ('title', '| All Blog Posts')
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>Posts</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						hier breadcrumb
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="meta pull-right">
		            	<i class="fa fa-tags"></i> Categories: <a href="{{route('postcategories.index')}}">{{count($postcategories)}}</a>
		            	<i class="far fa-newspaper"></i> Posts: {{count($total)}}
		            </div>
		        </div>
	        </div>
        	<hr>
		<div class="row">
			@foreach ($posts as $post)
			<div class="col-lg-3 col-md-4">	
				<div class="card hovercard">
					<img class="cardheader" src="{{URL::to('/images/' . $post->image)}}">
						<h3><a href="{{ url('blogs/'.$post->slug) }}">{{ $post->title }}</a></h3>
					
					<div class="card-body">					
						<h5 class="subcat">	In:				
							categories			
						</h5>					   
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

						<a href="{{ url('blogs/'.$post->slug) }}">View</a>

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
</section>

	
@endsection


