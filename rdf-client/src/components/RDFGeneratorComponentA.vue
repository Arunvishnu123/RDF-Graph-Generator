<template>
<div>
    <w-app>
        <div></div>
        <div></div>
    </w-app>
</div>
</template>

<script>
export default {
    name: " RDFGeneratorA",
    data: () => ({
        dialog: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 300,
        },
        dialog1: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 300,
        },
        file: "",
        validators: {
            required: (value) => !!value || "This field is required",
        },
    }),
    methods: {
        createNewFile() {
            this.$store.state.fileName = this.file;

            this.dialog.show = false;

            console.log("sdjfsjfjsd");
        },

        getfileName() {
            this.dialog1.show = true;
            this.$store.dispatch("getFileNames");
        },

        submitSelectedFileName() {
            console.log("djfjjdsfjksdhfjhdf", this.getSelectedFile);
            this.$store.dispatch("getfiledata");
            console.log("dbfjsdbfjsdbfhdb");
            this.dialog1.show = false;
        },
    },

    computed: {
        getSelectedFile: {
            get() {
                return this.$store.state.getSelectedFile;
            },
            set(value) {
                this.$store.commit("updateGetSelectedFile", value);
            },
        },

        // computed: {
        //    fileName: {
        //       get() {
        //          return this.$store.state.fileName;
        //      },
        //     set(value) {
        //        this.$store.commit("updateFileName", value);
        //    },
        //},
        // },
    },
};
</script>

<style scoped>
#started {
    position: relative;
    left: 28px;
    top: -30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
}

#started1 {
    position: relative;
    left: 44px;
    top: -30px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
}

.fileupload {
    position: relative;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    left: 2px;
    padding-left: 30px;
    padding-right: 50px;
    padding-top: 30px;
    padding-bottom: 30px;
    top: -68px;
}

#Upload {
    position: relative;
    top: -83px;
    padding-left: 30px;
    padding-right: 50px;
}

.submit1 {
    position: relative;
    padding: 10px;
    left: 110px;
    top: 10px;
}
</style>
