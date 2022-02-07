<template>
<div>
    <w-app>
        <div>
            <w-button id="started" bg-color="info-dark2" color="white" class="ma1">
                New Document
                <w-icon class="ml1">wi-chevron-right</w-icon>
            </w-button>
            <w-button id="started1" bg-color="info-dark2" color="white" class="ma1">
                Existing Document
                <w-icon class="ml1">wi-chevron-right</w-icon>
            </w-button>
            <w-input class="fileupload" type="file" label="File Upload" accept=".jpg, .jpeg, .png, .gif, .svg" multiple>
            </w-input>
        </div>
    </w-app>
</div>
</template>

<script>
export default {
    name: " RDFGeneratorA",
};
</script>

<style scoped>
#started {
    position: relative;
    left: 28px;
    top: 5px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
}

#started1 {
    position: relative;
    left: 44px;
    top: 5px;
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
    padding-right:50px;
    padding-top: 30px;
    padding-bottom: 30px;
}
</style>
