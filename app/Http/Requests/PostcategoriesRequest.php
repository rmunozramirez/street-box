<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PostcategoriesRequest extends FormRequest
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
                
            'title'             => 'required|max:255',
            'about_category'    => 'required',
            'slug'              => 'string|max:255',
            'subtitle'          => 'max:255',
            'excerpt'           => 'max:255',        
            'image'             => 'image',
            'status_id'     =>  'required|integer',
            
        ];
    }
}
