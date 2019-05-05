import { main, Situation } from "../../src/main/reducer";
import { breakUp, neglect, notTakeCare, takeCare } from "../../src/main/actions";
import { MainState } from "../../src/main/interface"

const statePatterns: (MainState | undefined)[] = [
  undefined,
  { situation: Situation.NORMAL }
];

describe('takeCare', () => {
  statePatterns.forEach(state => {
    it(`state: ${JSON.stringify(state)}`, () => {
      expect(main(state, takeCare())).toMatchSnapshot()
    });
  });
});

describe('notTakeCare', () => {
  describe('状態が変わる場合', () => {
    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(main(state, notTakeCare())).toMatchSnapshot()
      });
    });
  });
});

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