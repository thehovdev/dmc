<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    public function contactPersons() {
        return $this->hasMany('App\ContactPerson');
    }
}
