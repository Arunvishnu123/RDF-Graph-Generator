<template>
<w-app>
    <div>
        <w-dialog v-model="showDialog" :width="
          (
            dialog.fullscreen === null
              ? fullscreenTransition
              : dialog.fullscreen
          )
            ? 0
            : 400
        " :fullscreen="
          dialog.fullscreen === null ? fullscreenTransition : dialog.fullscreen
        " :transition="dialog.transition" title="Login Failed" content-class="w-flex align-center justify-center">
            User Name and Password is Wrong
            <w-button class="my6" @click="showDialog = false" bg-color="error">
                Close
            </w-button>
        </w-dialog>
    </div>
</w-app>
</template>

<script>
export default {
    name: "LoginComponent",
    computed: {
        showDialog: {
            get() {
                return this.$store.state.showDialog;
            },
            set(value) {
                this.$store.commit("updateShowDialog", value);
            },
        },
    },
    data: () => ({
        dialog: {
            fullscreen: false,
            transition: "fade",
        },
    }),
};
</script>
