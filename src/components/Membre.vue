<template>
  <div class="membre">
  	<div>
        <p><b>Nom :</b> {{ membre.fullname }} </p>
        <p><b>Mail :</b> {{ membre.email }} </p>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'Membre',
  props : ['membre'],
  data () {
  	return {
  	}
  }
}
</script>

<style scoped>

.membre{
  width: 20%;
  box-sizing: border-box;
  background-color: #3465DE;
  margin-top: 1em;
  margin-left: 3.571428571%;
  display: flex;
  flex-wrap: wrap;
  color: #DBDEDC;
  padding: 5px;
}


</style>