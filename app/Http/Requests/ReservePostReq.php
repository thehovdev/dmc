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

        dd($formData);

        // if(!isset($formData['hotels_stars'])) $formData['hotel_stars'] = null;
        // if(!isset($formData['transports'])) $formData['transports'] = null;
        // if(!isset($formData['cuisines'])) $formData['cuisines'] = null;




        // local testing url
        //http://dmc.dev/reserve/store?formData=%7B%22hotel_stars%22:[%221%22,%222%22],%22transports%22:[%221%22,%222%22],%22cuisines%22:[%221%22,%222%22,%223%22],%22arrival_date%22:%222019-09-27%22,%22departure_date%22:%222019-09-27%22,%22arrival_time%22:%2219:00%22,%22departure_time%22:%2219:00%22,%22number_of_people%22:%221%22,%22group_type_id%22:%221%22,%22country_id%22:%221%22,%22nationality_id%22:%221%22,%22age_range_id%22:%221%22,%22need_visa%22:%22false%22,%22need_hotel%22:%22true%22,%22hotel_description%22:%22description+hotel%22,%22need_transport%22:%22true%22,%22need_cuisine%22:%22true%22,%22need_tour_leader%22:%22true%22,%22number_of_tourleaders%22:%221%22,%22language_of_tourleaders%22:%22English%22,%22need_excursion_options%22:%22true%22,%22excursion_options_description%22:%22Some+description%22,%22need_meeting_facilities%22:%22true%22,%22meeting_facilities_description%22:%22Some+description%22,%22need_guide%22:%22false%22,%22email%22:%22halilov.lib@gmail.com%22,%22single_min_price%22:%22100%22,%22single_max_price%22:%22150%22,%22double_min_price%22:%22150%22,%22double_max_price%22:%22200%22,%22additional_request%22:%22description+for+missed+part.%22%7D

        $this->merge(['formData' => $formData]);

        $this->validate([
            'formData.arrival_time' => 'required|string',
            'formData.departure_time' => 'required|string',
            'formData.arrival_date' => 'required|string',
            'formData.departure_date' => 'required|string',

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
