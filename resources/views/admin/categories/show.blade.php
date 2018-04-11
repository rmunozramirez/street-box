@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">{{count($all_categories)}} categories</span></h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> {!! $page_name !!}
                    </li>
                    <span class="pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('admin-categories.index')}}">Back to categories</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-categories.trashed')}}">Trashed Categories</a>
                    </span>
                </ol>
                <hr>
				<div class="row">
					<div class="card-body">        
			            <div class="row">
				            <div class="col-md-4"> 
				            	<img class="img-responsive"  src="{{URL::to('/images/' . $category->image ) }}" name="{{$category->title}}" alt="{{$category->title}}" >
				            </div>
		  
			            	<div class="col-md-8"> 
					            <h3>{!! $category->subtitle !!}</h3>
					            <p>{!! $category->about_category !!}</p>		            		
				            </div>
			            </div>  
				            
			        </div>
			    </div>
    			<hr>
    			@if(count($category->subcategories) > 0 )
				<div class="row">
					<div class="col-md-12">
						@if(count($category->subcategories) > 1 )
							<h3>{{count($category->subcategories)}} subcategories under {{$category->title}}</h3>
						@else
							<h3>One subcategory under {{$category->title}}</h3>
						@endif
					</div>
				
					<table class="table table-striped table-hover">
				         <thead>
				            <tr>
				                <th>Subcategory</th>
				                <th>Likes</th>
				                <th>Testimonial</th>
				                <th>Featured</th>
				                <th>Date</th>
				            </tr>
				         </thead>
				         <tbody>
				         	@foreach ($category->subcategories as $subcategory)	
				            <tr>
				               <td>
				               		<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $subcategory->image ) }}" alt="{{$subcategory->title}}" > 
				               		<a href="{{route('admin-subcategories.show', $subcategory->slug)}}">
				               		{{$subcategory->title}}
				               		</a>
				               	</td>
				               <td>{{$subcategory->chanels()->sum('likes')}}</td>
				               <td>
				               		@if($subcategory->is_testimonial == 1 )
										YES
									@else
										NO
									@endif
								</td>
				               <td>						               		
				               		@if($subcategory->is_featured == 1 )
										YES
									@else
										NO
									@endif
								</td>
				               <td>{{$subcategory->created_at}}</td>
				            </tr>
				            @endforeach
				         </tbody>
				      </table>	
				</div>
			@else
				<div class="col-md-12"><h3>No subcategories under {{$category->title}}</h3></div>
			@endif
			</div>
		</div>
	</div>
</section>
	
@endsection
