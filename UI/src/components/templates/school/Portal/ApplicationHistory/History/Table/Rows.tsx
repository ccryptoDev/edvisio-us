import React, { useState } from "react";
import styled from "styled-components";
import { formatDate } from "../../../../../../../utils/formats";
import { LinkButton } from "../../../../../../atoms/Buttons/Regular";
import { ReactComponent as Chevron } from "../../../../../../../assets/svgs/chevron-down.svg";
import Menu from "../../../../../../organisms/Menu/TableRow";

const Link = styled(LinkButton)`
  text-transform: upperCase;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  max-width: 132px;
  width: 100%;
  padding: 8px;
  &.outlined {
    background: #fff;
  }
  svg path {
    fill: var(--color-primary-green-1);
  }
`;

const Tr = styled.tr`
  .createdBy {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }

  & td .cell {
    display: flex;
    align-items: center;
  }
`;

const Rows = ({ items = [] }: any) => {
  const [open, setOpen] = useState("");
  const toggleMenu = (name: string) => {
    if (name !== open) {
      setOpen(name);
    } else {
      setOpen("");
    }
  };

  return (
    <tbody>
      {items.map(({ date, type, createdBy, link, id }: any) => {
        const active = open === id;
        return (
          <Tr key={id}>
            {" "}
            <Menu active={active} onToggle={() => toggleMenu(id)} />
            <td>
              <div className="cell">{formatDate(date)}</div>
            </td>
            <td>
              <div className="cell border">{type}</div>
            </td>
            <td>
              <div className="cell border createdBy">
                {createdBy}
                <Link className="outlined" to={link}>
                  {" "}
                  <Chevron />
                  View
                </Link>
              </div>
            </td>
          </Tr>
        );
      })}
    </tbody>
  );
};

export default Rows;
