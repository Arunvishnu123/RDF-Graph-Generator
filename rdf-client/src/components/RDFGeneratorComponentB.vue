<template>
<div>
    <w-app>
        <div class="generate">

            <w-button class="saveButton" bg-color="info-dark2" color="white" :loading="button2loading" @click="buttonDoLoading(2)">
                <w-icon class="mr1">wi-check</w-icon>
                Save
                <template #loading>Loading...</template>
            </w-button>

            <w-button class="generteButton" id="started" bg-color="info-dark2" color="white">
                Generate RDF Graph
                <w-icon class="ml1">wi-chevron-right</w-icon>
            </w-button>

        </div>
        <w-divider class="divider1" color="info-dark2" />
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
    },
};
</script>

<style>
.generteButton {

    position: relative;
    left: 786px
}

.saveButton {

    position: relative;
    left: 770px
}

.divider1 {
    position: relative;
    left: 1px;
    top: 70px;
    width: 1020px;
}
</style>
