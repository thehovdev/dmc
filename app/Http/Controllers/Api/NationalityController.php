<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use stdClass;
use App\Nationality;

class NationalityController extends Controller
{
    protected $result;
    protected $nationality;
    public function __construct(Nationality $nationality) {
        $this->result = new stdClass;
        $this->nationality = $nationality;
    }

    public function getCountries(Nationality $nationality) {
        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->countries = $this->nationality->all();

        return response()->json($this->result);
    }
}
