<?php

use Illuminate\Database\Seeder;

class UserTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

//user 1
        App\User::create ([
            'name'      =>  'Rafael Muñoz',
            'email'     =>  'rafaelmunoznl@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  1,
            'slug'      =>  'rafael-munoz',
        ]);

        App\Profile::create ([
            'user_id'   =>  1,
            'status'    =>  'active',
            'image'    =>   'rafael.png',
            'birthday'    =>   '1966-05-19',
            'about_user'   =>  'Rafael Muñoz Pérez (born 3 March 1988 in Córdoba) is an Olympic swimmer from Spain. He competed for the Spanish Olympic team at the 2008 Olympic Games. He is coached by Romain Barnier in France in the Cercle des Nageurs de Marseille team.',
        ]);

//user 2
        App\User::create ([
            'name'      =>  'Enrique (Kike) Muñoz Botschka',
            'email'     =>  'kike901@gmail.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  1,
            'slug'      =>  'enrique-kike-munoz-botschka',
        ]);

        App\Profile::create ([
            'user_id'   =>  2,
            'status'    =>  'active',
            'image'    =>  'kike.jpg',
            'birthday'    =>   '2007-08-23',
            'about_user'   =>  'Minions ipsum occaecat sit amet poulet tikka masala sit amet labore baboiii ut nostrud. Nisi baboiii dolor bananaaaa. Uuuhhh sit amet jiji chasy qui aute. Me want bananaaa! gelatooo poulet tikka masala chasy nisi aliqua aaaaaah. Aliquip sed consectetur butt para tú ad aute commodo. Ut aliqua pepete consequat duis enim gelatooo hahaha veniam velit bananaaaa.',
        ]);

//user 3
        App\User::create ([
            'name'      =>  'Amelie Muñoz Botschka',
            'email'     =>  'amelie@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  2,
            'slug'      =>  'amelie-munoz-botschka',
        ]);

        App\Profile::create ([
            'user_id'   =>   3,
            'status'    =>  'active',
            'image'    =>  'amelie.jpg',
            'birthday'    =>   '2005-09-29',
            'about_user'   =>  'Aliquip tatata bala tu aliqua bappleees magna et poopayee wiiiii. Hana dul sae sed exercitation reprehenderit. Adipisicing et enim commodo voluptate poulet tikka masala daa minim hahaha chasy aute. Sit amet exercitation hahaha nostrud cillum. Poopayee uuuhhh incididunt underweaaar hana dul sae enim. Consectetur qui tempor velit veniam. Tempor tempor potatoooo ti aamoo! Sed jeje velit laboris ex. Aaaaaah dolore underweaaar consectetur. ',
        ]);

//user 4
        App\User::create ([
            'name'      =>  'Pamela Rodriguez',
            'email'     =>  'prdguez@yahoo.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  2,
            'slug'      =>  'pamela-rodriguez',
        ]);

        App\Profile::create ([
            'user_id'   =>   4,
            'status'    =>  'active',
            'image'    =>  'pamela_rodriguez.jpg',
            'birthday'    =>   '1965-06-10',
            'about_user'   =>  'Pamela Denise Anderson (* 1. Juli 1967 in Ladysmith, British Columbia, Kanada) ist eine kanadisch-US-amerikanische Schauspielerin und ein Pin-up-Girl. In ihrer Rolle als Rettungsschwimmerin in der Erfolgsserie Baywatch wurde sie international zum Star. Sie gilt als das Sexsymbol der 1990er Jahre und war jahrelang die meistgeklickte Frau im Internet.',
        ]);

//user 5 
        App\User::create ([
            'name'      =>  'Arnaldo Schmidth',
            'email'     =>  'a.schmidth@smidth-and-sons.com',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  3,
            'slug'      =>  'arnaldo-schmidth',
        ]);

        App\Profile::create ([
            'user_id'   =>   5,
            'status'    =>  'active',
            'image'    =>  'arnaldo-schmidth.jpg',
            'birthday'    =>   '1977-01-11',
            'about_user'   =>  'Hahaha belloo! Jeje potatoooo. Tank yuuu! baboiii potatoooo butt uuuhhh po kass jiji la bodaaa. Me want bananaaa! jiji aaaaaah jiji para tú me want bananaaa! Jiji tank yuuu! Belloo! Chasy butt jiji uuuhhh poulet tikka masala jeje belloo! Uuuhhh la bodaaa. Belloo! hahaha tulaliloo para tú jiji poopayee. Pepete po kass bee do bee do bee do daa poulet tikka masala hana dul sae bananaaaa me want bananaaa! Ti aamoo! ',
        ]);

//user 6   
        App\User::create ([
            'name'      =>  'Miguel Strogov',
            'email'     =>  'mstrogov@stroganov.ru',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  3,
            'slug'      =>  'miguel-strogov',
        ]);

        App\Profile::create ([
            'user_id'   =>   6,
            'status'    =>  'active',
            'image'    =>  'miguel-strogov.jpg',
            'birthday'    =>   '1982-11-25',
            'about_user'   =>  'Para tú para tú bananaaaa potatoooo bappleees aaaaaah pepete hana dul sae poulet tikka masala ti aamoo! Uuuhhh aaaaaah gelatooo uuuhhh jiji hana dul sae daa aaaaaah hahaha. Ti aamoo! baboiii baboiii poopayee. Po kass potatoooo bee do bee do bee do hahaha hahaha poopayee daa pepete. Bee do bee do bee do me want bananaaa! Uuuhhh baboiii underweaaar me want bananaaa!',
        ]);

//user 7
        App\User::create ([
            'name'      =>  'Tomas Mann',
            'email'     =>  't.lee@lee.cn',
            'password'  =>  bcrypt('Password'),
            'role_id'   =>  3,
            'slug'      =>  'tomas-mann',
        ]);

        App\Profile::create ([
        	'user_id'      => 	7,
            'status'        =>  'active',
            'image'        =>  'tomas-mann',
            'birthday'      =>   '1978-03-05',
            'about_user'   =>  'Well, the way they make shows is, they make one show. That shows called a pilot. Then they show that show to the people who make shows, and on the strength of that one show they decide if they are going to make more shows. Some pilots get picked and become television programs. Some do not, become nothing. She starred in one of the ones that became nothing.',
        ]);
        
    }
}
