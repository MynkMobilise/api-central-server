
export const doLogin = async (req, res) => {
	const { userId, password } = req.body;
	try {
		// const oldUser = await prisma.user_master.findFirst({
		// 	select: {
		// 		user_id: true,
		// 		name: true,
		// 		status: true,
		// 		password: true,
		// 	},
		// 	where: {
		// 		user_id: userId,
		// 	},
		// });

		// if (oldUser.user_id) {
		// 	const verify = await bcryptjs.compare(password, oldUser.password);
		// 	if (verify) {
		// 		res.status(200).json({ status: true, msg: "login successfully" });
		// 	} else {
		// 		res.status(403).json({ status: false, msg: "Invalid credentials" });
		// 	}
		// } else {
		// 	res.status(403).json({ status: false, msg: "Invalid credentials" });
		// }
        res.status(200).json({ status: true, msg: "login successfully" });
	} catch (error) {
		res.status(201).json({ status: false, msg: "Something went wrong" });
	}
}; //end of login function
