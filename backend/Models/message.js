import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
	{
		name: { type: String, required: [true, 'Please Enter your Name'] },
		email: { type: String, required: [true, 'Please Enter your Email'] },
		message: { type: String, required: [true, 'Please Enter your Message'] },
	},
	{
		timestamps: true,
	}
);

const userModel = new mongoose.model('Users', userSchema);

export default userModel;
