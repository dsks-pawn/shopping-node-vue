import axios from 'axios'

export default () => {
	return axios.create({
		baseURL: `http://localhost:8081`,
		// baseURL: `https://server-shop.herokuapp.com/`,
		timeout: 30000
	})
}
