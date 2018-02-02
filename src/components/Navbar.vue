<template>

  <nav class="level">

      <h1 class="has-text-dark">Co'op: Le site de conversation coopératif</h1>

    <div class="level-right">

        <button @click="membre" class="button is-info">
          <span class="icon is-small is-left">
            <i class="fas fa-id-card"></i>
          </span>
          Liste des Membres
        </button>

        <button @click="signout" class="button is-danger">
          <span class="icon is-small is-left">
            <i class="fas fa-power-off"></i>
          </span>
          DECONNEXION
      </button>
    </div>

  </nav>

</template>

<script>
export default {
  name: 'Navbar',
  data () {
    return {
    }
  },
  methods : {
    signout() {
    	window.bus.$emit('logout')
    },
    membre() {
      window.axios.get('/members').then((response) => {
        this.messages = response.data
        this.$router.push({path : '/membre-liste'})
      }).catch((error) => {
        alert(error.response.data.error);
      });
    }
  }

}
</script>

<style scoped>

h1{
  width: 100%;
  font-size: 30px;
  margin: 10px 0px;
  margin-left: 10px; 
}

.level{
  width: 100%;
  background-color: #F5BC0C;
}

.button{
  margin: 0px 5px;
  color: #353634;
}

span{
  padding-right: 10px;
}

</style>
