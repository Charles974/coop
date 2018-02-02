<template>

	<div class="msg">
    <span>{{ message.message }}</span>
  </div>
  
</template>

<script>

export default {
  name: 'Message',
  props : ['message'],
  data () {
  	return {
      membre : ''
  	}
  }
}
</script>

<style scoped>

  .msg{
    margin: 40px 10px;
    box-sizing: border-box;
    border-left: solid black 2px;
    box-sizing: border-box;
    padding: 10px;
  }

</style>