import React, { useState } from "react";
import styled from "styled-components";
import { formatCurrency, formatDate } from "../../../../../../../utils/formats";
import { smallBordersTd } from "../../../../../../atoms/Table";
import Menu from "../../../../../../organisms/Menu/TableRow";

const Td = styled.td`
  ${smallBordersTd}
  font-size: 10px;
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
      userLevel,
      organization,
      product,
      status,
      updatedAt,
      amountRequested,
      amountCertified,
      screenTracking,
      school,
    }: any) => {
      const active = open === screenTracking;

      return (
        <tr key={screenTracking}>
          <Menu active={active} onToggle={() => toggleMenu(screenTracking)} />
          <Td>
            <div className="cell">{userLevel}</div>
          </Td>
          <Td>
            <div className="cell border">{school}</div>
          </Td>
          <Td>
            <div className="cell border">{organization}</div>
          </Td>

          <Td>
            <div className="border cell">{product}</div>
          </Td>

          <Td>
            <div className="border cell">{status}</div>
          </Td>

          <Td>
            <div className="border cell">{formatDate(updatedAt)}</div>
          </Td>

          <Td>
            <div className="border cell">{formatCurrency(amountRequested)}</div>
          </Td>

          <Td>
            <div className="border cell">{formatCurrency(amountCertified)}</div>
          </Td>
        </tr>
      );
    }
  );
};

export default Rows;
