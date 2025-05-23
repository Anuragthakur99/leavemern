import mongoose from 'mongoose';

const leaveSchema = new mongoose.Schema({
  employeeName: { 
    type: String,
    required: true
   },
  leaveDate: {
     type: Date,
      required: true
    },
  reason: {
     type: String,
      required: true
    },
  leaveType: {
    type: String,
    enum: ['casual', 'sick', 'earned', 'unpaid'], 
    default: 'casual' 
  }
});

export default mongoose.model("Leave", leaveSchema);
