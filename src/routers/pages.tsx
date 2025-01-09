import { lazy } from "react";
import Loadable from "../components/utils/Loadable";

export const MainPage = Loadable(lazy(() => import("../pages/MainPage")));
