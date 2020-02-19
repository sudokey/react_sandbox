import { RootState } from './rootReducer';
import { ServicesData, Service } from './modules/services/types';

export const selectServices = (state: RootState): ServicesData => state.services.data;
export const selectServicesById = (serviceId: number) => (
  (state: RootState): Service => selectServices(state)[serviceId]
);
