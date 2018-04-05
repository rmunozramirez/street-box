@extends('layouts.app')
@section ('title', "| All Chanels")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div id="contenido"  class="container left-right-shadow">
		<div class="inside">
			<h2>{{count($chanels)}} {!! $page_name !!} </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title="All Categories" href="{{route('categories.index')}}">Categories</a>
						<a title="All Subcategories" href="{{route('subcategories.index')}}">Subcategories</a>
						All {!! $page_name !!}
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
			                <th>Subcategory</th>
			                <th>Date</th>
			            </tr>
			         </thead>
			         <tbody>
			         	@foreach ($chanels as $chanel)
			            <tr>
			               <td>
			                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $chanel->image ) }}" alt="{{$chanel->title}}" > {{$chanel->title}}
			             </td>
			               <td><a href="{{route('subcategories.show', $chanel->subcategory->slug)}}">{{$chanel->subcategory->title}}</a></td>
			               <td>{{$chanel->created_at}}</td>
			               <td><a href="{{route('chanels.restore', $chanel->slug)}}">Restore</a></td>
			               <td><a href="{{route('chanels.kill', $chanel->slug)}}">Permanent Delete</a></td>
			            </tr>
			            @endforeach
			       	</tbody>
		      	</table>
			@else
				<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
			@endif
		</div>	
	</div>
</section>

	
@endsection


