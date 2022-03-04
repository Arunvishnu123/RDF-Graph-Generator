<template>
<div>
    <div id="circle">
        <h1 class="avatar">{{avatar}}</h1>
    </div>
</div>
</template>

<script>
export default {
   name: "Avatar",
    props: {
        avatar: {
            type: String,
            default () {
                return "";
            },
        },
     
    },
}
</script>

<style scoped>
#circle {
    width: 80px;
    height: 80px;
    -webkit-border-radius: 40px;
    -moz-border-radius: 40px;
    border-radius: 40px;
    background: rgb(49, 5, 206);
    display: flex;  
    align-items: center;
    justify-content: center;
}

.avatar {
    color: white;
    font-size: 60px;
}
</style>
