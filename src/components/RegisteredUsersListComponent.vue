<template>
<div>
    <w-app>
        <w-flex>
            <w-tag class="signout grow" outline bg-color="info-dark2" color="white" xl width="10em" height="3em">
                Registered Users List
            </w-tag>
           
        </w-flex>
         <w-table class="table" :headers="table.headers" :items="table.items"> </w-table>
        
    </w-app>
</div>
</template>

<script>
export default {
    name: "RegisteredUsersList",
    data: () => ({
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
                    Email:"Arunvishnu40@gmail.com",
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
    }),
};
</script>

<style scoped>
.table{
    position: absolute;
    top:50px;
    padding:10px
}

</style>
