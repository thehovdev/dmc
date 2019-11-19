<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ContactPerson extends Model
{
    use SoftDeletes;

    protected $table = 'contact_persons';

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

    public function company() {
        return $this->belongsTo('App\Company')->withTrashed();
    }
}
