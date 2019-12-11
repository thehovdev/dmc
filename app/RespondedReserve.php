<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RespondedReserve extends Model
{
    protected $guarded = ['id'];
    protected $table = 'responded_reserves';

    public function operator() {
        return $this->belongsTo('App\Operator');
    }

    public function reserve() {
        return $this->hasOne('App\Reserve');
    }

    public function reserves() {
        return $this->hasMany('App\Reserve');
    }
}
