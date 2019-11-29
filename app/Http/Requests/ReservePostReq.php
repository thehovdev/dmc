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
            'formData.arrival_date' => 'required|string',
            'formData.departure_date' => 'required|string',
            'formData.arrival_time' => 'required|string',
            'formData.departure_time' => 'required|string',

            'formData.group_type_id' => 'required|integer',
            'formData.nationality_id' => 'required|integer',
            'formData.country_id' => 'required|integer',
            'formData.age_range_id' => 'required|integer',

            'formData.need_visa' => ['required', $rule->in(['true', 'false'])],
            'formData.need_hotel' => ['required', $rule->in(['true', 'false'])],
            'formData.need_transfer' => ['required', $rule->in(['true', 'false'])],
            'formData.need_cuisine' => ['required', $rule->in(['true', 'false'])],
            'formData.need_tour_leader' => ['required', $rule->in(['true', 'false'])],
            'formData.need_excursion_options' => ['required', $rule->in(['true', 'false'])],
            'formData.need_meeting_facilities' => ['required', $rule->in(['true', 'false'])],
        ]);

        return array();
    }
}
