import mongoose, { Schema } from 'mongoose';
import { ItemDocument } from '../../types/ItemType';
  
  const ItemSchema: Schema = new Schema({
    name: { type: String, required: true },
    price: { type: Number, min: 0 },
    userId: {type: Schema.Types.ObjectId, ref: 'User', required: true},
    listId: {type: Schema.Types.ObjectId, ref: 'User', required: true}
  },{timestamps:true});
  
  export default mongoose.model<ItemDocument>('Item', ItemSchema);
  