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
            'user_id'       =>  'integer',
            'chanel_id'     =>  'integer',
            'first_name'    =>  'required|string|max:255',
            'last_name'     =>  'required|string|max:255',
            'birthday'      =>  'required',
            'slug'          =>  'string|max:255',      
            'about_user'    =>  'required',            
            'image'         =>  'image',
        ];
    }
}
