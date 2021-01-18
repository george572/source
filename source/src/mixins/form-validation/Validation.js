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
            //validation error variables
            result : Boolean,
            //
            userValidationData : this.$options.validations,
            //available errors for the input
            errors : {},
            touch : false,

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
                for (let i = 0; i < validationName.length; i++) {
                    this.errors[key][validationName[i]] = this.validationsLogic[validationName[i]](currentValue,
                                                                                                   validationValue[i]);
                    console.log(this.validationsLogic[validationName[i]](currentValue,
                        validationValue[i]), validationValue[i], currentValue.length);

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
