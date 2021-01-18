<template>
  <div class="signin-form-wrapper">

    <div class="inputs">
      <input type="text" placeholder="Type Your Address" v-model="address" ref="address" >
      <p style="color:#a01414;" v-if="errors.address.touch && !errors.address.minLength" >Min length is 5</p>
      <p style="color:#a01414;" v-if="errors.address.touch && !errors.address.maxLength" >max length is 6</p>
      <p style="color:#a01414;" v-if="errors.address.touch && !errors.address.onlyAlpha" >Only letters are allowed</p>
      <input type="text" placeholder="Type Your Surname" v-model="surname" ref="surname">
      <p style="color:#a01414;" v-if="errors.surname.touch && !errors.surname.minLength" >Min length is 3</p>
      <p style="color:#a01414;" v-if="errors.surname.touch && !errors.surname.onlyAlpha" >Only letters are allowed</p>
      <input type="text" placeholder="Type Your Surname" v-model="city" ref="city">
      <p style="color:#a01414;" v-if="errors.city.touch && !errors.city.minLength" >Min length is 3</p>
      <p style="color:#a01414;" v-if="errors.city.touch && !errors.city.onlyDigits" >Only Digits are allowed</p>

      <a href="#!" class="login">Login</a>
    </div>
  </div>
</template>

<script>
import formValidation from "../mixins/form-validation/Validation";
export default {
  name: "Signin",
  mixins : [formValidation],
  data() {
    return {
      surname : "",
      address : "",
      city : "",
      showError : false,
    }
  },
    validations : {
      address : {
        minLength : 5,
        maxLength : 10,
        onlyAlpha : true,
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
  },
  mounted() {
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