// title: {}
// isComplete: {}
// createdAt: {}
// bgColor: {}
// color:
import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        default: "",
    
    },
    createdAt: {
        type: String,
        default: "",
    },
    bgColor: {
        type: String,
        default: "",
    },
    color: {
        type: String,
        default: "",
    },
    isComplete: {
        type: Boolean,
        default: false,
    },
});

export default mongoose.model("task", taskSchema);
