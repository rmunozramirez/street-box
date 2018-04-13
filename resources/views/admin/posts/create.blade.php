@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_posts)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
		            	<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <a href="{{route('posts.index')}}">Back to posts</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('posts.trashed')}}">Trashed Posts</a>
                    </span>
                </ol>
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

				            {!!Form::open(array('route' => 'posts.store', 'files' => true)) !!}   

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
							                {!!Form::label('title', 'Add a title', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('title', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
							            </div>

							            <div class="col-md-6">      
								                {!!Form::label('subtitle', 'Add a Post subtitle', array('class' => 'form-spacing-top'))!!}
								                {!!Form::text('subtitle', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}		
							            </div>		            		
						            </div>		            		

						            <div class="row pt-5">
						            	<div class="col-md-6">
							            	{!!Form::label('status', 'Status:') !!}
		                					{!!Form::select('status', array('' => 'Choose Status', 'published' => 'Published', 'programmed' => 'Programmed', 'draf' => 'Draf'), null, array('class' => 'form-control'))!!}
							            </div>

							            <div class="col-md-6">
							            	{!! Form::label('postcategory_id', 'Category:') !!}
		                        			{!! Form::select('postcategory_id', ['' => 'Choose a Category'] + $all_postcategories, null, array('class' => 'form-control')) !!}
							            </div>
						            </div>

						            <div class="row pt-5">
							            <div class="col-md-6">  
							            	{!!Form::label('is_featured', 'Is featured?', array('class' => 'form-spacing-top'))!!}<br />
							                {!! Form::radio('is_featured', 1, false, ['class' => 'mr-1']) !!} <span class="mr-3">Yes</span>
											{!! Form::radio('is_featured', 0, true, ['class' => 'mr-1']) !!} No
							            </div> 
							            <div class="col-md-6">
							            	{!! Form::label('posttags_id', 'Tags:') !!}
		                        			{!! Form::select('posttags_id', $all_posttags, null, array('multiple' => 'multiple', 'class' => 'form-control select2-multi'))!!}
							            </div>

						            </div>  

						            <div class="row pt-5">        
							            <div class="col-md-12">               
							                {!!Form::label('excerpt', 'Add a Post excerpt', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('excerpt', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>
						            </div>

						            <div class="row pt-5"> 
							            <div class="col-md-12">      
							                {!!Form::label('body', 'Post body:', array('class' => 'form-spacing-top'))!!}
							                {!!Form::textarea('body', null, array('id' => 'summernote','class' => 'form-control', 'rows' => 9))!!}                       
							            </div>
						            </div>

						            <div class="pt-5">    
						                {!!Form::submit('Add New Post', array('class' => 'btn btn-success btn-block')) !!}
						                {!!Form::close() !!}       
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
