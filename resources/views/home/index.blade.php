<section class="categories py-5">
	<header>
	<div class="container featured-home">
		<h2 class="text-center">Browse our Concerts</h2>
		<!-- div class="pull-right mb-3">{!! Html::linkRoute('categories.index', 'See all Categories') !!}</div -->
							    <div class="meta pull-right">
					            	<i class="fa fa-tag"></i> Categories: <a href="{{route('categories.index')}}">{{count($all_categories)}}</a>
					            	<i class="fa fa-tags"></i> Subcategories: <a href="{{route('subcategories.index')}}">{{count($all_subcategories)}}</a>
					            	<i class="far fa-newspaper"></i> Chanels: <a href="{{route('chanels.index')}}">{{count($all_chanels)}}</a>
					            </div>
					       
	</div>
	</header>


	<div class="container">
		<div class="row">
			 @for ($i = 0; $i <= 3; $i++)
			<div class="col-lg-3 col-md-4">	
				<div class="card hovercard">
					<img class="cardheader" src="{{URL::to('/images/' . $home_categories[$i]->image)}}">
						<h3><a href="{{ url('categories/'.$home_categories[$i]->slug) }}">{{ $home_categories[$i]->title }}</a></h3>
					<div class="card-body">					
						<h5 class="subcat">
						{{count($home_categories[$i]->subcategories)}} subcategories
						</h5>					   
						<p>
							Event Rating:<br />
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star"></i>
							<i class="fa fa-star-o"></i>
							(14)
						</p>	
						<hr>

						<a href="{{ url('blogs/'.$home_categories[$i]->slug) }}">View</a>

						| Edit | <a href="event.php">Delete</a>
					</div>
				</div>
				
			</div>
			@endfor
		</div>	
	</div>
	
	<div class="container py-5">
		<div class="col-md-4">
			<h2>Pleasure trip</h2>
			<p>More than 16 million active travellers use Skapada. The world was never so small. Wether you want to experience that place in the other side of the globe or asist to a conference in other continent. Skapada make it possible.</p>
			<a href="page.php">Learn more</a>
		</div>
		<div class="col-md-4">
			<h2>Your Oportunity</h2>
			<p>Do you have a garage Band? Reach more than 70 million potential customers worldwide. Win their attentio and make money selling live concerts online. Skapada is the most popular method of making your business known.</p>
			<a href="page.php">Learn more</a>
		</div>
		<div class="col-md-4">
			<h2>Need for knowledge</h2>
			<p>Are you studying chinese ceramic but you live in Argentina. No problem, visit museums thousands of miles away, listen the explanatioon directly from local experts and impress with a nice presentation at the University.</p>
			<a href="page.php">Learn more</a>
		</div>
	</div>
</section>	
<section class="green mb-5 py-5">	

	<div class="container py-5">
		<h2 class="text-center">Meet some real histories</h2>
		<h3 class="text-center">These guys literally rocks!</h3>

		<div class="col-lg-12 mb-5 pb-5">
		<div class="col-md-3 col-xs-6 col-sm-3">
				<a href="#"><img class="img-responsive" src="images/team-1.jpg" alt="team-memeber-img">
				</a>
			<div class="social">
				<div class="text-center title">
					<h3>Peter Parker</h3>
					<h4>CEO</h4>
				</div>
				<div class="text-center">
					<div class="col-md-2 col-md-offset-2 col-xs-3 col-sm-3 facebook"><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 googleplus"><a href="#" title="Google+"><i class="fab fa-google-plus-g"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 twitter"><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 linkedin"><a href="#" title="YouTube"><i class="fab fa-linkedin-in"></i></a></div><a href="#" title="YouTube">
					</a>
				</div>
			</div>
		</div>
		<div class="col-md-3 col-xs-6 col-sm-3">
				<a href="#"><img class="img-responsive" src="images/team-2.jpg" alt="team-memeber-img">
				</a>
			<div class="social">
				<div class="text-center title">
					<h3>Alan Stevens</h3>
					<h4>Sales Director</h4>
				</div>
				<div class="text-center">
					<div class="col-md-2 col-md-offset-2 col-xs-3 col-sm-3 facebook"><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 googleplus"><a href="#" title="Google+"><i class="fab fa-google-plus-g"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 twitter"><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 linkedin"><a href="#" title="YouTube"><i class="fab fa-linkedin-in"></i></a></div><a href="#" title="YouTube">
					</a>
				</div>
			</div>
		</div>
		<div class="col-md-3 col-xs-6 col-sm-3">
				<a href="#"><img class="img-responsive" src="images/team-3.jpg" alt="team-memeber-img">
				</a>
			<div class="social">
				<div class="text-center title">
					<h3>Cindy Lawrence</h3>
					<h4>Creative Director</h4>
				</div>
				<div class="text-center">
					<div class="col-md-2 col-md-offset-2 col-xs-3 col-sm-3 facebook"><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 googleplus"><a href="#" title="Google+"><i class="fab fa-google-plus-g"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 twitter"><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 linkedin"><a href="#" title="YouTube"><i class="fab fa-linkedin-in"></i></a></div><a href="#" title="YouTube">
					</a>
				</div>
			</div>
		</div>
		<div class="col-md-3 col-xs-6 col-sm-3">
				<a href="#"><img class="img-responsive" src="images/team-4.jpg" alt="team-memeber-img">
				</a>
			<div class="social">
				<div class="text-center title">
					<h3>Malanga junior</h3>
					<h4>HR department</h4>
				</div>
				<div class="text-center">
					<div class="col-md-2 col-md-offset-2 col-xs-3 col-sm-3 facebook"><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 googleplus"><a href="#" title="Google+"><i class="fab fa-google-plus-g"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 twitter"><a href="#" title="Twitter"><i class="fab fa-twitter"></i></a></div>
					<div class="col-md-2 col-xs-3 col-sm-3 linkedin"><a href="#" title="YouTube"><i class="fab fa-linkedin-in"></i></a></div><a href="#" title="YouTube">
					</a>
				</div>
			</div>
		</div>
	</div>
	</div>
</section>	
<section class="device">
	<div class="container">
		<div class="img-iphone col-xs-4 col-md-2 img-responsive">
			<img src="images/iphone.png">
		</div>
		<div class="col-xs-1 col-md-2"></div>
		<div class="col-xs-7 col-md-8">
			<div class="branding">
				<h2>Download our free App</h2>    
			</div>
			<div class="widget">
				<h3>Skapada free app features the latest travels and key events.</h3>
				<p>Get all your favourite Events via our free apps for iPhone, iPad and Android phones and tablets.</p>
			</div>
			<div class="col-md-4 separator"><a href="#"><img alt="" class="img-responsive" src="images/appstore_btn.png"></a></div>
		
			<div class="col-md-4 separator"><a href="#"><img alt="" class="img-responsive" src="images/googleplay_btn.png"></a></div>
		</div>
	</div>
</section>



