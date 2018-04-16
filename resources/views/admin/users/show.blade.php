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
	                    	<i class="fa fa-chevron-left"></i> <a href="{{route('users.index')}}">Back to users</a>
	                    </span>
	                </ol>
	                <hr>

					<div id="contenido"  class="card">
						<div class="card-body">
							<div class="row">
								<div class="col-md-4">
				            		<table class="table">
				            			<thead>
				            				<tr>
								                <th>{!! $user->name !!}</th>
								            </tr>
								        </thead>
							            <tbody>
								            <tr>
								               <td>
									               <figure>
										            	<img height="300" class="
										            	" src="{{URL::to('/images/' . $user->profile->image)}}" alt="{{ $user->name }}" name="{{ $user->name }}" />
										            </figure>
										       </td>
										    </tr>
								       	</tbody>
								  	</table>
				            	</div>
								<div class="col-md-8">
						            <table class="table table-striped table-hover">
							         <thead>
							            <tr>
							                <th>Status</th>
							                <th>Role</th>
							            </tr>
							         </thead>
							         <tbody>
							            <tr>
							               <td>
							               		{!! Form::model($user->profile, ['method'=>'PATCH', 'action'=> ['AdminProfileController@update', $user->profile->slug ],'files'=>true]) !!}

			                					{!!Form::select('status', array('' => 'Choose Status', 'active' => 'Active', 'inactive' => 'Inactive', 'on_hold' => 'On Hold', 'banned' => 'Banned'), null, array('class' => 'form-control'))!!}

			                					{!!Form::submit('New Status', array('class' => 'btn btn-block mt-3')) !!}
							                	{!!Form::close() !!} 

							               </td>
							               <td>
							               		{!! Form::model($user, ['method'=>'PATCH', 'action'=> ['UserController@update', $user->slug ],'files'=>true]) !!}

				                        		{!! Form::select('role_id', ['' => 'Choose a Role'] + $all_roles, null, array('class' => 'form-control')) !!}

			                					{!!Form::submit('Edit user', array('class' => 'btn btn-block mt-3')) !!}
								                {!!Form::close() !!} 

							               </td>
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
							      
							      	<div class="row">
										<div class="col-md-3">
								            <p>Registered at: </p>
								            <p>Birthday: </p>
								            <p>About: </p>
								       	</div>
								       	<div class="col-md-9">
							               <p>{{$user->created_at}}</p>
							               <p>{!! $user->profile->birthday !!}</p>
							            	<p>{!! $user->profile->about_user !!}</p>
							            </div>
							         </div>		            
						        </div>
					        </div>
					    </div>		
					</div>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-md-6">
			    <div class="wrapper wrapper-content animated fadeInUp">		
			        <div class="row wrapper border-bottom white-bg">
						<div class="inside">
			                <h2>Channels <span class="mt-3 small pull-right">Total Channels: {{count($user->profile->chanels)}}</span> </h2>

			                <hr>
							<div id="contenido"  class="card">
								<div class="card-body">
									<div class="row">
										@if(count($user->profile->discussions) > 0)
											<table class="table table-striped table-hover">
										         <thead>
										            <tr>
										                <th>Discussions</th>
										                <th>Answers</th>
										                <th>Date</th>
										            </tr>
										         </thead>
										         <tbody>
										         	@foreach ($user->profile->discussions as $discussion)
										            <tr>
										               <td><a href="">{{$discussion->title}}</a></td>
										               <td>{{count($discussion->replies)}}</td>
										               <td>{{$discussion->created_at}}</td>
										               <td>
										               		<a type="button" class="col-md-6 btn btn-secondary" href="">Edit</a>
											            	<div class="col-md-6">
												            	{!! Form::open(['route' => ['admin-chanels.destroy', $discussion->slug], 'method' => 'DELETE']) !!}

																{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

																{!! Form::close() !!}
															</div>
										               </td>
										            </tr>
										            @endforeach

										         </tbody>
										      </table>
										@else
											<h2>{{ $user->name}} did not initiated any discussions</h2>
										@endif
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="col-md-6">
			    <div class="wrapper wrapper-content animated fadeInUp">		
			        <div class="row wrapper border-bottom white-bg">
						<div class="inside">
			                <h2>Discussions <span class="mt-3 small pull-right">Total Discussions: {{count($user->profile->discussions)}}</span> </h2>

			                <hr>
							<div id="contenido"  class="card">
								<div class="card-body">
									<div class="row">
										@if(count($user->profile->discussions) > 0)
											<table class="table table-striped table-hover">
										         <thead>
										            <tr>
										                <th>Discussions</th>
										                <th>Answers</th>
										                <th>Date</th>
										            </tr>
										         </thead>
										         <tbody>
										         	@foreach ($user->profile->discussions as $discussion)
										            <tr>
										               <td><a href="">{{$discussion->title}}</a></td>
										               <td>{{count($discussion->replies)}}</td>
										               <td>{{$discussion->created_at}}</td>
										               <td>
										               		<a type="button" class="col-md-6 btn btn-secondary" href="">Edit</a>
											            	<div class="col-md-6">
												            	{!! Form::open(['route' => ['admin-chanels.destroy', $discussion->slug], 'method' => 'DELETE']) !!}

																{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

																{!! Form::close() !!}
															</div>
										               </td>
										            </tr>
										            @endforeach

										         </tbody>
										      </table>
										@else
											<h2>{{ $user->name}} did not initiated any discussions</h2>
										@endif
									</div>	
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>

</section>

	
@endsection


