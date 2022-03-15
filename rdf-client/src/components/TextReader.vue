<template>
<label class="text-reader">
    Click Here to Upload Data
    <input class="button" accept=".csv" type="file" @change="loadTextFromFile">
</label>
</template>

<script>
export default {
    data: () => ({
        t: null
    }),
    methods: {
        loadTextFromFile(ev) {
            const file = ev.target.files[0];
            const reader = new FileReader();

            reader.onload = e => this.$emit("load", e.target.result);
            reader.readAsText(file);
            //console.log(e.target.result)
        }
    },
    props: {
        showLabel: {
            type: String,
            default () {
                return "";
            },
        },

    },
};
</script>

<style>
.text-reader {
    position: relative;
    overflow: hidden;
    display: inline-block;

    /* Fancy button looking */
    border: 2px solid black outset #999;
    background-color: rgb(53, 49, 49);
    border-radius: 5px;
    padding: 8px 12px;
    color: aliceblue;
    cursor: pointer;
}

.text-reader input {
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    opacity: 0;
}
</style>
