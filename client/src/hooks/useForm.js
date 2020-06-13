// write your custom hook here to control your checkout form
import { useState } from "react";
export function useForm(initialValues) {
  // inputs = state and handleChanges
  const [values, setValues] = useState(initialValues);

  const handleChanges = (e) => {
    e.preventDefault();
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return [values, handleChanges];
}