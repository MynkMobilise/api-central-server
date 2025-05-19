<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/clear', function() {
    $exitCode = Artisan::call('cache:clear');
    $exitCode = Artisan::call('config:clear');
    $exitCode = Artisan::call('route:clear');
    $exitCode = Artisan::call('view:clear');

    return 'Application cache cleared';
});
Route::get('/send/monthly/statement', function () {
    Artisan::call('send:monthlystatement');
	return 'ok';
});
Route::get('/foo', function () {
Artisan::call('storage:link');
});

Route::get('goamlreport',function(){
	return view('goaml');
})->name('goamlreport');

Route::get('slider',function(){
	return view('slider');
})->name('slider');

Route::get('userlocation',function(){
	return view('userlocation');
})->name('userlocation');
Route::post("/api/getUserByBranch","TransactionController@getUserByBranch");
Route::post("/updateuserloc","TransactionController@updateuserloc");


Route::get('goamlreportbusiness',function(){
	return view('goaml1');
})->name('goamlreportbusiness');

Route::match(['get','post'],'/companylist','ComapnyController@CreateCompany');
Route::get('/admin/edit-companys/{id}','ComapnyController@editCompany');
Route::post('/addslider','ComapnyController@addslider');
Route::post('/reset-password','ComapnyController@resetpassword');
Route::get('/api/deleteslider/{id}','ComapnyController@deleteslider');
Route::get('/app-reset-password/{id}','ComapnyController@appresetpassword');
Route::get('/api/statusslider/{id}/{status}','ComapnyController@statusslider');
Route::put('/admin/update-companys/{id}','ComapnyController@update');
Route::match(['get','post'],'/admin/delete-companys/{id}','ComapnyController@deleteCompany');

Route::post('/getLoanNo','ComapnyController@getLoanNo')->name('loan-fileno');	
Route::post('/updateLoadStatus','LoanController@verifyLoanStatus1');
Route::get('currency/stockreport',function(){
	return view('stockreport');
})->name('stockreport');
Route::get('salereport',function(){
	return view('salesreport');
})->name('salereport');
Route::get('comprehensivereport',function(){
	return view('comprehensivereport');
})->name('comprehensivereport');

Route::get('bankstatementreport',function(){
	return view('bankstatementreport');
})->name('bankstatementreport');

Route::get('assetreport',function(){
	return view('assetreport');
})->name('assetreport');
Route::get('pawanassetlist',function(){
	return view('pawanassetlist');
})->name('pawanassetlist');
Route::get('assetreturnreport',function(){
	return view('assetreturnreport');
})->name('assetreturnreport');
Route::get('pawanassetreturnlist',function(){
	return view('pawanassetreturnlist');
})->name('pawanassetreturnlist');



Route::get('branch',function(){
	return view('branch');
})->name('branch');

// 06-11-2023 By Ranjana 
Route::get('debtorreport',function(){
	return view('debtorreport');
})->name('debtorreport');

Route::get('createdebtor',function(){
	return view('createdebtor');
})->name('createdebtor');

Route::post('/getDebtorReceipt','TransactionController@getDebtorReceipt');
Route::post('/api/getdebtors','TransactionController@getdebtors');
Route::post('/api/savedebtors','TransactionController@savedebtors');
Route::post('/api/debotlist','TransactionController@debotlist');
Route::get('account-assets', 'AssetController@index')->name('account-assets.index');
Route::get('account-assets-assignment', 'AssetController@assetassignment')->name('account-assets-assignment');
Route::get('account-assets-retirement', 'AssetController@assetretirement')->name('account-assets-retirement');
Route::get('account-assets-report', 'AssetController@assetreport')->name('account-assets-report');
Route::post('/api/saveassignment', 'AssetController@saveassignment')->name('saveassignment');
Route::get('/api/delassignment/{id}', 'AssetController@delassignment');
Route::post('/api/saveretirement', 'AssetController@saveretirement')->name('saveretirement');
Route::get('/api/delretirement/{id}', 'AssetController@delretirement');
Route::get('account-assets-create', 'AssetController@create')->name('account-assets.create');
Route::post('account-assets-store', 'AssetController@store')->name('account-assets.store');
Route::get('account-assets-destroy/{id}', 'AssetController@destroy')->name('account-assets.destroy');
Route::get('account-assets-edit/{id}', 'AssetController@edit')->name('account-assets.edit');
Route::post('account-assets-update/{id}', 'AssetController@update')->name('account-assets.update');
// END OF 06-11-2023 //
// 07-01-2025 //
Route::post('saveassetdata', 'AssetController@saveassetdata')->name('saveassetdata');
Route::post('saveassetreturndata', 'AssetController@saveassetreturndata')->name('saveassetreturndata');
Route::get('assetformstatus/{id}/{status}', 'AssetController@assetformstatus');
Route::get('assetformdelete/{id}', 'AssetController@assetformdelete');
Route::post('getreturndata', 'AssetController@getreturndata')->name('getreturndata');
// END //

Route::get('/loanVerify/{id}/{con}','LoanController@verifyLoan');
Route::get('/api/getfilesandid/{q}/{s}','LoanController@getfilesandid');
Route::post('/api/updatebankstatement','LoanController@updatebankstatement');
Route::post('/api/customerduebyreport','LoanController@customerduebyreport');
Route::post('/api/customeronlinebyreport','LoanController@customeronlinebyreport');
Route::post('/getFilterList','LoanController@getFilterList');
Route::get('/topupVerify/{id}/','LoanController@vtopupVerify');
Route::post('/loanListDate','LoanController@loanListDate');
Route::post('/payDateList','PaymentController@payDateList');

Route::post("/sendEmailLoadWork","pdf@sendLoanForEmail");
Route::post("/sendEmailLoadWork1","pdf@sendLoanForEmail1");
Route::post("/sendEmailLoadWork2","pdf@sendEmailLoadWork2");
Route::post("/sendEmailLoadWork3","pdf@sendEmailLoadWork3");
Route::post("/sendEmailLoadWork4","pdf@sendEmailLoadWork4");
Route::post("/sendEmailCustKyc","pdf@sendEmailCustKyc");
Route::post("/sendEmailBusKyc","pdf@sendEmailBusKyc");

Route::post("/api/getDailyReportModal","TransactionController@getDailyReportModal");

Route::post("/api/generateother","TransactionController@getResutOther");

Route::post("/getBranchList","HomeController@getBranchList");

Route::post("/getCustomerListByBranch","HomeController@getCustomerListByBranch");

Route::post("/getLoanListByCust","HomeController@getLoanListByCust");
Route::post("/printCustLoan","HomeController@printCustLoan");

Route::post("/getCustomerLegderReport","HomeController@getCustomerLegderReport");

Route::post("/verifyLoanNo","LoanController@checkLoanNo");

Route::post("/getCustomerMainList","HomeController@getCustomerMainList");

Route::get('customerledgerreport',function(){
	return view('blades.Reports.customerledgerreport');
})->name('customerledgerreport');
Route::get('reminderreport',function(){
	return view('blades.Reports.reminderreport');
})->name('reminderreport');

Route::get('statementreport',function(){
	return view('blades.Reports.statementreport');
})->name('statementreport');



Route::get('purchasereport',function(){
	return view('purchasereport');
})->name('purchasereport');
Route::any('dailyreport',"HomeController@dailyReport")->name('dailyreport');
Route::get('monthlyreport',function(){
	return view('monthlyreport');
})->name('monthlyreport');

Route::post('/verifyLoanStatus','LoanController@verifyLoanStatus');
Route::post('/verifyLoanTopupStatus','LoanController@verifyLoanTopupStatus');

Route::post("/api/updategoamlstatus","UserController@goamlstatus");
Route::get("/stock/addstock","UserController@stockView")->name('addstock');
Route::post("/companySave","UserController@createCompany");
Route::post("/stockSave","CurrencyController@saveStock");
//Route::post("/branchSave","CurrencyController@saveBranch");
Route::match(['get','post'],'/admin/add-branch','CurrencyController@saveBranch');
Route::post("/stockDelete","CurrencyController@delStock");
Route::post("/api/getIndv_custData","CustomerKycController@getIndvCustDetails");
//Route::post("/api/getBus_custData","CustomerKycController@getBusCustDetails");
  Route::post("/api/getBus_custData","CustomerKycController@getBusCustDetails");
Route::post("/api/getSaleData","TransactionController@getSaleDataInfo");
Route::post("/api/getSaleReport","TransactionController@getSaleFullReport");
Route::post("/api/getPurchaseReport","TransactionController@getPurchaseFullReport");
Route::post("/api/saveOther","TransactionController@saveOtherTransaction");
Route::post("/api/getOtherTransaction","TransactionController@getOtherTransaction");
Route::post("/updatedebstatus","TransactionController@updatedebstatus");
Route::post("/api/comprehensivedata","TransactionController@comprehensivedata");
Route::post("/api/getbankstatementbyfile","LoanController@getbankstatementbyfile");

// EXIST LOAN VERIFY SRNO 3 BY RANJANA
Route::post('/verifyCustForLoan','LoanController@verifyCustForLoan');

Route::get("/api/getAllCustomer","IndividualCustController@getCustomer");
Route::get("/api/getIndividualCustomer","IndividualCustController@getIndividualCustomer")->name('api.individual.list');
Route::get("/api/getPawnCustomer","IndividualCustController@getPawnCustomer")->name('api.pawn.list');
Route::get("/api/getCustomerForSelect","TransactionController@getCustomerForSelect")->name('api.customer.select');
Route::get("/api/getAllCustomerById","IndividualCustController@getCustomerById");
Route::any("/api/getstockReportData","StockController@printReport");

Route::post("/filteroutstanding","LoanController@filteroutstanding");
Route::get("/import",function(){
    //$records= DB::table("forex_master_old")->select("*")->get()->groupBy("CODE");
    //dd($records);
    /*$records= \App\ForexMaster::all();
    foreach($records as $key => $record) {
        $m_data= DB::table("forex_master_old")->select("*")->where("CODE", $record->code)->get();
        $d_data= DB::table("forex_master_detail_old")->select("*")->where("CODE_MASTER_DESCRIPTION", $record->code)->get();
        dd($m_data, $d_data);

    }*/
    return view("import");

})->name("get.import");

Route::post("/import", function(\Illuminate\Http\Request $request){
    Excel::import(new \App\Imports\ImportData,$request->file("file"));
    return redirect()->route("get.import");
})->name("import");


Route::group(["middleware"=>"web"], function (){
    Route::get('/', function () {
        return redirect()->route("login");
    })->name("/");
    Auth::routes();
    Route::group(["middleware"=>"auth"], function(){
        // Home Route
        Route::get('/home', 'HomeController@index')->name('home');
        Route::post("/customer/data", "HomeController@getCustomerRecord")->name("get.customer.record");
		Route::post("/customer/data/forScreeningForm", "HomeController@getCustomerRecordForScreeningForm")->name("get.customer.record.forScreeningForm");
        Route::post("/stock/delete", "CurrencyController@delStock")->name("get.stock.delete");
        Route::get("/currency/{id}/{type}/denomination", "HomeController@getCurrencyDenomination")->name("get.currency.Denomination");
        Route::get("/denomination/{id}/{type}/row", "HomeController@getCurrDenRow")->name("get.currency.Denomination.row");
        Route::get("/currency/{curr1}/{curr2}/{type}/denomination", "HomeController@getInterCurrDen")->name("get.inter.transaction.denomination");
        Route::get("/denomination/{curr1}/{curr2}/{type}/row", "HomeController@getInterCurrDenRow")->name("get.inter.transaction.denomination.row");
        Route::post("/file/download", "HomeController@getDownloadFiles")->name("get.download.files");
        Route::get("/file/{id}/download", "HomeController@getFileDownload")->name("download.files");
        Route::get("/customer/select2/{type}","HomeController@getCustomerSelect2")->name("get.customer.select2");
        //Beneficial Routes
        Route::group(["prefix"=>"beneficiary"], function (){
            Route::get('/',"BeneficiaryController@index")->name("beneficiary.list");
            //create routes
            Route::get("/add", "BeneficiaryController@getCreate")->name("beneficial.get.create");
            Route::post("/add", "BeneficiaryController@postCreate")->name("beneficial.post.create");
            //Edit routes
            Route::get("/edit/{id}", "BeneficiaryController@getEdit")->name("beneficial.get.edit");
            Route::post("/edit/{id}", "BeneficiaryController@postEdit")->name("beneficial.post.edit");
        });
        //End Beneficial Routes

      
        
        //End Currency Routes
		 //Coustomer CDD/EDD
        Route::group(["prefix"=>"customerCDD"],function (){
            Route::get("/list", "CustomerCddController@index")->name("customerCDD.cdd.list");
            Route::get("/add", "CustomerCddController@create")->name("get.customerCDD.create");
            Route::post("/add", "CustomerCddController@store")->name("post.customerCDD.create");
            Route::get("/edit/{id}", "CustomerCddController@edit")->name("get.customerCDD.edit");
            Route::post("/edit/{id}", "CustomerCddController@update")->name("post.customerCDD.edit");
            Route::get("/delete/{id}", "CustomerCddController@delete")->name("customerCDD.delete");
        });
        //Customer CDD/EDD
        //Coustomer Screening
        Route::group(["prefix"=>"customerScreening"],function (){
            Route::get("/list", "CustomerScreeningController@index")->name("customerScreening.list");
            Route::get("/add", "CustomerScreeningController@create")->name("get.customerScreening.create");
            Route::post("/add", "CustomerScreeningController@store")->name("post.customerScreening.create");
            Route::get("/edit/{id}", "CustomerScreeningController@edit")->name("get.customerScreening.edit");
            Route::post("/edit/{id}", "CustomerScreeningController@update")->name("post.customerScreening.edit");
            Route::get("/delete/{id}", "CustomerScreeningController@delete")->name("customerScreening.delete");
        });
        //Customer Screening
		// Stock
		
		
        //Customer Routes
        Route::group(["prefix"=>"customer"],function (){
            Route::get("/cdd", "HomeController@customerCdd")->name("customer.cdd");

            Route::get("/group", "CustomerGroupController@index")->name("customer.group");
            Route::post("/group", "CustomerGroupController@postCreate")->name("post.customer.group.create");
            Route::get("/group/{id}/edit", "CustomerGroupController@getEdit")->name("get.customer.group.edit");
            Route::post("/group/{id}/edit", "CustomerGroupController@postEdit")->name("post.customer.group.edit");
            Route::get("/group/{id}/delete", "CustomerGroupController@delete")->name("customer.group.delete");

            Route::group(["prefix"=>"kyc"], function (){
                Route::get("/individual", "CustomerKycController@individualKycList")->name("individual.customer.kyc.list");
                Route::get("/individual/create", "CustomerKycController@getIndividualKycCreate")->name("get.individual.customer.kyc.create");
                Route::get("/individual/getCustomer", "CustomerKycController@getIndividualKycCustomers")->name("get.individual.customer.kyc.customer.list");
                Route::post("/individual/create", "CustomerKycController@postIndividualKycCreate")->name("post.individual.customer.kyc.create");
                Route::get("/individual/{id}/edit", "CustomerKycController@getIndividualKycEdit")->name("get.individual.customer.kyc.edit");
                Route::post("/individual/{id}/edit", "CustomerKycController@postIndividualKycEdit")->name("post.individual.customer.kyc.edit");
                Route::get("/individual/{id}/delete", "CustomerKycController@individualDelete")->name("individual.customer.kyc.delete");

                Route::get("/business", "CustomerKycController@businessKycList")->name("get.business.customer.kyc.list");
                Route::get("/business/create", "CustomerKycController@getBusinessKycCreate")->name("get.business.customer.kyc.create");
                Route::post("/business/create", "CustomerKycController@postBusinessKycCreate")->name("post.business.customer.kyc.create");
                Route::get("/business/{id}/edit", "CustomerKycController@getBusinessKycEdit")->name("get.business.customer.kyc.edit");
                Route::post("/business/{id}/edit", "CustomerKycController@postBusinessKycEdit")->name("post.business.customer.kyc.edit");
                Route::get("/business/{id}/delete", "CustomerKycController@businessDelete")->name("business.customer.kyc.delete");
            });

            Route::group(["prefix"=>"individual"], function (){
                Route::get("/", "IndividualCustController@index")->name("customer.individual.list");
                Route::get("/add", "IndividualCustController@getCreate")->name("customer.individual.get.form");
                Route::get("/pawnlist", "IndividualCustController@pawnlist")->name("customer.pawn.list");
                Route::get("/addpawn", "IndividualCustController@getPawnCreate")->name("customer.addpawn.list");
                Route::post("/add", "IndividualCustController@postCreate")->name("customer.individual.post.form");
                Route::get("/{id}/edit", "IndividualCustController@getEdit")->name("customer.individual.get.edit");
                Route::post("/{id}/edit", "IndividualCustController@postEdit")->name("customer.individual.post.edit");
                Route::get("/{id}/delete", "IndividualCustController@delete")->name("customer.individual.delete");
            });

            Route::group(["prefix"=>"business"], function (){
                Route::get('/', "BusinessCustController@index")->name("business.customer.list");
                Route::get("/add", 'BusinessCustController@getCreate')->name("business.customer.get.create");
                Route::post("/add", 'BusinessCustController@postCreate')->name("business.customer.post.create");
                Route::get("/edit/{id}", 'BusinessCustController@getEdit')->name("business.customer.get.edit");
                Route::post("/edit/{id}", 'BusinessCustController@postEdit')->name("business.customer.post.edit");
                Route::get("/delete/{id}", 'BusinessCustController@delete')->name("business.customer.delete");
            });
        });
        //End Customer Routes

        Route::group(["prefix"=>"master"],function (){
            Route::get("/records", "MasterRecordController@index")->name("master.record.list");
            Route::get("/record/create", "MasterRecordController@getCreate")->name("master.record.get.create");
            Route::post("/record/create", "MasterRecordController@postCreate")->name("master.record.post.create");
            Route::get("/record/{id}/edit", "MasterRecordController@getEdit")->name("master.record.get.edit");
            Route::post("/record/{id}/edit", "MasterRecordController@postEdit")->name("master.record.post.edit");
            Route::get("/record/{id}/delete", "MasterRecordController@delete")->name("master.record.delete");

            Route::get("/details", "MasterDetailController@index")->name("master.detail.list");
            Route::get("/details/create", "MasterDetailController@getCreate")->name("master.detail.get.create");
            Route::post("/details/create", "MasterDetailController@postCreate")->name("master.detail.post.create");
            Route::get("/details/{id}/edit", "MasterDetailController@getEdit")->name("master.detail.get.edit");
            Route::post("/details/{id}/edit", "MasterDetailController@postEdit")->name("master.detail.post.edit");
            Route::get("/details/{id}/delete", "MasterDetailController@delete")->name("master.detail.delete");
        });

        Route::group(["prefix"=>"user"],function (){
            Route::get("/details", "UserController@index")->name("user.details.list");
            Route::get("/add", "UserController@getCreate")->name("user.get.create");
            Route::post("/add", "UserController@postCreate")->name("user.post.create");
            Route::get("/{id}/edit", "UserController@getEdit")->name("user.get.edit");
            Route::post("/{id}/edit", "UserController@postEdit")->name("user.post.edit");
            Route::get("/{id}/delete", "UserController@delete")->name("user.delete");

            Route::get("/roles", "UserRoleController@index")->name("user.roles.list");
            Route::get("/roles/create", "UserRoleController@getCreate")->name("get.user.roles.create");
            Route::post("/roles/create", "UserRoleController@postCreate")->name("post.user.roles.create");
            Route::get("/roles/{id}/edit", "UserRoleController@getEdit")->name("get.user.roles.edit");
            Route::post("/roles/{id}/edit", "UserRoleController@postEdit")->name("post.user.roles.edit");
            Route::get("/roles/{id}/delete", "UserRoleController@delete")->name("user.roles.delete");
        });

        Route::group(["prefix"=>"location"], function (){
            Route::get("/records", "LocationController@index")->name("location.records.list");
            Route::get("/add", "LocationController@getCreate")->name("location.add.get");
            Route::post("/add", "LocationController@postCreate")->name("location.add.post");
            Route::get("/edit/{id}", "LocationController@getEdit")->name("location.get.edit");
            Route::post("/edit/{id}", "LocationController@postEdit")->name("location.post.edit");
            Route::get("/{id}/delete", "LocationController@delete")->name("location.delete");
        });

        Route::get("/configuration/report", "HomeController@configurationReportList")->name("configuration.report.list");
        Route::get("/denomination", "HomeController@denomination")->name("denomination");
		

        Route::get("/stock-quantity", "HomeController@stockQuantity")->name("stock.quantity");
        Route::post("trans/{id}/local/den", "HomeController@localTransDenRow")->name("get.trans.curr.den");
        Route::post("/type-of-trans", "HomeController@typeOfTransaction")->name('get.type.of.trans');
        Route::post("/paid-and-deposit", "HomeController@getPaidAndDeposit")->name("get.paid.and.deposited");


        Route::group(["prefix"=>"transaction"], function (){
            Route::get("/purchase", "TransactionController@purchaseList")->name("transaction.purchase.list");
            Route::get("/purchase/add", "TransactionController@getCreatePurchase")->name("get.transaction.purchase.create");
            Route::get("/sales", "TransactionController@salesList")->name("transaction.sales.list");
            Route::get("/sales/add", "TransactionController@getCreateSales")->name("get.transaction.sales.create");
            Route::post("/create", "TransactionController@postCreateTransaction")->name("post.sales.purchase.transaction.create");
            Route::get("/{id}/edit", "TransactionController@getEditTransaction")->name("get.sales.purchase.transaction.edit");
            Route::post("/{id}/edit", "TransactionController@postEditTransaction")->name("post.sales.purchase.transaction.edit");
            Route::post("trans/local/den/create", "TransactionController@localTransDenCreate")->name("post.trans.curr.den.create");

            Route::get("/other", "TransactionController@otherList")->name("transaction.other.list");
            Route::get("/other/add", "TransactionController@getCreateOther")->name("get.transaction.other.create");

            Route::get("/cash-to-cash/add", "TransactionController@getCashToBankCreate")->name("get.transaction.ctob.create");
            Route::get("/cash-to-bank", "TransactionController@cashToBankList")->name("trans.cash.to.bank.list");
            Route::get("/bank-to-bank", "TransactionController@bankToBankList")->name("trans.bank.to.bank.list");
            Route::post("/inter/bank-trans/create", "TransactionController@interBankTransCreate")->name("post.inter.bank.trans.create");
            Route::post("/inter/cash-trans/create", "TransactionController@BanktoBankTransCreate")->name("post.bank.bank.trans.create");
            Route::get("/{id}/edit/inter-transaction", "TransactionController@getInterEdit")->name("get.inter.bank.trans.edit");
            Route::post("/{id}/edit/inter-transaction", "TransactionController@postInterEdit")->name("post.inter.bank.trans.edit");

            Route::get("/bank-to-bank/add", "TransactionController@getBankToBankCreate")->name("get.transaction.btob.create");


        });
        
  //Start Cash Purchase Invoice Parmission Routes
        Route::group(["prefix"=>"transcation"], function (){
            Route::get('/',"TransactionController@index")->name("purchasetranscation.list");
            //create routes
            Route::get("/add", "TransactionController@getCreate")->name("purchasetranscation.get.create");
            Route::post("/add", "TransactionController@postCreate")->name("purchasetranscation.post.create");
            //Edit routes
            Route::get("/edit/{id}", "TransactionController@getEdit")->name("purchasetranscation.get.edit");
            Route::post("/edit/{id}", "TransactionController@postEdit")->name("purchasetranscation.post.edit");
        });
        //End Cash Purchase Invoice Parmission Routes

          //Start Cash Sales Invoice Parmission Routes
        Route::group(["prefix"=>"transcation"], function (){
            Route::get('/',"TransactionController@index")->name("salestranscation.list");
            //create routes
            Route::get("/add", "TransactionController@getCreate")->name("salestranscation.get.create");
            Route::post("/add", "TransactionController@postCreate")->name("salestranscation.post.create");
            //Edit routes
            Route::get("/edit/{id}", "TransactionController@getEdit")->name("salestranscation.get.edit");
            Route::post("/edit/{id}", "TransactionController@postEdit")->name("salestranscation.post.edit");
        });
        //End Cash Sales Invoice Parmission Routes

         //Start Cash To Bank Parmission Routes
        Route::group(["prefix"=>"transcation"], function (){
            Route::get('/',"TransactionController@index")->name("cash.bank.list");
            //create routes
            Route::get("/add", "TransactionController@getCreate")->name("cash.bank.get.create");
            Route::post("/add", "TransactionController@postCreate")->name("cash.bank.post.create");
            //Edit routes
            Route::get("/edit/{id}", "TransactionController@getEdit")->name("cash.bank.get.edit");
            Route::post("/edit/{id}", "TransactionController@postEdit")->name("cash.bank.post.edit");
        });
        //End Cash To Bank Parmission Routes

         //Start Bank To Bank Parmission Routes
        Route::group(["prefix"=>"transcation"], function (){
            Route::get('/',"TransactionController@index")->name("bank.bank.list");
            //create routes
            Route::get("/add", "TransactionController@getCreate")->name("bank.bank.get.create");
            Route::post("/add", "TransactionController@postCreate")->name("bank.bank.post.create");
            //Edit routes
            Route::get("/edit/{id}", "TransactionController@getEdit")->name("bank.bank.get.edit");
            Route::post("/edit/{id}", "TransactionController@postEdit")->name("bank.bank.post.edit");
        });
        //End Bank To Bank Parmission Routes


         //Start Other Transaction Parmission Routes
        Route::group(["prefix"=>"transcation"], function (){
            Route::get('/',"TransactionController@index")->name("other.transat.list");
            //create routes
            Route::get("/add", "TransactionController@getCreate")->name("other.transat.get.create");
            Route::post("/add", "TransactionController@postCreate")->name("other.transat.post.create");
            //Edit routes
            Route::get("/edit/{id}", "TransactionController@getEdit")->name("other.transat.get.edit");
            Route::post("/edit/{id}", "TransactionController@postEdit")->name("other.transat.post.edit");
        });
        //End Other Transaction Parmission Routes
 			Route::group(["prefix"=>"loan"], function (){
            Route::get("/list", "LoanController@index")->name("loan.list");
            Route::get("/topuprequestlist", "LoanController@topuprequestlist")->name("loan.topup.list");
            Route::get("/create", "LoanController@create")->name("loan.create");
            Route::post("/store", "LoanController@store")->name("loan.store");
            Route::get("/edit/{id}", "LoanController@edit")->name("loan.edit");
			Route::get("/edit/{id}/{ref}", "LoanController@edit");
            Route::post("/update/{id}", "LoanController@update")->name("loan.update");
			Route::post("/copyloan", "LoanController@copyloan")->name("loan.copyloan");
			
			
			Route::post("/savetopup", "LoanController@savetopup")->name("loan.savetopup");
			Route::get("/delete/{id}", "LoanController@delete")->name("loan.delete");
            Route::post('customer/files', 'LoanController@getCustomerLoanFiles')->name('loan.customer.files');
            Route::get("/report/{type}", "LoanController@Report")->name("loan.report");
			Route::post("/getOutstandingAmount", "LoanController@getOutstandingAmount")->name("loan.getOutstandingAmount");
			Route::any("/import", "LoanController@ImportLoans")->name("loan.import");
			
        });

        Route::group(["prefix"=>"auditTrail"], function (){
            Route::post('getModuleWiseList', 'AuditTrailController@getModuleWiseList')->name('auditTrail.getModuleWiseList');
            Route::get("lists", "AuditTrailController@index")->name("auditTrail.list");
            Route::get("getAuditReport", "AuditTrailController@getAuditReport")->name("auditTrail.getAuditReport");
        });

        Route::resource('payment', 'PaymentController');
        Route::get('payment/index/{type}', 'PaymentController@index')->name('payment.index');
        Route::any('importexcel','PaymentController@ImportExcel')->name('import.excel.payment');
        Route::get('spouse/print', 'HomeController@spousePrint')->name('spouse.print');
	
		Route::any('import-ind-cust','IndividualCustController@ImportIndividualCustomer')->name('import.ind.customer');
        Route::any('import-bus-cust','BusinessCustController@ImportBusinessCustomer')->name('import.bus.customer');
    });
});

//User change password Route
Route::match(['get','post'],'/user-change-password','UserController@changePassword');

//Change User Profile Route
Route::match(['get','post'],'/change-user-profile','UserController@ChangeUserProfile');

//Add Roster Route
Route::match(['get','post'],'/admin/add-user-roster','UserRosterController@CreateUserRoster');

//View Roster Route
Route::get('/admin/add-user-roster','UserRosterController@viewUserRoster');

//Edit Roster Route
//Route::match(['get','post'],'/admin/edit-rosters/{id}','UserRosterController@editUserRoster');

Route::get("/edit/{id}", "UserRosterController@getEdit")->name("userroster.get.edit");
Route::post("/edit/{id}", "UserRosterController@postEdit")->name("userroster.post.edit");

//Add Shift Route
Route::match(['get','post'],'/admin/add-shift','ShiftController@CreateShift');

//View Shift
Route::get('/admin/add-shift','ShiftController@viewShift');

//Update Shift
Route::match(['get','post'],'/admin/edit-shifts/{id}','ShiftController@editShift');
//Update Branch
Route::match(['get','post'],'/admin/edit-branchs/{id}','ShiftController@editBranchs');

//Route EDIT other Transcation

Route::get("/{id}/edit", "TransactionController@getOtherEdit")->name("transaction.get.edit");
//Route::post("/{id}/edit", "TransactionController@postOtherEdit")->name("transcation.post.edit");
Route::post("/post/edit", "TransactionController@postOtherEdit");

//Clear Catch on Server
Route::get('/clear-cache', function() {
    $exitCode = Artisan::call('cache:clear');
    // return what you want
});



