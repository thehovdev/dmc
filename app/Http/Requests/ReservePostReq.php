<?php

namespace App\Http\Requests;

use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class ReservePostReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules(Rule $rule)
    {
        $formData = json_decode($this->get('formData'), true);

        $this->merge(['formData' => $formData]);

        $this->validate([
            // 'formData.arrival_time' => 'required|string',
            // 'formData.departure_time' => 'required|string',
            // 'formData.arrival_date' => 'required|string',
            // 'formData.departure_date' => 'required|string',


            /*
            * hotel_star_3
            * hotel_star_4
            * hotel_star_5
            * hotel_description
            * transfer_airport
            * transfer_during_stay
            * cuisine_mix
            * cuisine_local
            * cuisine_indian
            * cuisine_arabic
            * cuisine_italian
            * cuisine_international
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *
            *            
            **/
            
            'formData.group_type_id' => 'required|integer',
            'formData.nationality_id' => 'required|integer',
            'formData.country_id' => 'required|integer', //+
            'formData.age_range_id' => 'required|integer',

            'formData.need_visa' => ['required', $rule->in(['true', 'false'])],
            'formData.need_hotel' => ['required', $rule->in(['true', 'false'])],
            'formData.need_transport' => ['required', $rule->in(['true', 'false'])],
            'formData.need_cuisine' => ['required', $rule->in(['true', 'false'])],

            
            'formData.need_tour_leader' => ['required', $rule->in(['true', 'false'])],
            'formData.need_excursion_options' => ['required', $rule->in(['true', 'false'])],
            'formData.need_meeting_facilities' => ['required', $rule->in(['true', 'false'])],
            'formData.need_guide' => ['required', $rule->in(['true', 'false'])],
        ]);

        return array();
    }
}
