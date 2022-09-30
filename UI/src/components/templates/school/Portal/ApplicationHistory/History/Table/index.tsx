import React from "react";
import styled from "styled-components";
import { ClassicTable, smallBordersTd } from "../../../../../../atoms/Table";
import Thead from "./Thead";
import Rows from "./Rows";

const TableWrapper = styled(ClassicTable)`
  border: 1px solid var(--color-gray-3);
  border-radius: 6px;
  overflow: hidden;
  table {
    & tr {
      & td,
      & th {
        width: 33%;
        ${smallBordersTd}
        font-size: 12px;
      }
    }
  }
`;

const HistoryTable = ({ items }: any) => {
  return (
    <TableWrapper>
      <table>
        <Thead />
        <Rows items={items} />
      </table>
    </TableWrapper>
  );
};

export default HistoryTable;
