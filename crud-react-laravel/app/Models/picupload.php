<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class picupload extends Model
{
    use HasFactory;

     public $table='users';
     protected $primaryKey = 'id';
     protected $fillable = ['profile_picture'];
    //  use Carbon\Carbon;
    }
