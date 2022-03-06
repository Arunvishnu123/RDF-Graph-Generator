<template>
<div>
    <w-app>
        <div class="generate">
            <w-flex>
                <w-tooltip top>
                    <template #activator="{ on }">
                        <w-button  v-on="on" @click="generateRDFGraph" class="generteButton grow" bg-color="info-dark2" color="white">
                            Generate RDF Graph
                            <w-icon class="ml1">wi-chevron-right</w-icon>
                        </w-button>
                    </template>
                    Click here to generate RDF Graph
                </w-tooltip>
            </w-flex>
        </div>
    </w-app>
</div>
</template>

<script>
export default {
    name: " RDFGeneratorB",
    data: () => ({
        button1loading: false,
        button2loading: false,
    }),
    methods: {
        buttonDoLoading(id) {
            this[`button${id}loading`] = true;
            setTimeout(() => (this[`button${id}loading`] = false), 3000);
        },

        generateRDFGraph() {
            this.$store.dispatch("getrdfgraph");
        },
    },
};
</script>

<style>
.generteButton {
    top: -750px;
}

.divider1 {
    top: -700px;
}
</style>
