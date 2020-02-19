import { generatePath } from 'react-router-dom';
import * as paths from './paths';
import * as Params from './params';

export const getMainUrl = (): string => generatePath(paths.MAIN_PATH);
export const getUserUrl = (params: Params.UserParams): string => (
  generatePath(paths.USER_PATH, params)
);
