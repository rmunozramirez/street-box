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
						{!! $page_name !!}s
					</div>	
				</div>
				<div class="col-md-4">
		            <div class="under-meta pull-right">
                    	<i class="fas fa-plus"></i></i> <a href="{{route('profile.discussions.create', $user->slug)}}">Create Discussion</a>
                    	<i class="fas fa-trash"></i> <a href="{{route('profile.discussions.trashed', $user->slug )}}">Trashed Discussions</a>
		            </div>
		        </div>					
			</div>
           <hr />

		    <div class="row">
		    	<div class="col-md-12">
					@if(count($discussions) > 0)
			         	@foreach ($discussions as $discussion)	

						<div class="col-lg-3 col-md-4">	
							<div class="card hovercard">
								<img class="cardheader" src="{{URL::to('/images/' . $discussion->image)}}">
									<h3><a href="{{route('profile.discussions.show', ['slug'=>$user->slug,'slug_d'=>$discussion->slug])}}">{!! $discussion->title !!}</a></h3>
								<div class="card-body">					
								   	<div class="breadcrumb text-center">
								   		<a href="{{route('profile.home', $user->slug)}}">{{ $discussion->profile->user->name}}</a>
								   		{{ $discussion->created_at->diffForHumans()}}
								   		

								   	</div>
									<div class="pull-left">
										{!! substr($discussion->body, 0, 100) !!}
									</div>	
									<hr>

									<a href="{{route('profile.discussions.show', ['slug'=>$user->slug,'slug_d'=>$discussion->slug])}}">More...</a>
								</div>
							</div>
							
						</div>

			            @endforeach 
					@endif	
				<div class="text-center">
			        {{ $discussions->links() }}
			    </div>		
			</div>
		</div>			
	</div>
</section>

	
@endsection

