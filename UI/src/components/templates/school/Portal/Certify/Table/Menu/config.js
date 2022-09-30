import { ReactComponent as ViewIcon } from "../../../../../../../assets/svgs/view.svg";
import { ReactComponent as CheckedIcon } from "../../../../../../../assets/svgs/checked.svg";
import { ReactComponent as RefreshIcon } from "../../../../../../../assets/svgs/refresh.svg";
import { ReactComponent as PrinterIcon } from "../../../../../../../assets/svgs/printer.svg";
import { ReactComponent as ErrorIcon } from "../../../../../../../assets/svgs/error.svg";
import { routes } from "../../../../../../../routes/School/routes";

export const menuList = ({ goTo, withdraw, print }) => [
  {
    icon: ViewIcon,
    label: "View application",
    onClick: () => goTo(routes.VIEW_APPLICATION),
  },
  {
    icon: CheckedIcon,
    label: "Certify Application",
    onClick: () => goTo(routes.CERTIFY),
  },
  {
    icon: RefreshIcon,
    label: "Application History",
    onClick: () => goTo(routes.APPLICATION_HISTORY),
  },
  {
    icon: PrinterIcon,
    label: "Print Application",
    onClick: (e) => print(e),
  },
  {
    icon: ErrorIcon,
    label: "Withdraw Application",
    onClick: (e) => withdraw(e),
  },
];
