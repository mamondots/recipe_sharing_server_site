import { Model } from 'mongoose';

export type TUser = {
  name: string;
  email: string;
  password: string;
  bio?: string;
  profilePicture: string;
  needsPasswordChange?: boolean;
  role: 'admin' | 'user';
  status: 'active' | 'block';
  follower: 'follow' | 'unfollow' | 'normal';
};

export interface IUserModel extends Model<TUser> {
  isUserExistsByEmail(id: string): Promise<TUser>;
  isPasswordMatched(
    plainTextPassword: string,
    hashedPassword: string,
  ): Promise<boolean>;
  isJWTIssuedBeforePasswordChanged(
    passwordChangedTimestamp: Date,
    jwtIssuedTimestamp: number,
  ): boolean;
}
