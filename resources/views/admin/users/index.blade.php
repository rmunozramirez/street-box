@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total User: {{count($all_users)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right"><i class="fas fa-pencil-alt"></i> <a href="{{route('users.create')}}">Create a new User</a></span>
                </ol>
                <hr>
			    <div id="contenido"  class="card">
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
						               <td><a href="{{route('users.show', $user->slug)}}">{{$user->name}}</a></td>
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
			</div>
		</div>
	</div>
</section>
@endsection


