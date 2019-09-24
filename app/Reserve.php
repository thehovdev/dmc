<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use stdClass;

class Reserve extends Model
{
    public function createReserve($formData) {

        // date & time data
        $this->arrival_date = $formData->arrival_date;
        $this->departure_date = $formData->departure_date;
        $this->arrival_time = $formData->arrival_time;
        $this->departure_time = $formData->departure_time;

        // integer data
        $this->group_type_id = (int)$formData->group_type_id;
        $this->nationality_id = (int)$formData->nationality_id;
        $this->age_range_id = (int)$formData->age_range_id;
        // $this->hotel_star_id = (int)$formData->hotel_star_id;
        // $this->cuisine_id = (int)$formData->cuisine_id;

        // boolean data
        $this->need_transport = (boolean)$formData->need_transport;
        $this->need_guide = (boolean)$formData->need_guide;
        // $this->need_tour_options = (boolean)$formData->need_tour_options;
        $this->need_meeting_facilities = (boolean)$formData->need_meeting_facilities;

        $this->email = $formData->email;
        $this->additional_request = $formData->additional_request;
        $this->save();

        $data = new stdClass;
        $data->status = 1;
        $data->message = 'success';

        return $data;
    }
}
