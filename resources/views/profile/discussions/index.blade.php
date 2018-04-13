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
			<h3 class="page-title">{{$page_name}}'s Home</h3>
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

		            </div>
		        </div>					
			</div>
           <hr />

			    <div id="contenido"  class="card">
					<div class="row">
						@if(count($discussions) > 0)
							<table class="table table-striped table-hover">
						         <thead>
						            <tr>
						                <th>Title</th>
						                <th>Image</th>
						                <th>Date</th>
						            </tr>
						         </thead>
						         <tbody>
						         	@foreach ($discussions as $discussion)
						            <tr>
						               <td><a href="{{route('discussions.show', $discussion->slug)}}">{{$discussion->title}}</a></td>
						               <td>{{$discussion->image</td>
						               <td>{{$chanel->created_at}}</td>
						            </tr>
						            @endforeach
						         </tbody>
						      </table>
						@endif
					</div>	
					<div class="text-center">
				        {{ $discussions->links() }}
				    </div>		
				</div>
		</div>			
	</div>
</section>

	
@endsection

