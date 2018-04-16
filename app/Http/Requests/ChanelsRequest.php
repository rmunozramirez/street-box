<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ChanelsRequest extends FormRequest
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

            'subcategory_id' =>  'required|integer',
            'profile_id'    =>  'integer',
            'status'        => 'string|max:255',
            'title'         => 'required|max:255',
            'slug'          => 'string|max:255',      
            'subtitle'      => 'required|string|max:255',
            'excerpt'       => 'string|max:255',
            'about_chanel'  => 'required',            
            'image'         => 'image',
            'video'         => 'string|max:255',
            'is_featured'   => 'boolean',
            'likes'         => 'integer',
            'is_testimonial'=> 'boolean',          
            'web'           => 'string|max:255',
            'facebook'      => 'string|max:255',
            'googleplus'    => 'string|max:255',
            'twitter'       => 'string|max:255',
            'linkedin'      => 'string|max:255',
            'youtube'       => 'string|max:255',

        ];
    }
}
