@extends('layouts.app')
@section ('title', '| All Blog Categories')
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{{count($postcategories)}} {!! $page_name !!} </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('postcategories.create')}}">Create a {!! $page_name !!}</a>
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
					                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $postcategory->image ) }}" alt="{{$postcategory->title}}" > {{$postcategory->title}}
					             </td>
					               <td>{{count($postcategory->posts)}}</a></td>
					               <td>{{$postcategory->created_at}}</td>
					               <td><a href="{{route('postcategories.restore', $postcategory->slug)}}">Restore</a></td>
					               <td><a href="{{route('postcategories.kill', $postcategory->slug)}}">Permanent Delete</a></td>
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
</section>

	
@endsection


