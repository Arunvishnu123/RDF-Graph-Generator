<template>
<div>
    <div>
        <h1 class="text1">RDF Graph Generator</h1>
    </div>
    <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rdf_logo.svg/768px-Rdf_logo.png" alt="RDF image" class="image" />
    </div>
<div>
    <LoginComponent />
</div>
<div>
    <RegisterComponent />
</div>

</div>
</template>

<script>
import LoginComponent from "../components/LoginComponent.vue";
import RegisterComponent from "../components/RegisterComponent.vue";
export default {
 components: {
        LoginComponent,
        RegisterComponent
    },

}
</script>

<style scoped>
.image {
    position: absolute;
    width: 87px;
    height: 84px;
    margin-top: -6px;
}
.text1 {
    position: absolute;
    width: 727px;
    height: 76px;
    left: -75px;
    top: 37px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
    line-height: 47px;
    text-align: center;
    color: #2872e2;
    margin-top: -23px;
    margin-left: -15px;
}
</style>
