@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Categories: {{count($all_categories)}}</span> </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-categories.index')}}">Back to categories</a>
		            </div>
		        </div>
	        </div>
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
					               <td>{{count($category->subcategories)}}</a></td>
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
</section>

	
@endsection


