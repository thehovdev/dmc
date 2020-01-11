<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class RespondReserveReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(Auth::check()) return true;

        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $formData = json_decode($this->get('formData'), true);

        $this->merge(['formData' => $formData]);

        $this->validate([
            'formData.hotel_name' => 'required|string',
            'formData.vehicle_name' => 'required|string',
            // 'formData.offered_tours' => 'required|string',
            'formData.currency' => 'required|string',

            'formData.single_price' => 'required|numeric',
            'formData.double_price' => 'required|numeric',
            'formData.triple_price' => 'required|numeric',
        ]);

        return array();


    }
}
