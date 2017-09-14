<template>
  <p class="person1">
    <a :href="member.uri">-- {{member.first_name}} {{member.last_name}}</a> 
  </p>
</template>
<script>
export default {
  props: ['member'],
  data() {
      return {};
  }
}
</script>
