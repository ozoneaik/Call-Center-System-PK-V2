<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ActiveConversations extends Model
{
    use HasFactory;
    protected $fillable = [
        'custId',
        'roomId',
        'receiveAt',
        'startTime',
        'endTime',
        'totalTime',
        'from_empCode',
        'from_roomId',
        'empCode',
        'rateRef'
    ];
}
