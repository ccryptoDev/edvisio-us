import React from "react";
import TextField from "../../../../../../molecules/Controllers/TextField/Placeholder-label";
import FormattedField from "../../../../../../molecules/Controllers/FormattedField/Placeholder-label";
import DatePicker from "../../../../../../molecules/Controllers/DatePicker/Placeholder-label";
import Select from "../../../../../../molecules/Controllers/Select/Placeholder-label";

export const initForm = () => {
  return {
    firstName: { value: "", message: "", required: true },
    middleName: { value: "", message: "", required: true },
    lastName: { value: "", message: "", required: true },
    ssn: { value: "", message: "", required: true },
    dob: { value: "", message: "", required: true },
    email: { value: "", message: "", required: true },
    licenseNumber: { value: "", message: "", required: true },
    licenseState: { value: "", message: "", required: true },
    studentId: { value: "", message: "", required: true },
    schoolState: { value: "", message: "", required: false },
    schoolName: { value: "", message: "", required: false },
    academicYear: { value: "", message: "", required: false },
  };
};

export const repaymentCalculatorFormInit = () => {
  return {
    requestedAmount: { value: "", message: "", required: true },
    repayment: { value: "", message: "", required: true },
    graduationDate: { value: "", message: "", required: true },
    releaseToServicing: { value: "", message: "", required: true },
  };
};

export const repaymentTermsFormInit = () => {
  return {
    apr: { value: "", message: "", required: false },
    interestRate: { value: "", message: "", required: false },
    inSchoolPayment: { value: "", message: "", required: false },
    afterSchoolPayment: { value: "", message: "", required: false },
  };
};

const requiredFieldLabel = (text) => {
  return (
    <>
      {text}
      <span style={{ color: "red" }}>*</span>
    </>
  );
};

export const applicationInformation = (form) => [
  {
    value: form.firstName.value,
    message: form.firstName.message,
    name: "firstName",
    label: requiredFieldLabel("First Name"),
    component: TextField,
  },
  {
    value: form.middleName.value,
    message: form.middleName.message,
    name: "middleName",
    label: requiredFieldLabel("Middle Name"),
    component: TextField,
  },
  {
    value: form.lastName.value,
    message: form.lastName.message,
    name: "lastName",
    label: requiredFieldLabel("Last Name"),
    component: TextField,
  },
  {
    value: form.ssn.value,
    message: form.ssn.message,
    name: "ssn",
    format: "#####",
    label: requiredFieldLabel("Social Security Number"),
    component: FormattedField,
  },
  {
    value: form.dob.value,
    message: form.dob.message,
    name: "dob",
    label: requiredFieldLabel("Date of Birth"),
    component: DatePicker,
  },
  {
    value: form.email.value,
    message: form.email.message,
    name: "email",
    label: requiredFieldLabel("Email Address"),
    component: TextField,
  },
  {
    value: form.licenseNumber.value,
    message: form.licenseNumber.message,
    name: "licenseNumber",
    label: "Driver's License Number",
    component: FormattedField,
  },
  {
    value: form.licenseState.value,
    message: form.licenseState.message,
    name: "licenseState",
    label: "Driver's License State",
    component: TextField,
  },
  {
    value: form.studentId.value,
    message: form.studentId.message,
    name: "studentId",
    label: "Student ID",
    component: FormattedField,
  },
];

export const schoolInformation = (form) => [
  {
    value: form.schoolState.value,
    message: form.schoolState.message,
    label: requiredFieldLabel("School State"),
    name: "schoolState",
    component: Select,
    options: [],
  },
  {
    value: form.schoolName.value,
    message: form.schoolName.message,
    label: requiredFieldLabel("School Name"),
    name: "schoolName",
    component: Select,
    options: [],
  },
  {
    value: form.academicYear.value,
    message: form.academicYear.message,
    label: requiredFieldLabel("Academic School Year"),
    name: "academicYear",
    component: Select,
    options: [],
  },
];

export const repaymentInformation = (form) => [
  {
    value: form.requestedAmount.value,
    message: form.requestedAmount.message,
    name: "requestedAmount",
    label: requiredFieldLabel("Requested Amount"),
    component: FormattedField,
    prefix: "$",
    thousandSeparator: true,
  },
  {
    value: form.repayment.value,
    message: form.repayment.message,
    name: "repayment",
    label: requiredFieldLabel("Repayment"),
    component: FormattedField,
    prefix: "$",
    thousandSeparator: true,
  },
  {
    value: form.graduationDate.value,
    message: form.graduationDate.message,
    name: "graduationDate",
    label: requiredFieldLabel("Expected Graduation Date"),
    component: DatePicker,
  },
  {
    value: form.releaseToServicing.value,
    message: form.releaseToServicing.message,
    name: "releaseToServicing",
    label: requiredFieldLabel("Release to Servicing"),
    component: FormattedField,
  },
];

export const repaymentTerms = (form) => [
  {
    value: form.apr.value,
    message: form.apr.message,
    name: "apr",
    label: "Annual Percentage Rate (APR)",
    component: FormattedField,
    prefix: "$",
    thousandSeparator: true,
  },
  {
    value: form.interestRate.value,
    message: form.interestRate.message,
    name: "interestRate",
    label: "Interest Rate",
    component: FormattedField,
    prefix: "$",
    thousandSeparator: true,
  },
  {
    value: form.inSchoolPayment.value,
    message: form.inSchoolPayment.message,
    name: "inSchoolPayment",
    label: "In School Payment",
    component: FormattedField,
  },
  {
    value: form.afterSchoolPayment.value,
    message: form.afterSchoolPayment.message,
    name: "afterSchoolPayment",
    label: "After School Payment",
    component: FormattedField,
  },
];
