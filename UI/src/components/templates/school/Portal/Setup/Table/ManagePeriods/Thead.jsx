import React from "react";
import styled from "styled-components";
import { smallBordersTd } from "../../../../../../atoms/Table";

const Th = styled.th`
  ${smallBordersTd}
  font-size: 10px;
  .cell {
    font-weight: 700;
    transition: all 0.3s;
  }
`;

const Thead = () => {
  return (
    <tr>
      <Th />
      <Th>
        <div className="cell">User level</div>
      </Th>
      <Th>
        <div className="border cell">Master School Name</div>
      </Th>
      <Th>
        <div className="border cell">Organization</div>
      </Th>
      <Th>
        <div className="border cell">Product</div>
      </Th>
      <Th>
        <div className="border cell">Status</div>
      </Th>
      <Th>
        <div className="border cell">Last Updated</div>
      </Th>
      <Th>
        <div className="border cell">Amount Requested</div>
      </Th>
      <Th>
        <div className="border cell">Amount Certified</div>
      </Th>
    </tr>
  );
};

export default Thead;
