import { main, Situation, Stage } from "../../src/main/reducer";
import { breakUp, loseJob, makeWorry, neglect } from "../../src/main/actions";
import { takeSnapshot } from "../utils"
import { MainState } from "../../src/main/interface"
import { AnyAction } from "redux"

describe('main', () => {
  takeSnapshot<MainState, AnyAction>({
    reducer: main,
    states: [
      undefined,
      { stage: Stage.NORMAL, situation: Situation.EMPTY },
      { stage: Stage.NORMAL, situation: Situation.NO_JOB },
      { stage: Stage.NORMAL, situation: Situation.LINE },
      { stage: Stage.DEAD, situation: Situation.EMPTY },
      { stage: Stage.BROKEN_UP, situation: Situation.EMPTY }
    ],
    actionCreators: [breakUp, neglect, loseJob, makeWorry]
  });
});
