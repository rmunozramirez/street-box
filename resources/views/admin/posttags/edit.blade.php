@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Chanels: {{count($all_posttags)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-chevron-left"></i> <a href="{{route('posttags.index')}}">Back to Post tags</a>
                    </span>
                </ol>
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


