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
    node0:null,
    node1:null,
    node2:null,
    comment:null

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
    newFile(){
      axios.post("http://localhost:4000/createfile",{
        fileName:this.state.fileName,
        node0:this.state.node0,
        node1:this.state.node1,
        node2:this.state.node2,
        node3:this.state.comment
      }).then((response)=>{
        console.log(response)
        console.log("jsdjsnjsdnjsdjds")
      });

    }


  },
  modules: {},
});
