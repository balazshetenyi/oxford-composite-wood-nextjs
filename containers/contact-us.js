import React, { useState } from 'react'
import { Form } from '../components'

export function ContactUsContainer() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [message, setMessage] = useState('')

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const formData = {
        name,
        email,
        phone,
        message
    }

    const handleSubmit = e => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...formData })
        })
            .then(() => alert("Success!"))
            .catch(error => alert(error));

        e.preventDefault();
        resetForm()
    }

    const resetForm = () => {
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
    }

    return (
        <Form onSubmit={handleSubmit} >
            <Form.Title>Contact Us</Form.Title>
            <Form.Pane>
                <Form.Base>
                    <input type="hidden" name="form-name" value="contact" />
                    <Form.Label htmlFor='name'>Name
                        <Form.Input
                            type='text'
                            name='name'
                            id='name'
                            value={name}
                            onChange={({ target }) => setName(target.value)}
                        />
                    </Form.Label>
                    <Form.Label htmlFor='email'>Email*
                        <Form.Input
                            type='email'
                            name='_replyto'
                            id='email'
                            value={email}
                            onChange={({ target }) => setEmail(target.value)}
                            required
                        />
                    </Form.Label>
                    <Form.Label htmlFor='phone'>Phone
                        <Form.Input
                            type='text'
                            name='phone'
                            id='phone'
                            value={phone}
                            onChange={({ target }) => setPhone(target.value)}
                        />
                    </Form.Label>
                    <Form.Label htmlFor='message'>Message*
                        <Form.Message
                            type='text'
                            name='message'
                            id='message'
                            value={message}
                            onChange={({ target }) => setMessage(target.value)}
                            required
                        />
                    </Form.Label>
                    <Form.Submit type='submit'>Send</Form.Submit>
                </Form.Base>
            </Form.Pane>
        </Form>
    )
}