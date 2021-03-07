<?php

namespace App\Services;

use stdClass;
use App\Role;
use App\Company;
use App\Operator;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CreateOperatorReq;
use App\Http\Requests\UpdateOperatorReq;

class OperatorService
{
    protected $company;
    protected $operator;
    protected $result;

    // type hint dependency injection
    public function __construct(
        Company $company, 
        Operator $operator
    ) {
        $this->company = $company;
        $this->operator = $operator;
        $this->result = new stdClass;
    }

    public function store(CreateOperatorReq $request) {
        // get validated data from request parameter as object
        $formData = (object) $request->formData;

        if ($this->operatorExists($request) == false) {
            $this->operator->name = $formData->name;
            $this->operator->phone = $formData->phone;
            $this->operator->email = $formData->email;
            $this->operator->company_id = $formData->company_id;
            $this->operator->role_id = Role::whereName('operator')->first()->id;
            $this->operator->password = Hash::make($formData->password);
            $this->operator->status = 1;
            $this->operator->save();

            // return success response
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            // return error responce
            $this->result->status = 0;
            $this->result->message = 'error insert operator, operator exists';
        }

        return $this->result;
    }

    public function update(UpdateOperatorReq $request, Operator $operator) {
        $formData = (object) $request->formData;

        if (!is_null($operator)) {

            $this->operator = $operator;

            if($formData->password != 'null') 
                $this->operator->password = Hash::make($formData->password);

            $this->operator->name = $formData->name;
            $this->operator->phone = $formData->phone;
            $this->operator->email = $formData->email;
            $this->operator->company_id = $formData->company_id;
            $this->operator->save();

            // return success response
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            // return error responce
            $this->result->status = 0;
            $this->result->message = 'error insert company, company exists';
        }

        return $this->result;
    }

    public function destroy(Operator $operator) {

        $operator->delete();
        
        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function restore(Operator $operator) {
        if($operator->company->status == 1) {
            $operator->status = 1;
            $operator->deleted_at = null;
            $operator->save();

            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            $this->result->status = 0;
            $this->result->message = 'Error, company deactivated, first activate company';
        }

        return $this->result;
    }


    public function getOperators(Request $request, $trashed = false) {

        if($trashed == false) {
            if(!isset($request->page)) {
                $this->result->operators = $this->operator->with('company')->orderByDesc('id')->get();
            } else {
                $this->result->operators = $this->operator->with('company')->orderByDesc('id')->paginate(10);
            }
        } else {
            if(!isset($request->page)) {
                $this->result->operators = $this->operator->withTrashed()->with('company')->orderByDesc('id')->get();
            } else {
                $this->result->operators = $this->operator->withTrashed()->with('company')->orderByDesc('id')->paginate(10);
            }
        }

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }


    public function getOperator(Operator $operator) {
        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->operator = $operator;
        $this->result->company = $operator->company;

        return $this->result;
    }


    public function operatorExists(CreateOperatorReq $request) {
        // get validated data from request parameter as object
        $formData = (object) $request->formData;

        // find company by name
        // $operator = $this->operator->where('name', $formData->name)->first();
        $operator = $this->operator->where('email', $formData->email)->first();

        //return result
        if(is_null($operator)) {
            return false;
        }

        return true;
    }


 
}
