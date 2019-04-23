import {Health, reducer, Stage, Statuses} from "../../src/main/reducer";
import {notTakeCare, takeCare} from "../../src/main/actions";
import {randomIn} from "../../src/utils";

jest.mock('../../src/utils');
const mockRandomIn = <jest.Mock<Statuses>>randomIn;


const statePatterns = [
  undefined,
  {stage: Stage.EGG, health: Health.GOOD},
  {stage: Stage.EGG, health: Health.BAD},
  {stage: Stage.LIVING, health: Health.GOOD},
  {stage: Stage.LIVING, health: Health.BAD},
  {stage: Stage.DIED, health: Health.UNKNOWN}
];

describe('takeCare', () => {
  statePatterns.forEach(state => {
    it(`state: ${JSON.stringify(state)}`, () => {
      expect(reducer(state, takeCare())).toMatchSnapshot()
    });
  });
});

describe('notTakeCare', () => {


  describe('状態が変わる場合', () => {
    mockRandomIn.mockReturnValue(Statuses.STAGE);
    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(reducer(state, notTakeCare())).toMatchSnapshot()
      });
    });
  });

  describe('健康が変わる場合', () => {
    mockRandomIn.mockReturnValue(Statuses.HEALTH);
    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(reducer(state, notTakeCare())).toMatchSnapshot()
      });
    });
  });
});