import * as angular from "angular";
import "@uirouter/angularjs";
import "angular-ui-bootstrap";
import { stateConfig } from "./states";
import { appComponent } from "./components/app/app.component";
import { navbarComponent } from "./components/nav-bar/nav-bar.component";
import { homeComponent } from "./components/home/home.component";
import { aboutComponent } from "./components/about/about.component";

angular

  .module("app", ["ui.bootstrap", "ui.router"])

  .config(stateConfig)

  .component("app", appComponent)
  .component("appNavBar", navbarComponent)
  .component("appHome", homeComponent)
  .component("appAbout", aboutComponent)

  ;
