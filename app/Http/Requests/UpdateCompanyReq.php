<?php

namespace App\Http\Requests;

use Auth;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Foundation\Http\FormRequest;

class UpdateCompanyReq extends FormRequest
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
            'formData.email' => 'required|string',
            'formData.address' => 'required|string',
        ]);

        return array();
    }
}
