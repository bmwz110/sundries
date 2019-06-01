<template>
  <div class="home">
    <parent-1></parent-1>
    <parent-2></parent-2>
  </div>
</template>

<script>
// @ is an alias to /src
import Parent1 from '@/components/Parent1'
import Parent2 from '@/components/Parent2'

export default {
  name: 'home',
  components: {
    Parent1,
    Parent2
  }
}
</script>
