import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    //register form data
    firstName: null,
    lastName: null,
    DOB: null,
    email: null,
    password: null
  },
  mutations: {
    //registerformdata update
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

  },
  actions: {
    createUsers() {
      axios.post("http://localhost:4000/createusers", {
        firstName: this.state.firstName,
        lastName: this.state.lastName,
        DOB:this.state.DOB,
        email:this.state.email,
        password: this.state.password
      }).then((response) => {
        console.log(response);
      });
      console.log("dkksdmf")
    }
   
     
  },
  modules: {},
});
