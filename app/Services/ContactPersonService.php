<?php

namespace App\Services;

use stdClass;
use App\Company;
use App\ContactPerson;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Http\Requests\CreateContactPersonReq;

class ContactPersonService
{
    protected $company;
    protected $contactPerson;
    protected $result;

    // type hint dependency injection
    public function __construct(
        Company $company, 
        ContactPerson $contactPerson
    ) {
        $this->company = $company;
        $this->contactPerson = $contactPerson;
        $this->result = new stdClass;
    }

    public function store(CreateContactPersonReq $request) {
        // get validated data from request parameter as object
        $formData = (object) $request->formData;

        if ($this->personExists($request) == false) {

            $this->contactPerson->name = $formData->name;
            $this->contactPerson->surname = $formData->surname;
            $this->contactPerson->suffix = $formData->suffix;
            $this->contactPerson->position = $formData->position;
            $this->contactPerson->phone = $formData->phone;
            $this->contactPerson->office_phone = $formData->office_phone;
            $this->contactPerson->email = $formData->email;
            $this->contactPerson->company_id = $formData->company_id;
            $this->contactPerson->status = 1;
            $this->contactPerson->save();

            // return success response
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            // return error responce
            $this->result->status = 0;
            $this->result->message = 'error insert person, person exists';
        }

        return $this->result;
    }

    public function update(CreateContactPersonReq $request, ContactPerson $contactPerson) {
        $formData = (object) $request->formData;

        if (!is_null($contactPerson)) {

            $this->contactPerson = $contactPerson;
            $this->contactPerson->name = $formData->name;
            $this->contactPerson->surname = $formData->surname;
            $this->contactPerson->suffix = $formData->suffix;
            $this->contactPerson->position = $formData->position;
            $this->contactPerson->phone = $formData->phone;
            $this->contactPerson->office_phone = $formData->office_phone;
            $this->contactPerson->email = $formData->email;
            $this->contactPerson->company_id = $formData->company_id;
            $this->contactPerson->save();

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

    public function destroy(ContactPerson $contactPerson) {
        $contactPerson->status = 0;
        $contactPerson->delete();

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function restore(ContactPerson $contactPerson) {
        if($contactPerson->company->status == 1) {
            $contactPerson->status = 1;
            $contactPerson->deleted_at = null;
            $contactPerson->save();
    
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            $this->result->status = 0;
            $this->result->message = 'Error, company deactivated, first activate company';
        }

        return $this->result;
    }


    public function getContactPersons(Request $request, $trashed = false) {

        if($trashed == false) {
            if(!isset($request->page)) {
                $this->result->contactPersons = $this->contactPerson->with('company')->orderByDesc('id')->get();
            } else {
                $this->result->contactPersons = $this->contactPerson->with('company')->orderByDesc('id')->paginate(10);
            }
        } else {
            if(!isset($request->page)) {
                $this->result->contactPersons = $this->contactPerson->withTrashed()->with('company')->orderByDesc('id')->get();
            } else {
                $this->result->contactPersons = $this->contactPerson->withTrashed()->with('company')->orderByDesc('id')->paginate(10);
            }
        }

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function getContactPerson(ContactPerson $contactPerson) {
        $this->result->status = 1;
        $this->result->message = 'success';
        $this->result->contactPerson = $contactPerson;
        $this->result->company = $contactPerson->company;

        return $this->result;
    }


    public function personExists(CreateContactPersonReq $request) {
        // get validated data from request parameter as object
        $formData = (object) $request->formData;

        // find company by name
        $contactPerson = $this->contactPerson->where('name', $formData->name)->first();

        //return result
        if(is_null($contactPerson)) {
            return false;
        }

        return true;
    }


 
}
