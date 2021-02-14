//REDUCERS
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import surveysRedducer from "./surveysReducer";
import { reducer as reduxForm } from "redux-form";

export default combineReducers({
  auth: authReducer,
  form: reduxForm,
  surveys: surveysRedducer,
});
