@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($subcategories)}} subcategories</span></h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{{ $page_name }}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	
		            </div>
		        </div>
	        </div>
        	<hr>	
		
		<div class="row">
			@foreach ($subcategories as $subcategory)
			<div class="col-lg-3 col-md-4">	
				<div class="card hovercard">
					<img class="cardheader" src="{{URL::to('/images/' . $subcategory->image)}}">
						<h3><a href="{{route('subcategories.show', $subcategory->slug) }}">{{ $subcategory->title }}</a></h3>
					<div class="card-body">					
						<h5 class="subcat">	{{count($subcategory->chanels)}} chanels</h5>					   
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

						<a href="{{ url('blogs/'.$subcategory->slug) }}">View</a>

						| Edit | <a href="event.php">Delete</a>
					</div>
				</div>
				
			</div>
			@endforeach
		</div>	
		<div class="text-center">
	        {{ $subcategories->links() }}
	    </div>		
	</div>
</section>

	
@endsection


