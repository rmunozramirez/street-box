@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Posts: {{count($all_posts)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('posts.create')}}">Create a new Post</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('posts.trashed')}}">Trashed Posts</a>
                    </span>
                </ol>
                <hr>
		            	
			    @if(count($errors) > 0)
			        <ul class="list-group">
			            @foreach($errors->all() as $error)
			                <li class="list-group-item text-danger">{{$error}}</li>
			            @endforeach
			        </ul>
			    @endif
		
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
	</div>
</section>

@endsection

