import React from "react";
import { useHistory } from "react-router-dom";
import MenuWrapper from "./styles";
import { menuList } from "./config";

const Menu = ({ handleClose, screenTrackingId, openModal }: any) => {
  const history = useHistory();

  const goTo = (link: string) => {
    if (link) {
      history.push(`${link}/${screenTrackingId}`);
    }
  };

  const withdraw = (e: any) => {
    handleClose(e);
    openModal();
  };

  const print = () => {
    handleClose();
  };

  const menuListProps = {
    goTo,
    withdraw,
    print,
  };

  return (
    <MenuWrapper>
      {menuList(menuListProps).map(({ icon: Icon, label, onClick }) => {
        return (
          <li key={label}>
            <div className="icon-wrapper">
              <Icon />
            </div>
            <button type="button" onClick={(e) => onClick(e)}>
              {label}
            </button>
          </li>
        );
      })}
    </MenuWrapper>
  );
};

export default Menu;
