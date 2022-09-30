import React from "react";
import styled from "styled-components";

const Tr = styled.tr`
  th .cell {
    font-weight: 700;
  }
`;

const Thead = () => {
  return (
    <thead>
      <Tr>
        <th>
          <div className="cell">Create Date</div>
        </th>
        <th>
          <div className="cell border">Type</div>
        </th>
        <th>
          <div className="cell border">Created By</div>
        </th>
      </Tr>
    </thead>
  );
};

export default Thead;
