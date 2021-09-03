import { UserModel } from './types';

export type GraphQLContext = Readonly<{
  currentUser: UserModel | null;
}>;
