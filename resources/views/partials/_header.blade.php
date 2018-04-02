
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Street Box @yield('title')</title>

    <!-- Styles -->
    @include('partials._css-files')


	<!--[if lt IE 10]>
		<script defer src="{{ asset('js/jquery.placeholder.min.js') }}"></script>
	<![endif]-->		
	<!--[if lt IE 9]>
		<script defer src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<script src="{{ asset('js/sky-forms-ie8.js') }}"></script>
	<![endif]-->

</head>
