import * as actions from '../actions';
import * as types from '../types';

describe('services actions', () => {
  it('should create an action to add a service', () => {
    const service = {
      id: 1,
      title: 'Test',
    };

    const expectedAction = {
      type: types.ADD_SERVICE,
      payload: service,
    };

    expect(actions.addService(service)).toEqual(expectedAction);
  });
});
