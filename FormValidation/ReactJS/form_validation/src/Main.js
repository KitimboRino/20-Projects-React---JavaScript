import { React, useState } from "react";

export default function Main() {

    // Hooks Input
    const [username, setusername] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [cpassword, setcpassword] = useState('')

    // Hooks Errors
    const [eusername, seteusername] = useState('')
    const [eemail, seteemail] = useState('')
    const [epassword, setepassword] = useState('')
    const [ecpassword, setecpassword] = useState('')

    // Hooks color
    const [ucolor, setucolor] = useState('')
    const [ecolor, setecolor] = useState('')
    const [pcolor, setpcolor] = useState('')
    const [cpcolor, setcpcolor] = useState('')


    // Validation Method
    function validate() {

        // Username
        if (username.length > 8) {
            seteusername('')
            setucolor('green')
        } else {
            seteusername('username must be 8 letters long')
            setucolor('red')
        }

        // Email
        if (email.includes('@gmail')) {
            seteemail('')
            setecolor('green')
        } else {
            seteemail('Email should have @gmail')
            setecolor('red')
        }

        // Password
        if (password.length > 8 && password.includes('.')) {
            setepassword('')
            setpcolor('green')
        } else {
            setepassword('Password should be 8 letters long & it should have .')
            setpcolor('red')
        }

        // Confirm Password
        if (cpassword !== '' && cpassword === password) {
            setecpassword('')
            setcpcolor('green')
        } else {
            setecpassword('Password not matching')
            setcpcolor('red')
        }

    }

    return (
        <div>
            <div className='row justify-content-center'>
                <div className='col-md-5 shadow-lg p-3 mb-5 bg-white rounded'>
                    <h1>Form Validation</h1>

                    <input type='text' placeholder='Username' className='form-control' style={{ borderColor: ucolor }}
                        value={username} onChange={(e) => { setusername(e.target.value) }}
                    />
                    <p>{eusername}</p>

                    <input type='text' placeholder='Email' className='form-control' style={{ borderColor: ecolor }}
                        value={email} onChange={(e) => { setemail(e.target.value) }}
                    />
                    <p>{eemail}</p>

                    <input type='text' placeholder='Password' className='form-control' style={{ borderColor: pcolor }}
                        value={password} onChange={(e) => { setpassword(e.target.value) }}
                    />
                    <p>{epassword}</p>

                    <input type='text' placeholder='Confrim password' className='form-control' style={{ borderColor: cpcolor }}
                        value={cpassword} onChange={(e) => { setcpassword(e.target.value) }}
                    />
                    <p>{ecpassword}</p>

                    <button className='btn btn-success' onClick={validate} >SUBMIT</button>

                </div>

            </div>
        </div>
    )
}