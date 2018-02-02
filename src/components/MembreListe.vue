<template>

  <div class="all" id="block">
    <navbar></navbar>
    <!-- Recup membre -->
    <div>
    <h1 class="has-text-primary">Liste des membres</h1>
      <div class="listemembre">
        <membre v-for="membre in membres" :membre="membre" :key="membre._id"></membre>
      </div>
    </div>

    <router-link to="/conversations" class="back button is-danger">Retour aux conversations</router-link>

  </div>



</template>

<script>

import Membre from './Membre.vue'
import Navbar from './Navbar.vue'

export default {
  	name: 'membre-liste',
  	components : {Navbar, Membre},
	data () {
		return {
      membres : []
		}
	},
  mounted(){
    window.axios.get('/members').then((response) => {
      this.membres = response.data
    }).catch((error) => {
        alert(error.response.data.error);
    });
  },
}

</script>

<style scoped>

.all{
  width: 100%;
}

.listemembre{
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

h1{
  width: 100%;
  font-size: 30px;
  margin-left: 10px;
}

.back{
  margin: 10px; 
}
/*#block{
  width: 100%;
}

#navbar{
  width: 100%;
  height: 50px;
  color: white;
  text-align: right;
  background-color: black;
}

.allChannels{
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
}

.allChannels h2{
  width: 100%;
}*/

</style>
