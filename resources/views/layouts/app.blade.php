<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

    @include('partials._header')

<body>
    <div id="app">

        <main>
            @yield('content')

            @if($page_name != 'Home page')
        
                @include('partials._bottomsection-inner') 

             @endif

                @yield('widgets')

            @include('partials._content-footer')
        
        </main>  

        @include('partials._footer')   

    </div>

        @include('partials._scripts') 
    <script>
        //toastr

        @if(Session::has('info'))

        toastr.info("{{Session::get('info')}}")

        @endif

        @if(Session::has('success'))

        toastr.success("{{Session::get('success')}}")

        @endif
    </script>
</body>
</html>
