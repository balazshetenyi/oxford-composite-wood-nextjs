import React, { useState } from 'react'
import { Form } from '../components'


export function SignInContainer() {
    const [newCustomer, setNewCustomer] = useState(false)
    const [forgotPassword, setForgotPassword] = useState(false)

    const [firstname, setFirstname] = useState('')
    const [lastname, setLastname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleNewCustomer = () => {
        setNewCustomer(false)
        setForgotPassword(false)
    }

    return (
        newCustomer ?
            <Form>
                <Form.Title>Create Account</Form.Title>
                <Form.Pane>
                    <Form.Base>
                        <Form.Label>Firstname*
                        <Form.Input 
                            id='fname' 
                            autocomplete='on' 
                            type='text' name='firstname' 
                            value={firstname} 
                            required 
                            onChange={({target}) => setFirstname(target.value)}
                        />
                        </Form.Label>
                        <Form.Label>Lastname*
                        <Form.Input 
                            id='lname' 
                            type='text' 
                            name='lastname' 
                            value={lastname} 
                            required 
                            onChange={({ target }) => setLastname(target.value)}
                        />
                        </Form.Label>
                        <Form.Label>Email*
                        <Form.Input 
                            id='email' 
                            type='email' 
                            name='email' 
                            value={email} 
                            required 
                            onChange={({ target }) => setEmail(target.value)}
                        />
                        </Form.Label>
                        <Form.Label>Password*
                        <Form.Input 
                            id='password' 
                            type='password' 
                            name='password' 
                            value={password} 
                            required 
                            onChange={({ target }) => setPassword(target.value)}
                        />
                        </Form.Label>

                        <Form.Submit>Create Account</Form.Submit>
                        <Form.Text onClick={() => setNewCustomer(false)}>Alternatively login here</Form.Text>
                    </Form.Base>
                </Form.Pane>
            </Form> : 
        forgotPassword ? 
                <Form>
                    <Form.Title>Enter your email address</Form.Title>
                    <Form.Pane>
                        <Form.Base>
                            <Form.Label>Email*
                        <Form.Input id='email' type='email' name='email' value={email} required />
                            </Form.Label>

                            <Form.Submit>Send email</Form.Submit>
                            <Form.Text onClick={handleNewCustomer}>Alternatively login here</Form.Text>
                        </Form.Base>
                    </Form.Pane>
                </Form> :
            <Form>
                <Form.Title>Login</Form.Title>
                <Form.Pane>
                    <Form.Base>
                        <Form.Label>Email*
                        <Form.Input id='email' type='email' name='email' value={email} required />
                        </Form.Label>
                        <Form.Label>Password*
                        <Form.Input id='password' type='password' name='password' value={password} required />
                        </Form.Label>

                        <Form.Text onClick={() => setForgotPassword(true)}>Forgot your password?</Form.Text>
                        <Form.Submit>Login</Form.Submit>
                        <Form.Text onClick={() => setNewCustomer(true)}>Create account here</Form.Text>
                    </Form.Base>
                </Form.Pane>
            </Form>
    )
}