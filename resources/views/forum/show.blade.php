@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{!! $discussion->title !!} </h2>
			<div class="row">
				<div class="col-md-9">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						 <a href="{{route('forum.index')}}">Forum</a> 
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-3">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('forum.index')}}">Back to Forum</a>
		            	<i class="fas fa-plus"></i></i> <a href="">Answer</a> 
		            </div>
		        </div>					
			</div>
        	<hr>
			<div class="row">
				<div class="card-body">                 
		            <div class="col-md-4"> 
		            	<div class=" pt-5">
			               <figure>
				            	<img class="img-responsive" src="{{URL::to('/images/' . $discussion->image)}}" alt="{{ $discussion->title }}" name="{{ $discussion->title }}">
				            </figure>
		            	</div>  
		            </div>
	            	<div class="col-md-8">             		
						<div class="pt-5">{!! $discussion->body!!} </div>                 
		            </div>       
			    </div>
			</div>

		</div>	
		
	</div>
</section>

	
@endsection

