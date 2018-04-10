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
			<h2>Categories Index</h2>

			<div class="row">
				<div class="col-md-6">
					<div class="breadcrumb">
						<a href="{{url('/')}}"> Home</a>
						Blog Categories

					</div>	
				</div>	
				<div class="col-md-6">
		            <div class="under-meta pull-right">
		            	<i class="fas fa-chevron-left"></i> <a href="{{route('chanels.index')}}">Back to Chanels</a>	            
		            </div>
		        </div>
	        </div>
        	<hr>

            <div class="sky-tabs sky-tabs-amount-4 sky-tabs-pos-top-justify sky-tabs-anim-fade sky-tabs-response-to-icons">
                <input type="radio" class="sky-tab-content-1" id="sky-tab1" checked="" name="sky-tabs">
                <label for="sky-tab1"><span><span><i class="fa fa-user"></i>Hosted by</span></span></label>

                <input type="radio" class="sky-tab-content-2" id="sky-tab2" name="sky-tabs">
                <label for="sky-tab2"><span><span><i class="fa fa-pencil"></i>Reviews</span></span></label>

                <input type="radio" class="sky-tab-content-3" id="sky-tab3" name="sky-tabs">
                <label for="sky-tab3"><span><span><i class="fa file-image-o"></i>User's Events</span></span></label>

                <input type="radio" class="sky-tab-content-4" id="sky-tab4" name="sky-tabs">
                <label for="sky-tab4"><span><span><i class="fa fa-play-circle"></i>Video</span></span></label>

                <ul>
                    <li class="sky-tab-content-1">

							<div class="col-lg-6">
							 	<i class="fa fa-user"></i> Author: <a href="">author</a>         
						<i class="fa fa-tag"></i> Category: <a href="{{route('subcategories.show', $chanel->subcategory->slug)}}">{{$chanel->subcategory->title }}</a>
		            	<i class="far fa-calendar"></i> Since: {{$chanel->created_at->format('M Y')}}
	
					            <!-- Preview Image -->
					            <figure>
					            	<img class="img-responsive" src="{{URL::to('/images/' . $chanel->image)}}" alt="{{ $chanel->title }}" name="{{ $chanel->title }}">
					            </figure>


		           
							</div>										
								
                            <div class="col-lg-6">
                            	<h2>{{$chanel->title}}</h2>
							
							   <div class="info">

									<p>Total Events:<b>104</b></p>
									<p>
										Max Rating:<br />
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star"></i>
										<i class="fa fa-star-o"></i>
										<i class="fa fa-star-o"></i>
										<i class="fa fa-star-o"></i>
									</p>
								</div>	

                                {{ $chanel->about_chanel }}
                            </div>
             
                    </li>

                    <li class="sky-tab-content-2">
                        <header>Reviews</header>
						<ul id="threads" class="list-layout panel-body">
							<li class=" thread js-thread  thread--read">
								<div class="row">
									<div class="col-sm-9 col-md-3 thread-author">
										<div class="row row-table">
											<div class="thread-avatar col-md-5">
												<a href=""><img width="50" height="50" title="Phuong Linh" src="images/user.png" class="media-round media-photo" alt="User"></a>
											</div>
											<div class="col-sm-7 thread-name">
												Users name
												<br>
												<span class="thread-date">Yesterday</span>
											</div>
										</div>
									</div>
									<div class="col-sm-7 col-md-5 col-lg-6 thread-body">
										<span class="thread-subject">         
											Lorem ipsum dolor sit amet, consectetur adipisicing elit. Id voluptatum sequi sunt asperiores eius, qui saepe tempore aliquam debitis distinctio officia optio unde perferendis fugiat sint quia consequuntur, placeat sed!

										</span>

									</div>		
									 <div class="col-sm-7 col-md-4 col-lg-3 thread-label">
										  <div class="row">
											<div class="col-sm-6 options thread-actions hide-sm right">
												<p>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star"></i>
													<i class="fa fa-star-o"></i>
												</p>
											</div>
										  </div>
										</div>
								</div>
							</li>

						</ul>
                    </li>

                    <li class="sky-tab-content-3">
						<div class="row">
                            <header>Other events of Max</header>   
								<div class="fieldset-auto-width">
									<ul class="all-blogs">
										<li class="media">
											<a class="pull-left" href="#">
												<img width="200" class="img-responsive" src="images/bmw.jpg" alt="...">
											</a>
											<div class="media-body">
												<h4 class="media-heading">Latest Google Updates</h4>
												<p class="author">Mike Smith</p>
											</div>
										</li>
										<li class="media">
											<a class="pull-left" href="#">
												<img width="200" class="img-responsive" class="media-object" src="images/auto-clasico.jpg" alt="...">
											</a>
											<div class="media-body">
												<h4 class="media-heading">Newest bootstrap version</h4>
												<p class="author">Dave Hesler</p>
											</div>
										</li>
										<li class="media">
											<a class="pull-left" href="#">
												<img width="200" class="img-responsive" class="media-object" src="images/berlin.jpg" alt="...">
											</a>
											<div class="media-body">
												<h4 class="media-heading">Android rolls our another update</h4>
												<p class="author">Michael Davis</p>
											</div>
										</li>
										<li class="media">
											<a class="pull-left" href="#">
												<img width="200" class="img-responsive" class="media-object" src="images/hamburg.jpg" alt="...">
											</a>
											<div class="media-body">
												<h4 class="media-heading">Survey results are out</h4>
												<p class="author">Mike Smith</p>
											</div>
										</li>
									</ul>
								</div>

							</div>
                            <p class="text-right"><em>Find out more about Albert Einstein from <a target="_blank" href="http://en.wikipedia.org/wiki/Albert_Einstein">Wikipedia</a>.</em></p>

                    </li>

                    <li class="sky-tab-content-4">
                        <div class="typography">
                            <iframe id="ytplayer" type="text/html" width="100%" height="600" src="{!! $chanel->video !!}" frameborder="0" allowfullscreen></iframe>
                        </div>
                    </li>

                </ul>
            </div>

		</div>	
	</div>
</section>


	
@endsection


