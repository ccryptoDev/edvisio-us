import React from "react";
import styled from "styled-components";
import { tabs } from "./config";

const Wrapper = styled.div`
  display: flex;
`;

const Button = styled.button`
  padding: 11px 15px;
  text-transform: upperCase;
  background: var(--color-bg-2);
  color: var(--color-gray-1);
  border: none;
  font-size: 10px;
  flex-grow: 1;
  box-sizing: border-box;
  font-weight: 700;

  &.active {
    background: var(--color-primary-blue-6);
    color: var(--color-primary-blue-1);
  }
`;

const ApplicationHistory = ({ onClick, selectedTab }: any) => {
  return (
    <Wrapper>
      {tabs.map((tab) => {
        return (
          <Button
            key={tab.id}
            onClick={() => onClick(tab.value)}
            className={`${selectedTab === tab.value ? "active" : ""}`}
          >
            {tab.label}
          </Button>
        );
      })}
    </Wrapper>
  );
};

export default ApplicationHistory;
