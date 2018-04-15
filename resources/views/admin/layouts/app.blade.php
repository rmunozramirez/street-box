<!DOCTYPE html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>StreetBox - @yield('title') </title>

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <!-- Styles -->
    <link rel="stylesheet" href="{!! asset('css/admin/animate.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/admin/bootstrap.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/admin/style.css') !!}" />
    <link rel="stylesheet" href="{!! asset('css/admin/font-awesome/css/font-awesome.css') !!}" />

    <!--[if lt IE 10]>
      <script defer src="{{ asset('js/jquery.placeholder.min.js') }}"></script>
    <![endif]-->    
    <!--[if lt IE 9]>
      <script defer src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
      <script src="{{ asset('js/sky-forms-ie8.js') }}"></script>
    <![endif]-->

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
