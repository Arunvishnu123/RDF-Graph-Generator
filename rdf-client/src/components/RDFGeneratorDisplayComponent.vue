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

            <w-flex>
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
                

                <pre>
                    {{text}}
                </pre>
            </div>
       
        <w-flex>
            <w-button class="download grow" color="white" bg-color="info-dark2">Press to Download the Generated RDF Graph</w-button>
        </w-flex>
    </div>
</w-app>
</template>

<script>
export default {

    name: "RDFGeneratorDisplayComponent",
    data: () => ({
        openDrawer: false,
        text:"\narun\nvishnu\njjxhasjdjasd\nsdijjsidjisad\n \nArunnn"

    }),

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
    ;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    top: 10px;
    height: 120px;
    padding-top: 1px
}

.test {
    padding-bottom: 1px
}

.download {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    top: 624px;
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
    background-color: #333;
    padding: 5px;
    color: #CCC;
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
</style>
