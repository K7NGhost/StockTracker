import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/HomePage/HomePage";
import App from "../App";
import SearchPage from "../Pages/SearchPage/SearchPage";
import CompanyPage from "../Pages/CompanyPage/CompanyPage";
import CompanyProfile from "../Components/CompanyProfile/CompanyProfile";
import IncomeStatement from "../Components/IncomeStatement/IncomeStatement";
import DesignPage from "../Pages/DesignPage/DesignPage";
import BalanceSheet from "../Components/BalanceSheet/BalanceSheet";
import CashFlowStatement from "../Components/CashFlowStatement/CashFlowStatement";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "", element: <HomePage></HomePage> },
      { path: "search", element: <SearchPage></SearchPage> },
      { path: "design-guide", element: <DesignPage></DesignPage> },
      {
        path: "company/:ticker",
        element: <CompanyPage></CompanyPage>,
        children: [
          {
            path: "company-profile",
            element: <CompanyProfile></CompanyProfile>,
          },
          {
            path: "income-statement",
            element: <IncomeStatement></IncomeStatement>,
          },
          {
            path: "balance-sheet",
            element: <BalanceSheet></BalanceSheet>,
          },
          {
            path: "cashflow-statement",
            element: <CashFlowStatement></CashFlowStatement>,
          },
        ],
      },
    ],
  },
]);
