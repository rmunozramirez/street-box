    <div class="container general-container">
   	
	   	<!-- Navigation -->
		
		<header class="content-header">
			<div class="row">
				<div class="col-md-6">
					<h1 class="page-title">{{$page_name}}</h1>
				</div>
				<div class="col-md-6">
					<div class="the-search pull-right">					
						<form action="#">					
							<div class="right input">
					            <div class="meta pull-right">
					            	@if($page_name == 'Blog Categories')<i class="fa fa-tags"></i> Categories: <a href="{{route('postcategories.index')}}">{{count($postcategories)}}</a>@endif
		            				<i class="far fa-newspaper"></i> Posts: {{count($all_posts)}}
					            </div>
					       
							</div>					
						</form>
					</div>
				</div>
			</div>

		</header>
	</div>