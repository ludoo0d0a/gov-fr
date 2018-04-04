<template>
    <section>
        <md-list class="md-double-line" >
            <div v-for="service in services" :key="service.id">
                <md-subheader class="md-inset">{{service.name}}</md-subheader>
                <material-user
                    v-for="member in service.members"
                    :key="member.id"
                    :member="member"  
                />
            </div>  
        </md-list>

        <div v-if="errors.length">
            <p v-for="(error,i) in errors" :key="i">{{error}}</p>
        </div>

  </section>
</template>

<script>
import axios from 'axios'
import MaterialUser from '@/components/MaterialUser'

const url = 'https://www.data.gouv.fr/api/1/organizations/?page_size=10';

export default {
  data(){
    return {
        errors: [],
        services: []        
    }
  },
  components: {
    MaterialUser
  },

  created(){
      axios.get(url).then(r =>{
        // console.log(r.data.data);
        this.services=(r && r.data.data);
      }).catch(e => {
        this.errors.push(e.message)
     })
  }
}
</script>

