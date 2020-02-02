import React from 'react';
import { PropTypes } from 'react';

const DonateNowForm = ({ name, email, description }) => {

    let _name, _email, _description;

    const submit = (e) => {
        e.preventDefault()
        console.log("name", _name.value)
        console.log("email", _email.value)
        console.log("description", _description.value)
    }

    return (
        <form onSubmit={submit} className="donate-now-form">
            <label htmlFor="name">Donation From</label>
            <input id="name"
                type="text"
                required
                defaultValue={name}
                ref={input => _name = input} />
            <label htmlFor="email">Email</label>
            <input id="email"
                type="text"
                required
                defaultValue={email}
                ref={input => _email = input} />
            <label htmlFor="description">Item Description</label>
            <input id="description"
                type="text"
                required
                defaultValue={description}
                ref={input => _description = input} />

        </form>
    )
}


export default DonateNowForm;