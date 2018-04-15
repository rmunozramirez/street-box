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
		            	<div class="row">
	                    	<i class="fas fa-chevron-left"></i> <a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>
	                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('profile.discussions.edit',  ['slug'=>$user->slug,'slug_d'=>$discussion->slug])}}">Edit</a>

			            	{!! Form::open(['route' => ['profile.discussions.destroy', $user->slug, $discussion->slug], 'method' => 'DELETE']) !!}
							{!! Form::submit('Delete', ['class' => 'top-10 btn btn-danger']) !!}
							{!! Form::close() !!}

			            </div>
		            </div>
		        </div>					
			</div>
           <hr />

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
							<div class="breadcrumb">
								<a href="">{!! $discussion->profile->user->name !!}</a>
								{!! $discussion->created_at->diffForHumans() !!}
							</div>            		
								<div class="pt-5">{!! $discussion->body!!} </div>                 
			            </div>
		            </div>
	           	</div>
           	</div>

        	<div class="row">
	        	<div class="card-body ">
		            <div class="col-md-8 col-lg-offset-4"><hr />
					@if(count($discussion->replies) > 0)
			         	@foreach ($discussion->replies->reverse() as $reply)
			         		<div class="card">
							  	<div class="card-header">
							  		<div class="breadcrumb">
									  	@if($user->profile->image)
						               		<img height="50" class="img-responsive" src="{{URL::to('/images/' . $discussion->image)}}" alt="{{ $discussion->title }}" name="{{ $discussion->title }}">
						               	@else	
						               		<i class="far fa-user fa-3x"></i>
							            @endif 
								    		<a href="">{!! $reply->profile->user->name !!}</a>
								    		<p>{!! $reply->created_at->diffForHumans() !!}</p>
								  	</div>
							  	</div>
							  	<div class="card-body">
							    	{!! $reply->body !!}
							  	</div>
							  	<div class="card-footer text-muted">
							    	Like
							  	</div>
							</div>

			            @endforeach 
					@else
						<div class="col-md-12"><h5>No replies to: {!! $page_name !!}</h5></div>
					@endif
		            </div>         
	            </div>
            </div>

        	<div class="row">
	        	<div class="card-body ">
		            <div class="col-md-8 col-lg-offset-4"><hr />
		            	{!! Form::open(['route' => ['forum.reply', $discussion->slug], 'method' => 'POST']) !!}
		            	{!!Form::label('body', 'Answer:', array('class' => 'form-spacing-top'))!!}
				        {!!Form::textarea('body', null, array('id' => 'summernote','class' => 'form-control'))!!} 
				         {!!Form::submit('Your Answer', array('class' => 'mt-5 btn btn-success btn-block')) !!}
			             {!!Form::close() !!} 
		            </div>         
	            </div>
            </div>

			
		</div>			
	</div>
</section>

	
@endsection

