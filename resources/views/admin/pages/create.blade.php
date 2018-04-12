@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_pages)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-pages.index')}}">Back to pages</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-pages.trashed')}}">Trashed Pages</a>
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

				            {!!Form::open(array('route' => 'admin-pages.store', 'files' => true)) !!}   

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

							           
						            </div> 

						            <div class="row pt-5">        
							            <div class="col-md-12">               
							                {!!Form::label('excerpt', 'Add a Page excerpt', array('class' => 'form-spacing-top'))!!}
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
						                {!!Form::submit('Add New Page', array('class' => 'btn btn-success btn-block')) !!}
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
