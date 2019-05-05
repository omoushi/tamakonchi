import { Health, main, Situation, Stage, Statuses } from "../../src/main/reducer";
import { breakUp, neglect, notTakeCare, takeCare } from "../../src/main/actions";
import { randomIn } from "../../src/utils";
import { MainState } from "../../src/main/interface"

jest.mock('../../src/utils');
const mockRandomIn = <jest.Mock<Statuses>>randomIn;


const statePatterns: (MainState | undefined)[]  = [
  undefined,
  {stage: Stage.EGG, health: Health.GOOD, situation: Situation.NORMAL},
  {stage: Stage.EGG, health: Health.BAD, situation: Situation.NORMAL},
  {stage: Stage.LIVING, health: Health.GOOD, situation: Situation.NORMAL},
  {stage: Stage.LIVING, health: Health.BAD, situation: Situation.NORMAL},
  {stage: Stage.DIED, health: Health.UNKNOWN, situation: Situation.NORMAL}
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
    mockRandomIn.mockReturnValue(Statuses.STAGE);
    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(main(state, notTakeCare())).toMatchSnapshot()
      });
    });
  });

  describe('健康が変わる場合', () => {
    mockRandomIn.mockReturnValue(Statuses.HEALTH);
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