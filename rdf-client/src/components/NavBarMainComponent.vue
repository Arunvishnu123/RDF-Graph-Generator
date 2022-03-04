<template>
<div>
    <w-app>
        <div>
            <Avatar class="avatar" :avatar="text" />
            <w-flex>
                <w-button class="home grow" color="white" bg-color="info-dark2">Home
                </w-button>
            </w-flex>
            <br />
            <w-flex>
                <w-button class="about grow" color="white" bg-color="info-dark2">About
                </w-button>
            </w-flex>
            <w-flex>
                <w-button class="signout grow" color="white" bg-color="info-dark2">Sign Out
                </w-button>
            </w-flex>
        </div>
    </w-app>
</div>
</template>

<script>
import Avatar from "../components/Avatar.vue";
export default {
    components: {
        Avatar,
    },
    data: () => ({
        text: "A",
    }),
};
</script>

<style scoped>
.home {
    top: 100px;
}

.about {
    top: 100px;
}

.signout {
    top: 120px;
}
.avatar{
    position:absolute;
    top:4px;
    left:35px
}
</style>
