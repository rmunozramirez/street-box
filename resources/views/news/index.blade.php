@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div id="contenido"  class="container card-body left-right-shadow">
		<div class="inside">
			<h2>This is the {!! $page_name !!} Index page</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title="All Blog Categories" href="{{route('postcategories.index')}}">Blog Categories</a>
						All {!! $page_name !!}s
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-pencil-alt"></i> <a href="">A link</a>

		            </div>
		        </div>
	        </div>
        	<hr>

		<div class="row">
			@foreach ($posts as $post)
			<div class="col-lg-3 col-md-4">	
				<div class="card hovercard">
					<img class="cardheader" src="{{URL::to('/images/' . $post->image)}}">
						<h3><a href="{{route('news.show' , $post->slug)}}">{{ $post->title }}</a></h3>
					
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


