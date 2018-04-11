@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Chanels: {{count($all_chanels)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-chanels.create')}}">Create a new Chanel</a>
					   	<i class="fas fa-trash"></i> <a href="{{route('admin-chanels.trashed')}}">Trashed Chanels</a>
                    </span>
                </ol>
                <hr>

			    <div id="contenido"  class="card">
					<div class="row">
						@if(count($chanels) > 0)
							<table class="table table-striped table-hover">
						         <thead>
						            <tr>
						                <th>Chanel</th>
						                <th>User</th>
						                <th>Date</th>
						            </tr>
						         </thead>
						         <tbody>
						         	@foreach ($chanels as $chanel)
						            <tr>
						               <td><a href="{{route('admin-chanels.show', $chanel->slug)}}">{{$chanel->title}}</a></td>
						               <td></td>
						               <td>{{$chanel->created_at}}</td>
						               <td>
						               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('admin-chanels.edit', $chanel->slug)}}">Edit</a>
							            	<div class="col-md-6">
								            	{!! Form::open(['route' => ['admin-chanels.destroy', $chanel->slug], 'method' => 'DELETE']) !!}

												{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

												{!! Form::close() !!}
											</div>
						               </td>
						            </tr>
						            @endforeach
						         </tbody>
						      </table>
						@endif
					</div>	
					<div class="text-center">
				        {{ $chanels->links() }}
				    </div>		
				</div>
			</div>
		</div>
	</div>
</section>

	
@endsection


