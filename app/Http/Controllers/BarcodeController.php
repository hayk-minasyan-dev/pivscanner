<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;

class BarcodeController extends Controller
{

    public function useBarcode(Request $request)
    {
        if($request->code=="1-70-2020"){
            $success = true;
            $message="ACCEPTED";
        }else{
            $success = false;
            $message="ALREADY USED";
        }
        return \Response::json([
            'success' => $success,
            'message' => $message
        ]);

    }
}
