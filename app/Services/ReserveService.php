<?php

namespace App\Services;

use stdClass;
use App\Reserve;

class ReserveService
{
    public function store($formData) {
        $reserve = new Reserve;

        // $hotel_star_id_list = $this->getHotelStarsList($formData);


       
        $hotel_stars = json_encode($formData->hotel_stars);
        $tranports = json_encode($formData->tranports);
        $cuisines = json_encode($formData->cuisiness);


        dd($cuisines);

        // dd($hotel_star_id_list);


        // date & time data
        $reserve->arrival_date = date('Y-m-d', strtotime($formData->arrival_date));
        $reserve->departure_date = date('Y-m-d', strtotime($formData->departure_date));
        $reserve->arrival_time = $formData->arrival_time;
        $reserve->departure_time = $formData->departure_time;

        // integer data

        $reserve->group_type_id = (int)$formData->group_type_id;
        $reserve->country_id = (int)$formData->country_id;
        $reserve->nationality_id = (int)$formData->nationality_id;
        $reserve->age_range_id = (int)$formData->age_range_id;
        // $reserve->hotel_star_id_list = (int)$formData->hotel_star_id;
        // $reserve->cuisine_id_list = (int)$formData->cuisine_id;
        // $reserve->transfer_id_list = (int)$formData->transfer_id_list;

        $reserve->number_of_tourleaders = (int)$formData->number_of_tourleaders;
        $reserve->number_of_people = (int)$formData->number_of_people;
        
        $reserve->single_min_price = (float)$formData->single_min_price;
        $reserve->single_max_price = (float)$formData->single_max_price;
        $reserve->double_min_price = (float)$formData->double_min_price;
        $reserve->double_max_price = (float)$formData->double_max_price;

        


        // boolean data
        $reserve->need_visa = (boolean)$formData->need_visa;
        $reserve->need_hotel = (boolean)$formData->need_hotel;
        $reserve->need_transport = (boolean)$formData->need_transport;
        $reserve->need_cuisine = (boolean)$formData->need_cuisine;
        $reserve->need_tour_leader = (boolean)$formData->need_tour_leader;
        $reserve->need_excursion_options = (boolean)$formData->need_excursion_options;
        $reserve->need_meeting_facilities = (boolean)$formData->need_meeting_facilities;
        $reserve->need_guide = (boolean)$formData->need_guide;

        $reserve->email = $formData->email;
        $reserve->language_of_tourleaders = $formData->language_of_tourleaders;
        $reserve->excursion_options_description = $formData->excursion_options_description;
        $reserve->meeting_facilities_description = $formData->meeting_facilities_description;
        $reserve->hotel_description = $formData->hotel_description;
        $reserve->additional_request = $formData->additional_request;
        $reserve->save();

        $data = new stdClass;
        $data->status = 1;
        $data->message = 'success';

        return $data;
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
