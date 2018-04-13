<ul class="nav navbar-nav visible-md visible-lg site_menu built" data-component="menu">

    <li><a href="{{ url('profile/'. $user->slug ) }}">Home</a></li>

    <li><a href="{{ url('profile/'. $user->slug . '/persona' ) }}">Profile</a></li>

    <li><a href="{{ url('profile/'. $user->slug . '/discussions' ) }}">Discussions</a></li>

    <li><a href="photo/">Photos</a></li>

    <li><a href="event/">Events</a></li>

    <li><a href="marketplace/">Marketplace</a></li>

    <li><a href="groups/">Groups</a></li>

    <li><a href="video/">Videos</a></li>

</ul>