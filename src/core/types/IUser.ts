export interface IUser {
  username: string;
  password: string;
}

export interface IUserState {
  loading: boolean;
  error: string;
}

export type LoginType = {
  login: (data: IUser) => void;
  loading: boolean;
  error: string;
}
