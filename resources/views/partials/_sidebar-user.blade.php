<div class="sidebar">
    <div class="well">

    <h4>Hello {{ Auth::user() }}</h4>
                            <hr />
            @if (Auth::check())
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <div><a href="{{ route('posts.index') }}">Posts</a></div>
                <div><a href="{{ route('categories.index') }}">Categories</a></div>
                                <div><a href="{{ route('tags.index') }}">Tags</a></div>
                <div role="separator" class="divider"></div>
                <div>
                    <a href="{{ url('/logout') }}"
                        onclick="event.preventDefault();
                                 document.getElementById('logout-form').submit();">
                        Logout
                    </a>

                    <form id="logout-form" action="{{ url('/logout') }}" method="POST" style="display: none;">
                        {{ csrf_field() }}
                    </form>
                </div>

            </div>
                    @else
                        <li class="right"><a href="{{ url('/login') }}" class="right">Login</a></li>          
                    @endif
        </div>       
</div>