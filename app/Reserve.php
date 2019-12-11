<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use stdClass;

class Reserve extends Model
{
    
    public function user() {
        return $this->belongsTo('App\User');
    }

    public function group_type() {
        return $this->belongsTo('App\GroupType');
    }

    public function nationality() {
        return $this->belongsTo('App\Nationality');
    }

    public function age_range() {
        return $this->belongsTo('App\AgeRange');
    }

    public function country() {
        return $this->belongsTo('App\Country');
    }

    public function responded_reserves() {
        return $this->hasMany('App\RespondedReserve');
    } 

    public function responded($operator) {
        return $this->belongsTo('App\RespondedReserve', 'id', 'reserve_id')
            ->where('operator_id', $operator->id)
            ->first();
    } 

}
