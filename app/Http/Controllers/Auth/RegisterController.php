<?php

namespace App\Http\Controllers\Auth;


use App\Company;
use App\User;
use App\Operator;
use App\Role;
use Carbon\Carbon;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Auth\RegistersUsers;
use Illuminate\Auth\Events\Registered;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation. By default this controller uses a trait to
    | provide this functionality without requiring any additional code.
    |
    */

    use RegistersUsers;

    /**
     * Where to redirect users after registration.
     *
     * @var string
     */
    protected $redirectTo = '/cabinet';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('guest');
    }

    public function showRegistrationForm(Company $company)
    {
        $companies = $company->all();

        return view('auth.register')->with('companies', $companies);
    }

    /**
     * Get a validator for an incoming registration request.
     *
     * @param  array  $data
     * @return \Illuminate\Contracts\Validation\Validator
     */
    protected function validator(array $data)
    {

        if(isset($data['corporate'])) {
            return Validator::make($data, [
                'company' => ['required', 'integer', 'max:255'],
                'phone' => ['required', 'string', 'max:255'],
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:operators'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);
        } else {
            return Validator::make($data, [
                'name' => ['required', 'string', 'max:255'],
                'email' => ['required', 'string', 'email', 'max:255', 'unique:users'],
                'password' => ['required', 'string', 'min:8', 'confirmed'],
            ]);
        }
    }


    public function register(Request $request)
    {
        $this->validator($request->all())->validate();

        event(new Registered($user = $this->create($request->all())));

        // if registration made by operator, dont make auth in system
        if($request->filled('corporate')) return view('auth.register.operatorSuccess');

        // else if registration made by user, then make auth
        $this->guard($request)->login($user);

        return $this->registered($request, $user)
                        ?: redirect($this->redirectPath());
    }

    /**
     * Create a new user instance after a valid registration.
     *
     * @param  array  $data
     * @return \App\User
     */
    protected function create(array $data)
    {
        if($this->getGuardType($data) == 'operator') {
            return Operator::create([
                'company_id' => $data['company'],
                'phone' => $data['phone'],
                'name' => $data['name'],
                'email' => $data['email'],
                'status' => 0,
                'password' => Hash::make($data['password']),
                'role_id' => Role::whereName('operator')->first()->id,
                'deleted_at' => Carbon::today()
            ]);
        }
        return User::create([
            'name' => $data['name'],
            'email' => $data['email'],
            'status' => 1,
            'password' => Hash::make($data['password']),
            'role_id' => Role::whereName('user')->first()->id,
        ]);
    }
    
    protected function guard(Request $request)
    {
        return Auth::guard($this->getGuardType($request->all()));
    }

    public function getGuardType($data) 
    {
        return isset($data['corporate']) ? 'operator' : 'web';
    }

}
