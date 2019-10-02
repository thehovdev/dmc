<?php

namespace App\Services;

use stdClass;
use App\Reserve;
use App\Http\Requests\ReservePostReq;

class ReserveService
{
    protected $reserve;

    // dependency injection
    public function __construct(Reserve $reserve) {
        $this->reserve = $reserve;
    }

    public function store(ReservePostReq $request) {
        $formData = (object) $request->formData;
        
        // foreach($formData as $key => $value) {
        //     $json_fields = ['cuisine_id_list', 'hotel_star_id_list', 'transport_id_list'];
        //     $timestamp_fields = ['arrival_date', 'departure_date'];

        //     if(in_array($value, $json_fields)) {
        //         $this->$reserve->key = json_encode($value);
        //     } elseif (in_array($value, $timestamp_fields)) {
        //         $this->$reserve->key = date('Y-m-d', strtotime($value));
        //     } else {
        //         $this->$reserve->key = $value;
        //     }
        // }
        // $this->reserve->save();





        // date & time data
        $this->reserve->arrival_date = date('Y-m-d', strtotime($formData->arrival_date));
        $this->reserve->departure_date = date('Y-m-d', strtotime($formData->departure_date));
        $this->reserve->arrival_time = $formData->arrival_time;
        $this->reserve->departure_time = $formData->departure_time;

        // json data
        if(!is_null($formData->hotel_star_id_list)) 
            $this->reserve->hotel_star_id_list = json_encode($formData->hotel_star_id_list);
        if(!is_null($formData->cuisine_id_list)) 
            $this->reserve->cuisine_id_list = json_encode($formData->cuisine_id_list);
        if(!is_null($formData->transport_id_list)) 
            $this->reserve->transport_id_list = json_encode($formData->transport_id_list);


        // integer data
        $this->reserve->group_type_id = (int)$formData->group_type_id;
        $this->reserve->country_id = (int)$formData->country_id;
        $this->reserve->nationality_id = (int)$formData->nationality_id;
        $this->reserve->age_range_id = (int)$formData->age_range_id;
        $this->reserve->number_of_tourleaders = (int)$formData->number_of_tourleaders;
        $this->reserve->number_of_people = (int)$formData->number_of_people;
        
        // float Data
        $this->reserve->single_min_price = (float)$formData->single_min_price;
        $this->reserve->single_max_price = (float)$formData->single_max_price;
        $this->reserve->double_min_price = (float)$formData->double_min_price;
        $this->reserve->double_max_price = (float)$formData->double_max_price;

        // boolean data
        $this->reserve->need_visa = (boolean)$formData->need_visa;
        $this->reserve->need_hotel = (boolean)$formData->need_hotel;
        $this->reserve->need_transport = (boolean)$formData->need_transport;
        $this->reserve->need_cuisine = (boolean)$formData->need_cuisine;
        $this->reserve->need_tour_leader = (boolean)$formData->need_tour_leader;
        $this->reserve->need_excursion_options = (boolean)$formData->need_excursion_options;
        $this->reserve->need_meeting_facilities = (boolean)$formData->need_meeting_facilities;
        $this->reserve->need_guide = (boolean)$formData->need_guide;

        // string data
        $this->reserve->email = $formData->email;
        $this->reserve->language_of_tourleaders = $formData->language_of_tourleaders;
        $this->reserve->excursion_options_description = $formData->excursion_options_description;
        $this->reserve->meeting_facilities_description = $formData->meeting_facilities_description;
        $this->reserve->hotel_description = $formData->hotel_description;
        $this->reserve->additional_request = $formData->additional_request;
        $this->reserve->save();

        // result
        $result = new stdClass;
        $result->status = 1;
        $result->message = 'success';

        return $result;
    }


    // public function getHotelStarsList($formData) {
    //     // formattedData
    //     $data = []; 

    //     // default stars list
    //     $list = ['']; 

    //     foreach($list as $item) {
    //         if(isset($formData->$item)) array_push($data, (int)$formData->$item);        
    //     }

    //     return $data;
    // }
}
