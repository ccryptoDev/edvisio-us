import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { ClassicTable, Cell } from "../../../../../atoms/Table";
import {
  borrowerInformation,
  coSignerInformation,
  applicationInformation,
} from "./fields.config";
import { httpResponse, groupTableData } from "./mockData";
import Row from "./Row";
import Tr from "./Row/styles";
import { mockRequest } from "../../../../../../utils/mockRequest";
import Loader from "../../../../../molecules/Loaders/LoaderWrapper";

const TableWrapper = styled(ClassicTable)`
  border: 1px solid var(--color-gray-3);
  border-radius: 6px;
  overflow: hidden;
`;

const ViewApplicationTable = () => {
  const [editedFieldName, setEditedFieldName] = useState(""); // accepts field name that should be edited
  const [fetchingData, setFetchingData] = useState(false);
  const [tableData, setTableData] = useState<any>({
    borrowerInfo: {},
    coSignerInfo: {},
    applicationInfo: {},
  });

  // FETCH DATA TO POPULATE THE TABLE
  const fetchData = async () => {
    setFetchingData(true);
    const response = await mockRequest(httpResponse);
    setFetchingData(false);
    if (response && !response.error) {
      const groupedData = groupTableData(response);
      setTableData(groupedData);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // UPDATE VALUE ON THE UI IF THE HTTP REQUEST IS SUCCESSFUL
  // THIS SHOULD PREVENT THE UI FROM REFETCHING THE SAVED DATA
  const onChangeHandler = ({
    value,
    name,
    fieldName,
  }: {
    value: string;
    name: "borrowerInfo" | "coSignerInfo" | "applicationInfo";
    fieldName: string;
  }) => {
    const updatedTable = { ...tableData };
    const section = { ...updatedTable[name] };
    section[fieldName] = value;
    updatedTable[name] = section;
    setTableData(updatedTable);
  };

  return (
    <Loader loading={fetchingData}>
      <div>
        <TableWrapper>
          <table>
            <tbody>
              <Tr>
                <td>
                  <Cell className="cell">School Name:</Cell>
                </td>
                <td>
                  <Cell className="cell border">DemoSchool</Cell>
                </td>
              </Tr>
              <Row
                fields={borrowerInformation(tableData.borrowerInfo)}
                setEditedFieldName={setEditedFieldName}
                editedFieldName={editedFieldName}
                loading={fetchingData}
                onChange={({ value, fieldName }: any) =>
                  onChangeHandler({ value, fieldName, name: "borrowerInfo" })
                }
              />
              <Row
                fields={coSignerInformation(tableData.coSignerInfo)}
                setEditedFieldName={setEditedFieldName}
                editedFieldName={editedFieldName}
                loading={fetchingData}
                onChange={({ value, fieldName }: any) =>
                  onChangeHandler({ value, fieldName, name: "coSignerInfo" })
                }
              />
              <Row
                fields={applicationInformation(tableData.applicationInfo)}
                setEditedFieldName={setEditedFieldName}
                editedFieldName={editedFieldName}
                loading={fetchingData}
                onChange={({ value, fieldName }: any) =>
                  onChangeHandler({ value, fieldName, name: "applicationInfo" })
                }
              />
            </tbody>
          </table>
        </TableWrapper>
      </div>
    </Loader>
  );
};

export default ViewApplicationTable;
