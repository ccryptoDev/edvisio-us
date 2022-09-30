import React from "react";
import styled from "styled-components";
import Table from "./Table";
import { Text } from "../../../../../atoms/Typography";

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  .heading {
    font-weight: 600;
    color: var(--color-gray-2);
  }
`;

const HistoryTable = ({ transactions }: any) => {
  return (
    <Layout>
      <Text className="heading">Application Transactions</Text>
      <Table items={transactions?.applicationTransactions} />
      <Text className="heading">Borrower Transactions</Text>
      <Table items={transactions?.borrowerTransactions} />
      <Text className="heading">Сosigner Transactions</Text>
      <Table items={transactions?.coSignerTransactions} />
    </Layout>
  );
};

export default HistoryTable;
