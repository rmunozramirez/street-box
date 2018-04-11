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
                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('admin-subcategories.index')}}">Back to {!! $page_name !!}</a>
		            	<i class="fas fa-trash"></i> <a href="{{route('admin-subcategories.trashed')}}">Trashed Subcategories</a>
                    </span>
                </ol>
                <hr>
				<div class="row">
					<div class="card-body">
		            	<div class="row">        
				            <div class="col-md-4"> 
				            	<img class="img-responsive"  src="{{URL::to('/images/' . $subcategory->image ) }}" name="{{$subcategory->title}}" alt="{{$subcategory->title}}" >
				            </div>
		  
			            	<div class="col-md-8">

					            <h3>{!! $subcategory->subtitle !!}</h3>
					            <p>{!! $subcategory->about_subcategory !!}</p>		            		
			            		
				            </div>
			            </div>  
				            
			        </div>
			    </div>
		    	<hr>
				<div class="row">
					@if(count($subcategory->chanels) > 0)
					<div class="col-md-12">
						@if(count($subcategory->chanels) > 1 )
							<h3>{{count($subcategory->chanels)}} chanels under {{$subcategory->title}}</h3>
						@else
							<h3>One subcategory under {{$subcategory->title}}</h3>
						@endif
					</div>
					<div class="row">						
						<div class="col-lg-12">	
							<table class="table table-striped table-hover">
						         <thead>
						            <tr>
						                <th>Chanel</th>
						                <th>Likes</th>
						                <th>Testimonial</th>
						                <th>Featured</th>
						                <th>Date</th>
						            </tr>
						         </thead>
						         <tbody>
						         	@foreach ($subcategory->chanels as $chanel)
						            <tr>
						               <td>
						               		<img class="mr-4" height="80" width="80" src="{{URL::to('/images/' . $chanel->image ) }}" alt="{{$chanel->title}}" > 
						               		<a href="{{route('admin-subcategories.show', $chanel->slug)}}">
						               		{{$chanel->title}}
						               		</a>
						               	</td>
						               <td>{{$chanel->likes}}</td>
						               <td>
						               		@if($chanel->is_testimonial == 1 )
												YES
											@else
												NO
											@endif
										</td>
						               <td>						               		
						               		@if($chanel->is_featured == 1 )
												YES
											@else
												NO
											@endif
										</td>
						               <td>{{$chanel->created_at}}</td>
						            </tr>
						            @endforeach
						         </tbody>
						      </table>	
						</div>
					</div>
						
					@else
						<div class="col-lg-12">
							<h3>No Chanels under {{$subcategory->title}}</h3>
						</div>
					@endif		
				</div>
			</div>
		</div>
	</div>
</section>

	
@endsection


