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
			<h3 class="page-title">{{$page_name}}</h3>
			 <hr>
			<div class="row">
				<div class="col-md-7">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						<a href="{{route('profile.home', $user->slug)}}"> Dashboard</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-5">
		            <div class="under-meta pull-right">
		            	<div class="row">
	                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('profile.chanel.edit',  $user->slug)}}">Edit</a>

			            	{!! Form::open(['route' => ['profile.chanel.destroy', $user->slug], 'method' => 'DELETE']) !!}
							{!! Form::submit('Delete', ['class' => 'top-10 btn btn-danger']) !!}
							{!! Form::close() !!}

			            </div>
		            </div>
		        </div>					
			</div>
           <hr />

		    <div class="row">
				<div class="card-body">          
			        <div class="row">        
			            <div class="col-md-4"> 
			               <figure>     	
				            	<img class="img-responsive" src="{{URL::to('/images/' . $chanel->image)}}" alt="{{ $chanel->title }}" name="{{ $chanel->title }}">
				            </figure>
				            <div class="pt-5">
				            <div class="breadcrumb">
								<a href="">{!! $chanel->profile->user->name !!}</a>
								{!! $chanel->created_at->diffForHumans() !!}
							</div>
							</div>
			            </div>
		            	<div class="col-md-8"> 
							{!! $chanel->about_chanel!!}                 
			            </div>
		            </div>
	           	</div>
           	</div>
		</div>			
	</div>
</section>

	
@endsection

