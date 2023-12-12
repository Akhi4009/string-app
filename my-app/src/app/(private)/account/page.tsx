'use client'

import AvatarForm from "./avatar-form"
import SignOutButton from "./sign-out"

export default  function AccountPage(){

    return(
        <div>
            <h2>Account</h2>
            <AvatarForm/>
            <SignOutButton/>
       
        </div>
    )
}