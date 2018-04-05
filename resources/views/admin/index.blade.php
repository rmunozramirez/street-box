@extends('layouts.admin')
@section ('title', "| All Chanels")
@section('content')

<section id="content">

	@include ('admin.partials._inner-title')

<div class="container-fluid">
      <div class="row">
        <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">
            <ul class="nav flex-column">
              <li class="nav-item">
                <a class="nav-link active" href="{{ route('admin.index') }}">
                  <i class="fa fa-tachometer-alt"></i> 
                  Dashboard <span class="sr-only">(current)</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="{{ route('admin.index') }}">
                  <i class="fas fa-users"></i>
                  Users
                </a>
              </li>
               <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
			          Chanels
			        </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			          <a class="dropdown-item" href="#">Categories</a>
			          <a class="dropdown-item" href="#">Subcategories</a>
			          <a class="dropdown-item" href="#">Chanels</a>
			        </div>
			      </li>

              <li class="nav-item dropdown">
			        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="fas fa-newspaper"></i>
                  Posts
                </a>
			        <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
			          <a class="dropdown-item" href="#">Blog Categories</a>
			          <a class="dropdown-item" href="#">Posts</a>
			        </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  <i class="fas fa-images"></i>
                  Images
                </a>
              </li>

            </ul>

            
          </div>
        </nav>

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 pt-3 px-4"><div style="position: absolute; left: 0px; top: 0px; right: 0px; bottom: 0px; overflow: hidden; pointer-events: none; visibility: hidden; z-index: -1;" class="chartjs-size-monitor"><div class="chartjs-size-monitor-expand" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:1000000px;height:1000000px;left:0;top:0"></div></div><div class="chartjs-size-monitor-shrink" style="position:absolute;left:0;top:0;right:0;bottom:0;overflow:hidden;pointer-events:none;visibility:hidden;z-index:-1;"><div style="position:absolute;width:200%;height:200%;left:0; top:0"></div></div></div>
          <div class="resume d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">

	         <div class="inside">
	            <div class="flex-center">
	               <ul class="nav nav-tabs row" id="myTab" role="tablist">
	                  <li class="nav-item col-lg-3 col-md-6">
	                     <a class="nav-link active text-center" href="#films" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    <i class="fa fa-film fa-2x"></i>
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_chanels)}}  <br /> @if(count($all_chanels) > 1) films @else film @endif
	                                    </h4>
	                                 </div>
	                              </div>
	                           </div>
	                           <div class="card-footer">
	                              <span class="pull-left">View Details</span>
	                              <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
	                              <div class="clearfix"></div>
	                           </div>
	                        </div>
	                     </a>
	                  </li>
	                  <li class="nav-item col-lg-3 col-md-6">
	                     <a class="nav-link text-center" href="#actors" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    @if(count($all_categories) > 1)
	                                    <i class="fa fa-users fa-2x"></i> @else
	                                    <i class="fa fa-user fa-2x"></i> @endif
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_categories)}}  <br /> @if(count($all_categories) > 1) actors @else actor @endif
	                                    </h4>
	                                 </div>
	                              </div>
	                           </div>
	                           <div class="card-footer">
	                              <span class="pull-left">View Details</span>
	                              <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
	                           <div class="clearfix"></div>
	                        </div>
	                        </div>
	                     </a>
	                  </li>
	                  <li class="nav-item col-lg-3 col-md-6">
	                     <a class="nav-link text-center" href="#categories" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    @if(count($all_categories) > 1)
	                                    <i class="fa fa-tags fa-2x"></i> @else
	                                    <i class="fa fa-tag fa-2x"></i> @endif
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_categories)}}  <br /> @if(count($all_categories) > 1) categories @else category @endif
	                                    </h4>
	                                 </div>
	                              </div>
	                           </div>
	                           <div class="card-footer">                          
	                              <span class="pull-left">View Details</span>
	                              <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
	                              <div class="clearfix"></div>
	                           </div>
	                        </div>
	                     </a>
	                  </li>
	                  <li class="nav-item col-lg-3 col-md-6">
	                     <a class="nav-link text-center" href="#languages" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    <i class="fa fa-language fa-2x"></i>
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_categories)}} <br /> @if(count($all_categories) > 1) languages @else language @endif
	                                    </h4>
	                                 </div>
	                              </div>
	                           </div>
	                           <div class="card-footer">              
	                              <span class="pull-left">View Details</span>
	                              <span class="pull-right"><i class="fa fa-arrow-circle-right"></i></span>
	                              <div class="clearfix"></div>
	                           </div>
	                        </div>
	                     </a>
	                  </li>
	               </ul>
	            </div>
	      
		   

          </div>


        </main>
      </div>
    </div>





</section>

@endsection


