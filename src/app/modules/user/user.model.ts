import { model, Schema } from 'mongoose';
import { IUserModel, TUser } from './user.interface';
import bcrypt from 'bcrypt';
import bcryptjs from 'bcryptjs';
const userSchema = new Schema<TUser, IUserModel>(
  {
    name: { type: String, required: [true, 'Name is required'] },
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: true,
    },
    password: { type: String, required: [true, 'password is required'] },
    profilePicture: { type: String, default: '' },
    bio: { type: String },
    needsPasswordChange: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      enum: ['admin', 'user'],
      default: 'user',
    },
    status: {
      type: String,
      enum: ['active', 'block'],
      default: 'active',
    },
    follower: {
      type: String,
      enum: ['follow', 'unfollow', 'normal'],
      default: 'normal',
    },
  },
  { timestamps: true },
);

userSchema.pre('save', async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  next();
});

userSchema.post('save', function (doc, next) {
  doc.password = '';

  next();
});

userSchema.statics.isUserExistsByEmail = async function (email: string) {
  return await userModel.findOne({ email }).select('+password');
};

userSchema.statics.isPasswordMatched = async function (
  plainTextPassword,
  hashedPassword,
) {
  return await bcryptjs.compare(plainTextPassword, hashedPassword);
};

userSchema.statics.isJWTIssuedBeforePasswordChanged = function (
  passwordChangedTimestamp: number,
  jwtIssuedTimestamp: number,
) {
  const passwordChangedTime =
    new Date(passwordChangedTimestamp).getTime() / 1000;
  return passwordChangedTime > jwtIssuedTimestamp;
};

export const userModel = model<TUser, IUserModel>('userModel', userSchema);
