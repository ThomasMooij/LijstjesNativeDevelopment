import mongoose from 'mongoose';
import { getListById, getAllLists, createList } from '../controllers/ListController';

export interface Item {
  name: string,
  price?: number,
  userId: mongoose.Types.ObjectId,
  listId: mongoose.Types.ObjectId,
}

export interface ListArgs {
  title: string;
  items?: [Item];
  userId: mongoose.Types.ObjectId
  createdAt: string,
  updatedAt:string
}

const listResolvers = {
  // QUERIES
  Query: {
    getList: (parent : any, { id } : {id: mongoose.Types.ObjectId}) => getListById(id),
    getAllLists: (parent : any, { userId  } : {userId: mongoose.Types.ObjectId}) => getAllLists(userId),
  },
  //MUTATIONS
  Mutation: {
    createList: (parent : any, args : ListArgs) => createList(args.title, args.items, args.userId),
  },

  List : {
    date: (list : ListArgs) => toIsoDate(list.createdAt) 
  }
};

function toIsoDate(value : string) {
  console.log(value)
  const date = new Date(value);
  const year = date.getFullYear().toString().padStart(4, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');

  return `${day}-${month}-${year}`;
}

export default listResolvers;
