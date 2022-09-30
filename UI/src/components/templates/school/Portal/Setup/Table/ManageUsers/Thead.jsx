import React from "react";
import styled from "styled-components";
import { smallBordersTd } from "../../../../../../atoms/Table";

const Th = styled.th`
  ${smallBordersTd}
  font-size: 10px;
  .cell {
    font-weight: 700;
  }
`;

const Thead = () => {
  return (
    <tr>
      <Th />
      <Th>
        <div className="cell">School</div>
      </Th>
      <Th>
        <div className="border cell">App ID</div>
      </Th>
      <Th>
        <div className="border cell">First Name</div>
      </Th>
      <Th>
        <div className="border cell">Last Name</div>
      </Th>
      <Th>
        <div className="border cell">Email Address</div>
      </Th>
      <Th>
        <div className="border cell">User Name</div>
      </Th>
      <Th>
        <div className="border cell">SSN</div>
      </Th>
      <Th>
        <div className="border cell">Date of Registration</div>
      </Th>
      <Th>
        <div className="border cell">Credit Debt</div>
      </Th>
    </tr>
  );
};

export default Thead;
