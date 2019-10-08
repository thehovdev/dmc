<?php

namespace App\Services;

use stdClass;
use App\Company;
use App\ContactPerson;
use Illuminate\Http\Request;
use App\Http\Requests\CreateCompanyReq;
use App\Http\Requests\UpdateCompanyReq;
use Illuminate\Support\Facades\Storage;

class CompanyService
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

    public function store(CreateCompanyReq $request) {
        // get validated data from request parameter as object
        $formData = (object) $request->formData;

        // if company with this name not exists
        if($this->companyExists($request) == false) {
            // get uploaded logo file
            $logoData = $request->file('logo');
            $logoPath = Storage::putFile('public/company/logo', $logoData);
            $logoName = basename($logoPath);

            // save data to companies table
            $this->company->email = $formData->email;
            $this->company->name = $formData->name;
            $this->company->address = $formData->address;
            $this->company->logo = $logoName;
            $this->company->save();

            // save data to contact_persons table with company_id
            $this->contactPerson->name = $formData->personName;
            $this->contactPerson->phone = $formData->personPhone;
            $this->contactPerson->email = $formData->personEmail;
            $this->contactPerson->company_id = $this->company->id;
            $this->contactPerson->save();

            // return success responce
            $this->result->status = 1;
            $this->result->message = 'success';
        } else {
            // return error responce
            $this->result->status = 0;
            $this->result->message = 'error insert company, company exists';
        }

        return $this->result;
    }

    public function update(Company $company, UpdateCompanyReq $request) {
        $formData = (object) $request->formData;

        // get updated company fields
        $this->company = $company;
        $this->company->name = $formData->name;
        $this->company->email = $formData->email;
        $this->company->address = $formData->address;
        // update logo if exists in request
        if(!is_null($request->file('logo'))) 
            $this->company->logo = $this->updateLogo($request, $company);

        // update company fields in database
        $this->company->save();

        // return result
        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function destroy(Company $company) {
        $company->delete();

        $this->result->status = 1;
        $this->result->message = 'success';

        return $this->result;
    }

    public function companyExists(CreateCompanyReq $request) {
        // get validated data from request parameter as object
        $formData = (object) $request->formData;

        // find company by name
        $company = $this->company->where('name', $formData->name)->first();

        //return result
        if(is_null($company)) {
            return false;
        }

        return true;
    }

    public function getCompanies(Request $request) {

        if(!isset($request->page)) {
            return $this->company->orderByDesc('id')->get();
        }

        return $this->company->orderByDesc('id')->paginate(2);
    }

    public function updateLogo($request, $company) {

        // upload new logo if exists
        if(!is_null($request->file('logo'))) {
            // delete old logo if exists
            if(!is_null($company->logo)) {
                Storage::delete("public/company/logo/" . $company->logo); 
            }

            // upload and save new logo
            $logoData = $request->file('logo');
            $logoPath = Storage::putFile('public/company/logo', $logoData);
            $logoName = basename($logoPath);

            // save logo name to database
            return $logoName;
        }


    }
 
}
