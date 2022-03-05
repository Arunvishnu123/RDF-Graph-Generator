<template>
<div>
    <w-app>
        <div>
            <div>
                <h1 style="color: info-dark2" class="text1">RDF Graph Generator</h1>
            </div>
            <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rdf_logo.svg/768px-Rdf_logo.svg.png" alt="RDF image" class="image" />
            </div>
            <div class="table">
                <splitpanes class="default-theme" @resize="paneSize = $event[0].size" style="height: 720px">
                    <pane :size="paneSize">
                        <div class="componentA">
                            <RDFGeneratorA />
                        </div>
                        <div class="tableComponent">
                            <TableComponent />
                        </div>
                        <div class="ComponentB">
                            <RDFGeneratorB />
                        </div>

                    </pane>
                    <pane :size="100 - paneSize">
                        <div class="display">
                            <RDFGeneratorDisplayComponent />
                        </div>
                    </pane>
                </splitpanes>
            </div>
        </div>
    </w-app>
</div>
</template>

<script>
import RDFGeneratorA from "../components/RDFGeneratorComponentA.vue";
import RDFGeneratorB from "../components/RDFGeneratorComponentB.vue";
import TableComponent from "../components/TableComponent.vue";
import RDFGeneratorDisplayComponent from "../components/RDFGeneratorDisplayComponent.vue";
import {
    Splitpanes,
    Pane
} from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    components: {
        RDFGeneratorA,
        Splitpanes,
        Pane,
        TableComponent,
        RDFGeneratorB,
        RDFGeneratorDisplayComponent,
    },
    data() {
        return {
            paneSize: 70,

        };
    },
};
</script>

<style scoped>
.componentA {
    position: relative;
    left: 1px;
    top: 120px;
}

.tableComponent {
    position: relative;
    left: 13px;
    top: -660px;
    padding-right: 23px;

}

.image {
    position: absolute;
    width: 87px;
    height: 84px;
    margin-top: -6px;
}

.text1 {
    position: absolute;
    width: 727px;
    height: 76px;
    left: -75px;
    top: 37px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 39px;
    line-height: 47px;
    text-align: center;
    color: #2872e2;
    margin-top: -23px;
    margin-left: -15px;
}

.display {
    position: relative;
    top: 0px
}
</style>
