
<?php if($page_name == 'Home page') : ?>
<section class="blue py-5 top-100">	

	<div class="container">		
	     <div class="step container sky-form pb-5 pt-5">
			<div class="col col-sm-6 col-md-3 margin-50">
				<header class="center-text"><span class="fa fa-heart"></span><br>		
				Popular destinations</header>
				<p>Plan and book your perfect online trip with Skapada. More than 200 million views, comments and photos of destinations, businesses attractions and more. Not surprisingly, people consult Skapada before booking for real.</p>
				<a href="page.php">Learn more</a>

			</div>
			<div  class="col col-sm-6 col-md-3 margin-50">
				<header class="center-text"><span class="fa fa-calendar"></span><br>
				Whenever you want</header>
				<p class="contentPara">With Skapada, you have your account wherever you feel at home. All you need to "flight away" is  to feel comfortable with your computers, smartphone or tablet and a fast internet connection.</p>
				<a href="page.php">Learn more</a>
			</div>
			<div class="clearfix visible-sm ui-hidden-mobile ui-hidden-dedicated"></div>
			<div class="col col-sm-6 col-md-3 margin-50">       
				<header class="center-text"><span class="fa fa-globe"></span><br>
				Around the world</header>
				<p class="contentPara">Travel wherever you want as long as you want. Skapada's world has no borders. Is not sunny and you have not holidays? No problem, we bringt you today to the Caribbean and tomorrow you will be at the office.</p>
				<a href="page.php">Learn more</a>

			</div>
			<div class="col col-sm-6 col-md-3 margin-50">

				<form enctype="multipart/form-data" method="post" action="demo-order-process.php" novalidate="novalidate">
				<header class="center-text"><i class="far fa-newspaper"></i><br>
				Newsletter</header>				
					<fieldset>					
						<div class="row">
							<label class="input">
								<i class="icon-append fa fa-user"></i>
								<input type="text" placeholder="Name" name="name">
							</label>
							<div class="row">
							</div>					
							<label class="input">
								<i class="icon-append far fa-envelope-open"></i>
								<input type="email" placeholder="E-mail" name="email">
							</label>
						</div>
					</fieldset>
					<footer>
						<button class="button" type="submit">Send request</button>
					</footer>				
				</form>
			</div>
		</div>
	</div>

<?php else : ?>

<section class="blue py-5">	

<?php endif ?>

	<div class="container pb-5 text-center py-5">		
	    <div class="row">			
			<div class="col-md-12 col-sm-12 col-lg-12 sky-form">
				<div class="container center-text panel-header">
					<h2>Safe and relaxed travel</h2>
				</div>
			</div>

			<div class="col-md-12 col-sm-12 col-lg-12 sky-form tagline">
				<h3 class="separator">Otros destinos populares</h3>
				<p>Destinos de viajes en todo el mundo donde nuestros viajeros disfrutan</p>
			
				<a href="">Albufeira</a> | <a href="">Algarve</a> | <a href="">Benidorm</a> | <a href="">Budapest</a> | <a href="">Casablanca</a> | <a href="">Cerdeña</a> | <a href="">Costa Blanca</a> | <a href="/">Puerto de la Cruz</a> | <a href="">Salou</a> | <a href="">Torremolinos</a>
			  </div>
		  <div class="col-sm-12 col-lg-4 col-lg-offset-4 row-space-top-4 hide-sm">
			<a href="">See All Destinations</a>
			</div>
		</div>
    </div>



</section>