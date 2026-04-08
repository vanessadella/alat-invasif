import { createBrowserRouter } from "react-router";
import { RootLayout } from "./components/root-layout";
import { SummaryPage } from "./components/summary-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      { index: true, Component: SummaryPage },
      { path: "*", Component: SummaryPage },
    ],
  },
]);
