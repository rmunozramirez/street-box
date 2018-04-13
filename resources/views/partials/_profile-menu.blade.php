<ul class="nav navbar-nav visible-md visible-lg site_menu built" data-component="menu">

    <li><a href="{{route('profile.home', $user->slug)}}">Home</a></li>

    <li><a href="{{route('profile.persona', $user->slug)}}">Profile</a></li>

    <li><a href="{{route('profile.discussions.index', $user->slug)}}">Discussions</a></li>

    <li><a href="photo/">Photos</a></li>

    <li><a href="event/">Events</a></li>

    <li><a href="marketplace/">Marketplace</a></li>

    <li><a href="groups/">Groups</a></li>

    <li><a href="video/">Videos</a></li>

</ul>