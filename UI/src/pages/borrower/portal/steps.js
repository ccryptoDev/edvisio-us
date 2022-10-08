import SelectSchool from "./Select-school";
import Consent from "./Consent";

export const steps = () => [
  {
    active: true,
    completed: false,
    label: "select school and program terms",
    number: 1,
    component: SelectSchool,
  },
  {
    active: false,
    completed: false,
    label: "communication consent",
    number: 2,
    component: Consent,
  },
  {
    active: false,
    completed: false,
    label: "credit authorization",
    number: 3,
    component: Consent,
  },
  {
    active: false,
    completed: false,
    label: "Solicitation Disclosure",
    number: 4,
    component: Consent,
  },
];
