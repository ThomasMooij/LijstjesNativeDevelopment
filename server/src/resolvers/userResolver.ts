import mongoose from 'mongoose';
import { getUserById, getAllUsers, create, login } from '../controllers/UserController';

interface UserArgs {
  id:mongoose.Types.ObjectId;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

 const userResolvers = {
  //QUERIES
  Query: {
    getUser: (parent: any, args: UserArgs) => getUserById(args.id),
    getAllUsers: () => getAllUsers(),
  },
  //MUTATIONS
  Mutation: {
    createUser: (parent: any, args: UserArgs) => create(args.firstName, args.lastName, args.email, args.password),
    loginUser: (parent: any, args: UserArgs) => login(args.email, args.password),
  },
};

export default userResolvers