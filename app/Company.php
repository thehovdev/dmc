<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\ContactPerson;
use App\Operator;

class Company extends Model
{
    use SoftDeletes;

    public static function boot() {
        parent::boot();

        static::deleting(function($model){
            $model->status = 0;
            $model->save();
        });

        static::restoring(function ($model) {
            $model->status = 1;
            $model->save();
        });


    }

    public function contactPersons() {
        return $this->hasMany('App\ContactPerson')->withTrashed();
    }
    public function operators() {
        return $this->hasMany('App\Operator');
    }
}
