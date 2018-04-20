@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
	<div class="wrapper wrapper-content animated fadeInUp">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
				<div class="row">
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
	           	</div>
	           	<hr />
				<div class="row">
				   	<div class="col-md-8"> 
		                <h2>Profile from:  {!! $page_name !!}</h2>
		           	</div>
                	<div class="col-md-4">
				   		<div class="row mt-4">        
				   			<div class="col-md-6"> 			               		
								{!! Form::model($user, ['method'=>'PATCH', 'action'=> ['AdminProfileController@update', $user->id ],'files'=>true]) !!}

        						{!!Form::select('status', array('' => 'Choose Status', 'active' => 'Active', 'inactive' => 'Inactive', 'on_hold' => 'On Hold', 'banned' => 'Banned'), null, array('class' => 'form-control'))!!}

	        					{!!Form::submit('New Status', array('class' => 'btn btn-block')) !!}
							   	{!!Form::close() !!} 
			                </div>

			            </div>
	                </div>
	           	</div>
				<hr>
				<div id="contenido"  class="card">
					<div class="card-body">
						<div class="row">
							<div class="col-md-4">
								<figure>
					            	<img height="300" class="
					            	" src="{{URL::to('/images/' . $user->profile->image)}}" alt="{{ $user->name }}" name="{{ $user->name }}" />
					            </figure>
			            	</div>
							<div class="col-md-8">
								<div class="row">
									<dl class="dl-horizontal">
										<dt>User Name</dt>
										<dd>{!! $user->name !!}</dd>
										<br />
										<dt>Registered at:</dt>
										<dd>{{$user->created_at}}</dd>
										<br />
										<dt>Birthday:</dt>
										<dd>{!! $user->profile->birthday !!}</dd>
										<br />
										<dt>About:</dt>
										<dd>{!! $user->profile->about_user !!}</dd>
										<br />
										<dt>Role:</dt>
										<dd>{!! $user->role->name !!}</dd>
										<br />
										<dt>Status:</dt>
										<dd>{!! $user->profile->status !!}</dd>
									</dl>
						       	</div>
						   	</div>
					   	</div>
						
				    </div>
				    <hr />
				    <div class="card-footer">
				    	<div class="row">
				   			<div class="col-md-12">
								<div class="row">
									<div class="col-md-2">
							    		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('users.edit', $user->slug)}}">Edit</a>
									</div>
									<div class="col-md-2">
							            {!! Form::open(['route' => ['users.destroy', $user->slug], 'method' => 'DELETE']) !!}

										{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

										{!! Form::close() !!}
									</div>
									<div class="col-md-offset-3 col-md-3">
										{!! Form::model($user, ['method'=>'PATCH', 'action'=> ['UserController@update', $user->slug ],'files'=>true]) !!}

		                        		{!! Form::select('role_id', ['' => 'Choose a Role'] + $all_roles, null, array('class' => 'form-control')) !!}
		                        	</div>
		                        	<div class="col-md-2"> 
	                					{!!Form::submit('Change Role', array('class' => 'btn btn-block')) !!}
						                {!!Form::close() !!} 
				            		</div>
						        </div>
				    		</div>
				    	</div>
				    </div>
				</div>
			</div>
		</div>

	    <div class="wrapper wrapper-content animated fadeInUp">		
	        <div class="row wrapper border-bottom white-bg">
	        	<div class="inside">
				@if( $user->profile->chanel ) 
	                <h2>Channel: {{$user->profile->chanel->title}}</h2>
	                <hr>
	                <div class="row">        
					   	<div class="col-md-8"> 
			                <ol class="breadcrumb">
								<li><a href="{{route('admin-subcategories.index')}}">{!! $user->profile->chanel->subcategory->title !!}</a></li>
								<li>{!! $user->profile->chanel->created_at->diffForHumans() !!}</li>
							</ol>
						</div>
					   	<div class="col-md-4">
					   		<div class="row">        
					   			<div class="col-md-6"> 				               		
								{!! Form::model($user->profile, ['method'=>'PATCH', 'action'=> ['ChanelController@update', $user->profile->slug ],'files'=>true]) !!}

        						{!!Form::select('status', array('' => 'Choose Status', 'active' => 'Active', 'inactive' => 'Inactive', 'on_hold' => 'On Hold', 'banned' => 'Banned'), null, array('class' => 'form-control'))!!}
        						</div>
        						<div class="col-md-6"> 
		        					{!!Form::submit('New Status', array('class' => 'btn btn-block')) !!}
				                	{!!Form::close() !!}
				                </div>
				            </div>
		                </div>
		            </div>
						
					
					<hr />
					<div id="contenido"  class="card">
						<div class="card-body">          
					        <div class="row">        
					            <div class="col-md-4"> 
					               <figure>
						            	<img class="img-responsive" src="{{URL::to('/images/' . $user->profile->chanel->image)}}" alt="{{ $user->profile->chanel->title }}" name="{{ $user->profile->chanel->title }}">
						            </figure> 
					            </div>
				            	<div class="col-md-8">
				            		<h3>Subtitle: {{$user->profile->chanel->subtitle}}</h3>
									<div class="pt-5">{!! $user->profile->chanel->excerpt!!} </div>               
									<div class="pt-5">{!! $user->profile->chanel->about_chanel!!} </div>               
					            </div>
				            </div>
			           	</div>
					</div>
				
				@else <h2>Chanel: {!! $user->name !!} does not have a chanel</h2>

	            @endif
	        	</div>
			</div>
		</div>
  
	    <div class="wrapper wrapper-content animated fadeInUp">		
	        <div class="row wrapper border-bottom white-bg">
				<div class="inside">
	                <h2>Discussions 
	                	<span class="mt-3 small pull-right">Total Discussions: {{count($user->profile->discussions)}}</span>
	                </h2>
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
								                <th>Likes</th>
								                <th>Date</th>
								            </tr>
								         </thead>
								         <tbody>
								         	@foreach ($user->profile->discussions as $discussion)
								            <tr>
								               <td><a href="">{{$discussion->title}}</a></td>
								               <td>{{count($discussion->replies)}}</td>
								               <td>{{$discussion->likes}}</td>
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

</section>

	
@endsection


