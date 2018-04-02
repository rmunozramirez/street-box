<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">

    @include('partials._header')

<body>
    <div id="app">

        <main>
            @yield('content')


                @yield('widgets')

        
        </main>  


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
