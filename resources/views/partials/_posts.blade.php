<div class="col-md-8">
    <div class="all-blogs">
        <ul class="nav nav-tabs">
            <li role="presentation" class="active half"><a href="/posts">Posts</a></li>
            <li role="presentation" class="half"><a href="/posts/create">Create a Post</a></li> 
        </ul>
        @foreach ($posts as $post)

                <a href="#" class="pull-left separator">
                    <img width="200" alt="..." src="{{asset('images/bmw.jpg')}}" class="image-responsive">
                </a>
 
            <div class="media-body">
                <h4 class="media-heading"><a href="{{ url('posts/'.$post->id) }}">{{ $post->title }}</a></h4>
                <p class="author small">{{ date('M j, Y', strtotime($post->created_at)) }}</p>
                <p>{{ substr(strip_tags($post->body), 0, 200) }}{{ strlen(strip_tags($post->body)) > 150 ? "..." : "" }}</p>

            
            <a href="{{ url('posts/'.$post->id) }}" class="italic pull-right">Read more: {{$post->title}}</a> 
            </div> 
        <hr>
        @endforeach            
    </div>

  
  <div class="text-center">
      {!! $posts->links(); !!} 

  </div>
</div>