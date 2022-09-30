import React from "react";
import styled from "styled-components";
import SubmitButton from "../../../../molecules/Buttons/SubmitButton";

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 12px 24px;
`;

const Footer = ({
  savingApplication,
  onSaveApplication,
  onSubmitFrom,
  loading,
}: any) => {
  return (
    <Wrapper>
      <SubmitButton
        type="submit"
        className="outlined"
        loading={savingApplication}
        onClick={onSaveApplication}
      >
        save application & Exit
      </SubmitButton>
      <SubmitButton
        type="button"
        onClick={onSubmitFrom}
        className="contained"
        loading={loading}
      >
        continue
      </SubmitButton>
    </Wrapper>
  );
};

export default Footer;
