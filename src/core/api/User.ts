import Api from './Api';
import { IUser } from '../types/IUser';

export const UserLogin = (data: IUser) => Api('/login', {method: 'POST', data});
