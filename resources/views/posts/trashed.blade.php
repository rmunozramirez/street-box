@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div id="contenido"  class="container card-body left-right-shadow">
		<div class="inside">
			<h2>{{count($posts)}} {!! $page_name !!} </h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a title="All Blog Categories" href="{{route('postcategories.index')}}">Blog Categories</a>
						All {!! $page_name !!}s
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('posts.create')}}">Create a new Post</a>

		            </div>
		        </div>
	        </div>
        	<hr>

		<div class="row">
			@if(count($posts) > 0)
					<table class="table table-striped table-hover">
				         <thead>
				            <tr>
				                <th>Post</th>
				                <th>Category</th>
				                <th>Date</th>
				            </tr>
				         </thead>
				         <tbody>
				         	@foreach ($posts as $post)
				            <tr>
				               <td>
				                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $post->image ) }}" alt="{{$post->title}}" > {{$post->title}}
				             </td>
				               <td><a href="{{route('postcategories.show', $post->postcategory->slug)}}">{{$post->postcategory->title}}</a></td>
				               <td>{{$post->created_at}}</td>
				               <td><a href="{{route('posts.restore', $post->slug)}}">Restore</a></td>
				               <td><a href="{{route('posts.kill', $post->slug)}}">Permanent Delete</a></td>
				            </tr>
				            @endforeach
				         </tbody>
				      </table>
			@else
				<h2>Your trash bin is empty</h2>
			@endif
		</div>	
	</div>
</section>

	
@endsection


