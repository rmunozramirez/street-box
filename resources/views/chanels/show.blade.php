@extends('layouts.app')
@section ('title', "|  $chanel->title")

@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>{{ $chanel->subtitle }}</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						hier breadcrumb
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right">
		            	<i class="fa fa-user"></i> Author: <a href="">author</a>         
						<i class="fa fa-tag"></i> Category: <a href="{{route('subcategories.show', $chanel->subcategory->slug)}}">{{$chanel->subcategory->title }}</a>
		            	<i class="far fa-calendar"></i> Since: {{$chanel->created_at->format('M Y')}}
		            </div>
		        </div>
	        </div>
        	<hr>

                <!-- Preview Image -->
                <figure>
                	<img class="img-responsive" src="{{URL::to('/images/' . $chanel->image)}}" alt="{{ $chanel->title }}" name="{{ $chanel->title }}">
                </figure>
                <hr>
                <!-- Post Content -->
                {{$chanel->about_chanel}}

                <hr>


		</div>	
		
	</div>
</section>

	
@endsection


