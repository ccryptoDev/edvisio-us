import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency, formatDate } from "../../../../../../../utils/formats";
import { smallBordersTd } from "../../../../../../atoms/Table";
import { StyledLink } from "../../../../../../atoms/Buttons/Regular";
import Menu from "../../../../../../organisms/Menu/TableRow";

const Td = styled.td`
  ${smallBordersTd}
  font-size: 10px;
  transition: all 0.3s;
`;

const Rows = ({ items }: any) => {
  const [open, setOpen] = useState("");

  const toggleMenu = (name: string) => {
    if (name !== open) {
      setOpen(name);
    } else {
      setOpen("");
    }
  };

  return items.map(
    ({
      school,
      appId,
      lastName,
      firstName,
      ssn,
      email,
      userName,
      registrationDate,
      creditDebt,
      screenTracking,
    }: any) => {
      const active = open === screenTracking;
      return (
        <tr key={screenTracking}>
          <Menu active={active} onToggle={() => toggleMenu(screenTracking)} />
          <Td>
            <div className="cell">{school}</div>
          </Td>
          <Td>
            <div className="border cell">
              <StyledLink to="">{appId}</StyledLink>
            </div>
          </Td>
          <Td>
            <div className="cell border">{lastName}</div>
          </Td>

          <Td>
            <div className="border cell">{firstName}</div>
          </Td>

          <Td>
            <div className="border cell">{ssn}</div>
          </Td>

          <Td>
            <div className="border cell">{email}</div>
          </Td>

          <Td>
            <div className="border cell">{userName}</div>
          </Td>

          <Td>
            <div className="border cell">{formatDate(registrationDate)}</div>
          </Td>

          <Td>
            <div className="border cell">{formatCurrency(creditDebt)}</div>
          </Td>
        </tr>
      );
    }
  );
};

export default Rows;
