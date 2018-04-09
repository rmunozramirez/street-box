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
			<div class="row">
				<div class="card-body">        
		            <div class="row">        
			            <div class="col-md-6"> 
			            	<h3>{!! $user->name !!}</h3>
			            </div>       
						<div class="col-md-6">
				            <div class="row">
				            	<a type="button" class="col-md-6 btn btn-secondary" href="{{route('users.edit', $user->slug)}}">Edit</a>
				            	<div class="col-md-6">
					            	{!! Form::open(['route' => ['users.destroy', $user->slug], 'method' => 'DELETE']) !!}

									{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

									{!! Form::close() !!}
								</div>
				            </div>
				        </div>
		            </div>  
			            
		        </div>
		    </div>
        	<hr>
	
		</div>		
	</div>
</section>

	
@endsection


