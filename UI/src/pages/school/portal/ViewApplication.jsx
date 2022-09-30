import React from "react";
import styled from "styled-components";
import BreadCrumbs from "../../../components/organisms/BreadCrumbs";
import { H5 } from "../../../components/atoms/Typography";
import Layout from "../../../layouts/school/Portal";
import { routes } from "../../../routes/School/routes";
import Card from "../../../components/atoms/Cards";
import GoBackBtn from "../../../components/molecules/Buttons/GoBack";
import Table from "../../../components/templates/school/Portal/ViewApplication";

const Wrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .bread-crumbs-wrapper {
    display: flex;
    gap: 12px;
  }
`;

const items = ({ loanName }) => [
  { label: "Certify Applications", link: routes.CERTIFY, id: "1" },
  { label: loanName, link: "", id: "2" },
];

const CertifyApplication = () => {
  return (
    <Layout currentRoute={routes.CERTIFY}>
      <Wrapper>
        <H5>Certify Applications</H5>
        <div className="bread-crumbs-wrapper">
          <GoBackBtn />
          <BreadCrumbs items={items({ loanName: "View LN_11667" })} />
        </div>
        <Card className="table-wrapper-card">
          <Table />
        </Card>
      </Wrapper>
    </Layout>
  );
};

export default CertifyApplication;
