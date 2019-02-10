import { createAction } from 'redux-actions';

function createNames(fix) {
  return {
    withFix: {
      [`LOAD_${fix}`]: `LOAD_${fix}`,
      [`LOAD_${fix}_SUCESS`]: `LOAD_${fix}_SUCCESS`,
      [`LOAD_${fix}_FAIIL`]: `LOAD_${fix}_FAIIL`
    },
    simple: {
      load: `LOAD_${fix}`,
      loadSuccess: `LOAD_${fix}_SUCCESS`,
      loadFail: `LOAD_${fix}_FAIIL`
    }
  };
}

function generateActions(fix) {
  const fixNormalized = fix.toUpperCase();
  const { simple, withFix } = createNames(fixNormalized);

  const load = createAction(simple.load, query => query);
  const loadSuccess = createAction(simple.loadSuccess, response => ({ data: response }));
  const loadFail = createAction(simple.loadFail, error => ({ error }));

  return ({
    types: {
      ...withFix
    },
    actions: {
      load,
      loadSuccess,
      loadFail
    }
  });
}

export default generateActions;
