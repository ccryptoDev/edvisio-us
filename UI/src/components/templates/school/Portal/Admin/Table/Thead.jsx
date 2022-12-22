import React from "react";
import styled from "styled-components";
import { smallBordersTd } from "../../../../../atoms/Table/Elements";

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
        <div className="cell">Date</div>
      </Th>
      <Th>
        <div className="border cell">Date sent to servicer</div>
      </Th>
      <Th>
        <div className="border cell">School</div>
      </Th>
      <Th>
        <div className="border cell">Academic program</div>
      </Th>
      <Th>
        <div className="border cell">App ID </div>
      </Th>
      <Th>
        <div className="border cell">Borrower name </div>
      </Th>
      <Th>
        <div className="border cell">Student name </div>
      </Th>
      <Th>
        <div className="border cell">SSN </div>
      </Th>
      <Th>
        <div className="border cell">Alt ID Type </div>
      </Th>
      <Th>
        <div className="border cell">Alternate ID Number </div>
      </Th>
      <Th>
        <div className="border cell">Status </div>
      </Th>
      <Th>
        <div className="border cell">Amount requested </div>
      </Th>
      <Th>
        <div className="border cell">Amount certified </div>
      </Th>
      <Th>
        <div className="border cell">Phone number </div>
      </Th>
    </tr>
  );
};

export default Thead;
