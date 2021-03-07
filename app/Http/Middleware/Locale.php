<?php

namespace App\Http\Middleware;

use App;
use Config;
use Session;
use Closure;

class Locale
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        # Если пользователь уже был на нашем сайте, 
        # то в сессии будет значение выбранного им языка.
        $raw_locale = Session::get('locale');    
        
        # Проверяем, что у пользователя в сессии установлен доступный язык 
        if (in_array($raw_locale, Config::get('app.locales'))) {  
        # И присваиваем значение переменной $locale.
            $locale = $raw_locale;                                  
        }                           
        # В ином случае присваиваем ей язык по умолчанию                              
        else $locale = Config::get('app.locale');                 

        # Устанавливаем локаль приложения
        App::setLocale($locale);                                  

        return $next($request);
    }
}
