import * as actionTypes from "./ActionTypes";
import axiosInstance from "util/api";
import { tokenConfig } from "util/TokenConfig";

// FETCH DailyContributions
export const fetchDailyContributions = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("trans/get_daily_all_trans", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_CONTRIBUTION_DAILY_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_CONTRIBUTION_DAILY_FAIL, payload: error });
  }
};

// FETCH MonthlyContributions
export const fetchMonthlyContributions = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("trans/get_target_all_trans", tokenConfig(getState));
    dispatch({
      type: actionTypes.FETCH_CONTRIBUTION_TARGET_SUCCESS,
      payload: res.data
    });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_CONTRIBUTION_TARGET_FAIL, payload: error });
  }
};
// main account
export const fetchTodayDataDaily = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("trans/get_daily_today_data", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_BANK_MAIN_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_BANK_MAIN_FAIL, payload: error });
  }
};
// fetch wallet acount
export const fetchTodayDataTarget = () => async (dispatch, getState) => {
  try {
    const res = await axiosInstance.get("trans/get_target_today_data", tokenConfig(getState));
    dispatch({ type: actionTypes.FETCH_BANK_BONUS_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: actionTypes.FETCH_BANK_BONUS_FAIL, payload: error });
  }
};
