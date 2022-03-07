<?php

namespace App\Http\Controllers;

use App\Models\Product;
use Illuminate\Http\Request;

use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;
use Carbon\Carbon;

class ProductController extends Controller
{
   
    public function index()
    {
        return Product::select('user_Id','FirstName','LastName','Email_ID','State_ID','City_ID','image','Create_By')->get();
        // ->where('Create_By','=','1')
    }

    public function store(Request $request)
    {
        $request->validate([
            'FirstName'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'LastName'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'Email_ID'=>'required|email|unique:products',
            'State_ID'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'City_ID'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'image'=>'required|image',
            'Create_By'=>'required'
        ]);

        try{
            $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
            Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
            Product::create($request->post()+['image'=>$imageName]);

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

  
    public function show(Product $product)
    {
        return response()->json([
            'product'=>$product
        ]);
    }


    public function update(Request $request, Product $product)
    {
        $request->validate([
            'FirstName'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'LastName'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'Email_ID'=>'required|email',
            'State_ID'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'City_ID'=>'required| regex:/^[a-zA-ZÑñ\s]+$/',
            'image'=>'nullable'
        ]);

        try{

            $product->fill($request->post())->update();

            if($request->hasFile('image')){

                // remove old image
                if($product->image){
                    $exists = Storage::disk('public')->exists("product/image/{$product->image}");
                    if($exists){
                        Storage::disk('public')->delete("product/image/{$product->image}");
                    }
                }

                $imageName = Str::random().'.'.$request->image->getClientOriginalExtension();
                Storage::disk('public')->putFileAs('product/image', $request->image,$imageName);
                $product->image = $imageName;
                $product->save();
            }

            return response()->json([
                'message'=>' Updated Employee Successfully'
            ]);

        }catch(\Exception $e){
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while updating a Employee'
            ],500);
        }
    }

  
    public function destroy(Product $product)
    {
        try {

            if($product->image){
                $exists = Storage::disk('public')->exists("product/image/{$product->image}");
                if($exists){
                    Storage::disk('public')->delete("product/image/{$product->image}");
                }
            }

            $product->delete();

            return response()->json([
                'message'=>' Deleted Employee Successfully!!'
            ]);
            
        } catch (\Exception $e) {
            \Log::error($e->getMessage());
            return response()->json([
                'message'=>'Something goes wrong while deleting a Employee'
            ]);
        }
    }
}
