<template>


  <div id="block">
    <navbar></navbar>

    <!-- Ajout message -->
    <form class="newmsg" @submit="newMsg">
        <textarea v-model="message" placeholder="Ajoutez votre message"></textarea>
        <input class="validate button is-success" type="submit" value="Enregistrer">

    </form>
    <router-link to="/conversations" class="back button is-danger">Retour aux conversations</router-link>

    <!-- Recup message -->
    <div class="msg">
      <message v-for="message in messages" :message="message" :key="message._id"></message>
    </div>

  </div>

</template>

<script>

import Message from './Message.vue'
import Navbar from './Navbar.vue'
export default {
  	name: 'conversation-message',
  	components : {Navbar, Message},
	data () {
		return {
      //Ajout message
      message : '',
      //Recuperer les messages
      messages : []
		}
	},
  //Recuperer les messages
  mounted(){
    window.axios.get('channels/' + this.$route.params.id + '/posts').then((response) => {
      this.messages = response.data
    }).catch((error) => {
        alert(error.response.data.error);
    });
  },
  //Ajout message
  methods : {
    newMsg () {
      window.axios.post('channels/' + this.$route.params.id + '/posts', {
          message : this.message
        }).then((response) => {
          window.axios.get('channels/' + this.$route.params.id + '/posts').then((response) => {
            this.messages = response.data
            this.message = ''
          }).catch((error) => {
            alert(error.response.data.error);
          });
        }).catch((error) => {
          alert(error.response.data.error);
        });
    }
  }
}

</script>

<style scoped>

#block{
  width: 100%;
}

.newmsg{
  margin: 10px;
}

.msg{
  margin: 10px;
  font-size: 30px;
  box-sizing: border-box; 
}

.validate{
  height: 48px;
  color: #353634;
}

.back{
  margin: 10px;
  color: #353634;
}

</style>
