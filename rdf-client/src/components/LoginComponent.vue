<template>
<w-app>
    <div>
        <div class="logindiv">
            <h1 class="login">Login to Your Account</h1>
            <hr class="line" />
        </div>
        <LoginFailed />
        <div>
            <w-form @submit.prevent="loginUser">
                <div>
                    <div>
                        <w-flex>
                            <w-input v-model="email" class="email" bg-color="white" color="primary" type="email" label="Email" round>
                            </w-input>
                        </w-flex>
                    </div>
                </div>
                <div>
                    <w-flex>
                        <w-input v-model="password" class="password" height="3.5em" bg-color="white" type="password" color="primary" label="Password" round>
                        </w-input>
                    </w-flex>
                </div>
                <div>
                    <w-button type="submit" class="ma1" height="2.3em" bg-color="info-dark2" color="white" round>Sign In</w-button>
                </div>
            </w-form>

        </div>
        
        
    </div>
</w-app>
</template>

<script>
import LoginFailed from "./LoginFailed.vue";
export default {
    name: "LoginComponent",
    components:{
     LoginFailed,
    },
    computed: {
          email: {
            get() {
                return this.$store.state.lemail;
            },
            set(value) {
                this.$store.commit("lupdateEmail", value);
            },
        },

        password: {
            get() {
                return this.$store.state.lpassword;
            },
            set(value) {
                this.$store.commit("lupdatePassword", value);
            },
        },
    },
    methods:{
        loginUser(){
            this.$store.dispatch("loginUser");     
        },
    }

};
</script>

<style scoped>
.email {
    position: absolute;
    width: 550px;
    height: 70px;
    left: 170px;
    top: 290px;
}

.password {
    position: absolute;
    width: 550px;
    height: 70px;
    left: 170px;
    top: 390px;
}

.w-input {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
}


.w-input {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
}

.ma1 {
    position: absolute;
    width: 200px;
    height: 45px;
    left: 320px;
    top: 500px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
}

.line {
    position: absolute;
    height: 0px;
    width: 602px;
    left: 146px;
    top: 250px;
    text-align: center;
    border: 1px solid #6e9fe8;
}

.login {
    position: absolute;
    width: 662px;
    height: 171px;
    left: 117px;
    top: 160px;
    font-family: Average Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 65px;
    line-height: 91px;
    text-align: center;
    color: #2872e2;
    text-shadow: 3px 15px 12px rgba(0, 0, 0, 0.25);
}
</style>
