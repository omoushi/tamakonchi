import {reducer, Statuses} from "../src/Life";
import React from "react";
import * as utils from '../src/utils';

const statePatterns = [
  undefined,
  {status: 'たまご', health: '健康'},
  {status: 'たまご', health: '不健康'},
  {status: 'いきてる', health: '健康'},
  {status: 'いきてる', health: '不健康'},
  {status: 'しんでる', health: '不明'}
];

describe('takeCare', () => {
  const takeCareAction = {type: 'TAKE_CARE'};

  statePatterns.forEach(state => {
    it(`state: ${JSON.stringify(state)}`, () => {
      expect(reducer(state, takeCareAction)).toMatchSnapshot()
    });
  });
});

describe('notTakeCare', () => {
  const notTakeCareAction = {type: 'NOT_TAKE_CARE'};
  jest.mock('../src/utils');

  describe('状態が変わる場合', () => {
    utils.randomIn = jest.fn(() => Statuses.STATUS);

    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(reducer(state, notTakeCareAction)).toMatchSnapshot()
      });
    });
  });

  describe('健康が変わる場合', () => {
    utils.randomIn = jest.fn(() => Statuses.HEALTH);

    statePatterns.forEach(state => {
      it(`state: ${JSON.stringify(state)}`, () => {
        expect(reducer(state, notTakeCareAction)).toMatchSnapshot()
      });
    });
  });
});