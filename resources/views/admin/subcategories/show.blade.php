@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Categories: {{count($all_postcategories)}}</span> </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						Blog Posts

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-subcategories.index')}}">Back to subcategories</a>
		            </div>
		        </div>
	        </div>
        	<hr>
		<div class="row">
			<div class="card-body">
            	<div class="row">        
		            <div class="col-md-4"> 
		            	<img class="img-responsive"  src="{{URL::to('/images/' . $subcategory->image ) }}" name="{{$subcategory->title}}" alt="{{$subcategory->title}}" >
		            </div>
  
	            	<div class="col-md-8">

			            <h3>{!! $subcategory->subtitle !!}</h3>
			            <p>{!! $subcategory->about_subcategory !!}</p>		            		
	            		
		            </div>
	            </div>  
		            
	        </div>
	    </div>
    	<hr>
		<div class="row">
			@if(count($subcategory->chanels) > 0)
				
					<div class="col-md-12">
						@if(count($subcategory->chanels) > 1 )
							<h3>{{count($subcategory->chanels)}} chanels under {{$subcategory->title}}</h3>
						@else
							<h3>One subcategory under {{$subcategory->title}}</h3>
						@endif
					</div>
				@foreach ($subcategory->chanels as $chanel)	
					<div class="col-lg-3 col-md-4">	
						<div class="card hovercard">
							<img class="cardheader" src="{{URL::to('/images/' . $chanel->image)}}">
								<h3><a href="{{route('chanels.show', $chanel->slug) }}">{{ $chanel->title }}</a></h3>
							<div class="card-body">					
								<h5 class="subcat">	{{ $chanel->excerpt }}</h5>					   
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
			@else
				<div class="col-lg-12">
					<h3>No Chanels under {{$subcategory->title}}</h3>
				</div>
			@endif		
		</div>
			
	</div>
</section>

	
@endsection


