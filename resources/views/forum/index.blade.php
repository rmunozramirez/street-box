@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div id="contenido"  class="container left-right-shadow">
		<div class="inside">
			<h2>{!! $page_name !!} Index page <span class="mt-3 small pull-right">{!! $all_discussions !!} discussions</span></h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">

		            </div>
		        </div>
	        </div>
        	<hr>

		<div class="row">
			@foreach ($discussions as $discussion)
			<div class="col-lg-3 col-md-4">	
				<div class="card hovercard">
					<img class="cardheader" src="{{URL::to('/images/' . $discussion->image)}}">
						<h3><a href="{{route('forum.show' , $discussion->slug)}}">{{ $discussion->title }}</a></h3>
					
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

						<a href="{{ url('blogs/'.$discussion->slug) }}">View</a>

						| Edit | <a href="event.php">Delete</a>
					</div>
				</div>
				
			</div>
			@endforeach
		</div>	
		<div class="text-center">
	        {{ $discussions->links() }}
	    </div>		
	</div>
</section>

	
@endsection


