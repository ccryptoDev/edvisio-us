import { css } from "styled-components";
import { input } from "./input";

export const datePicker = css`
  ${input}
  .MuiFormControl-root {
    width: 100%;
  }
  .MuiInput-underline {
    &:before,
    &:after {
      content: "";
      display: none;
    }
  }
  & input {
    box-sizing: content-box;
    padding: 20px 16px;
    font-size: 14px;
  }
`;

export const datePickerMui = css`
  font-family: Montserrat;

  /* FIELD BACKGROUND */
  .MuiTextField-root {
    background: var(--color-bg-2);
    width: 100%;
  }

  /* FIELD BORDER */
  .MuiOutlinedInput-root.MuiInputBase-root {
    & fieldset {
      border: none;
      border-radius: 0;
      border-bottom: 1px solid var(--color-gray-2);
    }

    &.Mui-focused {
      & fieldset {
        border-bottom: 1px solid var(--color-primary-green-1);
      }
    }
  }

  /* INPUT */
  & .MuiInputBase-input {
    font-size: 16px;
    font-size: 14px;
    color: var(--color-primary-dark-1);
    padding: 20px 16px;
    height: 58px;
    box-sizing: border-box;
  }

  /* LABEL */
  & .MuiInputLabel-root {
    font-size: 14px;
    line-height: 1.5;
    transform: translate(20px, 100%);

    &.MuiInputLabel-formControl {
      color: var(--color-gray-2);
      font-family: Montserrat;
      font-weight: 400;

      /* LABEL UP */
      &.Mui-focused,
      &.MuiFormLabel-filled {
        color: var(--color-primary-green-1);
        transform: translate(16px, -50%);
        font-size: 12px;
      }
    }
  }

  /* ICON */
  & .MuiSvgIcon-root {
    width: 24px;
    height: 24px;
  }

  /* ON VALUE PRESENCE */
  &.isFilled {
    & .MuiOutlinedInput-root.MuiInputBase-root fieldset {
      border-bottom: 1px solid var(--color-primary-green-1);
    }

    & .MuiSvgIcon-root {
      & path {
        fill: var(--color-primary-green-1);
      }
    }
  }

  /* ON ERROR MESSAGE */
  &.isError {
    & .error {
      margin: 5px 0 0 5px;
    }
    /* LABEL */
    .MuiInputLabel-root.MuiInputLabel-outlined.MuiFormLabel-root {
      color: var(--color-functional-red-1);
    }

    /* FIELD BORDER */
    & .MuiOutlinedInput-root.MuiInputBase-root fieldset {
      border-color: var(--color-functional-red-1);
    }
  }
`;
