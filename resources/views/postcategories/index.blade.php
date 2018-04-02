@extends('layouts.app')
@section ('title', '| All Blog Categories')
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>Categories index</h2>
			<div class="breadcrumb">
				hier breadcrumb
			</div>	
			
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


