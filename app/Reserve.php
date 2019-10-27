<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use stdClass;

class Reserve extends Model
{
    
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

}
