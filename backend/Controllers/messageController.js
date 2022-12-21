import User from '../Models/message';
import CatchAsyncErrors from '../Utils/CatchAsyncErrors';

export const userMessage = CatchAsyncErrors(async (req, res, next) => {
	const { name, email, message } = req.body;

	const usermessage = await User.create({
		name,
		email,
		message,
	});

	res.status(200).json({
		success: true,
		usermessage,
		message: 'Message Sent Successffully',
	});
});
