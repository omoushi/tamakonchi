import { combineReducers } from "redux";
import { main } from "./main/reducer";
import { MainState } from "./main/interface";

export interface RootState {
  main: MainState;
}

export default combineReducers<RootState>({
  main,
});
