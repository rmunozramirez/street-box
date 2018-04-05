@extends('layouts.app')
@section ('title', "| $page_name" )
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<div class="row">
				<div class="col-md-8">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title=" {{$subcategory->category->title}}" href="{{route('categories.show', $subcategory->category->slug) }}"> {{$subcategory->category->title}}</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-4">
		            <div class="row">
		            	<a type="button" class="col-md-6 btn btn-secondary" href="{{route('subcategories.edit', $subcategory->slug)}}">Edit</a>
		            	<div class="col-md-6">
			            	{!! Form::open(['route' => ['subcategories.destroy', $subcategory->slug], 'method' => 'DELETE']) !!}

							{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

							{!! Form::close() !!}
						</div>
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


