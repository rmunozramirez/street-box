<nav class="col-md-2 d-none d-md-block bg-light sidebar">
  <div class="navbar-default sidebar">
    <div class="sidebar-nav navbar-collapse">

      <ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
          <li class="sidebar-search">
            <div class="input-group custom-search-form">
                <input type="text" class="form-control" placeholder="Search...">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button">
                            <i class="fa fa-search"></i>
                        </button>
                    </span>
            </div>
            <!-- /input-group -->
        </li>
          <li>
            <a class="nav-link" href="{{ route('dashboard') }}">
              <i class="fa fa-tachometer-alt"></i>
              <span class="nav-link-text">Dashboard</span>
            </a>
          </li>
      
          <li>
            <a class="nav-link" href="{{ route('users.index') }}">
              <i class="fas fa-users"></i>Users
            </a>
          </li>

          <li>
            <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
              <i class="fa fa-fw fa-wrench"></i>Chanels
              <span class="fa arrow"></span></a>
            <ul class="sidenav-second-level collapse" id="collapseComponents">
              <li>
                <a href="{{ route('admin-chanels.index') }}">Chanels</a>
              </li>
              <li>
                <a href="{{ route('admin-subcategories.index') }}">Subcategories</a>
              </li>
              <li>
                <a href="{{ route('admin-categories.index') }}">Categories</a>
              </li>
            </ul>
          </li>
      
          <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Example Pages">
            <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseExamplePages" data-parent="#exampleAccordion">
              <i class="fa fa-fw fa-file"></i>
              <span class="nav-link-text">Blog</span>
            </a>
            <ul class="sidenav-second-level collapse" id="collapseExamplePages">
              <li>
                <a href="{{ route('posts.index') }}">Posts</a>
              </li>
              <li>
                <a href="{{ route('postcategories.index') }}">Post Categories</a>
              </li>
              <li>
                <a href="{{ route('posttags.index') }}">Post Tags</a>
              </li>
              <li>
                <a href="blank.html">Pages</a>
              </li>
            </ul>
          </li>

      </ul>

              
    </div>
  </div>
</nav>

