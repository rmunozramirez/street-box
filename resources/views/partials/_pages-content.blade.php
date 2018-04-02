
<section id="content">
	<div  id="contenido" class="container general-container">
			<header class="content-header">
				<div class="row">
					<div class="col-md-8">
						<h1 class="page-title">Channels (Total: <?php echo (count($channels));?>)</h1>
						<div class="breadcrumb">
							{!! Html::linkRoute('home.index', 'Home') !!} / 
							{!! Html::linkRoute('categories.index', 'Categories') !!} /
							{!! Html::linkRoute('subcategories.index', 'Subcategories') !!} / 
							{!! Html::linkRoute('channels.index', 'Channels') !!}
						</div>	
					</div>
					<div class="col-md-4">
						<div class="play_header pull-right"><i class="fa fa-play-circle-o fa-4" aria-hidden="true"></i></div>
					</div>
				</div>
				
			</header>
	</div>

    <div class="container content-body left-right-shadow">	
		<div class="row">
			<div class="col-md-12">
				        <div class="col-md-12 col-sm-12 col-lg-12 sky-form">
			<header class="row">
					<div class="col-md-8">Event Page</div>
					<div class="col-md-4">
						<div class=" search">					
							<form action="#">					
								<div class="input">
									<input type="text" placeholder="Search">
									<button type="submit" class="right button search-user-area">Go</button>
								</div>					
							</form>
						</div>
					</div>
				</header>

            <fieldset class="fieldset-auto-width">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-3 separator">
                            <div class="card hovercard">
                                    <img class="img-responsive" alt="" src="images/bmw.jpg"> 
                            </div>
							    
							<div class="col-md-12">
								<header class="event-header">
								<h2 class="title">By: <a href="user.php">Max Mustermann</a></h2>		
								           
									<div class="info">
										<p>
											Event Rating:<br />
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star"></i>
											<i class="fa fa-star-o"></i>
										</p>
									</div>
								</header>	
							</div>
	
                        </div>
                        <div class="col-lg-8 right separator">
                            <div class="sky-tabs sky-tabs-amount-4 sky-tabs-pos-top-justify sky-tabs-anim-flip sky-tabs-response-to-icons">
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
										<header class="col-lg-12 col-sm-12">
											<div class="col-lg-4 col-sm-4 separator">
												<div class="avatar">
													<img alt="" src="images/user.png">
												</div>
											</div>
											<div class="separator">
												<h2>Max Mustermann</h2>
											
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
											</div>	</div>										
										</header>										
                                        <div class="typography">
                                            <p>Serbian-American inventor, electrical engineer, mechanical engineer, physicist, and futurist best known for his contributions to the design of the modern alternating current (AC) electrical supply system.</p>
                                            <p>Tesla started working in the telephony and electrical fields before emigrating to the United States in 1884 to work for Thomas Edison. He soon struck out on his own with financial backers, setting up laboratories/companies to develop a range of electrical devices. His patented AC induction motor and transformer were licensed by George Westinghouse, who also hired Tesla as a consultant to help develop an alternating current system. Tesla is also known for his high-voltage, high-frequency power experiments in New York and Colorado Springs which included patented devices and theoretical work used in the invention of radio communication, for his X-ray experiments, and for his ill-fated attempt at intercontinental wireless transmission in his unfinished Wardenclyffe Tower project.</p>

                                            <p class="text-right"><em>Find out more about Nikola Tesla from <a target="_blank" href="http://en.wikipedia.org/wiki/Nikola_Tesla">Wikipedia</a>.</em></p>
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
                                            <h1>The video</h1>
                                            <iframe width="100%" height="400px" src="https://www.youtube.com/embed/TanrtaD_c24" frameborder="0" allowfullscreen></iframe>
                                        </div>
                                    </li>					
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
            </fieldset>
	        </div>		
	        </div>	

</section>	




			</div>

		</div>			
	</div>

</section>