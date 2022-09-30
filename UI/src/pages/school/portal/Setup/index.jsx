import React, { useState } from "react";
import styled from "styled-components";
import { H5 } from "../../../../components/atoms/Typography";
import Layout from "../../../../layouts/school/Portal";
import { routes } from "../../../../routes/School/routes";
import Tabs, {
  tabName,
} from "../../../../components/templates/school/Portal/Setup/Tabs";
import ManageUsersTable from "../../../../components/templates/school/Portal/Setup/Table/ManageUsers";
import ManagePeriodsTable from "../../../../components/templates/school/Portal/Setup/Table/ManagePeriods";
import Card from "../../../../components/atoms/Cards";

const Wrapper = styled.div`
  padding: 24px 0;
  display: flex;
  flex-direction: column;
  gap: 24px;

  .table-wrapper-card {
    padding: 12px;
  }
`;

const Search = () => {
  const [activeTab, setActiveTab] = useState(tabName.MANAGE_USERS);

  return (
    <Layout currentRoute={routes.SETUP}>
      <Wrapper>
        <H5>Setup</H5>

        <Tabs onChange={setActiveTab} activeTab={activeTab} />

        <Card className="table-wrapper-card">
          {activeTab === tabName.MANAGE_USERS ? (
            <ManageUsersTable />
          ) : (
            <ManagePeriodsTable />
          )}
        </Card>
      </Wrapper>
    </Layout>
  );
};

export default Search;
