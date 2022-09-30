import { useState } from "react";

export const useForm = (initForm: Function) => {
  if (typeof initForm !== "function")
    throw new Error("initForm is not a function");

  const [form, setForm] = useState(initForm());

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setForm((prevState: any) => ({
      ...prevState,
      [name]: { value, message: "" },
    }));
  };

  return { form, setForm, onChangeHandler };
};
