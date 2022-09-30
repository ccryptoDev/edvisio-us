import React, { useState } from "react";
import { initForm, applicationInformation, schoolInformation } from "./config";
import Wrapper from "../../styles";
import { Subtitle as Heading } from "../../../../../../atoms/Typography";
import { validateApplicationInfo } from "./validation";
import { mockRequest } from "../../../../../../../utils/mockRequest";
import Calculator from "./Calculator";
import Footer from "../../Footer";

const CreditPullAuthorization = ({ onStepChange }: any) => {
  const [form, setForm] = useState(initForm());
  const [loading, setLoading] = useState(false);
  const [savingApplication, setSavingApplication] = useState(false);

  const onChangeHandler = (e: any) => {
    const { value, name } = e.target;
    setForm((prevState: any) => ({
      ...prevState,
      [name]: { ...prevState[name], value, message: "" },
    }));
  };

  const onSubmitFrom = async () => {
    const [applicationFormIsValid, updatedApplicationForm] =
      validateApplicationInfo(form);
    if (applicationFormIsValid) {
      setLoading(true);
      await mockRequest();
      setLoading(false);
      onStepChange(2);
    } else {
      setForm(updatedApplicationForm);
    }
  };

  const onSaveApplication = async () => {
    setSavingApplication(true);
    await mockRequest();
    setSavingApplication(false);
  };

  const footerProps = {
    savingApplication,
    onSaveApplication,
    onSubmitFrom,
    loading,
  };

  return (
    <Wrapper>
      <div className="form-wrapper">
        <Heading className="heading">Applicant Information</Heading>
        <div className="application-information-form">
          {applicationInformation(form).map(
            ({ component: Component, ...item }) => {
              return (
                <Component
                  key={item?.name}
                  {...item}
                  onChange={onChangeHandler}
                />
              );
            }
          )}
        </div>
      </div>
      <div className="form-wrapper">
        <Heading className="heading">school Information</Heading>
        <div className="school-information-form">
          {schoolInformation(form).map(({ component: Component, ...item }) => {
            return (
              <Component
                key={item?.name}
                {...item}
                onChange={onChangeHandler}
              />
            );
          })}
        </div>
      </div>
      <Calculator />
      <Footer {...footerProps} />
    </Wrapper>
  );
};

export default CreditPullAuthorization;
