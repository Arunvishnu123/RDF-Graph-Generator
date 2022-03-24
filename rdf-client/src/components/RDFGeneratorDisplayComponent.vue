<template>
<w-app>
    <div>
        <w-flex>
            <w-tag outline class="test11 grow" bg-color="info-dark2" color="white" xl width="30em" height="3em">
                Generated RDF Graph
            </w-tag>
        </w-flex>
        <w-button bg-color="white" class="bnavbar" @click="openDrawer = 'right'" outline>
            <i class="fa fa-bars" aria-hidden="true"></i>
        </w-button>
        <w-drawer v-model="openDrawer" :[position]="true">
            <w-button @click="openDrawer = false" sm outline round absolute icon="wi-cross">
            </w-button>

            <br />
            <w-flex>
                <Avatar class="avatar" :avatar="text1" />
                <h4 class="username">Arun Raveendran Nair Sheela</h4>
                <w-button class="home grow" color="white" bg-color="info-dark2">Home
                </w-button>
            </w-flex>
            <br />

            <w-button class="about grow" color="white" bg-color="info-dark2">About
            </w-button>

            <br />

            <w-button class="signout grow" color="white" bg-color="info-dark2">Sign Out
            </w-button>
        </w-drawer>

        <div class="test">
            <pre class="j">
            {{ $store.state.generatedRDFGraph }}
            </pre>
        </div>
        <w-flex>
            <w-button @click="download()" class="download grow" color="white" bg-color="info-dark2">Press to Download the Generated RDF Graph</w-button>
        </w-flex>
    </div>
</w-app>
</template>

<script>
import Avatar from "../components/Avatar.vue";
export default {
    name: "RDFGeneratorDisplayComponent",
    data: () => ({
        openDrawer: false,
        text: "\narun\nvishnu\njjxhasjdjasd\nsdijjsidjisad\n \nArunnn\nuhduhdjshdj\nskdjashdhasdhas\nsadasdashd",
        text1: "A",
    }),
    components: {
        Avatar,
    },
    methods: {
        download() {
            console.log("Downlaoded");
        },
    },

    computed: {
        position() {
            return this.openDrawer || "right";
        },
    },
};
</script>

<style scoped>
.rdftestarea {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    top: 10px;
    height: 120px;
    padding-top: 1px;
}

.download {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    top: 40px;
}

.bnavbar {
    position: fixed;
    left: 1480px;
    top: 12px;
}

pre {
    white-space: pre-wrap;
    word-break: break-word;
}

pre {
    counter-reset: line-numbering;
    font-family: Menlo, Monaco, monospace;
    background-color: rgb(235, 235, 235);
    padding: 5px;
    color: rgb(223, 11, 11);
    border-radius: 3px;
    word-break: break-word;
}

pre .line::before {
    content: counter(line-numbering);
    counter-increment: line-numbering;
    padding-right: 1em;
    /* space after numbers */
    width: 1.5em;
    text-align: right;
    opacity: 0.5;
}

.home {
    position: absolute;
    width: 400px;
    left: 0x;
    top: 200px;
}

.test {
    max-height: 600px;
    overflow: scroll;
}

.about {
    position: absolute;
    width: 400px;
    left: 0x;
    top: 240px;
}

.signout {
    position: absolute;
    width: 400px;
    left: 0x;
    top: 280px;
}

.image1 {
    height: 10px;
    width: 10px;
    left: 0x;
    top: 0px;
}

h4 {
    padding: 0;
    margin: 0;
}

.avatar {
    position: absolute;
    height: 100px;
    top: 30px;
    left: 150px;
}

.username {
    position: absolute;
    top: 120px;
    left: 30px;
}
</style>
