@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Pages: {{count($all_pages)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-pages.index')}}">Back to pages</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-pages.trashed')}}">Trashed Pages</a>
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
				<div class="row mb-4">
					<div class="col-md-8">
			            <div class="under-meta">
			            	<i class="fa fa-user"></i> Author: <a href="">Domingo</a>
			            	<i class="far fa-clock"></i> Posted: {{$page->created_at->diffForHumans()}}
			            </div>
			        </div>
		        </div>

				<div class="row">        
				    <div class="col-md-4">
		                <!-- Preview Image -->
		                <figure>
		                	<img class="img-responsive" src="{{URL::to('/images/' . $page->image)}}" alt="{{ $page->title }}" name="{{ $page->title }}">
		                </figure>
	            	</div>
	                <div class="col-md-8">
		                <h3>{{ $page->subtitle }}</h3>
		                <!-- Post Content -->
		                {!! $page->body !!}
	                </div>
	           	</div>
			</div>
		</div>
	</div>
</section>

@endsection
