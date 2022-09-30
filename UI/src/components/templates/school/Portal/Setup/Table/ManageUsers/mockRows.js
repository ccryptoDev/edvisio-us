import { v4 as uuid } from "uuid";

const createRows = Array(32).fill({
  school: "ABC School",
  appId: "LN_11667",
  lastName: "Adams",
  firstName: "Temeka",
  ssn: "123456789",
  email: "temekaadams@example.com",
  userName: "06/06/1896",
  registrationDate: "08/08/2022",
  creditDebt: 12000,
  screenTracking: uuid(),
});

export const rows = createRows.map((row) => ({
  ...row,
  screenTracking: uuid(),
}));
