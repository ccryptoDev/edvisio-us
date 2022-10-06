import React, { useState } from "react";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import {
  formatCurrency,
  formatDate,
  formatPhoneNumber,
  formatSSN,
} from "../../../../../../utils/formats";
import { smallBordersTd } from "../../../../../atoms/Table";
import DropDown from "../../../../../organisms/Dropdown/ClickMenu";
import Menu from "./Menu";
import { ReactComponent as ExpandIcon } from "../../../../../../assets/svgs/expand.svg";
import Modal from "../../../../../organisms/Modal/Regular";
import WithdrawForm from "../../Withdraw";

const Td = styled.td`
  ${smallBordersTd}
  font-size: 10px;
`;

const Button = styled.div`
  border: none;
  background: transparent;
  svg path {
    fill: var(--color-primary-green-1);
  }
`;

const Actions = ({ screenTrackingId }: any) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <DropDown
        menu={Menu}
        openModal={() => setOpen(true)}
        screenTrackingId={screenTrackingId}
        button={
          <Button>
            <ExpandIcon />
          </Button>
        }
      />
      <Modal
        open={open}
        modalContent={WithdrawForm}
        handleClose={() => setOpen(false)}
      />
    </>
  );
};

const Rows = ({ items }: any) => {
  return items.map(
    ({
      school,
      program,
      startDate,
      endDate,
      date,
      product,
      appId,
      borrowerName,
      studentName,
      ssn,
      altIdType,
      altIdNumber,
      status,
      requestedAmount,
      amountApproved,
      phoneNumber,
      sentToServicerDate,
      screenTrackingId,
    }: any) => {
      return (
        <tr key={uuid()}>
          <Td>
            <div className="cell">
              <Actions screenTrackingId={screenTrackingId} />
            </div>
          </Td>
          <Td>
            <div className="cell">{formatDate(date)}</div>
          </Td>

          <Td>
            <div className="border cell">{sentToServicerDate}</div>
          </Td>

          <Td>
            <div className="border cell">{school}</div>
          </Td>

          <Td>
            <div className="border cell">{program}</div>
          </Td>

          <Td>
            <div className="border cell">{formatDate(startDate)}</div>
          </Td>

          <Td>
            <div className="border cell">{formatDate(endDate)}</div>
          </Td>

          <Td>
            <div className="border cell">{product}</div>
          </Td>

          <Td>
            <div className="border cell">{appId}</div>
          </Td>

          <Td>
            <div className="border cell">{borrowerName}</div>
          </Td>

          <Td>
            <div className="border cell">{studentName}</div>
          </Td>

          <Td>
            <div className="border cell">{formatSSN(ssn)}</div>
          </Td>

          <Td>
            <div className="border cell">{altIdType}</div>
          </Td>

          <Td>
            <div className="border cell">{altIdNumber}</div>
          </Td>

          <Td>
            <div className="border cell">{status}</div>
          </Td>

          <Td>
            <div className="border cell">{formatCurrency(requestedAmount)}</div>
          </Td>

          <Td>
            <div className="border cell">{formatCurrency(amountApproved)}</div>
          </Td>

          <Td>
            <div className="border cell">{formatPhoneNumber(phoneNumber)}</div>
          </Td>
        </tr>
      );
    }
  );
};

export default Rows;
