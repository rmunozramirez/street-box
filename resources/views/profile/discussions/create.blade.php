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
			<h3 class="page-title">{!! $user->name !!}'s {{$page_name}}s <span class="mt-3 small pull-right">{!! $all_user_discussions !!} discussions</span></h3>
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
			    	@if(count($errors) > 0)
			        <ul class="list-group">
			            @foreach($errors->all() as $error)
			                <li class="list-group-item text-danger">{{$error}}</li>
			            @endforeach
			        </ul>
			    	@endif
					<div class="row">
						<div class="card-body">        
					    {!!Form::open(array('route' => 'discussions.store', 'files' => true)) !!}   
					        <div class="row">        
					            <div class="col-md-4"> 
					            	<i class="far fa-image fa-10x"></i>
					            	<div class=" pt-5">
						                {!!Form::label('image', 'Upload a Featured Image') !!}
						                {!!Form::file('image', null, array('class' => 'form-control', 'required' => ''))!!}
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
						            <div class="row pt-5">
							            <div class="col-md-12">      
							                {!!Form::label('body', 'Discussion description:', array('class' => 'form-spacing-top'))!!}
							                {!!Form::textarea('body', null, array('id' => 'summernote','class' => 'form-control', 'rows' => 9))!!}                       
							            </div>	            		
						            </div>

						            <div class="pt-5">    
						                {!!Form::submit('Add New Discussion', array('class' => 'btn btn-success btn-block')) !!}
						                {!!Form::close() !!}       
						            </div>
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

