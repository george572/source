<template>
  <div class="signin-form-wrapper">

    <div class="inputs">
      <input type="text" placeholder="Email" v-model="userName" ref="address" >
<!--      <p style="color:#a01414;" v-if="errors.userName.touch && !errors.userName.minLength" >custom length is 3</p>-->
      <input type="password" placeholder="Password" v-model="password" ref="surname">
      <a href="#!" class="login" @click="authorization(userName, password)">Login</a>
    </div>
  </div>
</template>

<script>
import formValidation from "../mixins/form-validation/Validation";
import axios from 'axios'

export default {
  name: "Signin",
  mixins : [formValidation],
  data() {
    return {
      userName : "",
      password : "",
      users : {},
      userType : "",
      isDev : Boolean,
      isPo : Boolean,
      isGuest : Boolean,
    }
  },
    validations : {
      address : {
        maxLength : 10,
        onlyAlpha : true,
        customValidation : (value) => {return value.length > 3;}
      },
      surname : {
        minLength  : 3,
        onlyAlpha : true,
      },
      city : {
        minLength  : 3,
        onlyDigits : true,
      }
  },
  methods : {
    authorization(userName, password) {
      axios
          .get('https://api.jsonbin.io/b/6005456ce31fbc3bdef50f91', {
            headers : {
              "secret-key": "$2b$10$fu4Ih3eX0pKNtuw0qEdMPua.P5yOxZZzOaHAqvyllAlqiyt8e/y5a"
            }
          })
          .then(response => {
            this.users = response.data.users;
          })
          .then(() => {
            Object.keys(this.users).forEach(key =>{
              if (userName === this.users[key].userName && password === this.users[key].password) {
                this.userType = this.users[key].password;
              }
            })
            //display information according to user type.
            switch(this.userType) {
              case "dev":
                this.$emit('userType', "dev")
                break;
              case "po":
                this.$emit('userType', "po")
                break;
              case "guest":
                this.$emit('userType', "guest")
                break;
            }
      })
    },
  },
  mounted() {

  },
  computed : {

  }

}
</script>

<style scoped>
.signin-form-wrapper {
  min-width: 400px;
  height: 400px;
  background:#272e48;
  display: flex;
  flex-direction: column;
  align-items:center;
  box-shadow: 0 10px 25px -5px #518bf0;
}
.signin-title {
  position:relative;
  top: -45px;
  font-size: 35px;
  color: white;
}
.inputs {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding-top: 50px;
}
input {
  width: 100%;
  height: 40px;
  border-radius: 3px;
  outline: none;
  background:transparent;
  border:1px solid;
  border-color: #464D5C;
  margin: 6px 0;
  padding: 0 10px;
  box-sizing: border-box;
  color: white;
  font-size: 14px;
}
input::placeholder {
  color: #8A99B5;
}

.login {
  width: 100%;
  background:#5A8DEE;
  height: 40px;
  text-align: center;
  line-height: 40px;
  text-decoration: none;
  border-radius: 3px;
  margin-top: 16px;
}
.login:hover {
  background:#1a233a;
  transition: all 200ms;
}

</style>