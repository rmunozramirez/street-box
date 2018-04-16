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
		            	<i class="fas fa-plus"></i></i> <a href="#reply">Answer</a> 
		            </div>
		        </div>					
			</div>
        	<hr>
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
								<a href="">Author: {!! $discussion->profile->user->name !!}</a>
								<a href="">Replies: {!! count($discussion->replies) !!}</a>
								{!! $discussion->created_at->diffForHumans() !!}
							</div>            		
								<div class="pt-5">{!! $discussion->body!!} </div>                 
			            </div>
		            </div>
	           	</div>
           	</div>
        	<div class="row">
	        	<div  id="replies" class="card-body">
		            <div class="col-lg-8 col-lg-offset-4 col-md-12"><hr />
						@if(count($discussion->replies) > 0)
				         	@foreach ($discussion->replies->reverse() as $reply)
				         		<div class="card mt-5">
								  	<div class="card-header">
								  		<div class="breadcrumb">
										  	@if($reply->profile->image)
							               		<img height="50" class="img-circle mr-3" src="{{URL::to('/images/' . $reply->profile->image)}}" alt="{{ $discussion->title }}" name="{{ $discussion->title }}">
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
								    	@if($reply->is_like_by_auth_user())
								    		<a href="{{route('forum.unlike', $reply->id)}}" class="btn btn-danger">
								    		<i class="fas fa-thumbs-down"></i>
								    		<span class="badge">{{ $reply->likes->count() }}</span>
								    		</a>
								    	@else
								    		<a href="{{route('forum.like', $reply->id)}}" class="btn btn-success">
								    		<i class="fas fa-thumbs-up"></i>
								    		<span class="badge">{{ $reply->likes->count() }}</span>
								    		</a>
								    	@endif
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
	        	<div id="reply" class="card-body ">
		            <div class="col-lg-8 col-lg-offset-4"><hr />
		            	{!! Form::open(['route' => ['forum.reply', $discussion->slug], 'method' => 'POST']) !!}
		            	{!!Form::label('body', 'Answer:', array('class' => 'form-spacing-top'))!!}
				        {!!Form::textarea('body', null, array('id' => 'summernote','class' => 'form-control'))!!} 
				         {!!Form::submit('Your Answer', array('class' => 'mt-5 btn btn-success btn-block', 'onclick' => 'clearform()')) !!}
			             {!!Form::close() !!} 
		            </div>         
	            </div>
            </div>


		</div>	
		
	</div>
</section>

	
@endsection

