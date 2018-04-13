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
           

            <div class="user-profile sky-tabs sky-tabs-amount-2 sky-tabs-pos-top-justify sky-tabs-anim-fade sky-tabs-response-to-icons">
                <input type="radio" class="sky-tab-content-1" id="sky-tab1" checked="" name="sky-tabs">
                <label for="sky-tab1"><span><span><i class="fa fa-user"></i>Edit User</span></span></label>

                <input type="radio" class="sky-tab-content-2" id="sky-tab2" name="sky-tabs">
                <label for="sky-tab2"><span><span><i class="fa fa-pencil"></i>Edit Profile</span></span></label>

                <ul>
                    <li class="sky-tab-content-1">
      
			        primero	      
                	</li>

                	<li class="sky-tab-content-2">

		        		Segundo  
                	</li>

                </ul>
            </div>
		</div>			
	</div>
</section>

	
@endsection

