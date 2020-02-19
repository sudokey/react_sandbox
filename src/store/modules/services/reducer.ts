import {
  ServicesState,
  ServicesActionTypes,
  ADD_SERVICE,
  REMOVE_SERVICE,
} from './types';

const initialState: ServicesState = {
  data: {
    1: {
      id: 1,
      title: 'Test',
    },
  },
};

export default (
  state = initialState,
  action: ServicesActionTypes,
): ServicesState => {
  switch (action.type) {
    case ADD_SERVICE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.payload.id]: {
            ...state.data[action.payload.id],
            ...action.payload,
          },
        },
      };

    case REMOVE_SERVICE:
      return {
        ...state,
        data: {
          ...state.data,
          [action.meta.serviceId]: undefined,
        },
      };

    default:
      return state;
  }
};
