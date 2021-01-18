const formValidation =  {
    data(){
        return {
            validationsLogic : {
                minLength : (value, minLength) => {return value.length > minLength - 1},
                maxLength : (value, maxLength) => {return value.length < maxLength + 1},
                //allow only letters a-z A-Z
                onlyAlpha : value => {return /^[a-zA-Z]+$/.test(value)},
                //allow only Digits 0-9
                onlyDigits : value => {return /^[0-9]/.test(value)}
            },
            userValidationData : this.$options.validations,
            //available errors for the input
            errors : {},
        }
    },
    beforeMount() {
        Object.keys(this.userValidationData).forEach((key) => {
            //setting touch property in the beginning to avoid error;
            this.$set(this.errors, key, {touch : false})
            this.errors[key].touch = false;
            this.$watch(key, currentValue => {
                const validationName = Object.keys(this.userValidationData[key]);
                const validationValue = Object.values(this.userValidationData[key]);
                //this for loop checks if developer used custom validation. and if they did, adds this validation
                //to "validationsLogic" object
                    for(let i = 0; i < validationValue.length; i++){
                        if (typeof validationValue[i] === "function") {
                            this.validationsLogic[validationName[i]] = validationValue[i]
                        }
                    }
                //this is main loop to create and assign properties to error object, validate and return
                //true/false to error object, which is used to display error messages.
                for (let i = 0; i < validationName.length; i++) {
                    this.errors[key][validationName[i]] = this.validationsLogic[validationName[i]](currentValue,
                                                                                                   validationValue[i]);
                }
                //blur
                this.$refs[key].addEventListener("blur", () => {
                    this.errors[key].touch = true;
                })
            })
        })
    },
    methods : {
        validate(key){
            // console.log(this.$refs[key], key)
            console.log(this.errors[key])

        }
    },
    computed : {

    }
}
export default formValidation
