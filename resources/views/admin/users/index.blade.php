@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						All {!! $page_name !!}s
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('users.create')}}">Create a new User</a>
		            </div>
		        </div>
	        </div>
        	<hr>

		<div class="row">
				@if(count($users) > 0)
						<table class="table table-striped table-hover">
					         <thead>
					            <tr>
					                <th>User</th>
					                <th>Role</th>
					                <th>Date</th>
					            </tr>
					         </thead>
					         <tbody>
					         	@foreach ($users as $user)
					            <tr>
					               <td><a href="{{route('users.show', $user->id)}}">{{$user->name}}</a></td>
					               <td>{{$user->role->name}}</td>
					               <td>{{$user->created_at}}</td>
					               <td>
					               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('users.edit', $user->id)}}">Edit</a>
						            	<div class="col-md-6">
							            	{!! Form::open(['route' => ['users.destroy', $user->id], 'method' => 'DELETE']) !!}

											{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

											{!! Form::close() !!}
										</div>
					               </td>
					            </tr>
					            @endforeach
					         </tbody>
					      </table>
				@else
					<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
				@endif
		</div>	
		<div class="text-center">
	        {{ $users->links() }}
	    </div>		
	</div>
</section>

	
@endsection


