@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')


<section id="content">
    <div id="contenido"  class="card">	
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
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('posttags.index')}}">Back to Post tags</a>
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
		            {!!Form::open(array('route' => 'posttags.store')) !!}   

		            <div class="row">        
			            <div class="col-md-12"> 
							{!!Form::label('name', 'Add a Tag', array('class' => 'form-spacing-top'))!!}
					       	{!!Form::text('name', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}

			            </div>
			       	</div>

		            <div class="row"> 
		            	<div class="col-md-12"> 
				            <div class="pt-5">    
				                {!!Form::submit('Add New Tag', array('class' => 'btn btn-success btn-block')) !!}
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


