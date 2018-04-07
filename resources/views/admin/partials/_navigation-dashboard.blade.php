       <nav class="col-md-2 d-none d-md-block bg-light sidebar">
          <div class="sidebar-sticky">

<ul class="navbar-nav navbar-sidenav" id="exampleAccordion">
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Dashboard">
          <a class="nav-link" href="{{ route('dashboard') }}">
            <i class="fa fa-tachometer-alt"></i>
            <span class="nav-link-text">Dashboard</span>
          </a>
        </li>
    
        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Charts">
          <a class="nav-link" href="{{ route('users.index') }}">
            <i class="fas fa-users"></i>
            <span class="nav-link-text">Users</span>
          </a>
        </li>

        <li class="nav-item" data-toggle="tooltip" data-placement="right" title="" data-original-title="Chanels">
          <a class="nav-link nav-link-collapse collapsed" data-toggle="collapse" href="#collapseComponents" data-parent="#exampleAccordion">
            <i class="fa fa-fw fa-wrench"></i>
            <span class="nav-link-text">Chanels</span>
          </a>
          <ul class="sidenav-second-level collapse" id="collapseComponents">
            <li>
              <a href="navbar.html">Subcategories</a>
            </li>
            <li>
              <a href="cards.html">Categories</a>
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
        </nav>