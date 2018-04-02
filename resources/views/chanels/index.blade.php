@extends('layouts.app')
@section ('title', "| All Chanels")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div id="contenido"  class="container left-right-shadow">
		<div class="inside">
			<h2>This is the Chanels Index page</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title="All Categories" href="{{route('categories.index')}}">Categories</a>
						<a title="All Subcategories" href="{{route('subcategories.index')}}">Subcategories</a>
						All {!! $page_name !!}s
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('chanels.create')}}">Create a new Chanel</a>

		            </div>
		        </div>
	        </div>
        	<hr>	

		<div class="row">
			@foreach ($chanels as $chanel)
			<div class="col-lg-3 col-md-4">	
				<div class="card hovercard">
					<img class="cardheader" src="{{URL::to('/images/' . $chanel->image)}}">
						<h3><a href="{{ url('chanels/'.$chanel->slug) }}">{{ $chanel->title }}</a></h3>
					<div class="card-body">					
						<h5 class="subcat">	In:				
							chanels			
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

						<a href="{{ url('blogs/'.$chanel->slug) }}">View</a>

						| Edit | <a href="event.php">Delete</a>
					</div>
				</div>
				
			</div>
			@endforeach
		</div>	
		<div class="text-center">
	        {{ $chanels->links() }}
	    </div>		
	</div>
</section>

	
@endsection


