import { Action, ActionCreator, Reducer } from "redux";

export interface Factor<S, A extends Action> {
  reducer: Reducer<S, A>;
  states: (S | undefined)[];
  actionCreators: ActionCreator<A>[];
}

export function takeSnapshot<S, A extends Action>(factor: Factor<S, A>): void {
  factor.actionCreators.forEach((actionCreator): void => {
    it(actionCreator.name, (): void => {
      factor.states.forEach((state): void => {
        const reduced = factor.reducer(state, actionCreator());
        expect({in: state, out: reduced}).toMatchSnapshot();
      });
    });
  });
}