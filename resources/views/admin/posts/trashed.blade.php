@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">
			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_posts)}}</span> </h2>
			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						{!! $page_name !!}
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('posts.index')}}">Back to Post</a>

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
					<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
			@endif
		</div>	
	</div>
</section>

	
@endsection


