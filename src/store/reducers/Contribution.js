import * as actionTypes from "store/actions/ActionTypes"

const INITIAL_STATE = {
  dailyContributions: [],
  monthlyContributions: [],
  main_count: "",
  daily_count_wit: "",
  daily_amount_wit: "",
  daily_amount_dop: "",
  daily_count_dop: "",
  target_count_wit: "",
  target_amount_wit: "",
  target_amount_dop: "",
  target_count_dop: "",
  main_next: "",
  main_previous: "",
  loading: true

};


const auction = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.FETCH_CONTRIBUTION_DAILY_SUCCESS:
      return {
        ...state,
        dailyContributions: action.payload.results,
        main_count: action.payload.count,
        main_next: action.payload.next,
        main_previous:action.payload.previous,
        loading: false
      };
    case actionTypes.FETCH_CONTRIBUTION_TARGET_SUCCESS :
      return {
        ...state,
        monthlyContributions: action.payload,
        main_count: action.payload.count,
        main_next: action.payload.next,
        main_previous: action.payload.previous,
        loading: false
      };
    case actionTypes.FETCH_BANK_MAIN_SUCCESS:
      return {
        ...state,
        daily_amount_dop: action.payload.query_total_depo.amount__sum,
        daily_amount_wit: action.payload.total_withdrawal.amount__sum,
        daily_count_wit: action.payload.deposite_with,
        daily_count_dop: action.payload.deposite_count,
        loading: false
      };
    case actionTypes.FETCH_BANK_BONUS_SUCCESS:
      return {
        ...state,
        target_amount_dop: action.payload.query_total_depo.contribution_amount__sum,
        target_amount_wit: action.payload.query_total_withdrawal.contribution_amount__sum
      };
    case actionTypes.FETCH_CONTRIBUTION_TARGET_FAIL:
    case actionTypes.FETCH_CONTRIBUTION_DAILY_FAIL:
    case actionTypes.FETCH_BANK_MAIN_FAIL:
    case actionTypes.FETCH_BANK_BONUS_FAIL:
      return { ...state, loading: true };
    default:
      return state;
  }
}

export default auction;