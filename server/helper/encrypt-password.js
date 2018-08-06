import bcrypt from 'bcrypt'
const saltRounds = 10;

export const hashPassword = async (password) => {
	try {
		const hash = await bcrypt.hash(password, saltRounds)
		return hash;
	} catch (error) {
		throw error;
	}
}

export const comparePassword = async (password, hash) => {
	try {
		return await bcrypt.compare(password, hash)
	} catch (error) {
		throw error
	}
}
