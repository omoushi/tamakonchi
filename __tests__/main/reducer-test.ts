import { main, Situation } from "../../src/main/reducer";
import { breakUp, neglect } from "../../src/main/actions";
import { MainState } from "../../src/main/interface"

const statePatterns: (MainState | undefined)[] = [
  undefined,
  { situation: Situation.NORMAL }
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