export interface Params {
  [key: string]: string | number;
}

export interface UserParams extends Params {
  userId: number;
}
