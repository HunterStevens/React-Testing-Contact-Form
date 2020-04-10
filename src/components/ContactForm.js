import React, { useState } from "react";
import { useForm } from "react-hook-form";

const ContactForm = () => {
  const [data, setData] = useState();
  const { register, errors, handleSubmit, reset } = useForm({
    mode: "onBlur"
  });
  const onSubmit = data => {
    setData(data);
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label  htmlFor="firstName">First Name*</label>
          <input
            id="firstName"
            name="firstName"
            placeholder="bill"
            ref={register({ required: true, maxLength: 3 })}
          />
          {errors.firstName && (
            <p data-testid="firstNameErr">Looks like there was an error: {errors.firstName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastName">Last Name*</label>
          <input
            id="lastName" 
            name="lastName"
            placeholder="luo"
            ref={register({ required: true })}
          />
          {errors.lastName && (
            <p data-testid="lastNameErr">Looks like there was an error: {errors.lastName.type}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" >
            Email*
          </label>
          <input name="email" id="email"
           placeholder="bluebill1049@hotmail.com"
          ref={register({ required: true })} />
          {errors.email && (
            <p data-testid="emailErr">Looks like there was an error: {errors.email.type}</p>
          )}
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" ref={register({ required: false })} />
        </div>
        {data && (
          <pre data-testid="formData" style={{ textAlign: "left", color: "white" }}>
            {JSON.stringify(data, null, 2)}
          </pre>
        )}
        <input data-testid="submit" type="submit" />
      </form>
    </div>
  );
};

export default ContactForm;
