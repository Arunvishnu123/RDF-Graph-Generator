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

    //sign in 

    lemail: null,
    lpassword: null,

    //login failed
    showDialog: false,

    //file Name
    fileName: "File Name",
    id: null,
    node0: null,
    node1: null,
    node2: null,
    comment: null,

    //Get individual rdf data from database

    rdfData: null,

    //All fileNames
    totalFileNames: null

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



  },
  actions: {
    createUsers() {
      axios.post("http://localhost:4000/createusers", {
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

    loginUser() {
      axios.post("http://localhost:4000/signin", {
        email: this.state.lemail,
        password: this.state.lpassword
      }).then((response) => {
        console.log(response);
        console.log(response.data.result)
        console.log(response.data.success)
        if (response.data.success === "Login Success") {
          console.log("dksbkjsdb")
          router.push('/RDFGenerate')
        } else {
          this.state.showDialog = true
          console.log("login failed")
        }
      });
    },
    newFile() {
      axios.post("http://localhost:4000/createfile", {
        fileName: this.state.fileName,
        num: this.state.id,
        node0: this.state.node0,
        node1: this.state.node1,
        node2: this.state.node2,
        comment: this.state.comment
      }).then((response) => {
        console.log(response)
        console.log("jsdjsnjsdnjsdjds")
      });
    },

    getDataFile() {
      axios.get("http://localhost:4000/RDFData/" + this.state.fileName).then(response => {
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
    }
  },
  modules: {},
});
