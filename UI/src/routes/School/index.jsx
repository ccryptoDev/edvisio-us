import React from "react";
import { Route, Switch, useParams } from "react-router-dom";
import { routes as route } from "./routes";
import Login from "../../pages/school/authorization/Login";
import ForgotPassword from "../../pages/school/authorization/RecoverPassword";
import Portal from "../../pages/school/portal";
import Search from "../../pages/school/portal/Search";
import Certify from "../../pages/school/portal/Certify";
import CertifyApplication from "../../pages/school/portal/ViewApplication";
import { UserProvider } from "../../contexts/admin";
import ApplicationHistory from "../../pages/school/portal/ApplicationHistory";
import Reports from "../../pages/school/portal/Reports";
import AllInclusiveReport from "../../pages/school/portal/Reports/All-inclusive";
import Setup from "../../pages/school/portal/Setup";
import Admin from "../../pages/school/portal/Admin/Admin";
import AdminApplication from "../../pages/school/portal/Admin/ViewApplication";
import CreditPullAuthorization from "../../pages/school/portal/TuitionEase";
import IncompleteApplications from "../../pages/school/portal/IncompleteApplications";

const Routes = () => {
  const params = useParams();
  return (
    <UserProvider applicationId={params.id}>
      <Switch>
        <Route path={route.LOGIN} exact component={Login} />
        <Route path={route.FORGOT_PASSWORD} exact component={ForgotPassword} />
        <Route path={route.SEARCH} exact component={Search} />
        <Route
          path={`${route.VIEW_APPLICATION}/:id`}
          exact
          component={CertifyApplication}
        />
        <Route path={route.CERTIFY} exact component={Certify} />
        <Route
          exact
          path={`${route.APPLICATION_HISTORY}/:id`}
          component={ApplicationHistory}
        />
        <Route path={route.HOME} exact component={Portal} />
        <Route path={route.REPORTS} exact component={Reports} />
        <Route
          path={route.REPORT_ALL_INCLUSIVE}
          exact
          component={AllInclusiveReport}
        />
        <Route path={route.SETUP} exact component={Setup} />
        <Route path={route.ADMIN} exact component={Admin} />
        <Route
          path={route.CREDIT_PULL_AUTHORIZATION}
          exact
          component={CreditPullAuthorization}
        />
        <Route
          path={route.INCOMPLETE}
          exact
          component={IncompleteApplications}
        />
        <Route
          path={`${route.ADMIN_VIEW_APPLICATION}/:id`}
          exact
          component={AdminApplication}
        />
      </Switch>
    </UserProvider>
  );
};

export default Routes;
