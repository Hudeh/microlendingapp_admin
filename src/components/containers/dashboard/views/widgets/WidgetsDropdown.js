import React from "react";
import { CRow, CCol } from "@coreui/react";
import { BiMoney } from "react-icons/bi";
import { useSelector } from "react-redux";
import CircularProgress from "util/CircularProgress";
var numeral = require("numeral");

const WidgetsDropDown = () => {
  // account
  const accountState = useSelector(state => state.contributionReducer);
  const {
    daily_count_wit,
    daily_amount_wit,
    daily_amount_dop,
    daily_count_dop,
    target_amount_wit,
    target_amount_dop
  } = accountState;
  // console.log(dailyData.map((d)=> d))

  return (
    <CRow>
      <CCol sm="6" lg="4">
        <div
          className="pt-4 pl-3"
          style={{ height: "170px", backgroundColor: "#B1882C", color: "#fff" }}
        >
          <div className="mt-0 d-flex justify-content-between pr-3">
            <div className=" d-flex justify-content-between pr-3">
              <h4 className="mt-2 font-weight-bold">
                Deposit: ₦
                {numeral(daily_amount_dop).format("0,0")}
              </h4>
              <span className="text-white  icon-position">R.Deposit</span>
            </div>
            <p className="font-weight-bold total-donations-received" />
          </div>
          <div className="d-flex justify-content-between pr-3">
            <h4 className="mt-2 font-weight-bold">
              No Deposit: {daily_count_dop}
            </h4>
            <p className="font-weight-bold total-donations-received" />
          </div>
        </div>
      </CCol>
      <CCol sm="6" lg="4">
        <div
          className="pt-4 pl-3"
          style={{ height: "170px", backgroundColor: "#0C5421", color: "#fff" }}
        >
          <div className=" d-flex justify-content-between pr-3">
            <h4 className="mt-2 font-weight-bold">
              Withdrawal: ₦{numeral(daily_amount_wit).format("0,0")}
            </h4>
            <span className="text-white  icon-position">R.Withdrawal</span>
          </div>
          <div className="d-flex justify-content-between pr-3">
            <h4 className="mt-2 font-weight-bold">
              No Withdrawal: {daily_count_wit}
            </h4>
            <p className="font-weight-bold total-donations-received" />
          </div>
        </div>
      </CCol>
      {/* 
      <CCol sm="6" lg="4">
        <div className="ogaDonasi">
          <div className="ikon">
            <Link title="Click and fill in your detail" style={{ backgroundColor: "#B1882C" }} role="button" to="/dashboard/contribution/withdrawal">
              <span>Request Withdrawal</span>
            </Link>
          </div>
        </div>
      </CCol> */}

      <CCol sm="6" lg="4">
        <div
          className="pt-4 pl-3"
          style={{ height: "170px", backgroundColor: "#B1882C", color: "#fff" }}
        >
          <div className=" d-flex justify-content-between pr-3">
            <h4 className="mt-2 font-weight-bold">
              Deposit: ₦{numeral(target_amount_dop).format("0,0")}
            </h4>
            <span className="text-white  icon-position">Targeted</span>
          </div>

          <div className="d-flex justify-content-between pr-3">
            <h4 className="mt-2 font-weight-bold">
              Withdrawal: ₦{target_amount_wit}
            </h4>
          </div>
        </div>
      </CCol>
    </CRow>
  );
};

export default WidgetsDropDown;
