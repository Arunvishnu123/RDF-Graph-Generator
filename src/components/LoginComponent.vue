<template>
<w-app>
<div>
    <div class="logindiv">
        <h1 class="login">Login to Your Account</h1>
        <hr class="line" />
    </div>
    <div>
        <form>
            <div>
                <div>
                    <w-input class="email" bg-color="white" color="primary" type="email" label="Email" round>
                    </w-input>
                </div>
            </div>
            <div>
                <w-input class="password" height="3.5em" bg-color="white" type="password" color="primary" label="Password" round>
                </w-input>
            </div>
            <div>
                <w-button type="submit" class="ma1" height="2.3em" bg-color="info-dark2" color="white" round>Sign In</w-button>
            </div>
        </form>
    </div>
</div>
</w-app>
</template>

<script>
export default {
    name: "LoginComponent",
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
.logindiv {
    left: 150px;
    top: 200px;
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
    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 48px;
}

.line {
    position: absolute;
    height: 0px;
    width: 602px;
    left: 145px;
    top: 255px;
    text-align: center;
    border: 1px solid #6e9fe8;
}

.login {
    position: absolute;
    width: 662px;
    height: 171px;
    left: 117px;
    top: 172px;
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
