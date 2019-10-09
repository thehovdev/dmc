<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContactPerson extends Model
{
    protected $table = 'contact_persons';


    public function company() {
        return $this->belongsTo('App\Company');
    }
}
