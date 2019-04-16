import {reducer} from "../src/Life";
import React from "react";

const takeCareAction = {type: 'TAKE_CARE'};
const notTakeCareAction = {type: 'NOT_TAKE_CARE'};
const egg = {status: 'たまご'};
const living = {status: 'いきてる'};
const died = {status: 'しんでる'};

it('reducer', () => {
  expect(reducer(undefined, takeCareAction)).toEqual({status: 'いきてる'});
  expect(reducer(egg, takeCareAction)).toEqual({status: 'いきてる'});
  expect(reducer(living, takeCareAction)).toEqual({status: 'いきてる'});
  expect(reducer(died, takeCareAction)).toEqual({status: 'しんでる'});
  expect(reducer(undefined, notTakeCareAction)).toEqual({status: 'しんでる'});
  expect(reducer(egg, notTakeCareAction)).toEqual({status: 'しんでる'});
  expect(reducer(living, notTakeCareAction)).toEqual({status: 'しんでる'});
  expect(reducer(died, notTakeCareAction)).toEqual({status: 'しんでる'});
});
