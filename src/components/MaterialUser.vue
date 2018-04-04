<template>
    <md-list-item>
        <template v-if="member.user.avatar_thumbnail">
            <md-avatar>
                <img :src="member.user.avatar_thumbnail" alt="People">
            </md-avatar>
        </template>
        <template v-else>
            <md-avatar class="md-avatar-icon">
                <md-icon>people</md-icon>
            </md-avatar>
        </template>

        <div class="md-list-text-container">
          <span>{{member.user.first_name}} {{member.user.last_name}}</span>
          <p>{{member.role}}</p>
        </div>

        <md-button @click="openpage" class="md-icon-button md-list-action">
          <md-icon>info</md-icon>
        </md-button>
    </md-list-item>
</template>
<script>
export default {
  props: ['member'],

  methods: {
      openpage: function(){
          if (this.member && this.member.user){
              window.location.href= this.member.user.page;
          }
      }
  }
}
</script>
