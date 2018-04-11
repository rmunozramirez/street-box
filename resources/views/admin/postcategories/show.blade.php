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
		            	<i class="fas fa-pencil-alt"></i> <a href="{{route('postcategories.create')}}">Create a new Blog Category</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('postcategories.trashed')}}">Trashed Blog Categories</a>
                    </span>
                </ol>
                <hr>
				<div class="row">
					<div class="card-body">        
			            <div class="row">        
				            <div class="col-md-4"> 
				            	<img class="img-responsive"  src="{{URL::to('/images/' . $postcategory->image ) }}" name="{{$postcategory->title}}" alt="{{$postcategory->title}}" >
				            </div>
		  
			            	<div class="col-md-8"> 
					            <h3>{!! $postcategory->subtitle !!}</h3>
					            <p>{!! $postcategory->about_category !!}</p>		            		
				            </div>
			            </div>     
			        </div>
			    </div>
        		<hr>
				<div class="row">
					@if(count($postcategory->posts) > 0)
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
				               <td><a href="{{route('posts.show', $post->slug)}}">
				               	<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $post->image ) }}" alt="{{$post->title}}" > {{$post->title}}</a></td>
				               <td><a href="{{route('postcategories.show', $post->postcategory->slug)}}">{{$post->postcategory->title}}</a></td>
				               <td>{{$post->created_at}}</td>
				               <td>
				               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('posts.edit', $post->slug)}}">Edit</a>
					            	<div class="col-md-6">
						            	{!! Form::open(['route' => ['posts.destroy', $post->slug], 'method' => 'DELETE']) !!}

										{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

										{!! Form::close() !!}
									</div>
				               </td>
				            </tr>
				            @endforeach
				         </tbody>
				      </table>
					@else
					<div class="col-lg-12">
						<h3>No Chanels under {{$postcategory->title}}</h3>
					</div>
					@endif
				</div>	
				<div class="text-center">
			        {{ $posts->links() }}
			    </div>		
			</div>	
		</div>	
	</div>
</section>

	
@endsection


