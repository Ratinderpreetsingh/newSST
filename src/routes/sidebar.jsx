import {
  CustomerPath,
  DashboardPath,
  DefinitionPath,
  EventsPath,
  HotspotPath,
  IssuesPath,
  MisfirePath,
  ScorePath,
  ShopPath,
  SurveysPath,
} from "../Constant/Pages_Routes";

export const sidebarRoutes = [
  {
    title: "Dashboard",
    path: DashboardPath.DASHBOARD,
    icon: "bi-speedometer2",
    submenu: false,
  },
  {
    title: "Customer",
    path: CustomerPath.CUSTOMER,
    icon: "bi-person-plus",
    submenu: false,
  },
  {
    title: "Shops",
    path: "shops",
    icon: "bi-shop",
    submenu: [
      { title: "Add Shop", path: ShopPath.ADD_SHOP },
      { title: "Add Shop Flow", path: "https://miro.com/signup/" ,isTarget:true},
      { title: "View Shop", path: ShopPath.SHOP },
    ],
  },
  {
    title: "Definitions",
    path: "definitions",
    icon: "bi-database",
    submenu: [
      { title: "Definition", path: DefinitionPath.DEFINITION },
      { title: "Add Definition", path: DefinitionPath.ADD_DEFINITION },
      { title: "Definition Test", path: DefinitionPath.DEFINITION_TEST },
      { title: "DM Test", path: "./definition_dm.html" },
    ],
  },
  {
    title: "Events",
    path: EventsPath.EVENTS,
    icon: "bi-gear-fill",
    submenu: false,
  },
  {
    title: "Surveys",
    path: "surveys",
    icon: "bi-clipboard-data",
    submenu: [
      { title: "Survey", path: SurveysPath.SURVEYS },
      { title: "Survey Type", path: SurveysPath.SURVEYS_TYPE },
      { title: "Survey Alerts", path: SurveysPath.SURVEYS_ALERT },
    ],
  },
  {
    title: "Production",
    path: "production",
    icon: "bi-building-add",
    submenu: false,
  },
  {
    title: "Unresolved Issues",
    path: IssuesPath.UNRESOLVED_ISSUE,
    icon: "bi-puzzle",
    submenu: false,
  },
  {
    title: "Hotspot",
    path: HotspotPath.HOTSPOT,
    icon: "bi-broadcast-pin",
    submenu: false,
  },
  {
    title: "Perfect Score",
    path: ScorePath.PERFECT_SCORE,
    icon: "bi-patch-check",
    submenu: false,
  },
  {
    title: "Misfire",
    path: MisfirePath.MISFIRE,
    icon: "bi-exclamation-triangle-fill",
    submenu: false,
  },
  {
    title: "Issue Alerts",
    path: "issue_alerts",
    icon: "bi-shield-exclamation",
    submenu: false,
  },
  {
    title: "Logout",
    path: "logout",
    icon: "bi-box-arrow-right",
    submenu: false,
  },
];
