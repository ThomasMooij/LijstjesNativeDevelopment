import mongoose from 'mongoose';
import List, { ListDocument } from '../models/Lists';
import User from '../models/User';
import { Item } from '../resolvers/listResolver';

export const createList = async (title: string, items: [Item] | undefined, userId: mongoose.Types.ObjectId) => {
  const list = new List({ 
    title, 
    items, 
    userId: userId
  });
  await list.save();
  return list;
};
export const getAllLists = async (userId: mongoose.Types.ObjectId) => {
  try {
    const user = await User.findById(userId).populate('lists');
    if (user) {
      return user.lists;;
    } else {
      throw new Error('Gebruiker niet gevonden');
    }
  } catch (error: any) {
    throw new Error('Fout bij het ophalen van lijsten: ' + error.message);
  }
};
export const getListById = async (id: mongoose.Types.ObjectId) => {
  console.log(id)
  const list = await List.findById(new mongoose.Types.ObjectId(id));
  console.log(list)
  return list;
};
