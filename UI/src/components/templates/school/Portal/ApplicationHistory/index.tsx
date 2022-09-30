import React from "react";
import { tabNames } from "./Tabs/config";
import Table from "./Tables";
import Documents from "./Documents";
import History from "./History";
import {
  parseCosignerInfo,
  parseBorrowerInfo,
  parseAppProfile,
  parseAddress,
  parseReferenceHistory,
} from "./parsers";

export const renderTabsContent = ({
  tabName,
  userData,
  transactionsData,
}: any) => {
  switch (tabName) {
    case tabNames.BORROWER_INFO:
      return <Table items={parseBorrowerInfo(userData)} />;
    case tabNames.COSIGNER_INFO:
      return <Table items={parseCosignerInfo(userData)} />;
    case tabNames.APP_PROFILE:
      return <Table items={parseAppProfile(userData)} />;
    case tabNames.ADDRESS_HISTORY:
      return <Table items={parseAddress(userData)} />;
    case tabNames.REFERENCE_HISTORY:
      return <Table items={parseReferenceHistory(userData)} />;
    case tabNames.APPLICATION_DOCUMENTS:
      return <Documents />;
    case tabNames.HISTORY:
      return <History transactions={transactionsData} />;
    default:
      return <></>;
  }
};
