<template>

  <form v-on:submit="seConnecter">

    <!--Champ email -->
    <div class="field">
      <label class="label">Email</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" v-model="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <!--Champ mot de passe -->
    <div class="field">
      <label class="label">Mot de passe</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="password" v-model="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>

    <input class="lien button is-success" type="submit" value="Se connecter">
    <router-link to="/membre-creation" class="lien button is-info">Se créer un compte</router-link>

  </form>

</template>

<script>
export default {
  name: 'Connexion',
  data () {
    return {
      email : '',
      password : ''
    }
  },
	methods : {
	 	seConnecter () {
	 		window.axios.post('members/signin',{
	 			email : this.email,
        password : this.password,
 		  }).then((response) => {
        this.$store.commit('setMember', response.data);
        this.$store.commit('setToken', response.data.token);

        window.axios.defaults.params.token = response.data.token;

        this.$router.push({path : '/conversations'})

    	}).catch((error) => {
      	alert(error.response.data.error.join("\n"));
      });
	 	}
	}
}
</script>

<style scoped>

form{
  display: flex;
  flex-wrap: wrap;
  width: 30%;
  margin: auto;
  box-sizing: border-box;
  text-align: center;
  background-color: #F59018;
  padding: 2em;
}

input{
  width: 100%;
  box-sizing: border-box;
  text-align: center;
  color: #353634;
}

input:nth-child(3){
  margin-top: 1em;
}

.lien{
  margin-top: 1em;
  text-align: center;
  width: 100%;
  color: #353634;
}

.field{
  width: 100%;
}

</style>
