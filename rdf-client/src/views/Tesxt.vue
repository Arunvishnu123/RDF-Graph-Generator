<template>

	<div id="app">
          <div>
        <button @click ="t()"></button>
    </div>
    <textarea rows="10" v-model="text"></textarea>
    <br>
		<text-reader :showLabel="f" @load="text = $event"></text-reader>
        
	</div>
  
</template>

<script>
import TextReader from "../components/TextReader";

export default {
  name: "app",
  data: () => ({ text: "",
   }),
  methods:{
t(){

    const lines = this.text.split('\n') // 1️⃣
const header = lines[0].split(',') // 2️⃣
const output = lines.slice(1).map(line => {
  const fields = line.split(',') // 3️⃣
  return Object.fromEntries(header.map((h, i) => [h, fields[i]])) // 4️⃣
})


    console.log(output)
}
  },
  components: {
    TextReader
  }
};
</script>
