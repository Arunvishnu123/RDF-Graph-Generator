<template>
<div>
    <w-app>
        <div class="container-xl">
            <div class="table-responsive">
                <div class="table-wrapper">
                    <div class="table-title">
                        <div class="row">
                            <div class="col-sm-6">
                                <w-flex>
                                    <h2>{{ $store.state.fileName }}</h2>
                                </w-flex>
                            </div>
                            <div class="col-sm-6">
                                <w-flex>
                                    <w-tooltip top>
                                        <template #activator="{ on }">
                                            <w-button v-on="on" bg-color="info-dark2" class="test px2" @click="dialog.show = true">
                                                Add New Triple
                                            </w-button>
                                        </template>
                                        Click here to add new triple
                                    </w-tooltip>
                                </w-flex>
                                <w-tooltip top>
                                    <template #activator="{ on }">
                                        <w-button v-on="on" @click="refresh()" bg-color="info-dark2" class="test1 px2">
                                            <i class="fa fa-refresh" aria-hidden="true"></i>
                                        </w-button>
                                    </template>
                                    Click here to refresh the table
                                </w-tooltip>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Subject</th>
                                <th>Property</th>
                                <th>Object/ Value</th>
                                <th>Editor Name</th>
                                <th>Comments</th>
                                <th>Approve/ <br />Disapprove</th>
                                <th>Votes</th>

                                <th>Actions</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr v-for="data in rdfgraph" :key="data.id">
                                <td>{{ data.num }}</td>
                                <td>{{ data.node0 }}</td>
                                <td>{{ data.node1 }}</td>
                                <td>{{ data.node2 }}</td>

                                <td>Arun</td>
                                <td>{{ data.comment }}</td>
                                <td>
                                    <w-tooltip top>
                                        <template #activator="{ on }">
                                            <w-switch v-on="on" class="ma2" :model-value="false" color="success">
                                            </w-switch>
                                        </template>
                                        Click here to approve the triple
                                    </w-tooltip>
                                </td>

                                <td>
                                    <w-flex align-center>

                                        <w-badge class="mx6" v-model="showBadge" bg-color="error" overlap>
                                            <w-icon class="mr1" xl color="primary">
                                                mdi mdi-thumb-up
                                            </w-icon>
                                        </w-badge>
                                        <w-tooltip top>
                                            <template #activator="{ on }">
                                                <w-button v-on="on" v-if="$store.state.currentUserData.firstName != name" @click="showBadge++" icon="wi-plus" bg-color="success" sm>
                                                </w-button>
                                            </template>
                                            Click here to vote the triple
                                        </w-tooltip>
                                    </w-flex>
                                </td>

                                <td>
                                    <w-flex class="wrapper">
                                        <w-tooltip top>
                                            <template #activator="{ on }">
                                                <w-button v-on="on" @click="editRDFData(data)" color="success" icon="fa fa-pencil-square-o">
                                                </w-button>
                                            </template>
                                            Click here to edit new triple
                                        </w-tooltip>
                                        <span> </span>
                                        <w-tooltip top>
                                            <template #activator="{ on }">
                                                <w-confirm v-on="on" question="Are you sure you want to delete this?" @confirm="test(data)" color="error" icon="mdi mdi-delete">
                                                    Delete
                                                </w-confirm>
                                            </template>
                                            Click here to delete new triple
                                        </w-tooltip>
                                        <w-tooltip top>
                                            <template #activator="{ on }">
                                                <w-button v-on="on" color="success" icon="fa fa-check"> </w-button>
                                            </template>
                                            Click here to update the votes and approval
                                        </w-tooltip>
                                    </w-flex>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="clearfix">
                        <div class="hint-text">
                            Showing <b>{{ page1 }}</b> out of <b>25</b> entries
                        </div>
                        <ul class="pagination">
                            <li class="page-item" v-bind:class="{ active: isActive1 }">
                                <button @click="pageNumber1()" class="page-link">1</button>
                            </li>
                            <li class="page-item" v-bind:class="{ active: isActive2 }">
                                <button @click="pageNumber2()" class="page-link">2</button>
                            </li>
                            <li class="page-item" v-bind:class="{ active: isActive3 }">
                                <button @click="pageNumber3()" class="page-link">3</button>
                            </li>
                            <li class="page-item" v-bind:class="{ active: isActive4 }">
                                <button @click="pageNumber4()" class="page-link">4</button>
                            </li>
                            <li class="page-item" v-bind:class="{ active: isActive5 }">
                                <button @click="pageNumber5()" class="page-link">5</button>
                            </li>
                            <li class="page-item" v-bind:class="{ active: isActive5 }">
                                <button @click="pageNumber5()" class="page-link">6</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Modal HTML -->
        <w-dialog v-model="dialog.show" :fullscreen="dialog.fullscreen" :width="dialog.width" :persistent="dialog.persistent" :persistent-no-animation="dialog.persistentNoAnimation" title-class="primary-light1--bg white">
            <template bg-color="info-dark3" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Add New RDF Triple
            </template>
            <w-form @submit.prevent="newFile">
                <w-flex class="grow mx1">
                    <div class="form-group">
                        <w-tag class="ma1" bg-color="primary" color="white" xl>
                            Select the Property type</w-tag>
                        <select class="selector" v-model="getSelectedPropertyName">
                            <option>--Please select a Property type--</option>
                            <option v-for="data in $store.state.properties" :key="data.id" :value="data.name">
                                {{ data.name }}
                            </option>
                        </select>
                    </div>
                </w-flex>
                <w-flex class="grow mx1" justify-center>
                    <div class="form-group">
                        <w-input v-model="node0" required class="mb3" label="Subject" color="info" outline>
                        </w-input>
                    </div>
                    <div class="form-group">
                        <w-input v-model="node1" required class="mb3" label="Property" color="info" outline>
                        </w-input>
                    </div>
                    <div class="form-group">
                        <w-input v-model="node2" required class="mb3" label="Object/Value" color="info" outline>
                        </w-input>
                    </div>
                </w-flex>
                <div class="form-group">
                    <w-textarea v-model="comment" required class="mt4" outline color="blue">
                        Add Comments
                    </w-textarea>
                </div>

                <div class="spacer" />
                <w-flex justify-center>
                    <w-button xl @click="dialog.show = false">Close</w-button>
                    <w-button xl type="submit" class="ma1" bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)">
                        <w-icon class="mr1">wi-check</w-icon>
                        Save
                    </w-button>
                    <w-button xl class="my1 mr2" bg-color="warning" type="reset">
                        Reset
                    </w-button>
                </w-flex>
            </w-form>
        </w-dialog>
        <!-- Edit Modal HTML -->
        <w-dialog v-model="dialog1.show" :fullscreen="dialog1.fullscreen" :width="dialog.width" :persistent="dialog1.persistent" :persistent-no-animation="dialog1.persistentNoAnimation" title-class="primary-light1--bg white">
            <template bg-color="info-dark3" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Edit Selected RDF Triple
            </template>
            <w-form @submit.prevent="editFile">
                <w-flex class="grow mx1">
                    <div class="form-group">
                        <w-tag class="ma1" bg-color="primary" color="white" xl>
                            Select the Property type</w-tag>
                        <select class="selector" v-model="editPropertyName">
                            <option value="test">--Please select a Property Name--</option>
                            <option v-for="data in $store.state.properties" :key="data.id" :value="data.name">
                                {{ data.name }}
                            </option>
                        </select>
                    </div>
                </w-flex>
                <w-flex justify-center>
                    <div class="form-group">
                        <w-input v-model="editnode0" class="mb3" label="Subject" color="info" outline>
                        </w-input>
                    </div>
                    <div class="form-group">
                        <w-input v-model="editnode1" class="mb3" label="Property" color="info" outline>
                        </w-input>
                    </div>
                    <div class="form-group">
                        <w-input v-model="editnode2" class="mb3" label="Value/Object" color="info" outline>
                        </w-input>
                    </div>
                </w-flex>
                <div class="form-group">
                    <w-textarea v-model="editComment" class="mt4" outline color="blue">
                        Comments
                    </w-textarea>
                </div>

                <div class="spacer" />
                <w-flex justify-center>
                    <w-button @click="dialog1.show = false" xl>Close</w-button>
                    <w-button xl type="submit" class="ma1" bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)">
                        <w-icon class="mr1">wi-check</w-icon>
                        Save
                    </w-button>
                    <w-button xl class="my1 mr2" bg-color="warning" type="reset">
                        Reset
                    </w-button>
                </w-flex>
            </w-form>
        </w-dialog>

        <!-- Delete Modal HTML -->
    </w-app>
</div>
</template>

<script>
export default {
    name: "TableComponent",

    data: () => ({
        dialog: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 700,
        },
        name: "Arun",
        dialog1: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 500,
        },
        button1loading: false,
        button2loading: false,
        rdfgraph: null,
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        text: null,
        showBadge: 0,
        items: [{
                label: "Item 1",
            },
            {
                label: "Item 2",
            },
            {
                label: "Item 3",
            },
        ],
    }),
    created() {
        this.pageNumber1();
    },
    methods: {
        buttonDoLoading(id) {
            this[`button${id}loading`] = true;
            setTimeout(() => (this[`button${id}loading`] = false), 3000);
        },
        test(data) {
            this.$store.state.editRDF.editid = data._id;
            this.$store.dispatch("deleteRDFData");
            console.log(data);
            this.refresh();
        },
        newFile() {
            this.$store.dispatch("newFile");
            this.$store.dispatch("getDataFile");
            this.refresh();
        },
        changeColor() {
            this.color = "blue";
        },
        async refresh() {
            await this.$store.dispatch("gettripleData", this.$store.state.fileName);
            this.rdfgraph = this.$store.state.rdfData.slice(0, 6);
        },
        pageNumber1() {
            this.rdfgraph = this.$store.state.rdfData.slice(0, 6);
            this.page1 = "1 - 5";
            this.isActive1 = true;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive2 = false;
            this.isActive5 = false;
        },

        editRDFData(data) {
            this.dialog1.show = true;
            console.log(data);
            this.$store.state.editRDF.editNode0 = data.node0;
            this.$store.state.editRDF.editNode1 = data.node1;
            this.$store.state.editRDF.editNode2 = data.node2;
            this.$store.state.editRDF.editPropertyName = data.propertyName;
            this.$store.state.editRDF.editComment = data.comment;
            this.$store.state.editRDF.editid = data._id;
            console.log(data._id);
        },

        pageNumber2() {
            this.rdfgraph = this.$store.state.rdfData.slice(6, 12);
            this.page1 = "6 - 10";
            this.isActive2 = true;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive1 = false;
            this.isActive5 = false;
        },
        pageNumber3() {
            this.rdfgraph = this.$store.state.rdfData.slice(12, 18);
            this.page1 = "11 - 15";
            this.isActive3 = true;
            this.isActive1 = false;
            this.isActive4 = false;
            this.isActive2 = false;
            this.isActive5 = false;
        },
        pageNumber4() {
            this.rdfgraph = this.$store.state.rdfData.slice(18, 24);
            this.page1 = "16 - 20";
            this.isActive4 = true;
            this.isActive3 = false;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive5 = false;
            console.log(this.rdfgraph);
        },
        pageNumber5() {
            this.rdfgraph = this.$store.state.rdfData.slice(24, 30);
            this.page1 = "21 - 25";
            this.isActive5 = true;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive2 = false;
            this.isActive1 = false;
        },
        editFile() {
            this.$store.dispatch("updaterdfGraph");
            console.log("logged");
            this.refresh();
        },
    },
    computed: {
        computedColor: function () {
            return this.color;
        },
        test123: {
            get() {
                return this.rdfgraph;
            },
        },
        id: {
            get() {
                return this.$store.state.id;
            },
            set(value) {
                this.$store.commit("updateID", value);
            },
        },

        node0: {
            get() {
                return this.$store.state.node0;
            },
            set(value) {
                this.$store.commit("updateNode0", value);
            },
        },

        node1: {
            get() {
                return this.$store.state.node1;
            },
            set(value) {
                this.$store.commit("updateNode1", value);
            },
        },

        node2: {
            get() {
                return this.$store.state.node2;
            },
            set(value) {
                this.$store.commit("updateNode2", value);
            },
        },
        comment: {
            get() {
                return this.$store.state.comment;
            },
            set(value) {
                this.$store.commit("updateComment", value);
            },
        },
        getSelectedPropertyName: {
            get() {
                return this.$store.state.propertyName;
            },
            set(value) {
                this.$store.commit("updatePropertyName", value);
            },
        },

        editnode0: {
            get() {
                return this.$store.state.editRDF.editNode0;
            },
            set(value) {
                this.$store.commit("updateEditNode0", value);
            },
        },
        editnode1: {
            get() {
                return this.$store.state.editRDF.editNode1;
            },
            set(value) {
                this.$store.commit("updateEditNode1", value);
            },
        },
        editnode2: {
            get() {
                return this.$store.state.editRDF.editNode2;
            },
            set(value) {
                this.$store.commit("updateEditNode2", value);
            },
        },
        editPropertyName: {
            get() {
                return this.$store.state.editRDF.editPropertyName;
            },
            set(value) {
                this.$store.commit("updateEditPropertyName", value);
            },
        },
        editComment: {
            get() {
                return this.$store.state.editRDF.editComment;
            },
            set(value) {
                this.$store.commit("updateEditComment", value);
            },
        },
    },
};
</script>

<style scoped>
body {
    color: #566787;
    background: #f5f5f5;
    font-family: "Varela Round", sans-serif;
    font-size: 13px;
}

.refresh {
    position: relative;
    left: -1000px;
    top: -1000px;
}

.wrapper {
    padding: 1px;
}

.test {
    position: absolute;
    left: 300px;
    top: 1.6px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.test1 {
    position: absolute;
    left: 420px;
    top: 2px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.table-responsive {
    margin: 30px 0;
}

.table-wrapper {
    background: rgb(233, 233, 233);
    padding: 20px 25px;
    border-radius: 3px;
    min-width: 1000px;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.05);
}

.table-title {
    padding-bottom: 15px;
    background: #435d7d;
    color: #fff;
    padding: 16px 30px;
    min-width: 100%;
    margin: -20px -25px 10px;
    border-radius: 3px 3px 0 0;
}

.table-title h2 {
    margin: 5px 0 0;
    font-size: 24px;
}

.table-title .btn-group {
    float: right;
}

.table-title .btn {
    color: #fff;
    float: right;
    font-size: 13px;
    border: none;
    min-width: 50px;
    border-radius: 2px;
    border: none;
    outline: none !important;
    margin-left: 10px;
}

.table-title .btn i {
    float: left;
    font-size: 21px;
    margin-right: 5px;
}

.table-title .btn span {
    float: left;
    margin-top: 2px;
}

table.table tr th,
table.table tr td {
    border-color: #e9e9e9;
    padding: 12px 15px;
    vertical-align: middle;
}

table.table tr th:first-child {
    width: 60px;
}

table.table tr th:last-child {
    width: 100px;
}

table.table-striped tbody tr:nth-of-type(odd) {
    background-color: #fcfcfc;
}

table.table-striped.table-hover tbody tr:hover {
    background: #f5f5f5;
}

table.table th i {
    font-size: 13px;
    margin: 0 5px;
    cursor: pointer;
}

table.table td:last-child i {
    opacity: 0.9;
    font-size: 22px;
    margin: 0 5px;
}

table.table td a {
    font-weight: bold;
    color: #566787;
    display: inline-block;
    text-decoration: none;
    outline: none !important;
}

table.table td a:hover {
    color: #2196f3;
}

table.table td a.edit {
    color: #ffc107;
}

table.table td a.delete {
    color: #f44336;
}

table.table td i {
    font-size: 19px;
}

table.table .avatar {
    border-radius: 50%;
    vertical-align: middle;
    margin-right: 10px;
}

.pagination {
    float: right;
    margin: 0 0 5px;
}

.pagination li a {
    border: none;
    font-size: 13px;
    min-width: 30px;
    min-height: 30px;
    color: #999;
    margin: 0 2px;
    line-height: 30px;
    border-radius: 2px !important;
    text-align: center;
    padding: 0 6px;
}

.pagination li a:hover {
    color: #666;
}

.pagination li.active a,
.pagination li.active a.page-link {
    background: #03a9f4;
}

.pagination li.active a:hover {
    background: #0397d6;
}

.pagination li.disabled i {
    color: #ccc;
}

.pagination li i {
    font-size: 16px;
    padding-top: 6px;
}

.hint-text {
    float: left;
    margin-top: 10px;
    font-size: 13px;
}

.selector {
    border-block-color: rgb(52, 52, 207);
    color: rgb(58, 58, 197);
}

/* Custom checkbox */
.custom-checkbox {
    position: relative;
}

.custom-checkbox input[type="checkbox"] {
    opacity: 0;
    position: absolute;
    margin: 5px 0 0 3px;
    z-index: 9;
}

.custom-checkbox label:before {
    width: 18px;
    height: 18px;
}

.custom-checkbox label:before {
    content: "";
    margin-right: 10px;
    display: inline-block;
    vertical-align: text-top;
    background: white;
    border: 1px solid #bbb;
    border-radius: 2px;
    box-sizing: border-box;
    z-index: 2;
}

.custom-checkbox input[type="checkbox"]:checked+label:after {
    content: "";
    position: absolute;
    left: 6px;
    top: 3px;
    width: 6px;
    height: 11px;
    border: solid #000;
    border-width: 0 3px 3px 0;
    transform: inherit;
    z-index: 3;
    transform: rotateZ(45deg);
}

.custom-checkbox input[type="checkbox"]:checked+label:before {
    border-color: #03a9f4;
    background: #03a9f4;
}

.custom-checkbox input[type="checkbox"]:checked+label:after {
    border-color: #fff;
}

.custom-checkbox input[type="checkbox"]:disabled+label:before {
    color: #b8b8b8;
    cursor: auto;
    box-shadow: none;
    background: #ddd;
}

/* Modal styles */
.modal .modal-dialog {
    max-width: 400px;
}

.modal .modal-header,
.modal .modal-body,
.modal .modal-footer {
    padding: 20px 30px;
}

.modal .modal-content {
    border-radius: 3px;
    font-size: 14px;
}

.modal .modal-footer {
    background: #ecf0f1;
    border-radius: 0 0 3px 3px;
}

.modal .modal-title {
    display: inline-block;
}

.modal .form-control {
    border-radius: 2px;
    box-shadow: none;
    border-color: #dddddd;
}

.modal textarea.form-control {
    resize: vertical;
}

.modal .btn {
    border-radius: 2px;
    min-width: 100px;
}

.modal form label {
    font-weight: normal;
}
</style>
