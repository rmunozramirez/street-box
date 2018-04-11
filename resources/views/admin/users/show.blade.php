@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Users: {{count($all_users)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-chevron-left"></i> <a href="{{route('users.index')}}">Back to users</a>
                    </span>
                </ol>
                <hr>

				<div id="contenido"  class="card">
					<div class="inside">
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
		</div>
	</div>
</section>

	
@endsection


