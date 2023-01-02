import React, {useState} from "react";
import { validateEmail } from '../../utils/helpers';

export default function ContactMe() {
    
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const {name, email, message} = formState;

    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        if(!errorMessage) {
            setFormState({...formState, [inputType]: inputValue});
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!errorMessage) {
            console.log('Form submitted', formState);
            console.log('Handle form', formState);
        }
        window.location.href="mailto:dasrima476@gmail.com?subject="+name+"&body="+message
    };

return (
    <div class="contactPage">
      <form className="contactForm" onSubmit={handleSubmit}>
        <div class="nameRow">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="inputName"
            required
            onChange={handleInputChange}
          />
        </div>
        <div class="emailRow">
          <label htmlFor="email">Email address:</label>
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            className="inputEmail"
            required
            onChange={handleInputChange}
          />
        </div>
        <div class="messageRow">
          <label htmlFor="message" class="message">Message:</label>
          <textarea
            type="text"
            name="message"
            rows="5"
            className="inputMessage"
            required
            onChange={handleInputChange}
          />
        </div>
        {errorMessage && (
          <div>
            <p className="errorText">{errorMessage}</p>
          </div>
        )}
        <button type="submit" class="submit">Submit</button>
      </form>
    </div>

)
}