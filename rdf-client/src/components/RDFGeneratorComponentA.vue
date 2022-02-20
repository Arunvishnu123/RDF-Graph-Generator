<template>
<div>
    <w-app>
        <div>
            <w-button @click="dialog.show = true" id="started" bg-color="info-dark2" color="white" class="ma1">
                New Document
                <w-icon class="ml1">wi-chevron-right</w-icon>
            </w-button>
            <w-button id="started1" bg-color="info-dark2" color="white" class="ma1">
                Existing Document
                <w-icon class="ml1">wi-chevron-right</w-icon>
            </w-button>
            <w-flex>
                <w-input class="fileupload" type="file" label="File Upload" accept=".jpg, .jpeg, .png, .gif, .svg" multiple>
                </w-input>
            </w-flex>
            <w-flex>
                <w-button id="Upload" class="grow" bg-color="info-dark2" color="white">
                    Upload Data
                    <w-icon class="ml1">wi-chevron-right</w-icon>
                </w-button>
            </w-flex>
        </div>
        <div>
            <w-dialog v-model="dialog.show" :fullscreen="dialog.fullscreen" :width="dialog.width" :persistent="dialog.persistent" :persistent-no-animation="dialog.persistentNoAnimation" title-class="primary-light1--bg white">
                <template #title>
                    <w-icon class="mr2">mdi mdi-tune</w-icon>
                    Enter the File Name
                </template>
                <w-form @submit.prevent="createNewFile">
                    <w-input :validators="[validators.required]" v-model="file" label="File Name" shadow outline>
                    </w-input>
                    <w-button class="submit1" type="submit">Submit</w-button>
                </w-form>
            </w-dialog>
        </div>
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

#Upload{
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
