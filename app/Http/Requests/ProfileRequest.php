<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProfileRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'status'        => 'string|max:255',
            'user_id'       =>  'integer',
            'birthday'      =>  'required',      
            'about_user'    =>  'required',            
            'image'         =>  'image',
        ];
    }
}
