@extends('layouts.app')
@section ('title', "| Create a new Sub category")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container card-body left-right-shadow">	
		<div class="breadcrumb">
			hier breadcrumb
		</div>	
		
		<div class="row">
			<div class="card-body">        
		        <div class="inside">

		            {!!Form::open(array('route' => 'categories.store', 'files' => true)) !!}   

		            <div class="row">        
			            <div class="col-md-4"> 
			            	<img class="img-responsive" src="{{URL::to('/images/' . 'bmw.jpg' ) }}">

			            	<div class=" pt-5">
				                {!!Form::label('image', 'Upload a Featured Image') !!}
				                {!!Form::file('image') !!} 
			            	</div>  
			            </div>
      
		            	<div class="col-md-8"> 
				            <div class="row">
				            	<div class="col-md-6">       
					                {!!Form::label('title', 'Add a Category title', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('title', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
					            </div>

					            <div class="col-md-6">      
						                {!!Form::label('subtitle', 'Add a Category subtitle', array('class' => 'form-spacing-top'))!!}
						                {!!Form::text('subtitle', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}		            		
					            </div>		            		
				            </div>		            		

				            <div class="row pt-5">
				            	<div class="col-md-4">
					            	{!!Form::label('status', 'Status:') !!}
                					{!!Form::select('status', array('' => 'Choose Status', 'active' => 'Active', 'inactive' => 'Inactive', 'on_hold' => 'On Hold'), null, array('class' => 'form-control'))!!}
					            </div>

					            <div class="col-md-4">  
					            	{!!Form::label('is_featured', 'Is featured?', array('class' => 'form-spacing-top'))!!}<br />
					                {!! Form::radio('is_featured', 1, false, ['class' => 'mr-1']) !!} <span class="mr-3">Yes</span>
									{!! Form::radio('is_featured', 0, true, ['class' => 'mr-1']) !!} No
					            </div>
					            
				            	<div class="col-md-4">
					            	{!!Form::label('in_menu', 'Is it in main menu?', array('class' => 'form-spacing-top'))!!}<br />
					                {!! Form::radio('in_menu', 1, false, ['class' => 'mr-1']) !!} <span class="mr-3">Yes</span>
									{!! Form::radio('in_menu', 0, true, ['class' => 'mr-1']) !!} No
					            </div>

				            </div>  

				            <div class="row pt-5">        
					            <div class="col-md-12">               
					                {!!Form::label('excerpt', 'Add a Category excerpt', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('excerpt', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
					            </div>
				            </div>

				            <div class="row pt-5"> 
					            <div class="col-md-12">      
					                {!!Form::label('about_category', 'Category description:', array('class' => 'form-spacing-top'))!!}
					                {!!Form::textarea('about_category', null, array('id' => 'summernote','class' => 'form-control', 'rows' => 9))!!}                       
					            </div>
				            </div>

				            <div class="pt-5">    
				                {!!Form::submit('Add New Category', array('class' => 'btn btn-success btn-block')) !!}
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


