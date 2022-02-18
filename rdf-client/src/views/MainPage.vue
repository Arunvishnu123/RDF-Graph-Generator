<template>
<w-app>
    <div>
        <splitpanes class="default-theme" horizontal style="height: 720px">
            <pane>
                <splitpanes :push-other-panes="false">
                    <pane :size="10" v-if="!hidePane2">
                        <NavBarMain />
                    </pane>
                    <pane>
                        <div>
                            <LoggedUser />
                            <w-button bg-color="white" class="bnavbar1" @click="hidePane2 = !hidePane2" outline>
                                <i class="fa fa-bars" aria-hidden="true"></i>
                            </w-button>
                        </div>
                    </pane>
                    <pane>
                        <RegisteredUsersListComponent />
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
                                {{ test }}
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
import NavBarMain from "../components/NavBarMainComponent.vue";
import LoggedUser from "../components/LoggedUserComponent.vue";
import RegisteredUsersListComponent from "../components/RegisteredUsersListComponent.vue";
export default {
    components: {
        Splitpanes,
        Pane ,
        NavBarMain,
        LoggedUser,
        RegisteredUsersListComponent
    },
    data: () => ({
        hidePane2: true,
        test: null,
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
    position: relative;
    top: -712px;
    left: 10px;
}

.userdata {
    position: relative;
    top: 50px;
}

.firstName {
    position: relative;
    top: 10px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    padding: 13px;
}

.email1 {
    position: relative;

    top: 25px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    padding: 13px;
}

.message1 {
    position: relative;
    top: 40px;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    padding: 13px;
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
    padding: 5px;
}

.send {
    position: relative;
    top: 18px;
}

.receive {
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    position: relative;
    top: 18px;
}
</style>
