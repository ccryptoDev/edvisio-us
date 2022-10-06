import { ReactComponent as ViewIcon } from "../../../../../../../assets/svgs/view.svg";
import { ReactComponent as CheckedIcon } from "../../../../../../../assets/svgs/checked.svg";
import { ReactComponent as RefreshIcon } from "../../../../../../../assets/svgs/refresh.svg";
import { ReactComponent as PrinterIcon } from "../../../../../../../assets/svgs/printer.svg";
import { ReactComponent as ErrorIcon } from "../../../../../../../assets/svgs/error.svg";
import { ReactComponent as EditIcon } from "../../../../../../../assets/svgs/pencil.svg";
import { routes } from "../../../../../../../routes/School/routes";

export const menuList = ({ goTo, withdraw, print }) => [
  {
    icon: ViewIcon,
    label: "View application",
    onClick: () => goTo(routes.ADMIN_VIEW_APPLICATION),
  },
  {
    icon: RefreshIcon,
    label: "Application History",
    onClick: () => goTo(routes.ADMIN_APPLICATION_HISTORY),
  },
  {
    icon: PrinterIcon,
    label: "Print Application",
    onClick: (e) => print(e),
  },

  {
    icon: EditIcon,
    label: "Change Status",
    onClick: (e) => print(e),
  },
  {
    icon: EditIcon,
    label: "Change RTS Date",
    onClick: (e) => print(e),
  },
  {
    icon: PrinterIcon,
    label: "Print Application",
    onClick: (e) => print(e),
  },
  {
    icon: EditIcon,
    label: "Change First Pay Due Date",
    onClick: (e) => withdraw(e),
  },
  {
    icon: CheckedIcon,
    label: "Approve Research Review",
    onClick: (e) => withdraw(e),
  },
  {
    icon: ErrorIcon,
    label: "Deny Research Review",
    onClick: (e) => withdraw(e),
  },
  {
    icon: ViewIcon,
    label: "Review Credit Decision",
    onClick: (e) => withdraw(e),
  },
  {
    icon: CheckedIcon,
    label: "Confirm Credit Decision",
    onClick: (e) => withdraw(e),
  },
];
