      	<div class="resume card d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pb-2 mb-3 border-bottom">

	         <div class="inside">
	            <div class="flex-center">
	               <ul class="nav nav-tabs row" id="myTab" role="tablist">
	                  <li class="nav-item col-lg-2 col-md-6">
	                     <a class="nav-link active text-center" href="#films" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                   <i class="fa fa-play-circle fa-2x" aria-hidden="true"></i>
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_chanels)}} @if(count($all_chanels) > 1) chanels @else chanel @endif
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
	                  <li class="nav-item col-lg-2 col-md-6">
	                     <a class="nav-link text-center" href="#actors" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    @if(count($all_subcategories) > 1)
	                                    <i class="fa fa-users fa-2x"></i> @else
	                                    <i class="fa fa-user fa-2x"></i> @endif
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_subcategories)}} @if(count($all_subcategories) > 1) subcategories @else subcategory @endif
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
	                  <li class="nav-item col-lg-2 col-md-6">
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
	                                       {{count($all_categories)}} @if(count($all_categories) > 1) categories @else category @endif
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
	                  <li class="nav-item col-lg-2 col-md-6">
	                     <a class="nav-link text-center" href="#languages" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    <i class="fa fa-language fa-2x"></i>
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_posts)}} @if(count($all_posts) > 1) posts @else post @endif
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
	                  <li class="nav-item col-lg-2 col-md-6">
	                     <a class="nav-link text-center" href="#categories" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    @if(count($all_postcategories) > 1)
	                                    <i class="fa fa-tags fa-2x"></i> @else
	                                    <i class="fa fa-tag fa-2x"></i> @endif
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_postcategories)}} @if(count($all_postcategories) > 1) Blog categories @else Blog category @endif
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
	                  <li class="nav-item col-lg-2 col-md-6">
	                     <a class="nav-link text-center" href="#languages" data-toggle="tab">
	                        <div class="card bg-light">
	                           <div class="card-header">
	                              <div class="row">
	                                 <div class="col-md-12 text-center py-1">
	                                    <i class="fa fa-language fa-2x"></i>
	                                 </div>
	                                 <div class="col-md-12 text-center py-1">
	                                    <h4>
	                                       {{count($all_posttags)}} @if(count($all_posttags) > 1) Post tags @else Tag @endif
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
        </div>
	      
		   