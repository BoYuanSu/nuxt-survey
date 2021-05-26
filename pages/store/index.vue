<template>
  <div>
    about
    <pre>
      store
      ├── README.md
      ├── a
      │   ├── a.js
      │   └── index.js
      ├── b.js
      └── index.js
    </pre>
    <p>
      store 路經與模組資料
    </p>
    <p>
      <code>index.js</code> message: <span>{{ message }}</span>
    </p>
    <p>
      <code>a/index.js</code> message: <span>{{ messageA }}</span>
    </p>
    <p>
      <code>a/a.js</code> message: <span>{{ messageA_A }}</span>
    </p>
    <p>
      <code>b.js</code> message: <span>{{ messageB }}</span>
    </p>
    <!-- <button @click="$fetch">Refresh</button> -->
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  layout: "mobile",
  computed: {
    ...mapState({ message: "message" }),
    ...mapState("a", { messageA: "message" }),
    ...mapState("a/a", { messageA_A: "message" }),
    ...mapState("b", { messageB: "message" })
  }
};
</script>

<style></style>
