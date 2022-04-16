import * as actionTypes from "./ActionTypes"
import axiosInstance  from 'util/api'
import { tokenConfig } from 'util/TokenConfig';





// FETCH DailyContributions
export const fetchDailyContributions = () => async(dispatch) => {
try {
  const res = await axiosInstance.get("trans/get_daily_trans")
  dispatch({type: actionTypes.FETCH_CONTRIBUTION_DAILY_SUCCESS, payload: res.data});
} catch (error) {
  dispatch({type: actionTypes.FETCH_CONTRIBUTION_DAILY_FAIL,payload: error});
}
}

// FETCH MonthlyContributions
export const fetchMonthlyContributions = () => async(dispatch) =>{
try {
  const res = await axiosInstance.get("trans/get_target_trans")
  dispatch({type: actionTypes.FETCH_CONTRIBUTION_TARGET_SUCCESS , payload: res.data});
} catch (error) {
  dispatch({type: actionTypes.FETCH_CONTRIBUTION_TARGET_FAIL, payload: error});
}
}
// main account
export const fetchBankAccountMain = () => async(dispatch) =>{
try {
  const res = await axiosInstance.get("account/get_bank_account")
  dispatch({type: actionTypes.FETCH_BANK_MAIN_SUCCESS , payload: res.data});
} catch (error) {
  dispatch({type: actionTypes.FETCH_BANK_MAIN_FAIL, payload: error});
}
}
// fetch wallet acount
export const fetchBankAccountBonus = () => async(dispatch) =>{
try {
  const res = await axiosInstance.get("account/get_bonus_account")
  dispatch({type: actionTypes.FETCH_BANK_BONUS_SUCCESS , payload: res.data});
} catch (error) {
  dispatch({type: actionTypes.FETCH_BANK_BONUS_FAIL, payload: error});
}
}



