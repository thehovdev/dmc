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
            'formData.arrival_time' => 'required|string',
            'formData.departure_time' => 'required|string',
            'formData.arrival_date' => 'required|string',
            'formData.departure_date' => 'required|string',


            /*
            * hotel_star_3 : checkbox
            * hotel_star_4 : checkbox
            * hotel_star_5 : checkbox
            * hotel_description
            * transfer_airport : checkbox
            * transfer_during_stay : checkbox
            * cuisine_mix : checkbox
            * cuisine_local : checkbox
            * cuisine_indian : checkbox
            * cuisine_arabic : checkbox
            * cuisine_italian : checkbox 
            * cuisine_international : checkbox
            * tour_leaders_number
            * tour_leaders_language
            * excursion_options_request
            * meeting_facilities_request
            * single_min_price
            * single_max_price
            * double_min_price
            * double_max_price
            **/
            
            'formData.group_type_id' => 'required|integer',
            'formData.nationality_id' => 'required|integer',
            'formData.country_id' => 'required|integer',
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
