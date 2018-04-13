@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>Profile from:  {!! $page_name !!} <span class="mt-3 small pull-right">Total Users: {{count($all_users)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
                    	<span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span> <a href="{{route('users.index')}}">Back to users</a>
                    </span>
                </ol>
                <hr>

				<div id="contenido"  class="card">
					<div class="inside">
						<div class="row">
							<div class="card-body">        
								<h3>{!! $user->name !!}</h3>
					            <table class="table table-striped table-hover">
						         <thead>
						            <tr>
						                <th>Profile</th>
						                <th>Role</th>
						                <th>Date</th>
						            </tr>
						         </thead>
						         <tbody>

						            <tr>
						               <td>noch nicht</td>
						               <td>{{$user->role->name}}</td>
						               <td>{{$user->created_at}}</td>
						               <td>
						               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('users.edit', $user->slug)}}">Edit</a>
							            	<div class="col-md-6">
								            	{!! Form::open(['route' => ['users.destroy', $user->slug], 'method' => 'DELETE']) !!}

												{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

												{!! Form::close() !!}
											</div>
						               </td>
						            </tr>

						         </tbody>
						      </table>						            
					        </div>
					    </div>
				    	<hr>

					</div>		
			</div>
		</div>
	</div>
</section>

	
@endsection


