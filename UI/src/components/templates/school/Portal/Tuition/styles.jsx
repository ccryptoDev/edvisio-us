import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
  width: 100%;

  .application-information-form,
  .buttons-wrapper,
  .calculation,
  .mailing-address-form,
  .permanent-address-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 12px 24px;
  }

  .application-information-form {
    & .textField:nth-child(9) {
      grid-column: 1 / -1;
    }
  }
  .mailing-address-form {
    & .textField:nth-child(1),
    & .textField:nth-child(2),
    & .textField:nth-child(7) {
      grid-column: 1 / -1;
    }
  }

  .form-wrapper,
  .school-information-form {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .heading {
    text-transform: upperCase;
  }

  .calculation {
    padding: 16px;
    border-radius: 4px;
    border: 1px solid var(--color-gray-3);
  }
`;

export default Wrapper;
