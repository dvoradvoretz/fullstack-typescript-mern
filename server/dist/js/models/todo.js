// import { model, Schema } from 'mongoose';
import pkg from 'mongoose';
const { model, Schema } = pkg;
const todoSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    }
});
export default model('Todo', todoSchema);
