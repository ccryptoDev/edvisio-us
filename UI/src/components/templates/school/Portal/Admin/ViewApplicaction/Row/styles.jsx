import styled, { css } from "styled-components";
import { smallBordersTd } from "../../../../../../atoms/Table";

const editField = css`
  & .edit-mode-input-wrapper {
    max-width: 120px;
  }
  & input,
  & select {
    font-size: 12px;
    padding: 10px 8px;
  }
`;

const Row = styled.tr`
  & td {
    ${smallBordersTd}
    font-size: 12px;

    &:first-child {
      width: 50%;
      & div {
        font-weight: 700;
      }
    }

    & ul {
      list-style: none;
      & li {
        padding: 3px 0;
        line-height: 1.5;
      }
    }

    & .form-labels {
      margin-left: 64px;
      margin-top: 6px;

      & li {
        font-weight: 700;
      }
    }

    & .field {
      display: flex;
      align-items: center;
      justify-content: space-between;

      ${editField}
    }

    & .form-values {
      padding-top: 28px;
    }

    .buttons-wrapper {
      display: flex;
      align-items: center;
      gap: 16px;
    }
  }
`;

export default Row;
