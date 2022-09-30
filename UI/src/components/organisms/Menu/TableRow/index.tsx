import React from "react";
import { ReactComponent as Error } from "../../../../assets/svgs/error.svg";
import { ReactComponent as Pencil } from "../../../../assets/svgs/pencil.svg";
import { ReactComponent as Bin } from "../../../../assets/svgs/bin.svg";
import { ReactComponent as Refresh } from "../../../../assets/svgs/refresh.svg";
import { ReactComponent as Add } from "../../../../assets/svgs/add.svg";
import { ReactComponent as View } from "../../../../assets/svgs/view.svg";
import ActionButton from "../../../molecules/Buttons/ActionButtons";
import Td from "./styles";

const buttonName = {
  VIEW: "view",
  EDIT: "edit",
  ADD: "add",
  DELETE: "delete",
  DISABLE: "disable",
  ACTIVE: "active",
};

const buttons = [
  {
    label: buttonName.VIEW,
    name: buttonName.VIEW,
    icon: <View width="16px" />,
  },
  {
    label: buttonName.EDIT,
    name: buttonName.EDIT,
    icon: <Pencil width="13px" />,
  },
  { label: buttonName.ADD, name: buttonName.ADD, icon: <Add width="15px" /> },
  {
    label: buttonName.DELETE,
    name: buttonName.DELETE,
    icon: <Bin width="18px" />,
  },
  {
    label: buttonName.DISABLE,
    name: buttonName.DISABLE,
    icon: <Error width="15px" />,
  },
  {
    label: buttonName.ACTIVE,
    name: buttonName.ACTIVE,
    icon: <Refresh width="12px" />,
  },
];

const Menu = ({ onToggle, active, onClick }: any) => {
  return (
    <Td className={`${active ? "expanded" : ""} menu-wrapper`}>
      <div className="cell">
        <ActionButton type="expand" onClick={onToggle} />
      </div>
      {active ? (
        <div className="menu">
          {buttons.map((button) => {
            return (
              <button type="button" key={button.name} onClick={onClick}>
                {button.icon}
                <div className="label">{button.label}</div>
              </button>
            );
          })}
        </div>
      ) : (
        ""
      )}
    </Td>
  );
};

export default Menu;
