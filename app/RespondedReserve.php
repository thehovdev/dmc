<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class RespondedReserve extends Model
{
    protected $guarded = ['id'];
    protected $table = 'responded_reserves';

    public function reserve() {
        return $this->hasOne('App\Reserve');
    }
}
