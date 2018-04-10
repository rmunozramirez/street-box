@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($all_categories)}} categories</span></h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title="All Categories" href="{{route('categories.index') }}"> Categories</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-categories.index')}}">Back to categories</a>
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
		       
		        {!! Form::model($category, ['method'=>'PATCH', 'action'=> ['AdminCategoriesController@update', $category->slug ],'files'=>true]) !!}  

		            <div class="row">        
			            <div class="col-md-4"> 
			            	<img class="img-responsive"  src="{{URL::to('/images/' . $category->image ) }}" alt="{{$category->title}}" >

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
				                {!!Form::submit('Edit Category', array('class' => 'btn btn-success btn-block')) !!}
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


