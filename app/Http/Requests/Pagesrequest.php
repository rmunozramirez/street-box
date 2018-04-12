<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class Pagesrequest extends FormRequest
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

            'status'            => 'string|max:255',
            'title'             => 'required|max:255',
            'slug'              => 'string|max:255',  
            'subtitle'          => 'required|string|max:255',
            'excerpt'           => 'string|max:255',    
            'body'              => 'required',  
            'image'             => 'image',

        ];
    }
}
