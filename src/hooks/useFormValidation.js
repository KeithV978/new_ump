import { useState } from "react";

const useFormValidation = (initialState, validation) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
    // console.log("Handler: " +  name +" and " + value )
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setErrors(validation(values));
    setIsSubmitting(true);
  };

  return{
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit
  }
};

export default useFormValidation;