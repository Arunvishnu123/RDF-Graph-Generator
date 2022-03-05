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
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Subject</th>
                                <th>Predicate</th>
                                <th>Object</th>
                                <th>Comments</th>
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
                                <td>{{ data.comment }}</td>
                                <td>
                                    <Votes />
                                </td>
                                <td>
                                    <w-flex class="wrapper">
                                        <w-button color="success" icon="fa fa-pencil-square-o" @click="dialog1.show = true">
                                        </w-button>

                                        <span> </span>
                                        <w-confirm question="Are you sure you want to delete this?" @confirm="test" color="error" icon="mdi mdi-delete">
                                            Delete
                                        </w-confirm>
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
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Modal HTML -->
        <w-dialog v-model="dialog.show" :fullscreen="dialog.fullscreen" :width="dialog.width" :persistent="dialog.persistent" :persistent-no-animation="dialog.persistentNoAnimation" title-class="primary-light1--bg white">
            <template #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Add Data
            </template>
            <w-form @submit.prevent="newFile">
                <div class="form-group">
                    <w-input v-model="id" required class="mb3" label="ID" color="info" outline>
                    </w-input>
                </div>
                <div class="form-group">
                    <w-input v-model="node0" required class="mb3" label="Subject" color="info" outline>
                    </w-input>
                </div>
                <div class="form-group">
                    <w-input v-model="node1" required class="mb3" label="Predicate" color="info" outline>
                    </w-input>
                </div>
                <div class="form-group">
                    <w-input v-model="node2" required class="mb3" label="Object" color="info" outline>
                    </w-input>
                </div>
                <div class="form-group">
                    <w-textarea v-model="comment" required class="mt4" outline color="blue">
                        Comments
                    </w-textarea>
                </div>

                <div class="spacer" />
                <w-button @click="dialog.show = false">Close</w-button>
                <w-button type="submit" class="ma1" bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)">
                    <w-icon class="mr1">wi-check</w-icon>
                    Save
                </w-button>
            </w-form>
        </w-dialog>
        <!-- Edit Modal HTML -->
        <w-dialog v-model="dialog1.show" :fullscreen="dialog1.fullscreen" :width="dialog.width" :persistent="dialog1.persistent" :persistent-no-animation="dialog1.persistentNoAnimation" title-class="primary-light1--bg white">
            <template bg-color="info-dark2" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Edit Data
            </template>
            <div class="form-group">
                <w-input class="mb3" label="ID" color="info" outline> </w-input>
            </div>
            <div class="form-group">
                <w-input class="mb3" label="Node 0" color="info" outline> </w-input>
            </div>
            <div class="form-group">
                <w-input class="mb3" label="Node 1" color="info" outline> </w-input>
            </div>
            <div class="form-group">
                <w-input class="mb3" label="Node 2" color="info" outline> </w-input>
            </div>
            <div class="form-group">
                <w-textarea class="mt4" outline color="blue"> Comments </w-textarea>
            </div>

            <template #actions>
                <div class="spacer" />
                <w-button @click="dialog1.show = false">Close</w-button>
                <w-button class="ma1" bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)">
                    <w-icon class="mr1">wi-check</w-icon>
                    Save
                </w-button>
            </template>
        </w-dialog>

        <!-- Delete Modal HTML -->
    </w-app>
</div>
</template>

<script>
import Votes from "../components/Votes.vue";
export default {
    name: "TableComponent",
    components: {
        Votes,
    },
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
        button1loading: false,
        button2loading: false,
        rdfgraph: null,
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
    }),
    methods: {
        buttonDoLoading(id) {
            this[`button${id}loading`] = true;
            setTimeout(() => (this[`button${id}loading`] = false), 3000);
        },
        test() {
            console.log("pront");
        },
        newFile() {
            this.$store.dispatch("newFile");
            this.$store.dispatch("getDataFile");
            this.pageNumber1();
        },
        changeColor() {
            this.color = "blue";
        },
        pageNumber1() {
            this.rdfgraph = this.$store.state.rdfData.slice(0, 5);
            this.page1 = "1 - 5";
            this.isActive1 = true;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive2 = false;
            this.isActive5 = false;
        },

        pageNumber2() {
            this.rdfgraph = this.$store.state.rdfData.slice(5, 10);
            this.page1 = "6 - 10";
            this.isActive2 = true;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive1 = false;
            this.isActive5 = false;
        },
        pageNumber3() {
            this.rdfgraph = this.$store.state.rdfData.slice(10, 15);
            this.page1 = "11 - 15";
            this.isActive3 = true;
            this.isActive1 = false;
            this.isActive4 = false;
            this.isActive2 = false;
            this.isActive5 = false;
        },
        pageNumber4() {
            this.rdfgraph = this.$store.state.rdfData.slice(15, 20);
            this.page1 = "16 - 20";
            this.isActive4 = true;
            this.isActive3 = false;
            this.isActive1 = false;
            this.isActive2 = false;
            this.isActive5 = false;
        },
        pageNumber5() {
            this.rdfgraph = this.$store.state.rdfData.slice(20, 2);
            this.page1 = "21 - 25";
            this.isActive5 = true;
            this.isActive3 = false;
            this.isActive4 = false;
            this.isActive2 = false;
            this.isActive1 = false;
        },
    },
    computed: {
        computedColor: function () {
            return this.color;
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
    left: 360px;
    top: 1.6px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.test1 {
    position: absolute;
    left: 400px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.table-responsive {
    margin: 30px 0;
}

.table-wrapper {
    background: #fff;
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
