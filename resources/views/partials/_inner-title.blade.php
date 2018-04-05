    <div class="container general-container top-100">
   	
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
					            	<i class="fa fa-tag"></i> Categories: <a href="{{route('categories.index')}}">{{count($all_categories)}}</a>
					            	<i class="fa fa-tags"></i> Subcategories: <a href="{{route('subcategories.index')}}">{{count($all_subcategories)}}</a>
					            	<i class="far fa-newspaper"></i> Chanels: <a href="{{route('chanels.index')}}">{{count($all_chanels)}}</a>
					            </div>
					       
							</div>					
						</form>
					</div>
				</div>
			</div>

		</header>
	</div>