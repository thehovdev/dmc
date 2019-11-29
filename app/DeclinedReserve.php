<?php

namespace App;

use App\Reserve;
use Illuminate\Database\Eloquent\Model;

class DeclinedReserve extends Model
{
    protected $guarded = ['id'];
    protected $table = 'declined_reserves';

    public function reserve() {
        return $this->belongsTo('App\Reserve');
    }
}
