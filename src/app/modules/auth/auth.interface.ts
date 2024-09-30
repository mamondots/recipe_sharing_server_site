export type TLoginUser = {
  email: string;
  password: string;
};

export type TRegisterUser = {
  name: string;
  email: string;
  password: string;
  profilePicture: string;
  role: 'admin' | 'user';
  status: 'active' | 'block';
  follower: 'follow' | 'unfollow' | 'normal';
};
