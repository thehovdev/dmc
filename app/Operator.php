<?php

namespace App;

// use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Database\Eloquent\SoftDeletes;


class Operator extends Authenticatable
{
    use Notifiable, SoftDeletes;

    protected $guarded = ['id'];

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

    public function declinedReserves() {
        return $this->belongsTo('App\DeclinedReserve', 'id', 'operator_id');
    }

    public function respondedReserves() {
        return $this->belongsTo('App\RespondedReserve', 'id', 'operator_id');
    }
}
