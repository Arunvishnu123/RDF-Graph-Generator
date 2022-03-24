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
                                    <w-button bg-color="info-dark2" class="invitation px2" @click="dialog4.show = true">
                                        Invite Peoples
                                    </w-button>
                                    <w-button bg-color="info-dark2" class="discussion px2" @click="dialog3.show = true">
                                        Discussion Form
                                    </w-button>
                                    <w-button bg-color="info-dark2" class="test px2" @click="dialog.show = true">
                                        Add New Triple
                                    </w-button>
                                </w-flex>
                                <w-button @click="refresh()" bg-color="info-dark2" class="test1 px2">
                                    <i class="fa fa-refresh" aria-hidden="true"></i>
                                </w-button>
                            </div>
                        </div>
                    </div>
                    <table class="table table-striped table-hover">
                        <thead>
                            <tr>
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
                                <td>{{ data.node0 }}</td>
                                <td>{{ data.node1 }}</td>
                                <td>{{ data.node2 }}</td>

                                <td>Arun</td>
                                <td>{{ data.comment }}</td>
                                <td>
                                    <w-switch disabled v-model="data.approve" class="ma2" color="success">
                                    </w-switch>
                                    <w-button @click="approve(data)" color="success" icon="fa fa-check">
                                    </w-button>
                                </td>

                                <td>
                                    <w-flex align-center>
                                        <w-badge class="mx6" v-model="data.likes" bg-color="error" overlap>
                                            <w-icon class="mr1" xl color="primary">
                                                mdi mdi-thumb-up
                                            </w-icon>
                                        </w-badge>

                                        <w-button v-on="on4" @click="addLikes(data)" icon="wi-plus" bg-color="success" sm>
                                        </w-button>
                                    </w-flex>
                                </td>

                                <td>
                                    <w-flex class="wrapper">
                                        <w-button @click="editRDFData(data)" color="success" icon="fa fa-pencil-square-o">
                                        </w-button>

                                        <span> </span>

                                        <w-confirm question="Are you sure you want to delete this?" @confirm="test(data)" color="error" icon="mdi mdi-delete">
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
                            <li class="page-item" v-bind:class="{ active: isActive5 }">
                                <button @click="pageNumber5()" class="page-link">6</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Edit Modal HTML -->
        <w-dialog v-model="dialog.show" :fullscreen="dialog.fullscreen" :width="dialog.width" persistent title-class="primary-light1--bg white">
            <template bg-color="info-dark3" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Add New RDF Triple
                <w-button class="test123" bg-color="info-dark2" @click="dialog2.show = true">
                    Upload Triples in csv format
                </w-button>
            </template>
            <w-form @submit.prevent="addTriplesdatabase">
                <w-textarea no-autogrow v-model="addTriples" class="triples" outline color="blue">
                    Add Triples
                </w-textarea>
                <w-flex>
                    <w-tag class="mr4" height="3em" color="primary">For example - Arun Speaks English-French-Malayalam,Arun Likes
                        Cricket-Football-Hockey</w-tag>
                </w-flex>
                <div class="spacer" />
                <div class="spacer" />
                <div class="spacer" />

                <w-flex justify-center>
                    <w-button class="ma1 grow" xl @click="dialog.show = false">Close</w-button>
                    <w-button xl class="ma1 grow" bg-color="warning" type="reset">
                        Reset
                    </w-button>
                    <w-button xl type="submit" class="ma1 grow" bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)">
                        <w-icon class="mr1">wi-check</w-icon>
                        Save
                    </w-button>
                </w-flex>
            </w-form>
        </w-dialog>
        <!-- Edit Modal HTML -->
        <w-dialog v-model="dialog1.show" :fullscreen="dialog1.fullscreen" :width="dialog.width" persistent title-class="primary-light1--bg white">
            <template bg-color="info-dark3" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Edit Selected RDF Triple
            </template>
            <w-form @submit.prevent="editFile">
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
                    <w-button class="ma1 grow" @click="dialog1.show = false" xl>Close</w-button>
                    <w-button xl class="ma1 grow" bg-color="warning" type="reset">
                        Reset
                    </w-button>
                    <w-button xl type="submit" class="ma1 grow" bg-color="primary" :loading="button1loading" @click="buttonDoLoading(1)">
                        <w-icon class="mr1">wi-check</w-icon>
                        Save
                    </w-button>
                </w-flex>
            </w-form>
        </w-dialog>
        <!-- Upload Modal HTML -->
        <w-dialog v-model="dialog2.show" :loading="button4loading" @click="buttonDoLoading(4)" :fullscreen="dialog2.fullscreen" :width="dialog2.width" :persistent="dialog2.persistent" :persistent-no-animation="dialog2.persistentNoAnimation" title-class="primary-light1--bg white">
            <template bg-color="info-dark2" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Upload Triples via CSV Format
            </template>
            <w-tag class="head mr4" height="3em" color="primary">Upload Multiple triple in CSV Format for examples- "Subject,Predicate,Object/Value,Comment,r"</w-tag>
            <div class="spacer" />
            <div class="spacer" />
            <div class="spacer" />
            <div class="spacer" />
            <div class="spacer" />
            <div class="spacer" />

            <w-flex>
                <text-reader class="grow" @load="text1 = $event"></text-reader>
            </w-flex>
            <w-flex>
                <w-button class="grow" bg-color="info-dark2" color="white" @click="dialog2.show = false">Close</w-button>
                <w-button class="grow" @click="fileReader()" bg-color="info-dark2" color="white">Save</w-button>
            </w-flex>
        </w-dialog>

        <!-- Discussion forum Modal HTML -->
        <w-dialog v-model="dialog3.show" fullscreen :width="dialog3.width" title-class="primary-light1--bg white">
            <template bg-color="info-dark2" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Disucssion Forum
            </template>

            <w-flex>
                <w-button class="closebutton grow" bg-color="info-dark2" sm outline round absolute icon="wi-cross" color="white" @click="dialog3.show = false">Close</w-button>
            </w-flex>
            <w-flex class="mes">
                <w-textarea v-model="discussionMessage" label="Message" label-position="inside" outline inner-icon-left="mdi mdi-email">
                </w-textarea>
            </w-flex>
            <w-flex>
                <w-button @click="sendMessage()" class="sendbutton grow" bg-color="info-dark2" color="white">Send</w-button>
            </w-flex>
            <div class="chat">
                <pre class="chatmess">
                {{ chatmessage }}
                </pre>
            </div>

        </w-dialog>

        <!-- invitation forum Modal HTML -->
        <w-dialog v-model="dialog4.show" :width="dialog4.width" title-class="primary-light1--bg white">
            <template bg-color="info-dark2" #title>
                <w-icon class="mr2">mdi mdi-tune</w-icon>
                Send Invitation
            </template>
            <w-flex>
                <w-button class="closebutton grow" bg-color="info-dark2" sm outline round absolute icon="wi-cross" color="white" @click="dialog4.show = false">Close</w-button>
            </w-flex>
            <w-form @submit.prevent="sendMail">
                <w-input v-model="firstName" class="firstName" required label="First Name"> </w-input>
                <w-input v-model="email" class="email1" required label="Email"> </w-input>
                <w-input v-model="emailmessage" class="message1" required label="Enter the Message"> </w-input>
                <w-flex>
                    <w-button type="submit" class="invitationbutton grow" @click="$waveui.notify('Success!', 'success')" color="white" bg-color="info-dark2">
                        <w-icon class="mr1">wi-check</w-icon>
                        Send Invitation Request
                    </w-button>
                </w-flex>
            </w-form>
        </w-dialog>
    </w-app>
</div>
</template>

<script>
import axios from "axios";
import TextReader from "./TextReader.vue";
export default {
    name: "TableComponent",
    components: {
        TextReader,
    },

    data: () => ({
        dialog: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 700,
        },
        firstName: null,
        email: null,
        emailmessage: null,
        name: "Arun",
        dialog1: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 500,
        },
        chatmessage: null,
        dialog2: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 400,
        },
        dialog3: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 400,
        },
        dialog4: {
            show: false,
            fullscreen: false,
            persistent: false,
            persistentNoAnimation: false,
            width: 400,
        },
        button1loading: false,
        button2loading: false,
        button4loading: false,
        rdfgraph: null,
        isActive1: false,
        isActive2: false,
        isActive3: false,
        isActive4: false,
        isActive5: false,
        discussionMessage: null,
        text: null,
        text1: null,
        approved: null,
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
        addTriples: null,
    }),
    created() {
        this.pageNumber1();
    },
    methods: {
        buttonDoLoading(id) {
            this[`button${id}loading`] = true;
            setTimeout(() => (this[`button${id}loading`] = false), 3000);
        },
        async fileReader() {
            console.log(this.text1);
            const lines = this.text1.split("\n"); // 1️⃣
            const header = lines[0].split(","); // 2️⃣
            const output = lines.slice(1).map((line) => {
                const fields = line.split(","); // 3️⃣
                return Object.fromEntries(header.map((h, i) => [h, fields[i]])); // 4️⃣
            });
            console.log(output);
            for (let t of output) {
                console.log(t);
                await axios
                    .post("http://localhost:4000/createfile", {
                        fileName: this.$store.state.fileName,
                        num: null,
                        node0: t.node0,
                        node1: t.node1,
                        node2: t.node2,
                        approve: false,
                        comment: t.comment,
                        propertyName: null,
                        likes: 0,
                        userName: this.$store.state.currentUserData.firstName,
                        userLastName: this.$store.state.currentUserData.lastName,
                        dateandtime: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
                    })
                    .then((response) => {
                        console.log(response);
                    });
            }
        },

        async sendMail() {
            await axios.post("http://localhost:4000/sendemail", {
                name: this.firstName,
                email: this.email,
                emailMessage: this.emailmessage
            }).then((response) => {
                console.log(response)
            })
        },
        async addTriplesdatabase() {
            console.log(this.addTriples);
            let arr = this.addTriples.split("\n");
            console.log("test", arr)
            let triples = [];
            for (let i of arr) {
                let triple = i.split(" ");
                console.log("Triples", triple)

                let tri = triple[2].split(",");
                console.log("Triples", tri)
                for (let j of tri) {
                    console.log("j", j)
                    let value = [triple[0], triple[1], j, triple[3]];
                    triples.push(value);
                }
            }
            console.log(triples);
            for (let tri of triples) {
                await axios
                    .post("http://localhost:4000/createfile", {
                        fileName: this.$store.state.fileName,
                        num: null,
                        node0: tri[0],
                        node1: tri[1],
                        node2: tri[2],
                        comment: tri[3],
                        propertyName: null,
                        approve: false,
                        likes: 0,
                        userName: this.$store.state.currentUserData.firstName,
                        userLastName: this.$store.state.currentUserData.lastName,
                        dateandtime: new Date().toJSON().slice(0, 10).replace(/-/g, "/"),
                    })
                    .then((response) => {
                        console.log(response);
                    });
            }
        },
        async addLikes(data) {
            let like = 0 
            if (this.$store.state.currentUserData.firstName == "Arun") {
                
                like = like + 1
                console.log(like)
            }
            if (this.$store.state.currentUserData.firstName == "Shiva") {
               
                like = like + 1
                console.log(like)
            }
            if (this.$store.state.currentUserData.firstName == "Nurien") {
    
                like = like + 1
                console.log(like)
            }

            await axios
                .put("http://localhost:4000/likes/" + data._id, {
                    likes: like,
                })
                .then((response) => {
                    console.log(response);
                });
            this.refresh();
        },

        async sendMessage() {
            await axios.post("http://localhost:4000/message", {
                user: this.$store.state.currentUserData.firstName,
                message: this.discussionMessage
            }).then((response) => {
                console.log(response)
                this.chatmessage = response.data
            })
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

        async approve(data) {
            console.log("data", data._id)
            if (this.approval == null) {
                this.approved = false
            }

            if (this.approved == false) {
                this.approved = true
                await axios
                    .put("http://localhost:4000/approve/" + data._id, {
                        approve: true,

                    })
                    .then((response) => {
                        console.log(response);
                    });

            }
            this.refresh();
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

.closebutton {
    top: 10px;
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

.triples {
    top: -23px;
    height: 200px;
}

.comment {
    top: -20px;
}

.test123 {
    position: absolute;
    left: 500px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.discussion {
    position: absolute;
    left: 170px;
    top: 1.2px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.uploadProper {
    position: absolute;
    left: 280px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
}

.invitation {
    position: absolute;
    left: 53px;
    top: 1.1px;
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

.invitationbutton {
    padding: 10px;
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

.firstName {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    padding: 13px;
}

.email1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    padding: 13px;
}

.message1 {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    padding: 20px;
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

.chat {
    max-height: 600px;
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

.head {
    padding: 10px
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

.sendbutton {
    padding: 10px;
    height: 100px
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

.chatmess {
    left: 0px;
}

.modal form label {
    font-weight: normal;
}
</style>
