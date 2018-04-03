@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{!! $page_name !!}</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('subcategories.create')}}">{!! $page_name !!}</a>
		            </div>
		        </div>
	        </div>
        	<hr>

	    @if(count($errors) > 0)
	        <ul class="list-group">
	        
	            @foreach($errors->all() as $error)

	                <li class="list-group-item text-danger">{{$error}}</li>

	            @endforeach
	        </ul>
	    @endif

		<div class="row">
			<div class="card-body">        

		            {!!Form::open(array('route' => 'subcategories.store', 'files' => true)) !!}   

		            <div class="row">        
			            <div class="col-md-4"> 
			            	<i class="far fa-image fa-10x"></i>

			            	<div class=" pt-5">
				                {!!Form::label('image', 'Upload a Featured Image') !!}
				                {!!Form::file('image') !!} 
			            	</div>  
			            </div>
      
		            	<div class="col-md-8"> 
				            <div class="row">
				            	<div class="col-md-6">       
					                {!!Form::label('title', 'Add a Subcategory title', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('title', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
					            </div>

					            <div class="col-md-6">      
						                {!!Form::label('subtitle', 'Add a Subcategory subtitle', array('class' => 'form-spacing-top'))!!}
						                {!!Form::text('subtitle', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}		            		
					            </div>		            		
				            </div>		            		

				            <div class="row pt-5">
					            <div class="col-md-6">
					            	{!! Form::label('category_id', 'Category:') !!}
                        			{!! Form::select('category_id', ['' => 'Choose a Category'] + $all_categories, null, array('class' => 'form-control')) !!}
					            </div>

					            <div class="col-md-6">
					            	{!!Form::label('status', 'Status:') !!}
                					{!!Form::select('status', array('' => 'Choose Status', 'active' => 'Active', 'inactive' => 'Inactive', 'on_hold' => 'On Hold'), null, array('class' => 'form-control'))!!}
					            </div>


				            </div>

				            <div class="row pt-5">
					            <div class="col-md-6">  
					            	{!!Form::label('is_featured', 'Is featured?', array('class' => 'form-spacing-top'))!!}<br />
					                {!! Form::radio('is_featured', 1, false, ['class' => 'mr-1']) !!} <span class="mr-3">Yes</span>
									{!! Form::radio('is_featured', 0, true, ['class' => 'mr-1']) !!} No
					            </div>
					            
				            	<div class="col-md-6">
					            	{!!Form::label('in_menu', 'Is it in main menu?', array('class' => 'form-spacing-top'))!!}<br />
					                {!! Form::radio('in_menu', 1, false, ['class' => 'mr-1']) !!} <span class="mr-3">Yes</span>
									{!! Form::radio('in_menu', 0, true, ['class' => 'mr-1']) !!} No
					            </div>

				            </div>  

				            <div class="row pt-5">        
					            <div class="col-md-12">               
					                {!!Form::label('excerpt', 'Add a Subcategory excerpt', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('excerpt', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
					            </div>
				            </div>

				            <div class="row pt-5"> 
					            <div class="col-md-12">      
					                {!!Form::label('about_subcategory', 'Subcategory description:', array('class' => 'form-spacing-top'))!!}
					                {!!Form::textarea('about_subcategory', null, array('id' => 'summernote','class' => 'form-control', 'rows' => 9))!!}                       
					            </div>
				            </div>

				            <div class="pt-5">    
				                {!!Form::submit('Add New Subcategory', array('class' => 'btn btn-success btn-block')) !!}
				                {!!Form::close() !!}       
				            </div>
			            </div>
		            </div>  	            

		    </div>
		</div>
		
	</div>
</section>

	
@endsection


