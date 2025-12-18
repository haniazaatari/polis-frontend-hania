<script setup>
const polis = usePolis()
const data = await polis.getConversation('1')
</script>

<template>
  <pre>{{ data }}</pre>
</template>
