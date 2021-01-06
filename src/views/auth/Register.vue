<template>
<div>
    <div class="icon d-flex mt-5">
        <img src="../../assets/icon-ankasa.png" alt="icon ankasa">
        <h6>Ankasa</h6>
    </div>

    <div class="form-box">
        <h1>Register</h1>
        <form>
            <div class="form-group">
                <input type="email" v-model.trim="$v.fullName.$model" :class="{ 'is-invalid': validationStatus($v.fullName) }" class="form-control" placeholder="Full Name">
                <div class="invalid-feedback" v-if="!$v.fullName.required">Field is required.</div>
            </div>
            <div class="form-group">
                <input type="email" v-model.trim="$v.email.$model" :class="{ 'is-invalid': validationStatus($v.email) }" class="form-control" placeholder="Email">
                <div class="invalid-feedback" v-if="!$v.email.required">Field is required.</div>
                <div class="invalid-feedback" v-if="!$v.email.email">invalid email</div>
            </div>
            <div class="form-group">
                <input type="password" id="password" v-model.trim="$v.password.$model" :class="{ 'is-invalid': validationStatus($v.password) }" class="form-control icon-password" placeholder="Password">
                <input type="checkbox" class="toggle-password" @click="togglePassword">
                <div class="invalid-feedback" v-if="!$v.password.required">Field is required.</div>
                <div class="invalid-feedback" v-if="!$v.password.minLength">Field must have at least {{ $v.password.$params.minLength.min }} characters.</div>
            </div>
            <div class="form-group">
                <button type="submit" class="btn-register" @click.prevent="goRegister">Sign Up</button>
            </div>
            <div class="form-group">
                <div class="item-checkbox">
                    <input type="checkbox">
                    <p>Accept terms and condition</p>
                </div>
                <hr>
                <h5>Already have an account?</h5>
                <button type="submit" class="btn-login" @click.prevent="goLogin">Sign In</button>
            </div>
        </form>
    </div>
</div>
</template>

<script>
import { mapMutations } from 'vuex'
import { required, minLength, email } from 'vuelidate/lib/validators'
export default {
  name: 'Register',
  data () {
    return {
      fullName: '',
      email: '',
      password: ''
    }
  },
  validations: {
    fullName: { required },
    email: { required, email },
    password: { required, minLength: minLength(6) }
  },
  methods: {
    validationStatus (validation) {
      return typeof validation !== 'undefined' ? validation.$error : false
    },
    goRegister () {
      this.$v.$touch()
      if (this.$v.$pendding || this.$v.$error) return
      console.log('coba')
    },
    goLogin () {
      this.$router.push('/auth/login')
    },
    ...mapMutations(['togglePassword'])
  }
}
</script>

<style scoped>
.icon,
.form-box {
    margin-left: 80px;
}

.icon h6 {
    padding-left: 20px;
    font-weight: 600;
    font-size: 24px;
    line-height: 36px;
    color: #414141;
}

.form-box {
    margin-top: 100px;
    position: relative;
    margin-right: 50px;
}

.form-box .login {
    font-size: 36px;
    line-height: 54px;
    color: #000000;
}

.form-box form .form-group {
    margin-top: 40px;
}

.form-box form .form-group input {
    border: none;
    border-bottom: 1px solid rgba(210, 194, 255, 0.68);
    padding-top: 5px;
}

.form-box form .form-group input:focus {
    outline: none;
    box-shadow: none;
}

.form-box form .form-group .is-invalid {
    border-bottom: 1px solid red;
}

.form-box form .form-group .is-invalid:focus {
    border-bottom: 1px solid red;
    box-shadow: none;
}

.form-box form .form-group .invalid-feedback {
    padding-left: 20px;
}

.form-box form .form-group .icon-password {
    background-image: url('../../assets/eye.png');
    background-repeat: no-repeat;
    background-position: right;
}

.form-box form .form-group .toggle-password {
    position: absolute;
    top: 259px;
    right: 0;
    opacity: 0;
}

.form-box form button {
    background: #2395FF;
    box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
    border-radius: 10px;
    width: 100%;
    height: 57px;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #FFFFFF;
    border: none;
}

.form-box form button:focus {
    outline: none;
}

.form-box form .btn-login {
    border: 1px solid #2395FF;
    box-sizing: border-box;
    font-weight: bold;
    font-size: 18px;
    line-height: 27px;
    color: #2395FF;
    background: none;
    box-shadow: none;
}

.form-box form .form-group .item-checkbox {
    display: flex;
}

.form-box form .form-group .item-checkbox input {
    margin-top: 5px;
}

.form-box form .form-group .item-checkbox p {
    font-size: 16px;
    line-height: 19px;
    color: #595959;
    font-family: 'Lato', sans-serif;
    margin-left: 15px;
}

.form-box form .form-group hr {
    width: 100%;
}

.form-box form .form-group h5 {
    font-size: 14px;
    line-height: 17px;
    text-align: center;
    color: #4D4D4D;
    margin-bottom: 30px;
}

@media (max-width: 1085px) {
    .icon,
    .form-box {
        margin-left: 40px;
    }
}

@media (max-width: 889px) {
    .form-box {
        margin-right: 30px;
    }
}

@media (max-width: 845px) {
    .form-box {
        margin-right: 20px;
    }
}

@media (max-width: 761px) {
    .icon,
    .form-box {
        margin-left: 30px;
    }

    .form-box {
        margin-right: 40px;
    }
}

@media (max-width: 488px) {
    .form-box {
        margin-top: 80px;
    }
}

@media (max-width: 488px) {
    .icon,
    .form-box {
        margin-left: 0px;
    }

    .form-box {
        margin-right: 0px;
    }
}
</style>
