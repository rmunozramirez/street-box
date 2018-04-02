<div class="col-md-4">

    <aside class="widget widget_categories" id="categories-3">
        <h3 class="widget-title">Categorías </h3>
            <div><a href="{{ url('categories/' }}">All Categories</a></div>
            @foreach ($categories as $category)
            <div><a href="{{ url('categories/'.$category->id) }}">{{ $category->title }}</a></div>
            @endforeach
    </aside>
</div>