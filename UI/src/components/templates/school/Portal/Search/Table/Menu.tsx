import React from "react";
import styled from "styled-components";
import { ReactComponent as ViewIcon } from "../../../../../../assets/svgs/view.svg";
import { ReactComponent as CheckedIcon } from "../../../../../../assets/svgs/checked.svg";
import { ReactComponent as RefreshIcon } from "../../../../../../assets/svgs/refresh.svg";
import { ReactComponent as PrinterIcon } from "../../../../../../assets/svgs/printer.svg";
import { ReactComponent as ErrorIcon } from "../../../../../../assets/svgs/error.svg";
import { ReactComponent as ChevronIcon } from "../../../../../../assets/svgs/chevron-right.svg";
import { ReactComponent as EditIcon } from "../../../../../../assets/svgs/pencil.svg";

const MenuWrapper = styled.ul`
  padding: 20px;
  background: #fff;
  z-index: 100;
  list-style: none;
  box-shadow: var(--shadow-2);
  width: 230px;
  border-radius: 4px;

  & li {
    display: flex;
    align-items: center;
    gap: 12px;

    & button {
      font-weight: 700;
      text-transform: upperCase;
      font-size: 10px;
      border: none;
      color: var(--color-primary-dark-1);
      background: transparent;
    }

    &:not(:first-child) {
      margin-top: 30px;
    }

    .icon-wrapper {
      height: 15px;
      width: 15px;
      display: flex;
      justify-content: center;
    }

    & svg {
      height: 100%;
      & path {
        fill: var(--color-primary-dark-1);
      }
    }
  }
`;

export const Button = styled.button`
  border: none;
  background: transparent;
  svg path {
    fill: var(--color-primary-green-1);
  }
`;

const menuList = [
  { icon: ViewIcon, label: "View application" },
  { icon: CheckedIcon, label: "Certify Application" },
  { icon: RefreshIcon, label: "Application History" },
  { icon: PrinterIcon, label: "Print Application" },
  { icon: ErrorIcon, label: "Withdraw Application" },
  { icon: ChevronIcon, label: "Continue Pre-Approval" },
  { icon: EditIcon, label: "Release to Servicing date" },
  { icon: EditIcon, label: "First Payment Due Date" },
  { icon: EditIcon, label: "Status" },
];

const Menu = ({ handleClose }: any) => {
  return (
    <MenuWrapper>
      {menuList.map(({ icon: Icon, label }) => {
        return (
          <li key={label}>
            <div className="icon-wrapper">
              <Icon />
            </div>
            <button type="button" onClick={handleClose}>
              {label}
            </button>
          </li>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
