<template>
<w-app>
    <div>
        <splitpanes class="default-theme" horizontal style="height: 720px">
            <pane>
                <splitpanes :push-other-panes="false">
                    <pane :size="10" v-if="!hidePane2">
                        <w-flex>
                            <w-button class="home1 grow" color="white" bg-color="info-dark2">Home
                            </w-button>
                        </w-flex>
                        <br />
                        <w-flex>
                            <w-button class="about1 grow" color="white" bg-color="info-dark2">About
                            </w-button>
                        </w-flex>
                        <w-flex>
                            <w-button class="signout1 grow" color="white" bg-color="info-dark2">Sign Out
                            </w-button>
                        </w-flex>
                    </pane>
                    <pane>
                        <w-flex>
                            <w-tag class="signout grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                Logged User
                            </w-tag>
                        </w-flex>

                        <w-button class="bnavbar1" @click="hidePane2 = !hidePane2" outline>
                            <i class="fa fa-bars" aria-hidden="true"></i>
                        </w-button>
                        <div class="userdata">
                            <w-flex>
                                <w-tag class="Username grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                    User Name: Arun Raveendran Nair Sheela
                                </w-tag>
                            </w-flex>
                            <w-flex>
                                <w-tag class="Username grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                    User Email: Arunvishnu40@gmail.com
                                </w-tag>
                            </w-flex>
                            <w-flex>
                                <w-tag class="Username grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                    Date Of Birth: 26/07/1995
                                </w-tag>
                            </w-flex>
                        </div>
                    </pane>
                    <pane>
                        <w-flex>
                            <w-tag class="signout grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                Registered Users List
                            </w-tag>
                        </w-flex>

                        <w-table :headers="table.headers" :items="table.items"> </w-table>
                    </pane>
                </splitpanes>
            </pane>
            <pane>
                <splitpanes style="height: 460px">
                    <pane>
                        <w-flex>
                            <w-tag class="signout grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                Discussion Forum
                            </w-tag>
                        </w-flex>
                        <w-flex>
                            <w-textarea v-model="test" class="usermessage" outline shadow>
                                Send Message to the Users
                            </w-textarea>
                        </w-flex>
                        <w-flex>
                            <w-button class="send grow" color="white" bg-color="info-dark2">Send</w-button>
                        </w-flex>
                        <w-flex>
                            <w-textarea class="receive grow" color="info-dark2" outline readonly>
                              {{test}}
                            </w-textarea>
                        </w-flex>
                    </pane>
                    <pane>
                        <w-flex>
                            <w-tag class="signout grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                                Send Invitation
                            </w-tag>
                        </w-flex>

                        <w-input class="firstName" required label="First Name"> </w-input>

                        <w-input class="email1" required label="Email"> </w-input>
                        <w-input class="message1" required label="Enter the Message">
                        </w-input>
                        <w-flex>
                            <w-button class="initationbutton grow" @click="$waveui.notify('Success!', 'success')" color="white" bg-color="info-dark2">
                                <w-icon class="mr1">wi-check</w-icon>
                                Send Invitation Request
                            </w-button>
                        </w-flex>
                    </pane>
                </splitpanes>
            </pane>
        </splitpanes>
    </div>
</w-app>
</template>

<script>
import {
    Splitpanes,
    Pane
} from "splitpanes";
import "splitpanes/dist/splitpanes.css";
export default {
    components: {
        Splitpanes,
        Pane,
    },
    data: () => ({
        hidePane2: true,
        table: {
            headers: [{
                    label: "ID",
                    key: "id",
                },
                {
                    label: "Name",
                    key: "firstName",
                    align: "center",
                },
                {
                    label: "Email",
                    key: "Email",
                    align: "center",
                },
                {
                    label: "Date of Birth",
                    key: "DOB",
                    align: "center",
                },
            ],
            items: [{
                    id: 1,
                    firstName: "Arun Raveendran Nair Sheela",
                    Email: "Arunvishnu40@gmail.com",
                    DOB: "26/07/1995",
                },
                {
                    id: 2,
                    firstName: "Arun Raveendran Nair Sheela",
                    Email: "Arunvishnu40@gmail.com",
                    DOB: "26/07/1995",
                },
                {
                    id: 2,
                    firstName: "Arun Raveendran Nair Sheela",
                    Email: "Arunvishnu40@gmail.com",
                    DOB: "26/07/1995",
                },
                {
                    id: 3,
                    firstName: "Arun Raveendran Nair Sheela",
                    Email: "Arunvishnu40@gmail.com",
                    DOB: "26/07/1995",
                },
                {
                    id: 4,
                    firstName: "Arun Raveendran Nair Sheela",
                    Email: "Arunvishnu40@gmail.com",
                    DOB: "26/07/1995",
                },
            ],
        },
        test:null
    }),
};
</script>

<style scoped>
.splitpanes {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
}

.imageuser {
    position: absolute;

    left: 260px;
}

.bnavbar1 {
    top: -40px;
    left: 10px;
}

.home1 {
    top: 65px;
}

.about1 {
    top: 50px;
}

.signout1 {
    top: 52px;
}

.userdata {
    position: relative;
    top: 50px;
}

.firstName {
    position: relative;
    top:10px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
}

.email1 {
    position: relative;

    top:25px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    
}

.message1 {
    position: relative;
    top:40px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    
}

.initationbutton {
    position: relative;
    top: 70px;
        font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
}

.usermessage {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
}

.send {
    position: relative;
    top: 18px;
}
.receive{
     font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
   position: relative;
    top: 18px;
}
</style>
