@extends('layouts.admin')
@section ('title', "| $page_name")
@section('content')

<section id="content">

    <div id="contenido"  class="card">
		<div class="inside">

			<h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Chanels: {{count($all_chanels)}}</span> </h2>
			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{route('dashboard')}}"> Dashboard</a>
						All {!! $page_name !!}s
					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="pull-right admin">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('chanels.index')}}">Back to Chanels</a>
		            </div>
		        </div>
	        </div>
        	<hr>	

		<div class="row">
			@if(count($chanels) > 0)
				<table class="table table-striped table-hover">
			         <thead>
			            <tr>
			                <th>Chanel</th>
			                <th>Subcategory</th>
			                <th>Date</th>
			            </tr>
			         </thead>
			         <tbody>
			         	@foreach ($chanels as $chanel)
			            <tr>
			               <td>
			                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $chanel->image ) }}" alt="{{$chanel->title}}" > {{$chanel->title}}
			             </td>
			               <td><a href="{{route('subcategories.show', $chanel->subcategory->slug)}}">{{$chanel->subcategory->title}}</a></td>
			               <td>{{$chanel->created_at}}</td>
			               <td><a href="{{route('chanels.restore', $chanel->slug)}}">Restore</a></td>
			               <td><a href="{{route('chanels.kill', $chanel->slug)}}">Permanent Delete</a></td>
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


