<template>
  <h2>Jobs</h2>
  <div v-for="job in jobs" :key="job.id">
    <router-link :to="{name:'JobDetail',params:{id:job.id}}">
      <h3>{{job.title}}</h3>
    </router-link>
  </div>
  
</template>

<script>
export default {
  data(){
    return{
      jobs:[]
    }
  },
  mounted(){
    fetch('http://localhost:3000/jobs')
    .then(((response)=>{ //promise
      return response.json()
      
    }))
    .then((datas)=>{
      this.jobs=datas
    })
    .catch((err)=>{
      console.log(err.message());
    })
  }
}
</script>

<style>

</style>