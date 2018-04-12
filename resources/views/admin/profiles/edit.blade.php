@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Chanels: {{count($all_chanels)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-chanels.index')}}">Back to Chanels</a>
					   	<i class="fas fa-trash"></i> <a href="{{route('admin-chanels.trashed')}}">Trashed Chanels</a>
                    </span>
                </ol>
                <hr>
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

			        		{!! Form::model($chanel, ['method'=>'PATCH', 'action'=> ['AdminChanelController@update', $chanel->slug ],'files'=>true]) !!} 

				            <div class="row">        
					            <div class="col-md-4"> 
					            	<img class="img-responsive"  src="{{URL::to('/images/' . $chanel->image ) }}" alt="{{$chanel->title}}" >
					            	<div class=" pt-5">
						                {!!Form::label('image', 'Upload a Featured Image') !!}
						                {!!Form::file('image', null, array('class' => 'form-control', 'required' => ''))!!}
					            	</div>  
					            	<hr>
					            	 <iframe id="ytplayer" type="text/html" width="100%" height="200" src="{!! $chanel->video !!}" frameborder="0" allowfullscreen></iframe>

					            	<div class=" pt-5">
						                {!!Form::label('video', 'Your video', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('video', null, array('class' => 'form-control', 'maxlength' => '255'))!!} 
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
							                {!!Form::label('web', 'Website', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('web', null, array('class' => 'form-control', 'maxlength' => '255'))!!}
							            </div>
						            </div>

						            <div class="row pt-5">
						            	<div class="col-md-12"> 
							                {!!Form::label('excerpt', 'Chanel excerpt', array('class' => 'form-spacing-top'))!!}
							                {!!Form::text('excerpt', null, array('class' => 'form-control', 'maxlength' => '255'))!!}      
							                
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
						                {!!Form::submit('Edit Chanel', array('class' => 'btn btn-success btn-block')) !!}
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
	</div>
</section>

	
@endsection


