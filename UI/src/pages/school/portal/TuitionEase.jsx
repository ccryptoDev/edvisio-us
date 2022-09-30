import React, { useState } from "react";
import styled from "styled-components";
import { H5 } from "../../../components/atoms/Typography";
import Layout from "../../../layouts/school/Portal";
import { routes } from "../../../routes/School/routes";
import Card from "../../../components/atoms/Cards";
import Step1 from "../../../components/templates/school/Portal/Tuition/Ease/Step1";
import Step2 from "../../../components/templates/school/Portal/Tuition/Ease/Step2";
import Stepper from "../../../components/organisms/Steppers/Simple";

const Wrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .table-wrapper-card {
    padding: 12px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const CreditPullAuthorization = () => {
  const [step, setStep] = useState(2);

  const onStepChange = (st) => {
    setStep(st);
  };

  return (
    <Layout currentRoute={routes.CREDIT_PULL_AUTHORIZATION}>
      <Wrapper>
        <H5>Start TuitionEase</H5>
        <Card className="table-wrapper-card">
          <Stepper step={step} onStepChange={onStepChange} />
          {step === 1 ? (
            <Step1 onStepChange={onStepChange} />
          ) : (
            <Step2 onStepChange={onStepChange} />
          )}
        </Card>
      </Wrapper>
    </Layout>
  );
};

export default CreditPullAuthorization;
