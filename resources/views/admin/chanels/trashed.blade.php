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
                    	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-chanels.index')}}">Back to Chanels</a>
					   	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-chanels.create')}}">Create a new Chanel</a>
                    </span>
                </ol>
                <hr>

			    <div id="contenido"  class="card">
					<div class="inside">
						<div class="row">
							@if(count($chanels) > 0)
								<table class="table table-striped table-hover">
							         <thead>
							            <tr>
							                <th>Chanel</th>
							                <th>Subcategory</th>
							                <th>Date</th>
							            </tr>
							         </thead>
							         <tbody>
							         	@foreach ($chanels as $chanel)
							            <tr>
							               <td>
							                  <img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $chanel->image ) }}" alt="{{$chanel->title}}" > {{$chanel->title}}
							             </td>
							               <td><a href="{{route('subcategories.show', $chanel->subcategory->slug)}}">{{$chanel->subcategory->title}}</a></td>
							               <td>{{$chanel->created_at}}</td>
							               <td><a href="{{route('admin-chanels.restore', $chanel->slug)}}">Restore</a></td>
							               <td><a href="{{route('admin-chanels.kill', $chanel->slug)}}">Permanent Delete</a></td>
							            </tr>
							            @endforeach
							       	</tbody>
						      	</table>
							@else
								<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
							@endif
						</div>	
				</div>
			</div>
		</div>
	</div>
</section>

	
@endsection


