<template>
  <div>
    <h2>RenderBug</h2>
    <p>
      <ul>
        <li>
          p 裡面包 li 會導致 render DOM 跳錯誤，不合適的 DOM 結構導致 Vue 跳出錯誤訊息，這個問題在 Vue CLI 並不會有警告。
        </li>
        <li>
          解決方案：引用 eslint 就會有錯誤提示：eslint(vue/no-parsing-error) Parsing error: x-invalid-end-tag.
        </li>
        <li>
          nuxt The client-side rendered virtual DOM tree is not matching
          server-rendered content.
        </li>
      </ul>
    </p>
  </div>
</template>

<script>
export default {
  name: 'RenderBug'
}
</script>

<style></style>
