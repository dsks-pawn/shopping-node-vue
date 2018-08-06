<template>
<div class="form_register">
  <el-form @submit.prevent="register"  status-icon label-width="120px" size="medium">

  <el-form-item label="First Name" >
    <el-input  name="first name" v-model="newUser.first_name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('first name') }" type="text" placeholder="First Name" ></el-input>
		<i v-show="errors.has('first name')" class="fa fa-warning"></i>
    <small v-show="errors.has('first name')" class="help is-danger">{{ errors.first('first name') }}</small>
  </el-form-item>

  <el-form-item label="Last Name">
    <el-input name="last name" v-model="newUser.last_name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('last name') }" type="text" placeholder="Last Name"></el-input>
		<i v-show="errors.has('last name')" class="fa fa-warning"></i>
    <small v-show="errors.has('last name')" class="help is-danger">{{ errors.first('last name') }}</small>
  </el-form-item >

  <el-form-item label="Email" >
    <el-input  name="email" v-model="newUser.email" v-validate="{ required: true, email: true}" :class="{'input': true, 'is-danger': errors.has('email') }" placeholder="Email"></el-input>
		<i v-show="errors.has('email')" class="fa fa-warning"></i>
		<small v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</small>
  </el-form-item>

  <el-form-item label="Password" >
    <el-input name="password" type="password" v-model="newUser.password" ref="password"  v-validate="{ required: true, min: 6}" :class="{'input': true, 'is-danger': errors.has('password')}" placeholder="Password"></el-input>
			<i v-show="errors.has('password')" class="fa fa-warning"></i>
		<small v-show="errors.has('password')" class="help is-danger">{{ errors.first('password') }}</small>
</el-form-item>

  <el-form-item  label="Confirm" >
    <el-input name="repassword" type="password" v-model="repassword" v-validate="'confirmed:password'"  placeholder="Confirm Password"></el-input>
			<i v-show="errors.has('repassword')" class="fa fa-warning"></i>
		<small v-show="errors.has('repassword')" class="help is-danger">{{ errors.first('repassword') }}</small>
  </el-form-item>


  <el-form-item  label="Phone">
    <el-input name="phone" v-model="newUser.phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone"></el-input>
		<i v-show="errors.has('phone')" class="fa fa-warning"></i>
		<small v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</small>
  </el-form-item>

  <el-form-item>
      <el-button type="primary" @click="register()">Register</el-button>
  </el-form-item>

</el-form>
</div>
</template>

<script>
import Auth from "@/api/Auth"

export default {
	data() {
		return {
			repassword: "",
			newUser: {
				first_name: "",
				last_name: "",
				email: "",
				password: "",
				phone: ""
			}
		}
	},
	methods: {
		async register() {
			this.$validator.validateAll().then(async result => {
				if (result) {
					let newUser = this.newUser
					const response = await Auth.register(newUser)
					if (response.data.status == 200) {
						this.$notify({
							title: "Success",
							message: "This is a success message",
							type: "success"
						})
						this.$router.push("/auth/login")
					} else {
						this.$notify.error({
							title: "Error",
							message: "This is an error message"
						})
					}
				} else {
					this.$notify.error({
						title: "Error",
						message: "This is an error message"
					})
				}
			})
		}
	}
}
</script>

<style scoped>
.form_register {
	width: 50%;
}
small {
	color: red;
}
</style>
