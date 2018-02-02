<template>

  <div class="all">

    <navbar></navbar>

    <form v-on:submit="newConv">

      <div class="field">
        <label class="label">Titre</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" v-model="label" placeholder="Titre">
          <span class="icon is-small is-left">
            <i class="fas fa-header"></i>
          </span>
        </div>
      </div>

      <div class="field">
        <label class="label">Description</label>
        <div class="control has-icons-left has-icons-right">
          <input class="input" type="text" v-model="topic" placeholder="Description">
          <span class="icon is-small is-left">
            <i class="fas fa-align-justify"></i>
          </span>
        </div>
      </div>

      <input class="button is-success" type="submit" value="Créer une conversation">

    </form>
    <router-link to="/conversations" class="button is-danger">Retour aux conversations</router-link>

  </div>

</template>

<script>
import Navbar from './Navbar.vue'
export default {
  name: 'conversation-creation',
  components : {Navbar},
  data () {
    return {
      label : '',
      topic : ''
    }
  },
	methods : {
	 	newConv () {
	 		window.axios.post('/channels',{
	 			label : this.label,
        topic : this.topic,
	 		}).then((response) => {
        this.$router.push({path : '/conversations'})
      }).catch((error) => {
        console.log(error);
      });
	 	}
	}
}

</script>

<style scoped>

.all{
  width: 100%;
}

.button{
  margin: 10px;
  color: #353634;
}

.field{
  margin: 10px;
}

</style>
