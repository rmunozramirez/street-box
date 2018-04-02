@extends('layouts.app')
@section ('title', "| Create a new Post")
@section('content')


<section id="inner-page" class="header">		
<!-- Navigation Section -->
    @include('partials._navigation')

</section>

<section id="content">
    <div class="container general-container">
   	
	   	<!-- Navigation -->
		
		<header class="content-header">
			<div class="row">
				<div class="col-md-8">
					<h1 class="page-title">Create a blog</span></h1>
				</div>
				<div class="col-md-4">
					<div class="the-search pull-right">					
						<form action="#">					
							<div class="right input">
								<input type="text" placeholder="Search">
								<button class="button search-user-area" type="submit">Go</button>
							</div>					
						</form>
					</div>
				</div>
			</div>

		</header>
	</div>

    <div  id="contenido"  class="container card-body left-right-shadow">	
		<div class="breadcrumb">
			hier breadcrumb
		</div>	
		<div class="row">
			
		</div>	
	
	</div>
</section>


@endsection


