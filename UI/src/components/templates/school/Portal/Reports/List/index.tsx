import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  routes,
  pageName as reportNames,
} from "../../../../../../routes/School/routes";
import { ReactComponent as Logo } from "../../../../../../assets/svgs/list.svg";
import { Text, Caption } from "../../../../../atoms/Typography";

const Wrapper = styled.div`
  ul {
    & li {
      list-style: none;
      display: flex;
      align-items: stretch;
      box-shadow: var(--shadow-2);
      border-radius: 4px;
      &:not(:last-child) {
        margin-bottom: 12px;
      }

      & .logo-wrapper {
        padding: 25px;
        display: flex;
        align-items: center;
        background: var(--color-bg-2);
      }

      & a {
        text-decoration: none;
        color: inherit;
        font-weight: 600;
        transition: all 0.3s;

        &:hover {
          text-decoration: underline;
        }
      }

      & .content {
        background: #fff;
        padding: 16px;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 6px;
        width: 100%;
      }
    }
  }
`;

const renderReportsList = [
  {
    title: "Applications Pending Certification",
    subtitle: "Submitted applications awaiting certification.",
    link: `${routes.REPORTS}/${reportNames.PENDING_CERTIFICATION}`,
  },
  {
    title: "Incomplete Applications",
    subtitle: "Applications started, but not completed.",
    link: `${routes.REPORTS}/${reportNames.INCOMPLETE_APPLICATIONS}`,
  },
  {
    title: "Applications Pending Esignature",
    subtitle: "Applications waiting for borrower/cosigner esignature.",
    link: `${routes.REPORTS}/${reportNames.PENDING_SIGNATURE}`,
  },
  {
    title: "Processed School Certifications",
    subtitle: "All applications certified through the school portal.",
    link: `${routes.REPORTS}/${reportNames.PROCESSED_CERTIFICATIONS}`,
  },
  {
    title: "School Pre-Approval Report",
    subtitle: `All applications in "School Pre-Approval Incomplete" status.`,
    link: `${routes.REPORTS}/${reportNames.PRE_APPROVAL}`,
  },
  {
    title: "Application All-Inclusive Report",
    subtitle: "All applications, all statuses.",
    link: `${routes.REPORTS}/${reportNames.ALL_INCLUSIVE}`,
  },
];

const Application = () => {
  return (
    <Wrapper>
      <ul>
        {renderReportsList.map((item) => {
          return (
            <li key={item.link}>
              <div className="logo-wrapper">
                <Logo />
              </div>
              <div className="content">
                <Text className="title">
                  <Link to={item.link}>{item.title}</Link>
                </Text>
                <Caption className="subtitle">{item.subtitle}</Caption>
              </div>
            </li>
          );
        })}
      </ul>
    </Wrapper>
  );
};

export default Application;
