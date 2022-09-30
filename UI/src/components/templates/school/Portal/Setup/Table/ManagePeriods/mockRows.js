import { v4 as uuid } from "uuid";

export const createRows = Array(32).fill({
  school: "Ed2go",
  userLevel: "Demo School",
  organization: "SELF",
  product: "TuitionEase",
  status: "Pending certification",
  updatedAt: "09/09/2022",
  amountRequested: 12700,
  amountCertified: 12700,
  creditDebt: 12000,
});

export const rows = createRows.map((row) => ({
  ...row,
  screenTracking: uuid(),
}));
