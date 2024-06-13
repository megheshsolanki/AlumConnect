import mongoose from "mongoose";
const Schema = mongoose.Schema;
import * as dotenv from 'dotenv';
dotenv.config();

const eventDetail = new Schema({
    title: String,
    details: String,
    technology : String,
    createdBy: String,
    userId: {type: Schema.Types.ObjectId, ref: 'alumni'},
    date: Date
},{timestamps:true})

const event = mongoose.model('Events',eventDetail);

export default event;