<script setup>
const { getHealth } = usePolis()
const res = await getHealth()
console.log(res)
</script>

<template>
  <div>
    <h1>Polis test page</h1>
  </div>
</template>
