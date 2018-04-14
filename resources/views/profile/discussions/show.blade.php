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
			<h3 class="page-title">{{$page_name}} <span class="mt-3 small pull-right">{!! $all_user_discussions !!} discussions</span></h3>
			 <hr>
			<div class="row">
				<div class="col-md-7">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a href="{{route('profile.home', $user->slug)}}"> Dashboard</a>
						<a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-5">
		            <div class="under-meta pull-right">
                    	<i class="fas fa-chevron-left"></i> <a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>
                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('profile.discussions.edit',  ['slug'=>$user->slug,'slug_d'=>$discussion->slug])}}">Edit</a>

		            	{!! Form::open(['route' => ['profile.discussions.destroy', $user->slug, $discussion->slug], 'method' => 'DELETE']) !!}
						{!! Form::submit('Delete', ['class' => ' btn btn-danger']) !!}
						{!! Form::close() !!}

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
					            	<div class=" pt-5">
						               <figure>
							            	<img class="img-responsive" src="{{URL::to('/images/' . $discussion->image)}}" alt="{{ $discussion->title }}" name="{{ $discussion->title }}">
							            </figure>
					            	</div>  
					            </div>
				            	<div class="col-md-8"> 
    								<h3>{!!$discussion->title!!}</h3>	            		
     								<div class="pt-5">{!! $discussion->body!!} </div>                 
					            </div>
				            </div>         
					    </div>
					</div>
				</div>	
			</div>
           <hr />
			
		</div>			
	</div>
</section>

	
@endsection

