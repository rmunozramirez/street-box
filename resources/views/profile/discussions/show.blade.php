@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-user')
	
    <div  id="contenido"  class="container left-right-shadow">
		<div class="inside">
			<h3 class="page-title">{{$page_name}}s <span class="mt-3 small pull-right">{!! $all_user_discussions !!} discussions</span></h3>
			 <hr>
			<div class="row">
				<div class="col-md-9">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-3">
		            <div class="under-meta pull-right">
                    	<i class="fas fa-plus"></i> <a href="{{route('discussions.create', $user->slug)}}">Create a new Discussion</a>
		            </div>
		        </div>					
			</div>
           <hr />

		    <div class="row">
		    	<div class="col-md-12">
					<div class="row">
						<div class="card-body">          
					        <div class="row">        
					            <div class="col-md-4"> 
					            	<i class="far fa-image fa-10x"></i>
					            	<div class=" pt-5">
						               <figure>
							            	<img class="img-responsive" src="{{URL::to('/images/' . $discussion->image)}}" alt="{{ $discussion->title }}" name="{{ $discussion->title }}">
							            </figure>
					            	</div>  
					            </div>
				            	<div class="col-md-8"> 
    								<h3>{!!$discussion->title!!}</h3>	            		
     									 {!! $discussion->body!!}                  
					            </div>
				            </div>         
					    </div>
					</div>
				</div>	
			</div>
		</div>			
	</div>
</section>

	
@endsection

