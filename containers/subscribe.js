import React, { useState } from 'react'
import Subscribe from '../components/subscribe'

export function SubscribeContainer() {
    const [email, setEmail] = useState('')

    const encode = (data) => {
        return Object.keys(data)
            .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
            .join("&");
    }

    const formData = {
        email,
        message: `Please add me to your mailing list. My email address is: ${email}`
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
        setEmail('')
    }

    return (
        <Subscribe>
            <Subscribe.Title>SUBSCRIBE FOR DEALS AND OFFERS</Subscribe.Title>
            <Subscribe.SubTitle>Promotions, new products and sales. Directly to your inbox.</Subscribe.SubTitle>
            <Subscribe.Form onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="email-subscription" />
                <Subscribe.Input
                    aria-label='subscribe-input'
                    placeholder='Enter your email address...'
                    value={email}
                    onChange={({ target }) => setEmail(target.value)}
                />
                <Subscribe.Button>Subscribe</Subscribe.Button>
            </Subscribe.Form>
        </Subscribe>
    )
}