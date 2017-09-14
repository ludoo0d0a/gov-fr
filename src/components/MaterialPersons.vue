<template>
    <section>
        <md-list class="md-double-line" >
            <md-subheader class="md-inset">Liste des membres du gov.fr</md-subheader>
            <material-user
                v-for="member in extmembers"
                :key="member.id"
                :member="member"  
            />
        </md-list>

        <div v-if="errors.length">
            <p v-for="error in errors" :key="error.id">{{error}}</p>
        </div>

  </section>
</template>

<script>
import axios from 'axios'
import MaterialUser from '@/components/MaterialUser'

const url = 'https://www.data.gouv.fr/api/1/organizations/?page_size=1';

export default {
  data(){
    return {
        errors: [],
        extmembers: []        
    }
  },
  components: {
    MaterialUser
  },

  created(){
      axios.get(url).then(r =>{
        console.log(r.data.data);
        this.extmembers=(r && r.data.data[0].members);
      }).catch(e => {
        this.errors.push(e)
     })
  }
}
</script>

