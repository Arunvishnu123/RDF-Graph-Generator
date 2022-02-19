<template>
<div>
    <div class="registerbase">
        <w-app>
            <div class="base">
                <div class="triangle"></div>
            </div>
            <div class="circle1"></div>
            <div class="circle2"></div>

            <div>
                <h1 class="text3">New Here?</h1>
                <h1 class="registration1">Sign Up to Generate</h1>
                <h1 class="registration2">RDF Graph</h1>
                <w-flex class="wrap">
                    <w-button class="register1" height="2.3em" @click="openDrawer = 'right'" outline color="blue" bg-color="white" round>Register</w-button>
                </w-flex>
                <w-drawer width="40em" v-model="openDrawer" bg-color="white" :[position]="true">
                    <w-button @click="openDrawer = false" sm outline round absolute icon="wi-cross">
                    </w-button>
                    <w-card class="white--bg" content-class="pa0">
                        <div class="message-box">
                            <w-transition-fade> </w-transition-fade>
                        </div>
                        <w-tag outline color="white" bg-color="info-dark2" no-border xl width="38em" height="3em">
                            User Registration Form
                        </w-tag>
                        <w-form @submit.prevent="onSubmit" class="px8 pt2 pb12 pb12 pb12" v-model="form.valid" :errors-count="form.errorsCount" @validate="onValidate" @success="onSuccess">
                            <w-flex class="mt2" wrap align-center justify-end>
                                <w-input v-model="firstName" required label="First Name" :validators="[validators.required]">
                                </w-input>

                                <w-input v-model="lastName" class="mt3" required label="Last Name" :validators="[validators.required]">
                                </w-input>
                            </w-flex>
                            <w-input v-model="DOB" type="date">Date of Birth</w-input>
                            <w-input v-model="email" class="mt3" required label="Email" :validators="[validators.required]">
                            </w-input>

                            <w-input v-model="password" type="password" class="mt3" required label="Password" :validators="[validators.required]">
                            </w-input>

                            <w-flex class="mt2" wrap align-center justify-end>
                                <div class="spacer" />

                                <w-button class="my1 mr2" bg-color="warning" type="reset" @click="form.submitted = form.sent = false">
                                    Reset
                                </w-button>

                                <w-button class="my1" type="submit" :disabled="form.valid === false" :loading="form.submitted && !form.sent">
                                    Sign Up
                                </w-button>
                            </w-flex>
                        </w-form>
                        <w-notification v-model="form.sent" success transition="bounce" absolute plain round bottom>
                            Registration successfull! Kindly verify the Email Address to
                            login
                        </w-notification>
                    </w-card>
                </w-drawer>
            </div>
        </w-app>
    </div>
</div>
</template>

<script>
export default {
    name: "RegisterComponent",
    data: () => ({
        openDrawer: false,
        form: {
            valid: null,
            submitted: false,
            sent: false,
            errorsCount: 0,
        },
        validators: {
            required: (value) => !!value || "This field is required",
            consent: (value) => !!value || "You must agree",
        },
    }),

    computed: {
        position() {
            return this.openDrawer || "right";
        },
        //update and get data of first for registration
        firstName: {
            get() {
                return this.$store.state.firstName;
            },
            set(value) {
                this.$store.commit("updateFirstName", value);
            },
        },

        lastName: {
            get() {
                return this.$store.state.lastName;
            },
            set(value) {
                this.$store.commit("updateLastName", value);
            },
        },
        DOB: {
            get() {
                return this.$store.state.DOB;
            },
            set(value) {
                this.$store.commit("updateDOB", value);
            },
        },
        email: {
            get() {
                return this.$store.state.email;
            },
            set(value) {
                this.$store.commit("updateEmail", value);
            },
        },

        password: {
            get() {
                return this.$store.state.password;
            },
            set(value) {
                this.$store.commit("updatePassword", value);
            },
        },
    },
    methods: {
        onSuccess() {
            setTimeout(() => (this.form.sent = true), 2000);
        },
        onValidate() {
            this.form.sent = false;
            this.form.submitted = this.form.errorsCount === 0;
        },
        onSubmit() {
            this.$store.dispatch("createUsers");
            
        },
    },
};
</script>

<style scoped>
.registerbase {
    position: absolute;
    left: 0px;
    top: 0px;
}

.base {
    position: absolute;
    width: 618px;
    height: 715px;
    left: 910px;
    top: 0px;
    background: #1652ac;
    border: 1px solid rgba(0, 0, 0, 0);
    filter: blur(4px);
    border-radius: 10px;
}

.w-input {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    padding: 24px;
}

.circle1 {
    position: absolute;
    width: 220px;
    height: 220px;
    left: 1175.28px;
    top: 342px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 120px;
    background: #1155bb;
    filter: blur(4px);
    transform: rotate(4deg);
}

.circle2 {
    position: absolute;
    width: 220px;
    height: 220px;
    left: 1300.28px;
    top: 480px;
    -webkit-border-radius: 25px;
    -moz-border-radius: 25px;
    border-radius: 120px;
    background: #1155bb;
    filter: blur(4px);
    transform: rotate(4deg);
}

.text3 {
    position: absolute;
    width: 682px;
    height: 183px;
    left: 897px;
    top: 200px;

    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 60px;
    line-height: 69px;
    text-align: center;

    color: #ffffff;
}

.registration1 {
    position: absolute;
    width: 682px;
    height: 183px;
    left: 895px;
    top: 266px;
    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
}

.w-tag {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
}

.registration2 {
    position: absolute;
    width: 682px;
    height: 183px;
    left: 898px;
    top: 335px;
    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
    line-height: 55px;
    text-align: center;
    color: #ffffff;
}

.register1 {
    position: absolute;
    width: 200px;
    left: 1140px;
    top: 440px;
    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
}

.triangle {
    width: 3px;
    height: 0;
    left: 910px;
    top: 500px;
    border: solid 130px;
    border-color: transparent transparent #1155bb;
    transform: rotate(-154.74deg);
}
</style>
