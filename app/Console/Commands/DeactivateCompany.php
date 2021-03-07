<?php

namespace App\Console\Commands;

use App\Company;
use App\Services\CompanyService;
use Illuminate\Console\Command;

class DeactivateCompany extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'company:deactivate';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Company deactivate';

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
    public function handle(Company $company, CompanyService $companyService)
    {
        $companyCount = 0;
        $currentDate = date('Y-m-d 00:00:00');
        $companies = $company
            ->where('status', 1)
            ->where('active_to', '<=', $currentDate)
            ->withTrashed()
            ->get();

        foreach($companies as $company) {
            // deactivate company ( soft deletes )
            $companyService->destroy($company);
            $companyCount++;
        }

        print $companyCount;
    }
}
