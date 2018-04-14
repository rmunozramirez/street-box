@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-user')
	
    <div  id="contenido"  class="container left-right-shadow">

		<div class="inside">
			<h3 class="page-title">{!! $user->name !!}'s {{$page_name}}s <span class="mt-3 small pull-right">{!! $all_user_discussions !!} discussions</span></h3>
			 <hr>
			<div class="row">
				<div class="col-md-8">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a href="{{route('profile.home', $user->slug)}}"> Dashboard</a>
						<a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>		
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-4">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('profile.discussions.index', $user->slug)}}"> Discussions</a>
                    	<i class="fas fa-plus"></i> <a href="{{route('profile.discussions.create', $user->slug)}}">Create Discussion</a>
                    	
		            </div>
		        </div>					
			</div>
           <hr />
			<div class="row">
				@if(count($discussions) > 0)
					<table class="table table-striped table-hover">
				         <thead>
				            <tr>
				                <th>Discussions</th>
				                <th>Date</th>
				            </tr>
				         </thead>
				         <tbody>
				         	@foreach ($discussions as $discussion)
				            <tr>
				               <td>
				                  <img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $discussion->image ) }}" alt="{{$discussion->title}}" > {{$discussion->title}}
				             	</td>
				               <td>{{$discussion->created_at}}</td>
				               <td><a href="{{route('profile.discussions.restore', ['slug'=>$user->slug,'slug_d'=>$discussion->slug])}}">Restore</a></td>
				               <td><a href="{{route('profile.discussions.kill', ['slug'=>$user->slug,'slug_d'=>$discussion->slug])}}">Permanent Delete</a></td>
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

