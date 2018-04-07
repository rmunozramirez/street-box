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

        toastr.options = {
          "closeButton": false,
          "debug": false,
          "newestOnTop": false,
          "progressBar": true,
          "positionClass": "toast-top-center",
          "preventDuplicates": true,
          "onclick": null,
          "showDuration": "300",
          "hideDuration": "1000",
          "timeOut": "5000",
          "extendedTimeOut": "1000",
          "showEasing": "swing",
          "hideEasing": "linear",
          "showMethod": "fadeIn",
          "hideMethod": "fadeOut"
        }

        @if(Session::has('info'))

        toastr.info("{{Session::get('info')}}")

        @endif

        @if(Session::has('error'))

        toastr.error("{{Session::get('error')}}")

        @endif

        @if(Session::has('success'))

        toastr.success("{{Session::get('success')}}")

        @endif
    </script>
    <script>
      $(document).ready(function() {
            $('.select2-multi').select2();
        });
    </script>
</body>
</html>
