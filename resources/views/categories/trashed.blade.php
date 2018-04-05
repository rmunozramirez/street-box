@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{{count($categories)}} {!! $page_name !!} </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i><a href="{{route('categories.index')}}">Back to categories</a>
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
					               <td><a href="{{route('categories.restore', $category->slug)}}">Restore</a></td>
					               <td><a href="{{route('categories.kill', $category->slug)}}">Permanent Delete</a></td>
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


