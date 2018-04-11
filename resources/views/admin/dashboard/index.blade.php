@extends('admin.layouts.app')

@section('title', 'Main page')

@section('content')
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row">
            <div class="col-lg-12">
                <div class="row wrapper border-bottom white-bg page-heading">
                    <div class="col-lg-9">
                        <h2>Admin Dashboard</h2>
                        <ol class="breadcrumb">
                            <li class="active">
                                <a href="index.html">Home</a>
                            </li>

                        </ol>
                    </div>

                    <table class="table">
                        <tbody>
                        <tr>
                            <td>
                                <button type="button" class="btn btn-danger m-r-sm">{{count($all_chanels)}}</button>
                                @if(count($all_chanels) > 1) Channels @else Channel @endif
                            </td>
                            <td>
                                <button type="button" class="btn btn-primary m-r-sm">{{count($all_subcategories)}}</button>
                                @if(count($all_subcategories) > 1) Subcategories @else Subcategory @endif
                            </td>
                            <td>
                                <button type="button" class="btn btn-info m-r-sm">{{count($all_categories)}}</button>
                                @if(count($all_categories) > 1) Categories @else Category @endif
                            </td>
                            <td>
                                <button type="button" class="btn btn-info m-r-sm">{{count($all_posts)}}</button>
                                @if(count($all_posts) > 1) Posts @else Post @endif
                            </td>
                            <td>
                                <button type="button" class="btn btn-success m-r-sm">{{count($all_postcategories)}}</button>
                                @if(count($all_postcategories) > 1) Blog Categories @else Blog Category @endif
                            </td>
                            <td>
                                <button type="button" class="btn btn-danger m-r-sm">23</button>
                                Comments
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </div>                        
            </div>
        </div>

        
    </div>
@endsection
