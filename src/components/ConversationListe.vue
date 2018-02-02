<template>

  <div class="convliste">

    <navbar></navbar>

  	<div class="allChannels">
  		<h1>Liste des Channels :</h1>
  		<conversation-element v-for="channel in channels" :channel="channel"/>
    </div>

    <router-link to="/conversation-creation" class="creation button is-primary">
      <span class="icon is-small is-left">
        <i class="fas fa-comments"></i>
      </span>
      Créer une conversation
    </router-link>

  </div>

</template>

<script>
import ConversationElement from './ConversationElement.vue'
import Navbar from './Navbar.vue'
export default {
	name: 'conversation-liste',
	components : {ConversationElement, Navbar},
	data () {
		return {
      channels : []
		}
	},
  mounted() {
    window.axios.get('/channels',{
      label : this.label,
      topic : this.topic,
    }).then((response) => {
      this.channels = response.data;
    }).catch((error) => {
      console.log(error);
    });
  },
  methods : {
    signout() {
      window.bus.$emit('logout')
    }
	}
}
</script>

<style scoped>

h1{
  color:#18B0F5;
  width: 100%;
  font-size: 30px;
  margin-left: 10px;
}

.convliste{
  width: 100%;
  box-sizing: border-box;
}

.allChannels{
  margin: auto;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;

}

.creation{
  width: 12%;
  margin: 20px;
  color: #353634;
}

span{
  padding-right: 10px;
}

</style>
