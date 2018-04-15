<div class="general-container">
	<!-- Navigation -->
	<div class="row">
		<div class="col-md-6">
			<h2 class="page-title"><i class="fa fa-tachometer-alt"></i> {{$page_name}}</h2>
		</div>
			<div class="col-md-6">
				<div class="pull-right">					
				  <nav class="" role="navigation">
                        <!-- Brand and toggle get grouped for better mobile display -->

                        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <!-- mega menu -->
                            <ul class="sky-mega-menu menu-admin-top">
                                <li class="nav-item dropdown">
                                    <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                        {{ Auth::user()->name }} 
                                    </a>
                                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                           onclick="event.preventDefault();
                                                         document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                            @csrf
                                        </form>
                                    </div>
                                </li>

                            </ul>
                    
                        </div>
            <!-- /.navbar-collapse -->
            </nav>
					</div>
				</div>
			</div>

	</div>