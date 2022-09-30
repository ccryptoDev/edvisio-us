import React from "react";
import styled from "styled-components";
import chevron from "../../../../../../assets/svgs/chevron-down.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const tabName = {
  MANAGE_USERS: "MANAGE_USERS",
  MANAGE_ACADEMIC_PERIODS: "MANAGE_ACADEMIC_PERIODS",
};

const TabStyles = styled.button`
  padding: 20px 16px;
  width: 100%;
  border-radius: 4px;
  box-shadow: var(--shadow-2);
  border: 1px solid;
  border-color: transparent;
  background: #fff;
  & .label {
    text-align: left;
    font-size: 14px;
    color: var(--color-gray-2);
    font-weight: 700;
  }

  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 6px;
    width: 11px;
    right: 0;
    top: 50%;
    transform: translate(-100%, -50%);
    background: url("${chevron}") no-repeat;
    pointer-events: none;
    z-index: 10;
  }

  &.active {
    border-color: var(--color-primary-green-1);
    box-shadow: none;
    background: transparent;
    & .label {
      color: var(--color-primary-dark-1);
    }

    &::before {
      transform: translate(-100%, -50%) rotate(180deg);
    }
  }
`;

const Tab = ({
  name,
  onClick,
  label,
  activeTab,
}: {
  name: string;
  onClick: any;
  label: string;
  activeTab: boolean;
}) => {
  return (
    <TabStyles
      type="button"
      name={name}
      onClick={onClick}
      className={`${activeTab ? "active" : ""}`}
    >
      <div className="label">{label}</div>
    </TabStyles>
  );
};

const Tabs = ({ onChange, activeTab }: any) => {
  return (
    <Wrapper>
      <Tab
        onClick={() => onChange(tabName.MANAGE_USERS)}
        name={tabName.MANAGE_USERS}
        label="Manage Users"
        activeTab={tabName.MANAGE_USERS === activeTab}
      />
      <Tab
        onClick={() => onChange(tabName.MANAGE_ACADEMIC_PERIODS)}
        name={tabName.MANAGE_ACADEMIC_PERIODS}
        label="Manage Academic Periods"
        activeTab={tabName.MANAGE_ACADEMIC_PERIODS === activeTab}
      />
    </Wrapper>
  );
};

export default Tabs;
