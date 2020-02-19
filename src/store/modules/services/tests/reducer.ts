import reducer from '../reducer';
import * as types from '../types';

describe('services reducer', () => {
  it('should add service', () => {
    expect(
      reducer(
        undefined,
        {
          type: types.ADD_SERVICE,
          payload: {
            id: 2,
            title: 'Test title',
          },
        },
      ),
    ).toMatchObject(
      {
        data: {
          2: {
            id: 2,
            title: 'Test title',
          },
        },
      },
    );
  });
});
