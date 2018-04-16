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
			<h3 class="page-title">{!! $user->name !!}'s {{$page_name}}</h3>
			 <hr>
			<div class="row">
				<div class="col-md-8">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a href="{{route('profile.home', $user->slug)}}"> Dashboard</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-4">
		            <div class="under-meta pull-right">

		            </div>
		        </div>					
			</div>
           <hr />
		    <div id="contenido"  class="card">
				<div class="inside">

			    	@if(count($errors) > 0)
			        <ul class="list-group">
			        
			            @foreach($errors->all() as $error)

			                <li class="list-group-item text-danger">{{$error}}</li>

			            @endforeach
			        </ul>
			    	@endif
				
					<div class="row">
						<div class="card-body">        

				            {!!Form::open(array('route' => 'chanels.store', 'files' => true)) !!}   

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
						            	<div class="col-md-6">       
							                {!!Form::label('title', 'Chanel title', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('title', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
							            </div>

							            <div class="col-md-6">      
							                {!!Form::label('subtitle', 'Chanel subtitle', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('subtitle', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}		            		
							            </div>		            		
						            </div>		            		

						            <div class="row pt-5">
						            	<div class="col-md-6">
							            	{!! Form::label('subcategory_id', 'Subcategory:') !!}
		                        			{!! Form::select('subcategory_id', ['' => 'Choose a Subcategory'] + $all_subcategories, null, array('class' => 'form-control')) !!}
							            </div>

						            	<div class="col-md-6"> 
							                {!!Form::label('excerpt', 'Chanel excerpt', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('excerpt', null, array('class' => 'form-control', 'maxlength' => '255'))!!}      
							            </div>
						            </div>

						            <div class="row pt-5">
							            
							            <div class="col-md-6">               
							                {!!Form::label('web', 'Website', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('web', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>

						            	<div class="col-md-6"> 
							                {!!Form::label('video', 'Your video', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('video', null, array('class' => 'form-control', 'maxlength' => '255'))!!}      
							            </div>
						            </div>

						            <div class="row pt-5">
						            	<div class="col-md-6">
											{!!Form::label('twitter', 'Twitter', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('twitter', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>
		        
							            <div class="col-md-6">               
							                {!!Form::label('facebook', 'Facebook', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('facebook', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>
						            </div>

						            <div class="row pt-5">
						            	<div class="col-md-6">
							                {!!Form::label('linkedin', 'Linkedin', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('linkedin', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>
		        
							            <div class="col-md-6">               
							                {!!Form::label('googleplus', 'Googleplus', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('googleplus', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>
						            </div>

						            <div class="row pt-5"> 
							            <div class="col-md-12">      
							                {!!Form::label('about_chanel', 'Chanel description:', array('class' => 'form-spacing-top'))!!}
							                {!!Form::textarea('about_chanel', null, array('id' => 'summernote','class' => 'form-control', 'rows' => 9))!!}                       
							            </div>
						            </div>

						            <div class="pt-5">    
						                {!!Form::submit('Add New Chanel', array('class' => 'btn btn-success btn-block')) !!}
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


