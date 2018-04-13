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
				<div class="col-md-9">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-3">
		            <div class="under-meta pull-right">
                    	<i class="fas fa-plus"></i></i> <a href="{{route('profile.discussions.create', $user->slug)}}">Create a new Discussion</a>
		            </div>
		        </div>					
			</div>
           <hr />

		    <div class="row">
		    	<div class="col-md-4">
		    		@if(count($discussions) > 0)
			         	@foreach ($discussions as $discussion)
			    		<div class="list-group-item-text">
			    			<div class="pull-left">{!! $discussion->title !!}</div>
			    			<hr />
			    		</div>
			    		@endforeach 
					@endif	
		    	</div>
		    	<div class="col-md-8">
					@if(count($discussions) > 0)
			         	@foreach ($discussions as $discussion)	
						<div class="card">
							<div class="card-header">
								<div class="pull-left">{!! $discussion->title !!}</div>
							</div>
							<div class="card-body">					
								<div class="pull-left">{!!$discussion->body !!}</div>
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

