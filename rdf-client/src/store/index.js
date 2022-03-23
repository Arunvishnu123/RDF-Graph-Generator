import { createStore } from "vuex";
import axios from "axios";
import router from '../router'

export default createStore({
  state: {
    //register form data
    firstName: null,
    lastName: null,
    DOB: null,
    email: null,
    password: null,
    uniqueID: 0,
    //sign in 

    lemail: null,
    lpassword: null,
    //current user
    currentUserData: {
      firstName: null,
      lastName: null,
      email: null,
      password: null,
      DOB: null,
    },

    //selectedPropertyName
    properties: [{
      name: "Age"
    },
    {
      name: "Language"
    },
    {
      name: "DOB"
    }],

    newFileName: "Dataset-",

    //total filenames
    totalFileName: null,


    //load rdf data

    loadedRDFData: null,
    //login failed
    showDialog: false,

    //file Name
    fileName: null,
    id: null,
    node0: null,
    node1: null,
    node2: null,
    comment: null,
    votesNumber: 0,
    propertyName: null,

    //Get individual rdf data from database

    rdfData: null,

    //All fileNames
    totalFileNames: null,

    //get selected file from the selector

    getSelectedFile: null,

    // generated rdf graph

    generatedRDFGraph: null,

    editRDF: {
      editNode0: null,
      editNode1: null,
      editNode2: null,
      editPropertyName: null,
      editComment: null,
      editid: null
    }

  },
  mutations: {
    //register form data update
    updateFirstName(state, firstName) {
      state.firstName = firstName
    },
    updateLastName(state, lastName) {
      state.lastName = lastName
    },
    updateDOB(state, DOB) {
      state.DOB = DOB
    },
    updateEmail(state, email) {
      state.email = email
    },
    updatePassword(state, password) {
      state.password = password
    },

    //login data update

    lupdateEmail(state, lemail) {
      state.lemail = lemail
    },
    lupdatePassword(state, lpassword) {
      state.lpassword = lpassword
    },
    //show login failed dialog
    updateShowDialog(state, showDialog) {
      state.showDialog = showDialog
    },

    //new file name 
    updateFileName(state, fileName) {
      state.fileName = fileName
    },

    updateID(state, id) {
      state.id = id
    },

    updateNode0(state, node0) {
      state.node0 = node0
    },
    updateNode1(state, node1) {
      state.node1 = node1
    },
    updateNode2(state, node2) {
      state.node2 = node2
    },
    updateComment(state, comment) {
      state.comment = comment
    },

    updatePropertyName(state, propertyName) {
      state.propertyName = propertyName
    },

    updateGetSelectedFile(state, getSelectedFile) {
      state.getSelectedFile = getSelectedFile
    },

    updateEditNode0(state, editNode0) {
      state.editRDF.editNode0 = editNode0
    },

    updateEditNode1(state, editNode1) {
      state.editRDF.editNode1 = editNode1
    },
    updateEditNode2(state, editNode2) {
      state.editRDF.editNode2 = editNode2
    },
    updateEditPropertyName(state, editPropertyName) {
      state.editRDF.editPropertyName = editPropertyName
    },

    updateEditComment(state, editComment) {
      state.editRDF.editComment = editComment
    },
  },
  actions: {
    async createUsers() {
      await axios.post("http://localhost:4000/createusers", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        DOB: this.state.DOB,
        email: this.state.email,
        password: this.state.password
      }).then((response) => {
        console.log(response);
      });
      console.log("dkksdmf")
    },

    async loginUser() {
      await axios.post("http://localhost:4000/signin", {
        email: this.state.lemail,
        password: this.state.lpassword
      }).then((response) => {
        console.log(response.data);
        this.state.currentUserData = response.data.result
        if (response.data.success === "Login Success") {
          router.push('/profile')
          console.log("login_success")
        } else {
          this.state.showDialog = true
          console.log("login failed")
        }
      });
    },

    async createFileName() {
      await axios.post("http://localhost:4000/file", {
        fileName: this.state.newFileName.concat(this.state.uniqueID)
      }).then((response) => {
        console.log(response.data)
        this.state.totalFileName = response.data
        this.state.uniqueID = this.state.uniqueID + 1
      })
    },

    async deleteFileName(filename) {
      await axios.delete("http://localhost:4000/deleteFileName/" + filename).then(response => {
        console.log(response)
      })
    },

    async getFileName() {
      await axios.get("http://localhost:4000/totalfilename").then((response => {
        console.log(response)
        this.state.totalFileName = response.data
      }))
    },

    async gettripleData(filename) {
      console.log("fienammw", filename)
      await axios.get("http://localhost:4000/RDFData/" + this.state.fileName).then(response => {
        console.log("get filedatatat", response)
        this.state.rdfData = response.data

      })
    },

    async newFile() {
      await axios.post("http://localhost:4000/createfile", {
        fileName: this.state.fileName,
        num: this.state.id,
        node0: this.state.node0,
        node1: this.state.node1,
        node2: this.state.node2,
        comment: this.state.comment,
        propertyName: this.state.propertyName,
        userName: this.state.currentUserData.firstName,
        userLastName: this.state.currentUserData.lastName,
        approve:false,
        dateandtime: new Date().toJSON().slice(0, 10).replace(/-/g, '/'),
      }).then((response) => {
        console.log(response)
        console.log("jsdjsnjsdnjsdjds")
      });
    },

    async getDataFile() {
      this.state.rdfData = null
      await axios.get("http://localhost:4000/RDFData/" + this.state.fileName).then(response => {
        console.log(response.data)
        this.state.rdfData = response.data

      })
    },



    getFileNames() {
      axios.get("http://localhost:4000/RDFfileName").then(response => {
        console.log(response.data[0])
        let newArray = [];
        let uniqueObject = {};
        for (let i in response.data) {
          let objTitle = response.data[i]['fileName'];

          // Use the title as the index
          uniqueObject[objTitle] = response.data[i];
        }
        for (let j in uniqueObject) {
          newArray.push(uniqueObject[j]);
        }

        this.state.totalFileNames = newArray;
        console.log(newArray)
        console.log(this.state.totalFileNames);
      })
    },

    getfiledata() {
      axios.get("http://localhost:4000/RDFfileName/" + this.state.getSelectedFile).then(response => {
        console.log(response.data)
        this.state.rdfData = response.data
        this.state.fileName = this.state.getSelectedFile
      })
    },

    async getrdfgraph() {
      await axios.get("http://localhost:4000/RDFGraph/" + this.state.fileName).then(response => {
        console.log(response.data)
        this.state.generatedRDFGraph = response.data
        console.log(this.state.fileName)
      })
    },

    async updaterdfGraph() {
      await axios.put("http://localhost:4000/RDFGraph/" + this.state.editRDF.editid, {
        node0: this.state.editRDF.editNode0,
        node1: this.state.editRDF.editNode1,
        node2: this.state.editRDF.editNode2,
        comment: this.state.editRDF.editComment,
        propertyName: this.state.editRDF.editPropertyName
      }).then(response => {
        console.log(response)
       /// this.state.rdfData.filter(v => v.id == this.state.editRDF.editid)
      })
    },

    async deleteRDFData(){
      await axios.delete("http://localhost:4000/deleteRDFData/" + this.state.editRDF.editid ).then(response =>{
        console.log(response)
      })
    }
  },
  modules: {},
});
