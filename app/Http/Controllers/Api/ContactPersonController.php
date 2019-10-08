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
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request, ContactPersonService $contactPersonService)
    {
        $result = new stdClass;
        $result->status = 1;
        $result->message = 'success';
        $result->contactPersons = $contactPersonService->getContactPersons($request);

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

        $result = $contactPersonService->store($request);

        return response()->json($result);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(ContactPerson $contactPerson)
    {
        return response()->json($contactPerson);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(CreateContactPersonReq $request, ContactPerson $contactPerson)
    {
        $result = $contactPersonService->update($contactPerson);

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
        $result = $contactPersonService->destroy($contactPerson);

        return response()->json($result);
    }
}
