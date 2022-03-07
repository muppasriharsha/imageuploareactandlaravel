<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Log;
use App\Models\User;
use App\Models\picupload;
use Carbon\Carbon;
use Illuminate\Support\Str;

class usersController extends Controller
{
    public function login(Request $request)
    {
     
  
$compare = User::where('name', '=', $request->name)->where('password', '=', $request->password)->get();

if($compare->count() > 0){ return response()->json([
    'message'=>'compare susscefully',
'userid'=>$compare
],200);}
else{
    return response()->json([
        'message'=>'compare not susscefully'
    ],404);
}
    }


    public function prifilepic(Request $request, User $product){
        $request->validate([
            
            'profile_picture'=>'required|image',
        ]);
       
        try{ 
            if($product->profile_picture){
                $exists = Storage::disk('public')->exists("profilepic/image/{$product->profile_picture}");
                if($exists){
                    Storage::disk('public')->delete("profilepic/image/{$product->profile_picture}");
                }
            }

            $imageName = Str::random().'.'.$request->profile_picture->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('profilepic/image', $request->profile_picture,$imageName);
          
            
DB::table('users')->where('id', 1)->update($request->post()+['profile_picture'=>$imageName]);

            // picupload::create($request->post()+['profile_picture'=>$imageName]);
        
            return response()->json([
                'message'=>' Created Employee Successfully'
            ]);
        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while creating a Employee'
            ],500);
        }
       
    }
    public function getprofilepic()
    {
        return User::select('id','profile_picture')->get();

    }
}
