@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($all_categories)}} categories</span></h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-categories.index')}}">Back to categories</a>
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-categories.create')}}">Create a {!! $page_name !!}</a>
                    </span>
                </ol>
                <hr>
    	
				<div class="row">
					@if(count($categories) > 0)
					<table class="table table-striped table-hover">
			         <thead>
			            <tr>
			                <th>Category</th>
			                <th>Subcategories</th>
			                <th>Date</th>
			            </tr>
			         </thead>
			         <tbody>
			         	@foreach ($categories as $category)
			            <tr>
			               <td>
			                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $category->image ) }}" alt="{{$category->title}}" > {{$category->title}}
			             </td>
			               <td>{{count($category->subcategories)}}</td>
			               <td>{{$category->created_at}}</td>
			               <td><a href="{{route('admin-categories.restore', $category->slug)}}">Restore</a></td>
			               <td><a href="{{route('admin-categories.kill', $category->slug)}}">Permanent Delete</a></td>
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
</section>

	
@endsection


