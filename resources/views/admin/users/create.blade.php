@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Users: {{count($all_users)}}</span> </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('users.index')}}">Back to users</a>
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
		            {!!Form::open(array('route' => 'users.store')) !!}   

		            <div class="row"> 
		            	<div class="col-md-8"> 
			            	<div class="row">        
					            <div class="col-md-6"> 
									{!!Form::label('name', 'Add a User', array('class' => 'form-spacing-top'))!!}
							       	{!!Form::text('name', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}

					            </div>      

					            <div class="col-md-6"> 
									{!!Form::label('email', 'Email', array('class' => 'form-spacing-top'))!!}
							       	{!!Form::text('email', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}

					            </div>
					       	</div>

			            	<div class="row py-5"> 
	    
				            	<div class="col-md-6">       
					                {!!Form::label('password', 'Password', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('password', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
					            </div>


					            <div class="col-md-6">  
					            	{!! Form::label('role_id', 'Role:') !!}
	                    			{!! Form::select('role_id', ['' => 'Choose a Role'] + $all_roles, null, array('class' => 'form-control')) !!}
					            </div> 
				            </div>		            	

				            <div class="pull-left">    
				                {!!Form::submit('Add user', array('class' => 'btn btn-success btn-block')) !!}
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


