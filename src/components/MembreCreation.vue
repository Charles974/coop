<template>

  <form v-on:submit="creerMembre">

    <!--Champ nom -->
    <div class="field">
      <label class="label">NOM</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="text" v-model="fullname" placeholder="Nom">
        <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
      </div>
    </div>

    <!--Champ email -->
    <div class="field">
      <label class="label">EMAIL</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="email" v-model="email" placeholder="Email">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope"></i>
        </span>
      </div>
    </div>

    <!--Champ mot de passe -->
    <div class="field">
      <label class="label">MOT DE PASSE</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input" type="password" v-model="password" placeholder="Password">
        <span class="icon is-small is-left">
          <i class="fas fa-lock"></i>
        </span>
      </div>
    </div>

    <input class="lien button is-success" type="submit" value="ENREGISTRER">
    <router-link to="/connexion" class="lien button is-danger">ANNULER</router-link>
  </form>

</template>

<script>
export default {
  name: 'membre-creation',
  data () {
    return {
      fullname : '',
      email : '',
      password : ''
    }
  },
  methods : {
    creerMembre() {
      window.axios.post('members', {
        fullname : this.fullname,
        email : this.email,
        password : this.password
      }).then((response) => {
        this.$router.push({path : '/connexion'})
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
  background-color: #F5BC0C;
  padding: 2em;
}

input{
  width: 100%;
  box-sizing: border-box;
  text-align: center;
}

.lien{
  margin-top: 1em;
  text-align: center;
  width: 100%;
  color: #353634;
  font-weight: bolder;
}

.field{
  width: 100%;
}

</style>
