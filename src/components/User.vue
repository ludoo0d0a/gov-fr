<template>
  <p class="person1">
    <a :href="member.user.uri" >{{member.user.first_name}} {{member.user.last_name}}</a> 
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
