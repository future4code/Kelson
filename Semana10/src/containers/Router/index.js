import React from "react";
import { ConnectedRouter } from "connected-react-router";
import { Switch, Route } from "react-router-dom";
import LoginPage from "../LoginPage";
import HomePage from "../HomePage";
import Aplication from "../Application";
import CreateTrip from "../CreateTrip";
import ListTripPage from "../ListTripsPage";
import TripDetailsPage from "../TripDetailsPage";
import Adm from "../Adm";
import ProtectRoute from "../../components/protectRoute"

export const routes = {
  home: "/",
  application: "/application-form", 
  login: "/login",
  adm: "/adm",
  createTrip: "/trips/create",
  listTrip: "/trips/list",
  detailsTrip: "/trips/details"
  // Outras rotas aqui
};

function Router(props) {
  return (
    <ConnectedRouter history={props.history}>
      <Switch>
        <Route path={routes.application} component={Aplication} />
        <ProtectRoute path={routes.adm} component={Adm} />
        <Route path={routes.login} component={LoginPage} />
        <ProtectRoute path={routes.createTrip} component={CreateTrip} />
        <ProtectRoute path={routes.listTrip} component={ListTripPage} />
        <ProtectRoute path={routes.detailsTrip} component={TripDetailsPage} />
        <Route path={routes.home} component={HomePage} />
      </Switch>
    </ConnectedRouter>
  );
}

export default Router;
