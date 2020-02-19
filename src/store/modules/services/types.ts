export const ADD_SERVICE = 'ADD_SERVICE';
export const REMOVE_SERVICE = 'REMOVE_SERVICE';

export interface Service {
  id: number;
  title: string;
}

export interface ServicesData {
  [id: string]: Service;
}

export interface ServicesState {
  data: ServicesData;
}

interface AddServiceAction {
  type: typeof ADD_SERVICE;
  payload: Service;
}

interface RemoveServiceAction {
  type: typeof REMOVE_SERVICE;
  meta: {
    serviceId: number;
  };
}

export type ServicesActionTypes = AddServiceAction | RemoveServiceAction;
