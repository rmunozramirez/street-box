@extends('layouts.app')
@section ('title', '| All Blog Categories')
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>Categories Index</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						Blog Categories

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('postcategories.create')}}">Create a {!! $page_name !!}</a>
		            </div>
		        </div>
	        </div>
        	<hr>
			
			<div class="row">
				@foreach ($postcategories as $postcategory)
				<div class="col-lg-3 col-md-4">	
					<div class="card hovercard">
						<img class="cardheader" src="{{URL::to('/images/' . $postcategory->image)}}">
							<h3>
								<a href="{{route('postcategories.show', $postcategory->slug)}}">{{$postcategory->title }}</a>
							</h3>

						<div class="card-body">					
							<h5 class="subcat">	Number of Posts: {{$postcategory->posts_count}}</h5>					   
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

							<a href="{{ url('blogs/'.$postcategory->slug) }}">View</a>

							| Edit | <a href="event.php">Delete</a>
						</div>
					</div>
					
				</div>
				@endforeach
			</div>	
			<div class="text-center">
		        {{ $postcategories->links() }}
		    </div>		
		</div>
	</div>
</section>

	
@endsection


