@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">

			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Chanels: {{count($all_chanels)}}</span> </h2>
			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						All {!! $page_name !!}s
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('chanels.create')}}">Create a new Chanel</a>
		            </div>
		        </div>
	        </div>
        	<hr>

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
			               <td><a href="{{route('chanels.show', $chanel->slug)}}">{{$chanel->title}}</a></td>
			               <td></td>
			               <td>{{$chanel->created_at}}</td>
			               <td>
			               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('chanels.edit', $chanel->slug)}}">Edit</a>
				            	<div class="col-md-6">
					            	{!! Form::open(['route' => ['chanels.destroy', $chanel->slug], 'method' => 'DELETE']) !!}

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
</section>

	
@endsection


