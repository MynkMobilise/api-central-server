<?php
namespace App\Http\Controllers;
use App\Http\Controllers\CurrencyController;
$currecnyController=new CurrencyController();
$currency = $currecnyController->getCurrency();
use Auth;
use DB;
?>
@extends('layouts.master')

@section("content")
    <div class="page-breadcrumb">
        <div class="row">
            <div class="col-12 d-flex no-block align-items-center">
                <h4 class="page-title">Activity</h4>
                <div class="ml-auto text-right">
                    <nav aria-label="breadcrumb">
                        <ol class="breadcrumb">
                            <li class="breadcrumb-item"><a href="#">Home</a></li>
                            <li class="breadcrumb-item active" aria-current="page">Daily Transaction</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid">
        <!-- ============================================================== -->
        <!-- Sales Cards  -->
        <!-- ============================================================== -->
        <div class="card">
            <form action="{{url('/api/saveOther')}}" method="post">  
            @csrf
            <div class="card-body">
                <div class="row">
                    
                   <!-- Roster Data Send with Transcation -->
               <div class="col-md-12">
                        <div class="form-group">
                           <input type="hidden" name="user_name" class="form-control" value="{{Auth::user()->name}}">
                           <input type="hidden" name="branch_name" class="form-control" value="{{Auth::user()->branch}}">
                            <input type="hidden" name="shift_name" class="form-control" value="{{Auth::user()->shift}}">
                            <input type="hidden" name="counter_name" class="form-control" value="{{Auth::user()->counter}}">
                        	
                        </div>
                        </div>
                  
                    
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="required">Transaction Date</label>
                            <input type="date" name="transdate" class="form-field" required>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="required">Transaction Type</label>
                            <select name="transactiontype" class="form-field" required>
                                <option>Bank Charges</option>
								<option>Bank Loan</option>
								<option>Court fees</option>
								<option>Courier</option>
								<option>Electricity</option>
								<option>Fuel</option>
								<option>Lawyer service fees</option>
								<option>Marketing</option>
								<option>Rental</option>
								<option>Sundry Expenses</option>
								<option>Stationery</option>
								<option>Secretarial fees</option>
								<option>Salaries</option>
								<option>Sheriff Charges</option>
								<option>Tracing fees</option>
								<option>Transport</option>
								<option>Water</option>
								<option>Others</option>
								<option>Closing Balance</option>
								<option>Refund</option>
								
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="required">Cash Flow</label>
                            <select name="additionalinfo1" class="form-field" required>
                                <option>Outgoing</option>
								<option>Incoming</option>
                               
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label>Branch</label>
							<select  name="additionalinfo2" class="form-field">
                            <?php if(Auth::user()->email!='boopkonocapital@yahoo.com'){?>
                            <option value="{{auth()->user()->branch}}" selected="">{{auth()->user()->branch}}</option>
                            <?php } else {
                            $branches = DB::SELECT("SELECT * from branch");    
                            foreach($branches as $br){
                            ?>
                            <option value="{{$br->name}}" selected="">{{$br->name}}</option>
                            <?php } } ?>
							</select>
								
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Bank Account</label>
                            <input type="text" name="additionalinfo3" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>File Number</label>
                            <input type="number" name="psno" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group">
                            <label class="required">Payment Method</label>
                            <select name="paymentmethod" class="form-field" required>
                                <option>CASH</option>
								<option>EFT</option>
                               
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label class="required">Customer ID</label>
                            <select class="form-field" name="customerid" id="customer_id" required>
                                <option>--Select CustomerId</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label class="required">Bank</label>     
                            <select name="beneficialbank" class="form-field">
                           <option value="">Select Branch</option>
                            @foreach($beneficiary as $beneficial)
                                <option>{{ $beneficial->beneficiary_bank }}</option>
                             @endforeach
                            </select>
                      
                        </div>
                    </div>
					<div class="col-md-4">
                        <div class="form-group">
                            <label class="required">Currency</label>
                            <select name="currency" class="form-field"  required>
                                <option>BWP</option>
                         </select>
                        </div>
                    </div>
                    
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Customer Name</label>
                            <input type="hidden" name="customername" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Bank Account</label>
                            <select name="beneficialbankaccount" class="form-field">
                                <option>Staff</option>
                            </select>
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Witness Name</label>
                            <input type="text" name="beneficialname" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Witness Account</label>
                            <input type="text" name="beneficialaccount" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Witness Omang</label>
                            <input type="text" name="beneficialomange" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Amount</label>
                            <input type="text" name="paidamt" class="form-field">
                        </div>
                    </div>
                    
                    <div class="col-md-4" style="display:none;">
                        <div class="form-group">
                            <label>Transaction Number</label>
                            <input type="text" name="transactionnumber" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="form-group" style="display:none;">
                            <label>Witness Contact</label>
                            <input type="number" name="beneficialcontact" class="form-field">
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                            <label>Remarks</label>
                            <textarea class="form-field" name="remarks"></textarea>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                           <input type="hidden" name="created" class="form-control" value="1"> 
                        </div>
                    </div>
                    <div class="col-md-6">
                        <button type="submit" class="btn btn-info" value="Save"> <i class="fa fa-save"></i> Save</button>
                        <input type="button" class="btn btn-warning" value="Cancel">
                    </div>
                   <!-- <div class="col-md-6 text-right">
                        <a class="btn btn-success" href="">Enter Other Transaction</a>
                    </div> -->
                </div>
            </div>
            </form>
        </div>
    </div>
@endsection

@push("super-script")
    <script src="{{ asset("assets/libs/flot/excanvas.js") }}"></script>
    <script src="{{ asset("assets/libs/flot/jquery.flot.js") }}"></script>
    <script src="{{ asset("assets/libs/flot/jquery.flot.pie.js") }}"></script>
    <script src="{{ asset("assets/libs/flot/jquery.flot.time.js") }}"></script>
    <script src="{{ asset("assets/libs/flot/jquery.flot.stack.js") }}"></script>
    <script src="{{ asset("assets/libs/flot/jquery.flot.crosshair.js") }}"></script>
    <script src="{{ asset("assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js") }}"></script>
    <script src="{{ asset("dist/js/pages/chart/chart-page-init.js") }}"></script>
@endpush


@push("sub-script")

    <script>

        $(document).ready(function() {
            $('#customer_id').select2({
                minimumInputLength: 0,
                ajax: {
                    url: '{{ route("api.customer.select") }}',
                    dataType: 'json',
                },
            });
        });

        </script>
    @endpush
<script>
$('form').submit(function (event) {
  $('[name="submit"]').prop("disabled",true);
  
});
</script>