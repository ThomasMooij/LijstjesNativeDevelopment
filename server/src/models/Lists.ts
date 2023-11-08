import mongoose, { Schema, Document } from 'mongoose';

export interface ListItemDocument {
  id: string;
  name: string;
}

export interface ListDocument extends Document {
  title: string;
  userId: string;
  items: ListItemDocument[];
}

const ListSchema: Schema = new Schema({
  title: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, required: true },
  description: {type: String},
  // participants: [{ 
  //   type: mongoose.Schema.Types.ObjectId, 
  //   ref: "User" 
  // }],
  // items:   {
  //   id: { type: String, required: true },
  //   name: { type: String, required: true },
  // },
},{timestamps:true});

export default mongoose.model<ListDocument>('List', ListSchema);
