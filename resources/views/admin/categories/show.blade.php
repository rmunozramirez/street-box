@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($all_categories)}} categories</span></h2>

			<div class="row">
				<div class="col-md-8">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{{ $page_name }}
					</div>	
				</div>	
				<div class="col-md-4">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-categories.index')}}">Back to categories</a>
		            </div>
		        </div>

	        </div>     
        	<hr>

		<div class="row">
			<div class="card-body">        
	            <div class="row">
		            <div class="col-md-4"> 
		            	<img class="img-responsive"  src="{{URL::to('/images/' . $category->image ) }}" name="{{$category->title}}" alt="{{$category->title}}" >
		            </div>
  
	            	<div class="col-md-8"> 
			            <h3>{!! $category->subtitle !!}</h3>
			            <p>{!! $category->about_category !!}</p>		            		
	            		
		            </div>
	            </div>  
		            
	        </div>
	    </div>
    	<hr>
		<div class="row">
			@if(count($category->subcategories) > 0 )
				
					<div class="col-md-12">
						@if(count($category->subcategories) > 1 )
							<h3>{{count($category->subcategories)}} subcategories under {{$category->title}}</h3>
						@else
							<h3>One subcategory under {{$category->title}}</h3>
						@endif
					</div>
				@foreach ($category->subcategories as $subcategory)	
					<div class="col-lg-3 col-md-4">	
						<div class="card hovercard">
							<img class="cardheader" src="{{URL::to('/images/' . $subcategory->image)}}">
								<h3><a href="{{route('subcategories.show', $subcategory->slug) }}">{{ $subcategory->title }}</a></h3>
							<div class="card-body">					
								<h5 class="subcat">	{{count($subcategory->chanels)}} chanels

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

								<a href="{{ url('blogs/'.$subcategory->slug) }}">View</a>

								| Edit | <a href="event.php">Delete</a>
							</div>
						</div>
						
					</div>
					@endforeach
				</div>
			@else
				<div class="col-md-12"><h3>No subcategories under {{$category->title}}</h3></div>
			@endif
	</div>
</section>

	
@endsection


