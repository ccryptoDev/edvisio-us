import React, { useState } from "react";
import ActionButton from "../../../../../../molecules/Buttons/ActionButtons";
import { mockRequest } from "../../../../../../../utils/mockRequest";
import Loader from "../../../../../../molecules/Loaders/LoaderWrapper";
import { validate } from "./validation";

const EditField = ({
  value,
  component: Input,
  name,
  onCancel,
  onChange,
  ...props
}: {
  value: string;
  component: any;
  name: string;
  onCancel: any;
  fetchData: any;
  onChange: any;
}) => {
  const [form, setForm] = useState({ value, message: "" });
  const [loading, setLoading] = useState(false);

  const onChangeHandler = (e: any) => {
    setForm({ value: e.target.value, message: "" });
  };

  const onSubmit = async () => {
    setLoading(true);
    const [isValid, updatedForm] = validate(form);
    if (!isValid) {
      setForm(updatedForm);
    } else {
      await mockRequest();
      onChange({ value: form.value, fieldName: name });
      onCancel();
      setLoading(false);
    }
  };

  return (
    <div className="edit-mode field">
      <div className="edit-mode-input-wrapper">
        <Loader loading={loading} size="3">
          <Input
            name={name}
            value={form.value}
            message={form.message}
            onChange={onChangeHandler}
            {...props}
          />
        </Loader>
      </div>
      <div className="buttons-wrapper">
        <ActionButton onClick={onSubmit} type="save" />
        <ActionButton onClick={onCancel} type="cancel" />
      </div>
    </div>
  );
};

export default EditField;
