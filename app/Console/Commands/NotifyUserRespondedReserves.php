<?php

namespace App\Console\Commands;

use App\Reserve;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Mail;
use App\Mail\UserRespondedReserves;

class NotifyUserRespondedReserves extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:userRespondedReserves';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Notify user about count of responded reserves';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle(Reserve $reserve)
    {
        $todayReserves = $reserve->whereDate('created_at', Carbon::today())->get();

        foreach($todayReserves as $todayReserve) {
            if($todayReserve->responded_reserves->count() > 0) {
                Mail::to($todayReserve->user)->send(new UserRespondedReserves($todayReserve));
            }
        }
    }
}
