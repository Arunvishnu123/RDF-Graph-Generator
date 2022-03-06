<template>
<w-app>
    <div>
        <div>
            <h1 class="text1">RDF Graph Generator</h1>
        </div>
        <div>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rdf_logo.svg/768px-Rdf_logo.svg.png" alt="RDF image" class="image" />
        </div>

        <div class="user-data">
            <div class="container">
                <div>
                    <h1 class="profile">Profile</h1>
                </div>
                <Avatar :avatar="text" />
                <h1 class="name">
                    {{ $store.state.currentUserData.firstName }}
                    {{ $store.state.currentUserData.lastName }}
                </h1>
            </div>
        </div>
        <div class="dataset">
            <div>
                <h1 class="datatext">Dataset</h1>
            </div>
            <div class="container3">
                <div>
                    <h1 class="adddatasetfile">File Name</h1>
                </div>
                <div>
                    <h1 class="adddatasetaccess">Enter</h1>
                </div>
                <div>
                    <h1 class="adddatasetr">Remove</h1>
                </div>
            </div>
            <div v-for="data in $store.state.totalFileName" :key="data.id" class="edit">
                <w-tag class="filename mr4" bg-color="info-dark3" outline xl color="white">
                    {{ data.fileName }}
                </w-tag>
                <w-button @click="navigate(data)" class="ma1" bg-color="info-dark3" color="white" outline xl>Access</w-button>
                <w-button @click="test1(data)" class="remove ma1" bg-color="info-dark3" color="white" outline xl>Remove</w-button>
            </div>

            <div class="divider1"></div>
            <w-button @click="createNewFile()" class="adddataset ma1" bg-color="info-dark3" color="white" outline xl>Add Dataset</w-button>
        </div>
    </div>
</w-app>
</template>

<script>
import Avatar from "../components/Avatar.vue";
export default {
    components: {
        Avatar,
    },
    data: () => ({
        hidePane2: true,
        test: null,
        text: "A",
    }),

    methods: {
        createNewFile() {
            this.$store.dispatch("createFileName");
        },
        test1(data) {
            console.log(data.fileName);
            this.$store.dispatch("deleteFileName", data.fileName);
            this.$store.dispatch("getFileName");
        },
        async navigate(data) {
            console.log(data.fileName);
            this.$store.state.fileName = data.fileName;
            await this.$store.dispatch("gettripleData", data.fileName);
            await this.$router.push("/RDFGenerate");
            
        },
    },

    create() {
        this.$store.dispatch("createFileName");
    },
};
</script>

<style scoped>
.image {
    position: absolute;
    width: 87px;
    height: 84px;
    margin-top: -6px;
}

.container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
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

.profile {
    color: white;
    font-size: 32px;
}

.user-data {
    position: absolute;
    top: 85px;
    width: 100%;
    height: 250px;
    background-color: #2872e2;
    display: flex;
}

.name {
    color: white;
    font-size: 25px;
}

.dataset {
    position: absolute;
    top: 350px;
    width: 100%;
    height: 350px;
    background-color: #2872e2;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: scroll;
}

.datatext {
    color: white;
    font-size: 25px;
}

.container3 {
    background-color: rgb(2, 18, 92);
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    height: 40px;
    width: 100%;
}

.adddatasetfile {
    position: absolute;
    left: 300px;
    color: white;
    font-size: 20px;
    top: 45px;
}

.adddatasetaccess {
    position: absolute;
    left: 740px;
    color: white;
    font-size: 20px;
    top: 45px;
}

.adddatasetr {
    position: absolute;
    left: 1100px;
    color: white;
    font-size: 20px;
    top: 45px;
}

.divider1 {
    height: 10px;
    background-color: rgb(240, 240, 241);
    width: 100%;
    top: 10px;
}

.filename {
    left: -313px;
}

.remove {
    left: 265px;
}

.adddataset {
    top: 20px;
}
</style>
