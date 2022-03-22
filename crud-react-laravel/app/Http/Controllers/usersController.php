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
use Illuminate\Support\Facades\Session;
use Illuminate\Notifications\Notification;
// use Illuminate\Cookie\CookieJar;
// use Cookie;

class usersController extends Controller
{
    public function login(Request $request)
    {
     $compare = User::where('name', '=', $request->name)->where('password', '=', $request->password)->get();
//   TempData["data1"] = $compare;
//   return RedirectToAction("Read");

//   $this->load->library('session');
//   $this->session->set_flashdata('item', $compare);

if($compare->count() > 0){ return response()->json([
    'message'=>'valid credentials',
'userid'=>$compare
],200);}
else{
    return response()->json([
        'message'=>'Invalid credentials'
    ],404);
}
    }
// below is working

//     public function prifilepic(Request $request, User $product){
//         $request->validate([
            
//             'profile_picture'=>'required|image',
//             // 'id'=>'nullable',
//             // 'userid'=>'nullable',
//         ]);
//         try{ 
//             if($product->profile_picture){
//                 $exists = Storage::disk('public')->exists("profilepic/image/{$product->profile_picture}");
//                 if($exists){
//                     Storage::disk('public')->delete("profilepic/image/{$product->profile_picture}");
//                 }
//             }
            
//             $imageName = Str::random().'.'.$request->profile_picture->getClientOriginalExtension();
//             Storage::disk('public')->putFileAs('profilepic/image', $request->profile_picture,$imageName);
            
//             $id=$request->userid;
            
// DB::table('users')->where('id', $request->id)->update($request->post()+['profile_picture'=>$imageName]);

//             // picupload::create($request->post()+['profile_picture'=>$imageName]);
        
//             return response()->json([
//                 'message'=>' Updated Successfully'
//             ]);
//         }catch(\Exception $e){
//             \Log::error($e->getMessage());
//             return response()->json([
//                 'message'=>'Something goes wrong while updateing th picture'
//             ],500);
//         }
       
//     }
// above is working

// below is trying

// public function show(User $user)
// {
//     return response()->json([
//         'user'=>$user
//     ]);
// }

public function prifilepic(Request $request,User $user){
    $request->validate([
        
        'profile_picture'=>'nullable',
    ]);
    try{
        
        $use = User::where('id', $request->id)->get();
        // return response()->json([
        //     'message'=>$use[0]->id,
        //     'step2'=>2
        // ]);
        $user->fill($request->post())->update();
        if($request->hasFile('profile_picture')){
            // print_r($user); exit;
            // remove old image
            if($use[0]->profile_picture){
                $exists = Storage::disk('public')->exists("profilepic/image/{$use[0]->profile_picture}");
                if($exists){
                        // dd("1");
                        Storage::disk('public')->delete("profilepic/image/{$use[0]->profile_picture}");
                }
            }

            $imageName = Str::random().'.'.$request->profile_picture->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('profilepic/image', $request->profile_picture,$imageName);
// DB::table('users')->where('id', $request->id)->update($request->post()+['profile_picture'=>$imageName]);
            
            $use[0]->profile_picture = $imageName;
            $use[0]->save();
        }

        return response()->json([
            'message'=>' Updated profile pic Successfully'
        ]);

    }catch(\Exception $e){
        // dd("1");

        \Log::error($e->getMessage());
        return response()->json([
            'message'=>'Something goes wrong while updating a Employee pic'
        ],500);
    }
   
}
// above is trying

    public function getprofilepic()
    {
        return User::select('id','profile_picture')->get();

    }
}
