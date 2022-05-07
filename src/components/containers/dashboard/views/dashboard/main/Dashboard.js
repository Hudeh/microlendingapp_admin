import React, { lazy, useEffect } from "react";
import { useSelector } from "react-redux";
import CircularProgress from "util/CircularProgress";
import { CRow, CCol } from "@coreui/react";

const WidgetsDropdown = lazy(() => import("../../widgets/WidgetsDropdown.js"));

const Dashboard = () => {
  const accountState = useSelector((state) => state.contributionReducer);
  const {
   loading,
  } = accountState;
  useEffect(() => {
    document.title = "De-Ghauzi | Dashboard";
  
  }, []);

  return (
    <>
      <div>
        {loading? <CircularProgress />:<WidgetsDropdown />}
      </div>
    </>
  );
};

export default Dashboard;
