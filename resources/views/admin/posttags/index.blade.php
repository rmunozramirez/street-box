@extends('admin.layouts.app')
@section ('title', "| $page_name")
@section('content')

<section id="content">
    <div class="wrapper wrapper-content animated fadeInRight">
        <div class="row wrapper border-bottom white-bg">
			<div class="inside">
                <h2>{!! $page_name !!} <span class="mt-3 small pull-right">Total Chanels: {{count($all_posttags)}}</span> </h2>
                <ol class="breadcrumb">
                    <li>
                        <a href="{{route('dashboard')}}"> Dashboard</a>
                    </li>
                    <li class="active">
                        <i class="fas fa-pencil-alt"></i> All {!! $page_name !!}s
                    </li>
                    <span class="pull-right">
                    	<i class="fas fa-pencil-alt"></i> <a href="{{route('posttags.create')}}">Create a new Tag</a>
                    </span>
                </ol>
                <hr>
				<div class="row">
						@if(count($posttags) > 0)
								<table class="table table-striped table-hover">
							         <thead>
							            <tr>
							                <th>Tag</th>
							                <th>Posts</th>
							                <th>Date</th>
							            </tr>
							         </thead>
							         <tbody>
							         	@foreach ($posttags as $posttag)
							            <tr>
							               <td><a href="{{route('posttags.show', $posttag->slug)}}">{{$posttag->name}}</a></td>
							               <td></td>
							               <td>{{$posttag->created_at}}</td>
							               <td>
							               		<a type="button" class="col-md-6 btn btn-secondary" href="{{route('posttags.edit', $posttag->slug)}}">Edit</a>
								            	<div class="col-md-6">
									            	{!! Form::open(['route' => ['posttags.destroy', $posttag->slug], 'method' => 'DELETE']) !!}

													{!! Form::submit('Delete', ['class' => 'btn btn-block btn-danger']) !!}

													{!! Form::close() !!}
												</div>
							               </td>
							            </tr>
							            @endforeach
							         </tbody>
							      </table>
						@else
							<div class="col-md-12"><h3>No {!! $page_name !!}</h3></div>
						@endif
				</div>	
				<div class="text-center">
			        {{ $posttags->links() }}
			    </div>
		    </div>
	    </div>
	</div>
</section>

	
@endsection


