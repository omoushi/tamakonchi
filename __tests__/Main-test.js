import {Health, notTakeCare, reducer, Stage, Statuses, takeCare} from "../src/Main";
import React from "react";
import * as utils from '../src/utils';

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
  jest.mock('../src/utils');

  describe('状態が変わる場合', () => {
    utils.randomIn = jest.fn(() => Statuses.STAGE);
    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(reducer(state, notTakeCare())).toMatchSnapshot()
      });
    });
  });

  describe('健康が変わる場合', () => {
    utils.randomIn = jest.fn(() => Statuses.HEALTH);
    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(reducer(state, notTakeCare())).toMatchSnapshot()
      });
    });
  });
});