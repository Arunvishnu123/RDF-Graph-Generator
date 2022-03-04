<template>
  <w-flex align-center>
    <w-button @click="showBadge--" icon="wi-minus" bg-color="success" sm>
    </w-button>

    <w-badge class="mx6" v-model="showBadge" bg-color="error" overlap>
      <w-icon color="grey-light1" size="2.4em"> mdi mdi-email </w-icon>
    </w-badge>

    <w-button @click="showBadge++" icon="wi-plus" bg-color="success" sm>
    </w-button>
  </w-flex>
</template>

<script>
export default {
    name:"Votes",
  data: () => ({
    showBadge: 0,
  }),
};
</script>
