<?php

namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Support\Facades\Auth;

class User extends Authenticatable
{
    use Notifiable, SoftDeletes;

    protected $guarded = [
        'id',
    ];
    protected $hidden = [
        'password', 'remember_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

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

    public function role() {
        return $this->belongsTo('App\Role');
    }

    public function reserves() {
        return $this->hasMany('App\Reserve');
        // return $this->hasMany('App\Reserve')->with('responded_reserves');
    }
    public function responded_reserves() {
        return $this->hasMany('App\RespondedReserve');
    }     

    public function declinedReserves() {
        return $this->belongsTo('App\DeclinedReserve', 'id', 'user_id');
    }

    public function respondedReserves() {
        return $this->belongsTo('App\RespondedReserve', 'id', 'user_id');
    }


}
