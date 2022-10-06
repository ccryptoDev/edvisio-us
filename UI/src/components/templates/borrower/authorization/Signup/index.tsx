import React, { useState } from "react";
import styled from "styled-components";
import { useForm } from "../../../../../hooks/form-control";
import { initForm, renderFields } from "./config";
import { validate } from "./validate";
import SubmitButton from "../../../../molecules/Buttons/SubmitButton";
import { mockRequest } from "../../../../../utils/mockRequest";
import { H3 as Heading, Text } from "../../../../atoms/Typography";

const Wrapper = styled.div`
  padding: 50px 60px 50px 0;
  background: var(--color-bg-2);

  .heading,
  .subheading {
    color: var(--color-primary-green-1);
  }

  .subheading {
    margin: 12px 0 64px;
  }

  & form {
    & .fields-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 24px;

      & .textField:nth-child(3),
      & .textField:nth-child(4) {
        grid-column: 1 / -1;
      }
    }

    & .contained {
      width: 115px;
    }

    & .password-note {
      padding: 10px;
      margin-bottom: 14px;
      max-width: 290px;
      font-size: 12px;
      color: var(--color-gray-2);

      & ul {
        padding-left: 20px;
        margin-top: 10px;
      }
    }
  }
`;

const PasswordNote = () => {
  return (
    <div className="password-note">
      <p className="note">
        Your password must include next indication of level of strength:
      </p>
      <ul>
        <li>Password cannot include your Email;</li>
        <li>Password have to include capital letters;</li>
        <li>Password have to include numbers;</li>
        <li>Password have to include additional symbols (!@##$%^&*());</li>
        <li>Minimal amount of numbers - 6;</li>
        <li>Maximum amount of numbers - 15.</li>
      </ul>
    </div>
  );
};

const SignUp = () => {
  const { form, setForm, onChangeHandler } = useForm(initForm());
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: any) => {
    e.preventDefault();
    const [isValid, updatedForm] = validate(form);
    if (isValid) {
      setLoading(true);
      await mockRequest();
      setLoading(false);
    } else {
      setForm(updatedForm);
    }
  };

  return (
    <Wrapper>
      <Heading className="heading">Create Account</Heading>
      <Text className="subheading">
        If registering to complete an application that has been started by your
        school, enter all information to match exactly what your school entered
        previously.
      </Text>
      <form onSubmit={onSubmit}>
        <div className="fields-wrapper">
          {renderFields(form).map(({ component: Component, ...field }) => {
            return (
              <Component
                {...field}
                key={field.name}
                onChange={onChangeHandler}
              />
            );
          })}
        </div>
        <PasswordNote />
        <SubmitButton loading={loading} type="submit" className="contained">
          register
        </SubmitButton>
      </form>
    </Wrapper>
  );
};

export default SignUp;
