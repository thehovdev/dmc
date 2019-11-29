<?php

namespace App\Services;

use stdClass;
use App\User;
use App\Operator;
use App\Reserve;
use App\DeclinedReserve;
use App\RespondedReserve;
use App\HotelStar;
use App\CuisineType;
use App\Transfer;
use App\Services\AuthService;
use Illuminate\Http\Request;
use App\Http\Requests\ReservePostReq;
use App\Http\Requests\RespondReserveReq;
use Illuminate\Support\Facades\Auth;

class ReserveService
{
    protected $reserve;
    protected $declinedReserve;
    protected $respondedReserve;
    protected $result;

    // dependency injection
    public function __construct(
        Reserve $reserve, 
        DeclinedReserve $declinedReserve, 
        RespondedReserve $respondedReserve
    ) {
        $this->reserve = $reserve;
        $this->declinedReserve = $declinedReserve;
        $this->respondedReserve = $respondedReserve;
        $this->result = new stdClass;
    }

    // create reserve by user
    public function store(
        ReservePostReq $request
    ) {
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
        $this->reserve->triple_min_price = (float)$formData->triple_min_price;
        $this->reserve->triple_max_price = (float)$formData->triple_max_price;

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

    // respont to reserve by operator
    public function respond(
        Reserve $reserve,
        RespondReserveReq $request,
        AuthService $authService
    ) {
        $formData = (object) $request->formData;

        $operator = $authService->loggedOperator();

        $this->respondedReserve->reserve_id = $reserve->id;
        $this->respondedReserve->operator_id = $operator->id;

        $this->respondedReserve->hotel_name = $formData->hotel_name;
        $this->respondedReserve->vehicle_name = $formData->vehicle_name;
        $this->respondedReserve->offered_tours = $formData->offered_tours;
        $this->respondedReserve->currency = $formData->currency;

        $this->respondedReserve->single_price = (float)$formData->single_price;
        $this->respondedReserve->double_price = (float)$formData->double_price;
        $this->respondedReserve->triple_price = (float)$formData->triple_price;
        $this->respondedReserve->save();

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;

    }

    public function updateRespond(
        Reserve $reserve,
        RespondReserveReq $request,
        AuthService $authService
    ) {
        $formData = (object) $request->formData;

        $operator = $authService->loggedOperator();

        $this->respondedReserve = $reserve->responded($operator);
        $this->respondedReserve->reserve_id = $reserve->id;
        $this->respondedReserve->operator_id = $operator->id;

        $this->respondedReserve->hotel_name = $formData->hotel_name;
        $this->respondedReserve->vehicle_name = $formData->vehicle_name;
        $this->respondedReserve->offered_tours = $formData->offered_tours;
        $this->respondedReserve->currency = $formData->currency;

        $this->respondedReserve->single_price = (float)$formData->single_price;
        $this->respondedReserve->double_price = (float)$formData->double_price;
        $this->respondedReserve->triple_price = (float)$formData->triple_price;
        $this->respondedReserve->save();

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    // decline reserve by operator
    public function decline(
        Reserve $reserve, 
        AuthService $authService
    ) {
        // get logged operator
        $operator = $authService->loggedOperator();

        $existReserve = $this->declinedReserve
            ->where('reserve_id', $reserve->id)
            ->where('operator_id', $operator->id)
            ->first();

        if(is_null($existReserve)) {
            $this->declinedReserve->reserve_id = $reserve->id;
            $this->declinedReserve->operator_id = $operator->id;
            $this->declinedReserve->save();

            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            $this->result->status = 0;
            $this->result->message = 'reserve already declined';
        }

        return $this->result;
    }

    // respond to reserve by operator 
    public function restore(
        Reserve $reserve, 
        AuthService $authService
    ) {
        // get logged operator
        $operator = $authService->loggedOperator();

        $existReserve = $this->declinedReserve
            ->where('reserve_id', $reserve->id)
            ->where('operator_id', $operator->id)
            ->first();

        if(!is_null($existReserve)) {
            $existReserve->delete();
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            $this->result->status = 0;
            $this->result->message = 'reserve already restored';
        }

        return $this->result;
    }

    // get all reserves (pending)
    public function getReserves(
        Request $request, 
        AuthService $authService
    ) {
        $loggedAccount = $authService->loggedAccount();
        $reserves = $this->reserve->with(['group_type', 'age_range', 'nationality', 'country']);
            
        // list ofdeclined && responded reserve ids
        if(!is_null($loggedAccount->declinedReserves)) {
            $declinedReserves = $loggedAccount->declinedReserves->pluck('reserve_id')->toArray();
            $reserves = $reserves->whereNotIn('id', $declinedReserves);
        }

        if(!is_null($loggedAccount->respondedReserves)) {
            $respondedReserves = $loggedAccount->respondedReserves->pluck('reserve_id')->toArray();
            $reserves = $reserves->whereNotIn('id', $respondedReserves);
        }

        if(!isset($request->page)) {
            $reserves = $reserves->get();
        } else {
            $reserves = $reserves->paginate(10);
        }

        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->reserves = $reserves;

        return $this->result;
    } 

    // get responded reserves (responded)
    public function getRespondedReserves(
        AuthService $authService,
        Request $request
    ) {
        $operator = $authService->loggedOperator();
        
        $respondedList = $this->respondedReserve
            ->where('operator_id', $operator->id)
            ->get('reserve_id')
            ->toArray();

        $reserves = $this->reserve
            ->whereIn('id', $respondedList)
            ->with(['group_type', 'age_range', 'nationality', 'country']);

        if(!isset($request->page)) {
            $reserves = $reserves->get();
        } else {
            $reserves = $reserves->paginate(10);
        }

        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->reserves = $reserves;

        return $this->result;
    }

    // get declined reserves (declined)
    public function getDeclinedReserves(
        AuthService $authService,
        Request $request
    ) {
        $operator = $authService->loggedOperator();
        
        $declinedList = $this->declinedReserve
            ->where('operator_id', $operator->id)
            ->get('reserve_id')
            ->toArray();

        $reserves = $this->reserve
            ->whereIn('id', $declinedList)
            ->with(['group_type', 'age_range', 'nationality', 'country']);

        if(!isset($request->page)) {
            $reserves = $reserves->get();
        } else {
            $reserves = $reserves->paginate(10);
        }

        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->reserves = $reserves;

        return $this->result;
    }

    public function getReserve(
        Reserve $reserve, 
        HotelStar $hotelStar, 
        CuisineType $cuisineType,
        Transfer $transfer
    ) {

        $this->result->status = 1;
        $this->result->message = 'success';
        // set reserve and his relations to result
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

    public function getRespondedReserve(
        Reserve $reserve, 
        HotelStar $hotelStar, 
        CuisineType $cuisineType,
        Transfer $transfer,
        AuthService $authService
    ) {
        $operator = $authService->loggedOperator();

        $this->result->status = 1;
        $this->result->message = 'success';
        // set reserve and his relations to result
        $this->result->reserve = $reserve;
        $this->result->reserve->group_type = $reserve->group_type;
        $this->result->reserve->age_range = $reserve->age_range;
        $this->result->reserve->nationality = $reserve->nationality;
        $this->result->reserve->country = $reserve->country;
        $this->result->reserve->responded = $reserve->responded($operator);

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


}
