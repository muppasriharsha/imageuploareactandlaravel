$imageName = Str::random().'.'.$request->profile_picture->getClientOriginalExtension();
$request->profile_picture->move(public_path('images'), $imageName);



$imageName = time().'.'.$request->image->extension();  
$request->image->move(public_path('images'), $imageName);