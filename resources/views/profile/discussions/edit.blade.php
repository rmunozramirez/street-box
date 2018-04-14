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
						<a href="{{route('profile.home', $user->slug)}}"> Dashboard</a>
						<a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-3">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>
                    	<i class="fas fa-plus"></i> <a href="{{route('profile.discussions.create', $user->slug)}}">Answer</a>
		            </div>
		        </div>					
			</div>
           <hr />
           		@if(count($errors) > 0)
			        <ul class="list-group">
			            @foreach($errors->all() as $error)
			                <li class="list-group-item text-danger">{{$error}}</li>
			            @endforeach
			        </ul>
			    @endif

				<div class="row">
					<div class="card-body">      
					    {!! Form::model($discussion, ['method'=>'PATCH', 'action'=> array('DiscussionsController@update', $discussion->slug, $user->slug ),'files'=>true]) !!} 
				        <div class="row"> 
				            <div class="col-md-4">        	
				            	<div class=" pt-5">
					               <figure class="pb-5">
						            	<img class="img-responsive" src="{{URL::to('/images/' . $discussion->image)}}" alt="{{ $discussion->title }}" name="{{ $discussion->title }}">
						            </figure>
					                {!!Form::label('image', 'Upload a Featured Image') !!}
					                {!!Form::file('image', null, array('class' => 'form-control pt-5'))!!}
				            	</div>  
				            </div>
			            	<div class="col-md-8"> 
			            		

					            <div class="row">
					            	<div class="col-md-9">       
						                {!!Form::label('title', 'Discussion title', array('class' => 'form-spacing-top'))!!}
						                {!!Form::text('title', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
						            </div>
						            	<div class="col-md-3">
							            	{!!Form::label('status', 'Status:') !!}
		                					{!!Form::select('status', array('' => 'Choose Status', 'active' => 'Active', 'inactive' => 'Inactive', 'on_hold' => 'On Hold'), null, array('class' => 'form-control'))!!}
							            </div>
					            </div>
								<div class="row">
						            <div class="col-md-12">      
						                {!!Form::label('body', 'Discussion body:', array('class' => 'form-spacing-top pt-5'))!!}
						                {!!Form::textarea('body', null, array('id' => 'summernote','class' => 'form-control'))!!}		            		
						            </div>		            		
					            </div>

					            <div class="pt-5">    
					                {!!Form::submit('Edit Discussion', array('class' => 'btn btn-success btn-block')) !!}
					                {!!Form::close() !!}       
					            </div>            
				            </div>
			            </div>         
				    </div>
				</div>

		</div>			
	</div>
</section>

	
@endsection

