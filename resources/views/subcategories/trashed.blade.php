@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{{count($subcategories)}} {!! $page_name !!} </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{{ $page_name }}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('subcategories.create')}}">Create a {!! $page_name !!}</a>
		            </div>
		        </div>
	        </div>
        	<hr>	
		
		<div class="row">
				@if(count($subcategories) > 0)
						<table class="table table-striped table-hover">
					         <thead>
					            <tr>
					                <th>Category</th>
					                <th>Chanels</th>
					                <th>Date</th>
					            </tr>
					         </thead>
					         <tbody>
					         	@foreach ($subcategories as $subcategory)
					            <tr>
					               <td>
					                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $subcategory->image ) }}" alt="{{$subcategory->title}}" > {{$subcategory->title}}
					             </td>
					               <td>{{count($subcategory->chanels)}}</a></td>
					               <td>{{$subcategory->created_at}}</td>
					               <td><a href="{{route('subcategories.restore', $subcategory->slug)}}">Restore</a></td>
					               <td><a href="{{route('subcategories.kill', $subcategory->slug)}}">Permanent Delete</a></td>
					            </tr>
					            @endforeach
					         </tbody>
					      </table>
				@else
					<h2>Your trash bin is empty</h2>
				@endif	
	</div>
</section>

	
@endsection


