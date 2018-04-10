@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Tags: {{count($all_posttags)}}</span> </h2>
			<div class="row">
				<div class="col-md-8">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						<a href="{{ route('posttags.index') }}">All Post Tags</a>
						{!! $page_name !!}
					</div>
				<div class="col-md-4">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('posttags.index')}}">Back to categories</a>
		            </div>
		        </div>	
				</div>	
	        </div>
        	<hr>
			<div class="row">
				<div class="card-body">        
		            <div class="row">        
			            <div class="col-md-6"> 
			            	<h3>{!! $page_name !!}</h3>
			             </div>
			            <div class="col-md-6"> 
		        			{!! Form::model($posttag, ['method'=>'PATCH', 'action'=> ['PosttagController@update', $posttag->slug ],'files'=>true]) !!}

		        			{!!Form::label('name', 'Blog Tag name', array('class' => 'form-spacing-top'))!!}
			                {!!Form::text('name', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
							<div class="pt-5"> 
					     		{!!Form::submit('Edit Tag', array('class' => 'btn btn-success btn-block')) !!}
				                {!!Form::close() !!}  
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


