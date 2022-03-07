<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class picupload extends Model
{
    use HasFactory;

     public $table='profilepic';
     protected $primaryKey = 'id';
     protected $fillable = ['userpic'];
    //  use Carbon\Carbon;
    }
