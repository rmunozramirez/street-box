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
						Blog Categories

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i><a href="{{route('postcategories.index')}}">Back to categories</a>
		            </div>
		        </div>
	        </div>
        	<hr>
		<div class="row">
			<div class="card-body">        
	            <div class="row">        
		            <div class="col-md-4"> 
		            	<img class="img-responsive"  src="{{URL::to('/images/' . $postcategory->image ) }}" name="{{$postcategory->title}}" alt="{{$postcategory->title}}" >
		            </div>
  
	            	<div class="col-md-8"> 
			            <h3>{!! $postcategory->subtitle !!}</h3>
			            <p>{!! $postcategory->about_category !!}</p>		            		
	            		
		            </div>
	            </div>  
		            
	        </div>
	    </div>
        	<hr>
			<div class="row">
				@if(count($postcategory->posts) > 0)
				
					<div class="col-md-12">
						@if(count($postcategory->posts) > 1 )
							<h3>{{count($postcategory->posts)}} posts under {{$postcategory->title}}</h3>
						@else
							<h3>One post under {{$postcategory->title}}</h3>
						@endif
					</div>
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
				@else
				<div class="col-lg-12">
					<h3>No Chanels under {{$postcategory->title}}</h3>
				</div>
				@endif
			</div>	
			<div class="text-center">
		        {{ $posts->links() }}
		    </div>		
		</div>		
	</div>
</section>

	
@endsection


