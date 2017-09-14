<template>
  <section class="persons">
    <h1>Liste des membres du gov.fr</h1>
    <ul v-if="members.length">
    <li v-for="member in members" :key="member.id">
        <a :href="member.uri">{{member.first_name}} {{member.last_name}}</a> 
    </li>  
    </ul>

    <h2>avec child component:</h2>
    <ul v-if="members.length">
        <li class="person0" is="person"
            v-for="member in members"
            :key="member.id"
            :member="member"  
        ></li>
    </ul>

    <h2>avec child component2:</h2>
    <ul v-if="members.length">
        <person
            v-for="member in members"
            :key="member.id"
            :member="member"  
        />
    </ul>

    <h2>avec request:</h2>
    <ul v-if="extmembers.length">
        <user
            v-for="member in extmembers"
            :key="member.id"
            :member="member"  
        />
    </ul>
    <div v-if="errors.length">
        <p v-for="error in errors">{{error}}</p>
    </div>

  </section>
</template>

<script>
import axios from 'axios'
import Person from '@/components/Person'
import User from '@/components/User'

const url = 'https://www.data.gouv.fr/api/1/organizations/?page_size=1';

export default {
  data(){
    return {
        errors: [],
        extmembers: [],
        members: [
{
"avatar": "https://www.data.gouv.fr/s/avatars/67/f931cab2ec47ac80b4abd51f6c496b-original.jpg",
"avatar_thumbnail": "https://www.data.gouv.fr/s/avatars/67/f931cab2ec47ac80b4abd51f6c496b-100.jpg",
"class": "User",
"first_name": "Brigitte",
"id": "534fff3da3a7292c64a77473",
"last_name": "HAZART",
"page": "https://www.data.gouv.fr/fr/users/brigitte-hazart/",
"slug": "brigitte-hazart",
"uri": "https://www.data.gouv.fr/api/1/users/brigitte-hazart/"
},{
    "avatar": "https://www.data.gouv.fr/s/avatars/42/660c4251ce4fc8a6bb8563f0d84427-original.jpg",
"avatar_thumbnail": "https://www.data.gouv.fr/s/avatars/42/660c4251ce4fc8a6bb8563f0d84427-100.jpg",
"class": "User",
"first_name": "Christian",
"id": "534fff3ea3a7292c64a774e0",
"last_name": "Maculgia",
"page": "https://www.data.gouv.fr/fr/users/christian-maculgia/",
"slug": "christian-maculgia",
"uri": "https://www.data.gouv.fr/api/1/users/christian-maculgia/"
},{
    "avatar": "https://www.data.gouv.fr/s/avatars/2014-12-19/65ad506c2da04ceab8f57e848141d0ef/GUIRAUD001-original.jpg",
"avatar_thumbnail": "https://www.data.gouv.fr/s/avatars/2014-12-19/65ad506c2da04ceab8f57e848141d0ef/GUIRAUD001-100.jpg",
"class": "User",
"first_name": "Philippe",
"id": "534fff46a3a7292c64a77a6b",
"last_name": "Guiraud",
"page": "https://www.data.gouv.fr/fr/users/philippe-guiraud/",
"slug": "philippe-guiraud",
"uri": "https://www.data.gouv.fr/api/1/users/philippe-guiraud/"
}

        ]
    }
  },
  components: {
      Person,
      User
  },

  created(){
      axios.get(url).then(r =>{
        console.log(r.data.data);
        this.extmembers=(r && r.data.data[0].members);
      })
     /* .catch(e => {
        this.errors.push(e)
     })*/
  }
}
</script>

<style scoped>
.header {
  font-size: 4rem;
}
</style>
