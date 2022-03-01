<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Log;
use App\Models\User;
use Illuminate\Support\Str;

class usersController extends Controller
{
    public function login(Request $request)
    {
        // dd($request->all());
        // return User::select('name','password')->get();
// dd("one");

//         $results = User::where("name", $bagente)
// ->whereMonth("data", $month)
// -get();
$compare = User::where([
    // ['id', '=' ,$id],
    ['name', '==', $request->name],
    ['password', '==', $request->password],
]);
// return
// dd($compare);
$x=$compare;
if($compare){ return response()->json([
    // 'message'=>'compare susscefully'
'datax'=>$x.id
],200);}
else{
    return response()->json([
        'message'=>'compare  not susscefully'
    ],500);
}
    }


    // public function login(Request $request)
}
