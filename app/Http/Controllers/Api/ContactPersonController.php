<?php

namespace App\Http\Controllers\Api;

use Illuminate\Http\Request;

use stdClass;
use App\ContactPerson;
use App\Http\Controllers\Controller;
use App\Services\ContactPersonService;
use App\Http\Requests\CreateContactPersonReq;

class ContactPersonController extends Controller
{

    public function __construct() {
        // Middleware only applied to these methods
        $this->middleware('auth.admin');
        // $this->middleware('auth.admin', ['only' => [
        //     'index', 
        //     'store',
        //     'update',
        //     'destroy',
        //     'restore'
        // ]]);

    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ContactPersonService $contactPersonService)
    {
        $result = $contactPersonService->getContactPersons($request, true);

        return response()->json($result);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(
        CreateContactPersonReq $request,
        ContactPersonService $contactPersonService
    ) {
        $this->middleware('auth.admin');

        $result = $contactPersonService->store($request);

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ContactPerson $contactPerson, ContactPersonService $contactPersonService)
    {
        $result = $contactPersonService->getContactPerson($contactPerson);

        return response()->json($contactPerson);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(
        ContactPersonService $contactPersonService,
        CreateContactPersonReq $request,
        ContactPerson $contactPerson
    ) {
        $this->middleware('auth.admin');

        $result = $contactPersonService->update($request, $contactPerson);

        return response()->json($result);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(ContactPerson $contactPerson, ContactPersonService $contactPersonService)
    {
        $this->middleware('auth.admin');

        $result = $contactPersonService->destroy($contactPerson);

        return response()->json($result);
    }

    public function restore($id, ContactPersonService $contactPersonService)
    {
        $this->middleware('auth.admin');

        $operator = ContactPerson::withTrashed()->find($id);

        $result = $contactPersonService->restore($operator);

        return response()->json($result);
    }


}
