@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<div class="row">
				<div class="col-md-8">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						<a href="{{ route('posttags.index') }}">All Post Tags</a>
						{!! $page_name !!}
					</div>	
				</div>	

	        </div>
        	<hr>
			<div class="row">
				<div class="card-body">        
		            <div class="row">        
			            <div class="col-md-6"> 
			            	<h3>{!! $posttag->name !!}</h3>
			            </div>       
						<div class="col-md-6">
				            <div class="row">
				            	<a type="button" class="col-md-6 btn btn-secondary" href="{{route('posttags.edit', $posttag->slug)}}">Edit</a>
				            	<div class="col-md-6">
					            	{!! Form::open(['route' => ['posttags.destroy', $posttag->slug], 'method' => 'DELETE']) !!}

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


