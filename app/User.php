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

    public function role() {
        return $this->belongsTo('App\Role');
    }

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
}
