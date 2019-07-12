import {TimerState, TimerStateEvent, Tool } from "../timer/interface";
import {Action, Reducer} from "redux";
import {ActionType} from "../actions/timer";

const moreTool = (state: TimerState): TimerStateEvent => {
  const item: Tool = {
    id: randomPos(100000), // HACK: 雑
    top: randomPos(500),
    left: randomPos(300),
  };
  const tools = Array.from(new Set([...state.tools, item]));
  return { tools };
};

const randomPos = (max: number): number => {
  return Math.floor(Math.random() * Math.floor(max));
}

const initialState: TimerState = {
  tools: []
}

export const timer: Reducer = (state: TimerState = initialState, action: Action<ActionType>): TimerState => {
  const stateEventCreator = {
    [ActionType.MORE_TOOL]: moreTool,
  }[action.type];
  const stateEvent = stateEventCreator ? stateEventCreator(state) : {};
  return {...state, ...stateEvent};
};