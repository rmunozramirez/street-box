@extends('layouts.app')
@section ('title', "| $page_name")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">

	@include ('partials._inner-title-blog')
	
    <div  id="contenido"  class="container left-right-shadow">	
		<div class="inside">
			<h2>Welcome {!! $page_name !!} </h2>
			<div class="row">
				<div class="col-md-9">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						{!! $page_name !!}
					</div>	
				</div>
				<div class="col-md-3">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{ URL::to('/newscategories/' . $user->slug) }}">Back to somewhere</a> 
		            </div>
		        </div>					
			</div>
            <hr>

            <div class="user-profile sky-tabs sky-tabs-amount-2 sky-tabs-pos-top-justify sky-tabs-anim-fade sky-tabs-response-to-icons">
                <input type="radio" class="sky-tab-content-1" id="sky-tab1" checked="" name="sky-tabs">
                <label for="sky-tab1"><span><span><i class="fa fa-user"></i>Edit User</span></span></label>

                <input type="radio" class="sky-tab-content-2" id="sky-tab2" name="sky-tabs">
                <label for="sky-tab2"><span><span><i class="fa fa-pencil"></i>Reviews</span></span></label>

                <ul>
                    <li class="sky-tab-content-1">
      
			        {!! Form::model($user, ['method'=>'PATCH', 'action'=> ['UserController@update', $user->slug ],'files'=>true]) !!}   

		            	<div class="col-md-12"> 
				            <div class="row">
				            	<div class="col-md-6">       
					                {!!Form::label('name', 'Name', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('name', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
					            </div>

					            <div class="col-md-6">       
					                {!!Form::label('password', 'Password', array('class' => 'form-spacing-top'))!!}
					                {!!Form::text('password', null, array('class' => 'form-control', 'required' => '', 'maxlength' => '255'))!!}
					            </div>
				            </div>	
				            <div class="row">
								<div class=" col-md-12 pt-5">    
					                {!!Form::submit('Edit user', array('class' => 'col-md-12 btn btn-success btn-block')) !!}
					                {!!Form::close() !!}       
					            </div>
			            	</div>		            	
			            </div> 	      
                	</li>

                	<li class="sky-tab-content-2">

		        		{!! Form::model($profile, ['method'=>'PATCH', 'action'=> ['ProfileController@update', $profile->slug ],'files'=>true]) !!}

			            <div class="col-md-4"> 
			            	<i class="far fa-user fa-10x"></i>
			            	<div class=" pt-5">
				                {!!Form::label('image', 'Upload a Featured Image') !!}
				                {!!Form::file('image') !!} 
			            	</div>  
			            </div>
      
		            	<div class="col-md-8"> 
				            <div class="row">
				            	<div class="col-md-6">       
					                {!!Form::label('birthday', 'Birthday', array('class' => 'form-spacing-top'))!!}
					                {!!Form::date('birthday', '', array('class' => 'form-control')) !!} 
					            </div>
        		
				            </div>		            		

				            <div class="row pt-5"> 
					            <div class="col-md-12">      
					                {!!Form::label('about_user', 'Tell others something about you:', array('class' => 'form-spacing-top'))!!}
					                {!!Form::textarea('about_user', null, array('id' => 'summernote','class' => 'form-control', 'rows' => 9))!!}                       
					            </div>
				            </div>

				            <div class="pt-5">    
				                {!!Form::submit('Edit Profile', array('class' => 'btn btn-success btn-block')) !!}
				                {!!Form::close() !!}       
				            </div>
			            </div>  
                	</li>

                </ul>
            </div>
		</div>			
	</div>
</section>

	
@endsection

