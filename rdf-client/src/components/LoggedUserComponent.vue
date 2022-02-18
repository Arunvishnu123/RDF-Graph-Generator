<template>
<div>
    <w-app>
        <div>
            <w-flex>
                <w-tag class="signout grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                    Logged User
                </w-tag>
            </w-flex>     
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
        </div>
    </w-app>
</div>
</template>

<script>
export default {
    name: "LoginComponent",
    data: () => ({
        
    }),
};
</script>
<style scoped>
.userdata {
    position: relative;
    top: 50px;
}

</style>