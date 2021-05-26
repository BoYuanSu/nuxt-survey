<template>
  <div>
    <h1>
      {{ title }}
    </h1>
    <div>
      <h2>static module 靜態註冊模組</h2>
      <p>user uuid: {{ uuid }}</p>
      <div>
        <ul>
          <li>SSR 有資料</li>
          <li>CSR 路由切換有資料</li>
          <li>一個 request 只會抓一次資料，不會後端抓一次，前端又抓一次</li>
        </ul>
      </div>
    </div>
    <section>
      <h2>dynamic module 動態註冊模組</h2>
      <p>counter count: {{ count }}</p>
    </section>
    <section>
      <AsyncData></AsyncData>
      <!-- <RenderBug></RenderBug> -->
    </section>
  </div>
</template>

<script>
import { mapState } from "vuex";
import counter from "@/storeDynamic/counter";

import AsyncData from "@/components/modules/AsyncData";
import RenderBug from "@/components/modules/RenderBug";

export default {
  layout: "mobile",
  components: {
    AsyncData,
    RenderBug
  },
  data() {
    return {
      title: "lifecycle"
    };
  },
  computed: {
    ...mapState("user", { uuid: "uuid" }),
    ...mapState("counter", { count: "count" })
  },
  middleware() {
    console.log("🚀 ~ middleware");
  },
  validate() {
    console.log("🚀 ~ validate");
    return true;
  },
  asyncData() {
    console.log("🚀 ~ asyncData");
    console.log("🚀 ~ asyncData ~ 無法存取 this", this); // 無法存取 this
  },
  // 舊版 fetch 設計
  async fetch_old({ app, store }) {
    console.log("🚀 ~ fetch ~ old ver");
    console.log("🚀 ~ fetch ~ 無法存取 this.title", this.title);
    // this.$store.registerModule("counter", counter);
    // await store.dispatch("user/GET_UUID");
    // await store.dispatch("counter/GET_COUNT");
  },
  async beforeCreate() {
    console.log("🚀 ~ beforeCreate ~ beforeCreate");
    if (!this.$store.hasModule("counter")) {
      this.$store.registerModule("counter", counter);
    }
  },
  async created() {
    console.log("🚀 ~ created");
  },
  // 新版 fetch 設計
  async fetch() {
    console.log("🚀 ~ fetch ~ new ver");
    console.log("🚀 ~ fetch ~ 可以存取 this.title", this.title);
    await this.$store.dispatch("user/GET_UUID");
    await this.$store.dispatch("counter/GET_COUNT");
  },
  beforeMount() {
    console.log("🚀 ~ beforeMount");
  },
  mounted() {
    console.log("🚀 ~ mounted");
  },
  beforeDestroy() {
    console.log("🚀 ~ beforeDestroy");
    if (this.$store.hasModule("counter")) {
      this.$store.unregisterModule("counter");
    }
  }
};
</script>

<style></style>
