<template>
<w-app>
    <div>
        <w-flex>
            <w-tag outline class="test11 grow" bg-color="info-dark2" color="white" xl width="30em" height="3em">
                Generated RDF Graph
            </w-tag>
        </w-flex>
        <w-button class="bnavbar" @click="openDrawer = 'right'" outline>
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
        <w-textarea class="rdftestarea" v-model="test" color="info-dark2" bg-color="white" value="" label="" outline readonly>
        </w-textarea>
        <w-flex>
            <w-button class="download grow" color="white" bg-color="info-dark2">Press to Download the Generated RDF Graph</w-button>
        </w-flex>
    </div>
</w-app>
</template>
<script>

</script>

<style scoped>
.rdftestarea {
    font-family: Asap;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    top: 10px;
    height: 500px;
}

.download {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    top: 30px;
}

.bnavbar {
    position: absolute;
    left: 1480px;
    top: 15px;
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

