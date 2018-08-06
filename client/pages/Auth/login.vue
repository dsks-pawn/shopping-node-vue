<template>
    <div class="login">
        <el-form ref="form" label-width="120px" size="medium">
  <el-form-item label="Email" >
    <el-input  name="email" v-model="user.email" v-validate="{ required: true, email: true}" :class="{'input': true, 'is-danger': errors.has('email') }" placeholder="Email"></el-input>
		<i v-show="errors.has('email')" class="fa fa-warning"></i>
		<small v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</small>
  </el-form-item> 
 <el-form-item label="Password" >
    <el-input name="password" type="password" v-model="user.password" ref="password"  v-validate="{ required: true, min: 6}" :class="{'input': true, 'is-danger': errors.has('password')}" placeholder="Password"></el-input>
			<i v-show="errors.has('password')" class="fa fa-warning"></i>
		<small v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
</el-form-item>
  <el-form-item>
      <el-button type="primary" @click="login">Login</el-button>
  </el-form-item>
</el-form>
   </div>
</template>



<style scoped>
.login {
	margin: 0 auto;
	max-width: 35%;
}
</style>

<script>
import Auth from "@/api/Auth"

export default {
	data() {
		return {
			user: {
				email: "",
				password: ""
			}
		}
	},
	methods: {
		async login() {
			let user = this.user
			const response = await Auth.login(user)
			if (response.data.status == 200) {
				this.$message({
					message: "Congrats, this is a success message.",
					type: "success"
				})

				this.$router.push("/")
			} else {
				this.$message({
					message: "Oops, this is a error message.",
					type: "error"
				})
			}
		}
	}
}
</script>

<style scoped>
.login {
	width: 50%;
}
small {
	color: red;
}
</style>
