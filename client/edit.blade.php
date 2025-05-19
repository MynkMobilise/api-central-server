@extends("layouts.master")

@section("content")
{{ Form::model($asset, array('route' => array('account-assets.update', $asset->id), 'method' => 'POST')) }}
<div class="modal-body">
    <div class="row">
        <div class="form-group col-md-6">
            {{ Form::label('name', __('Name'),['class'=>'form-label']) }}
            {{ Form::text('name', null, array('class' => 'form-control','required'=>'required')) }}
        </div>
        <div class="form-group col-md-6">
            {{ Form::label('amount', __('Amount'),['class'=>'form-label']) }}
            {{ Form::number('amount', null, array('class' => 'form-control','required'=>'required','step'=>'0.01')) }}
        </div>
        <div class="form-group col-md-6">
            {{ Form::label('purchase_date', __('Purchase Date'),['class'=>'form-label']) }}
            {{Form::date('purchase_date',null,array('class'=>'form-control','required'=>'required'))}}

        </div>
        <div class="form-group col-md-6">
            {{ Form::label('supported_date', __('Supported Date'),['class'=>'form-label']) }}
            {{Form::date('supported_date',null,array('class'=>'form-control','required'=>'required'))}}


        </div>
        <div class="form-group col-md-12">
            {{ Form::label('description', __('Description'),['class'=>'form-label']) }}
            {{ Form::textarea('description', null, array('class' => 'form-control','rows'=>3)) }}
        </div>
        <div class="form-group col-md-6">
            {{ Form::label('Branch', __('Branch'),['class'=>'form-label']) }}
            <select class="form-control" name="branch">
            	<option value="">Select Branch</option>
               <?php
			   	$branch = DB::SELECT("SELECT * from branch");
			   ?>
                @foreach($branch as $br)
                	<option <?php if($asset->branch==$br->id){echo "selected";}?> value="{{$br->id}}">{{$br->name}}</option>
                @endforeach
            </select>
        </div>
        <div class="form-group col-md-6">
            {{ Form::label('Category', __('Category'),['class'=>'form-label']) }}
            <select class="form-control" name="cat">
            	<option value="">Select Category</option>
                <option <?php if($asset->category=='Computer'){echo "selected";}?> value="Computer">Computer</option>
                <option <?php if($asset->category=='Furniture'){echo "selected";}?> value="Furniture">Furniture</option>
                <option <?php if($asset->category=='Land'){echo "selected";}?> value="Land">Land</option>
            </select>
        </div>
        <div class="form-group col-md-12">
            {{ Form::label('status', __('Status'),['class'=>'form-label']) }}
            <select class="form-control" name="status">
            	<option <?php if($asset->status=='1'){echo "selected";}?> value="1">Active</option>
                <option <?php if($asset->status=='0'){echo "selected";}?> value="0">DeActivate</option>
            </select>
        </div>

    </div>
</div>
<div class="modal-footer">
    <input type="button" value="{{__('Cancel')}}" class="btn  btn-light" data-bs-dismiss="modal">
    <input type="submit" value="{{__('Update')}}" class="btn  btn-primary">
</div>
{{ Form::close() }}
@endsection

@push("super-script")
<script type="text/javascript" src="{{ URL::asset('assets/extra-libs/multicheck/datatable-checkbox-init.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('assets/extra-libs/multicheck/jquery.multicheck.js') }}"></script>
<script type="text/javascript" src="{{ URL::asset('assets/extra-libs/DataTables/datatables.min.js') }}"></script>
<script src="https://cdn.rawgit.com/rainabba/jquery-table2excel/1.1.0/dist/jquery.table2excel.min.js"></script>

@endpush

@push("sub-script")
<script>
     /****************************************
     *       Basic Table                   *
     ****************************************/
     $('#zero_config').DataTable();
     </script>
     <script>
        $(document).ready(function () {
	        $('#export').click(function(){
	            $(".custTable").table2excel({
	                filename: "OutstandingAmountReport.xls"
	            });
	        })
         
      });

 </script>
 @endpush