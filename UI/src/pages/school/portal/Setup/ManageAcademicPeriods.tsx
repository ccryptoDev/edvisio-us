import React from "react";
import styled from "styled-components";
import { H5 } from "../../../../components/atoms/Typography";
import Layout from "../../../../layouts/school/Portal";
import { routes } from "../../../../routes/School/routes";
import Table from "../../../../components/templates/school/Portal/Setup/Table/ManagePeriods";

const Wrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .table-wrapper-card {
    padding: 12px;
  }
`;

const ManageAcademicPeriods = () => {
  return (
    <Layout currentRoute={routes.SETUP}>
      <Wrapper>
        <H5>Setup</H5>
        <Table />
      </Wrapper>
    </Layout>
  );
};

export default ManageAcademicPeriods;
