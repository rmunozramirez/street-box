@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Categories: {{count($all_postcategories)}}</span> </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						Blog Categories

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('postcategories.create')}}">Create a Blog Category</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('postcategories.trashed')}}">Trashed Blog Categories</a>
		            </div>
		        </div>
	        </div>
        	<hr>
        	<div class="row">
				@if(count($postcategories) > 0)
						<table class="table table-striped table-hover">
					         <thead>
					            <tr>
					                <th>Category</th>
					                <th>Posts</th>
					                <th>Date</th>
					            </tr>
					         </thead>
					         <tbody>
					         	@foreach ($postcategories as $postcategory)
					            <tr>
					               <td>
					               		<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $postcategory->image ) }}" alt="{{$postcategory->title}}" > 
					               		<a href="{{route('postcategories.show', $postcategory->slug)}}">
					               		{{$postcategory->title}}
					               		</a>
					               	</td>
					               <td>{{$postcategory->posts_count}}</td>
					               <td>{{$postcategory->created_at}}</td>
					               <td>
					               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('postcategories.edit', $postcategory->slug)}}">Edit</a>
						            	<div class="col-md-6">
							            	{!! Form::open(['route' => ['postcategories.destroy', $postcategory->slug], 'method' => 'DELETE']) !!}

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
		        {{ $postcategories->links() }}
		    </div>		
		</div>
	</div>
</section>

	
@endsection


