<template>
<div>
    <w-app>
        <div class="generate">
            <w-flex>
                <w-button class="generteButton grow" bg-color="info-dark2" color="white">
                    Generate RDF Graph
                    <w-icon class="ml1">wi-chevron-right</w-icon>
                </w-button>
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
    },
};
</script>

<style>
.generteButton {
    top: -762px;
}

.divider1 {

    top: -700px;
}
</style>
