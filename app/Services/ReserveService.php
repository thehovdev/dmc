<?php

namespace App\Services;

use stdClass;
use App\User;
use App\Operator;
use App\AgeRange;
use App\Reserve;
use App\Nationality;
use App\Country;
use App\DeclinedReserve;
use App\RespondedReserve;
use App\HotelStar;
use App\CuisineType;
use App\GroupType;
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
    protected $authService;
    protected $hotelStar;
    protected $transfer;
    protected $cuisineType;
    protected $groupType;
    protected $ageRange;
    protected $result;
    protected $nationality;
    protected $country;

    // dependency injection
    public function __construct(
        Reserve $reserve, 
        DeclinedReserve $declinedReserve, 
        RespondedReserve $respondedReserve,
        AuthService $authService,
        HotelStar $hotelStar,
        CuisineType $cuisineType,
        GroupType $groupType,
        Transfer $transfer,
        AgeRange $ageRange,
        Country $country,
        Nationality $nationality
    ) {
        $this->result = new stdClass;
        $this->authService = $authService;
        $this->reserve = $reserve;
        $this->declinedReserve = $declinedReserve;
        $this->respondedReserve = $respondedReserve;
        $this->hotelStar = $hotelStar;
        $this->cuisineType = $cuisineType;
        $this->groupType = $groupType;
        $this->transfer = $transfer;
        $this->ageRange = $ageRange;
        $this->country = $country;
        $this->nationality = $nationality;
    }

    // create reserve by user
    public function store(
        ReservePostReq $request
    ) {
        $formData = (object) $request->formData;
        $loggedUser = $this->authService->loggedUser();
        
        // date & time data
        $this->reserve->user_id = $loggedUser->id;
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
        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    // respont to reserve by operator
    public function respond(
        Reserve $reserve,
        RespondReserveReq $request
    ) {
        $formData = (object) $request->formData;

        $operator = $this->authService->loggedOperator();

        $this->respondedReserve->user_id = $reserve->user_id;
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
        RespondReserveReq $request
    ) {
        $formData = (object) $request->formData;

        $operator = $this->authService->loggedOperator();

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
        Reserve $reserve
    ) {
        // get logged operator
        $operator = $this->authService->loggedOperator();

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
        Reserve $reserve
    ) {
        // get logged operator
        $operator = $this->authService->loggedOperator();

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
        Request $request
    ) {
        $loggedAccount = $this->authService->loggedOperator();
        $reserves = $this->reserve->with(['group_type', 'age_range', 'nationality', 'country']);
            
        // list of declined reserves by operator
        if(!is_null($loggedAccount->declinedReserves)) {
            $declinedReserves = $loggedAccount->declinedReserves->pluck('reserve_id')->toArray();
            $reserves = $reserves->whereNotIn('id', $declinedReserves);
        }

        // list of responded reserves by operator
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

    public function getReservesByUser(
        Request $request
    ) {
        $loggedAccount = $this->authService->loggedUser();
        $reserves =  $this->reserve
            ->with(['group_type', 'age_range', 'nationality', 'country'])
            ->where('user_id', $loggedAccount->id);

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
        Request $request
    ) {
        $operator = $this->authService->loggedOperator();
        
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
        Request $request
    ) {
        $operator = $this->authService->loggedOperator();
        
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
        Reserve $reserve
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
            $this->result->reserve->hotel_stars = $this->hotelStar->whereIn(
                'id', json_decode($reserve->hotel_star_id_list, true)
            )->get();
        }

        if(!is_null($reserve->cuisine_id_list)) {
            $this->result->reserve->cuisine_list = $this->cuisineType->whereIn(
                'id', json_decode($reserve->cuisine_id_list, true)
            )->get();
        }

        if(!is_null($reserve->transfer_id_list)) {
            $this->result->reserve->transfer_list = $this->transfer->whereIn(
                'id', json_decode($reserve->transfer_id_list, true)
            )->get();
        }

        return $this->result;
    }

    public function getReserveByUser(
        Reserve $reserve,
        Request $request
    ) {
        $loggedAccount = $this->authService->loggedUser();

        $this->result->status = 1;
        $this->result->message = 'success';
        // set reserve and his relations to result
        $this->result->reserve = $reserve;
        $this->result->reserve->group_type = $reserve->group_type;
        $this->result->reserve->age_range = $reserve->age_range;
        $this->result->reserve->nationality = $reserve->nationality;
        $this->result->reserve->country = $reserve->country;

        $respondedReserves = $reserve
            ->responded_reserves()
            ->where('user_id', $loggedAccount->id);

        if(!isset($request->page)) {
            $this->result->reserve->responded_reserves = $respondedReserves
                ->with('operator.company.contactPersons')    
                ->get();
        } else {
            $this->result->reserve->responded_reserves = $respondedReserves
                ->with('operator.company.contactPersons')    
                ->paginate(10);
        }

        if(!is_null($reserve->hotel_star_id_list)) {
            $this->result->reserve->hotel_stars = $this->hotelStar->whereIn(
                'id', json_decode($reserve->hotel_star_id_list, true)
            )->get();
        }

        if(!is_null($reserve->cuisine_id_list)) {
            $this->result->reserve->cuisine_list = $this->cuisineType->whereIn(
                'id', json_decode($reserve->cuisine_id_list, true)
            )->get();
        }

        if(!is_null($reserve->transfer_id_list)) {
            $this->result->reserve->transfer_list = $this->transfer->whereIn(
                'id', json_decode($reserve->transfer_id_list, true)
            )->get();
        }

        return $this->result;

    }

    public function getRespondedReserve(
        Reserve $reserve
    ) {
        $operator = $this->authService->loggedOperator();

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
            $this->result->reserve->hotel_stars = $this->hotelStar->whereIn(
                'id', json_decode($reserve->hotel_star_id_list, true)
            )->get();
        }

        if(!is_null($reserve->cuisine_id_list)) {
            $this->result->reserve->cuisine_list = $this->cuisineType->whereIn(
                'id', json_decode($reserve->cuisine_id_list, true)
            )->get();
        }

        if(!is_null($reserve->transfer_id_list)) {
            $this->result->reserve->transfer_list = $this->transfer->whereIn(
                'id', json_decode($reserve->transfer_id_list, true)
            )->get();
        }

        return $this->result;

    }


    public function getStepParameters() {
        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->nationalities = $this->nationality->all();
        $this->result->hotelStars = $this->hotelStar->all();
        $this->result->ageRange = $this->ageRange->all();
        $this->result->cuisineTypes = $this->cuisineType->all();
        $this->result->groupTypes = $this->groupType->all();
        $this->result->countries = $this->country->all();
        $this->result->transfers = $this->transfer->all();

        return $this->result;
    }



}
