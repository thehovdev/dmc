<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class CreateCompanyReq extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        if(Auth::check()) return true;

        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        $formData = json_decode($this->get('formData'), true);

        $this->merge(['formData' => $formData]);

        $this->validate([
            'formData.name' => 'required|string',
            'formData.phone' => 'required|string',
            'formData.email' => 'required|string',
            'formData.address' => 'required|string',
            'formData.logo' => 'required',

            'formData.personName' => 'required|string',
            'formData.personPhone' => 'required|string',
            'formData.personEmail' => 'required|string',
        ]);

        return array();
    }
}
