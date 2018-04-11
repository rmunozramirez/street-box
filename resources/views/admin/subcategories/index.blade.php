@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($all_subcategories)}} subcategories</span></h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-subcategories.create')}}">Create a {!! $page_name !!}</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-subcategories.trashed')}}">Trashed Subcategories</a>
                    </span>
                </ol>
                <hr>

			    <div id="contenido"  class="card">
					<div class="inside">
						<div class="row">
						@if(count($subcategories) > 0)
									<table class="table table-striped table-hover">
								         <thead>
								            <tr>
								                <th>Subcategory</th>
								                <th>In Category</th>
								                <th>Chanels</th>
								                <th>Date</th>
								            </tr>
								         </thead>
								         <tbody>
								         	@foreach ($subcategories as $subcategory)
								            <tr>
								               <td>
								               		<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $subcategory->image ) }}" alt="{{$subcategory->title}}" > 
								               		<a href="{{route('admin-subcategories.show', $subcategory->slug)}}">
								               		{{$subcategory->title}}
								               		</a>
								               	</td>
								               <td><a href="{{route('admin-categories.show', $subcategory->category->slug)}}">
								               		{{$subcategory->category->title}}
								               		</a></td>
								               <td>{{count($subcategory->chanels)}}</td>
								               <td>{{$subcategory->created_at}}</td>
								               <td>
								               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('admin-subcategories.edit', $subcategory->slug)}}">Edit</a>
									            	<div class="col-md-6">
										            	{!! Form::open(['route' => ['admin-subcategories.destroy', $subcategory->slug], 'method' => 'DELETE']) !!}

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
				        {{ $subcategories->links() }}
				    </div>		
				</div>
			</div>
		</div>
	</div>
</section>

	
@endsection


