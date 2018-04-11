@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($all_subcategories)}} subcategories</span></h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-subcategories.index')}}">Back to Subcategories</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-subcategories.create')}}">Create Subcategory</a>
                    </span>
                </ol>
                <hr>
				<div class="row">
					@if(count($subcategories) > 0)
					<table class="table table-striped table-hover">
				         <thead>
				            <tr>
				                <th>Category</th>
				                <th>Chanels</th>
				                <th>Date</th>
				            </tr>
				         </thead>
				         <tbody>
				         	@foreach ($subcategories as $subcategory)
				            <tr>
				               <td>
				                  <img class="mr-4" height="80" src="{{URL::to('/images/' . $subcategory->image ) }}" alt="{{$subcategory->title}}" > {{$subcategory->title}}
				             	</td>
				               <td>{{count($subcategory->chanels)}}></td>
				               <td>{{$subcategory->created_at}}</td>
				               <td><a href="{{route('admin-subcategories.restore', $subcategory->slug)}}">Restore</a></td>
				               <td><a href="{{route('admin-subcategories.kill', $subcategory->slug)}}">Permanent Delete</a></td>
				            </tr>
				            @endforeach
				         </tbody>
				      </table>
						@else
							<h2>Your trash bin is empty</h2>
						@endif	
				</div>
			</div>
		</div>
	</div>
</section>

@endsection
