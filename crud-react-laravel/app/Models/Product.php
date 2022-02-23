<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    // public $table='posts';
    protected $primaryKey = 'user_Id';
    protected $fillable = ['FirstName', 'LastName','Email_ID','State_ID','City_ID', 'image'];
}
