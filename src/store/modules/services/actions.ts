import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  Service,
  ServicesActionTypes,
} from './types';

export const addService = (service: Service): ServicesActionTypes => ({
  type: ADD_SERVICE,
  payload: service,
});

export const removeService = (serviceId: number): ServicesActionTypes => ({
  type: REMOVE_SERVICE,
  meta: { serviceId },
});
