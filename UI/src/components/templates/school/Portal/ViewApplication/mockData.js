export const httpResponse = {
  creditDecision: "Positive",
  borrowerCreditScore: "+824",
  coSignerCreditScore: "+824",
  graduationDate: "08/08/2022",
  releaseToServicingDate: "08/08/2022",
  program: "24",
  startDate: "08/08/2022",
  endDate: "08/08/2022",
  cost: "10000",
  financialAssistance: "10000",
  tuitionAmount: "10000",
  loanTerm: "24",
  borrowerName: "Temeka Adams",
  borrowerPhoneNumber: "348729769",
  borrowerEmail: "temekaadams@example.com",
  coSignerName: "John Doe",
  coSignerSSN: "240532104",
  coSignerEmail: "doe.j@example.com",
};

export const groupTableData = (data) => {
  return {
    borrowerInfo: {
      borrowerName: data?.borrowerName || "",
      borrowerPhoneNumber: data?.borrowerPhoneNumber || "",
      borrowerEmail: data?.borrowerEmail || "",
    },
    coSignerInfo: {
      coSignerName: data?.coSignerName || "",
      coSignerSSN: data?.coSignerSSN || "",
      coSignerEmail: data?.coSignerEmail || "",
    },
    applicationInfo: {
      creditDecision: data?.creditDecision || "",
      borrowerCreditScore: data?.borrowerCreditScore || "",
      coSignerCreditScore: data?.coSignerCreditScore || "",
      graduationDate: data?.graduationDate || "",
      releaseToServicingDate: data?.releaseToServicingDate || "",
      program: data?.program || "",
      startDate: data?.startDate || "",
      endDate: data?.endDate || "",
      cost: data?.cost || "",
      financialAssistance: data?.financialAssistance || "",
      tuitionAmount: data?.tuitionAmount || "",
      loanTerm: data?.loanTerm || "",
    },
  };
};
