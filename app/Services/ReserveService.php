<?php

namespace App\Services;

use stdClass;
use App\Reserve;
use App\HotelStar;
use App\CuisineType;
use App\Transfer;
use Illuminate\Http\Request;
use App\Http\Requests\ReservePostReq;

class ReserveService
{
    protected $reserve;
    protected $result;

    // dependency injection
    public function __construct(Reserve $reserve) {
        $this->reserve = $reserve;
        $this->result = new stdClass;
    }

    public function store(ReservePostReq $request) {
        $formData = (object) $request->formData;

        // date & time data
        $this->reserve->arrival_date = date('Y-m-d', strtotime($formData->arrival_date));
        $this->reserve->departure_date = date('Y-m-d', strtotime($formData->departure_date));
        $this->reserve->arrival_time = $formData->arrival_time;
        $this->reserve->departure_time = $formData->departure_time;

        // optional fields (checkbox)
        if($formData->need_hotel == 'true') {
            $this->reserve->hotel_star_id_list = json_encode($formData->hotel_star_id_list);
            $this->reserve->hotel_description = $formData->hotel_description;
        }

        if($formData->need_tour_leader == 'true') {
            $this->reserve->number_of_tourleaders = (int)$formData->number_of_tourleaders;
            $this->reserve->language_of_tourleaders = $formData->language_of_tourleaders;
        }

        if($formData->need_cuisine == 'true') 
            $this->reserve->cuisine_id_list = json_encode($formData->cuisine_id_list);

        if($formData->need_transfer == 'true') 
            $this->reserve->transfer_id_list = json_encode($formData->transfer_id_list);

        if($formData->need_excursion_options == 'true') 
            $this->reserve->excursion_options_description = $formData->excursion_options_description;

        if($formData->need_meeting_facilities == 'true') 
            $this->reserve->meeting_facilities_description = $formData->meeting_facilities_description;



        // integer data
        $this->reserve->group_type_id = (int)$formData->group_type_id;
        $this->reserve->country_id = (int)$formData->country_id;
        $this->reserve->nationality_id = (int)$formData->nationality_id;
        $this->reserve->age_range_id = (int)$formData->age_range_id;
        $this->reserve->number_of_people = (int)$formData->number_of_people;

        
        // float Data
        $this->reserve->single_min_price = (float)$formData->single_min_price;
        $this->reserve->single_max_price = (float)$formData->single_max_price;
        $this->reserve->double_min_price = (float)$formData->double_min_price;
        $this->reserve->double_max_price = (float)$formData->double_max_price;

        // boolean data
        $this->reserve->need_visa = (boolean)$formData->need_visa;
        $this->reserve->need_hotel = (boolean)$formData->need_hotel;
        $this->reserve->need_transfer = (boolean)$formData->need_transfer;
        $this->reserve->need_cuisine = (boolean)$formData->need_cuisine;
        $this->reserve->need_tour_leader = (boolean)$formData->need_tour_leader;
        $this->reserve->need_excursion_options = (boolean)$formData->need_excursion_options;
        $this->reserve->need_meeting_facilities = (boolean)$formData->need_meeting_facilities;

        // string data
        $this->reserve->email = $formData->email;
        $this->reserve->additional_request = $formData->additional_request;
        $this->reserve->save();

        // result
        $result = new stdClass;
        $result->status = 1;
        $result->message = 'success';

        return $result;
    }

    public function getReserves(Request $request) {

        $reserves = $this->reserve->with(['group_type', 'age_range', 'nationality', 'country']);

        if(!isset($request->page)) {
            return $reserves->get();
        }

        return $reserves->paginate(10);
    } 

    public function getReserve(
        Reserve $reserve, 
        HotelStar $hotelStar, 
        CuisineType $cuisineType,
        Transfer $transfer
    ) {

        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->reserve = $reserve;
        $this->result->reserve->group_type = $reserve->group_type;
        $this->result->reserve->age_range = $reserve->age_range;
        $this->result->reserve->nationality = $reserve->nationality;
        $this->result->reserve->country = $reserve->country;

        
        if(!is_null($reserve->hotel_star_id_list)) {
            $this->result->reserve->hotel_stars = $hotelStar->whereIn(
                'id', json_decode($reserve->hotel_star_id_list, true)
            )->get();
        }

        if(!is_null($reserve->cuisine_id_list)) {
            $this->result->reserve->cuisine_list = $cuisineType->whereIn(
                'id', json_decode($reserve->cuisine_id_list, true)
            )->get();
        }

        if(!is_null($reserve->transfer_id_list)) {
            $this->result->reserve->transfer_list = $transfer->whereIn(
                'id', json_decode($reserve->transfer_id_list, true)
            )->get();
        }

        return $this->result;
    }

    public function show() {

    }

    public function destroy() {
        
    }

}
