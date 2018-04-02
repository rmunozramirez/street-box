@extends('layouts.app')
@section ('title',  "| $page_name")

@section('content')

    <section id="landing-page">       
        <!-- Navigation Section -->
        @include('partials._navigation')

        <!-- Upper section -->
        @include('partials._uppersection')  
        
        <!-- Featured home section -->
        @include('partials._featured')

    </section>
    
@endsection

@section('widgets')

    <!-- Featured home section -->
    @include('home.index')

    <!-- Bottom section -->


@endsection

 


