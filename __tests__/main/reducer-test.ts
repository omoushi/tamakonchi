import { main, Situation, Stage } from "../../src/main/reducer";
import { breakUp, loseJob, neglect } from "../../src/main/actions";
import { MainState } from "../../src/main/interface"

const statePatterns: (MainState | undefined)[] = [
  undefined,
  { stage: Stage.NORMAL, situation: Situation.EMPTY },
  { stage: Stage.NORMAL, situation: Situation.NO_JOB },
  { stage: Stage.DEAD, situation: Situation.EMPTY },
  { stage: Stage.BROKEN_UP, situation: Situation.EMPTY }
];

describe('breakUp', () => {
  statePatterns.forEach(state => {
    it(`state: ${JSON.stringify(state)}`, () => {
      expect(main(state, breakUp())).toMatchSnapshot()
    })
  });
})

describe('neglect', () => {
  statePatterns.forEach(state => {
    it(`state: ${JSON.stringify(state)}`, () => {
      expect(main(state, neglect())).toMatchSnapshot()
    })
  });
})

describe('loseJob', () => {
  statePatterns.forEach(state => {
    it(`state: ${JSON.stringify(state)}`, () => {
      expect(main(state, loseJob())).toMatchSnapshot()
    })
  });
})