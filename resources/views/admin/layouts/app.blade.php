<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>StreetBox - @yield('title') </title>


    <link rel="stylesheet" href="{!! asset('css/admin/animate.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/admin/bootstrap.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/admin/style.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/admin/font-awesome/css/font-awesome.css') !!}" />

</head>
<body>

  <!-- Wrapper-->
    <div id="wrapper">

        <!-- Navigation -->
        @include('admin.layouts.navigation')

        <!-- Page wraper -->
        <div id="page-wrapper" class="gray-bg">

            <!-- Page wrapper -->
            @include('admin.layouts.topnavbar')

            <!-- Main view  -->
            @yield('content')

            <!-- Footer -->
            @include('admin.layouts.footer')

        </div>
        <!-- End page wrapper-->

    </div>
    <!-- End wrapper-->

<script src="{!! asset('js/admin/jquery-2.1.1.js') !!}" type="text/javascript"></script>
<script src="{!! asset('js/admin/bootstrap.js') !!}" type="text/javascript"></script>
<script src="{!! asset('js/admin/inspinia.js') !!}" type="text/javascript"></script>
<script src="{!! asset('js/admin/app.js') !!}" type="text/javascript"></script>

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
@section('scripts')
@show

</body>
</html>
