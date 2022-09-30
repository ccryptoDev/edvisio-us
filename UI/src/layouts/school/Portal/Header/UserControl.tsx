import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";
import DropDown from "../../../../components/organisms/Dropdown/ClickMenu";
import hand from "../../../../assets/png/hand.png";
import { useUserData } from "../../../../contexts/admin";
import { ReactComponent as Settings } from "../../../../assets/svgs/settings.svg";
import { ReactComponent as Logout } from "../../../../assets/svgs/logout.svg";
import { routes } from "../../../../routes/School/routes";
import Card from "../../../../components/atoms/Cards";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .user-name {
    font-size: 10px;
    font-weight: 700;
    color: var(--color-main-2);
    min-width: 100px;
    max-width: 130px;
    text-align: center;
    display: flex;
    align-items: center;
  }

  button {
    display: flex;
    align-items: center;
  }
  .icon {
    &-logout {
      width: 14px;
      height: 14px;
    }

    &-settings {
      width: 16px;
      height: 16px;
    }
  }
`;

const Btn = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const menuItems = [
  { label: "Certify Application", link: routes.CERTIFY, id: 1 },
  { label: "Application History", link: routes.APPLICATION_HISTORY, id: 2 },
  { label: "Reports", link: routes.REPORTS, id: 3 },
  {
    label: "Reports All inclusive",
    link: routes.REPORT_ALL_INCLUSIVE,
    id: 4,
  },
];

const MenuWrapper = styled.ul`
  list-style: none;
  a {
    text-decoration: none;
    color: var(--color-main-2);
    font-size: 12px;
  }
`;

const Menu = () => {
  return (
    <Card>
      <MenuWrapper>
        {menuItems.map((item) => {
          return (
            <li key={item.id}>
              <Link to={item.link}>{item.label}</Link>
            </li>
          );
        })}
      </MenuWrapper>
    </Card>
  );
};

const UserControl = () => {
  const { user } = useUserData();

  const LogoutButton = () => {
    const history = useHistory();

    const logoutHandler = () => {
      history.push(routes.LOGIN);
    };
    return (
      <Btn onClick={logoutHandler}>
        <Logout className="icon-logout" />
      </Btn>
    );
  };

  return (
    <Wrapper>
      <div className="user-name">
        <img src={hand} alt="welcome" />
        Welcome, {user?.data?.firstName} {user?.data?.lastName}
      </div>
      <DropDown button={<Settings className="icon-settings" />} menu={Menu} />
      <LogoutButton />
    </Wrapper>
  );
};

export default UserControl;
