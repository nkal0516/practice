<template>
<div>
<mine-form />
<div>{{timer}}</div>
<table-component />
<div>{{result}}</div>
</div> 

</template>
 
<script>
import { mapState } from 'vuex';
import store, { INCREMENT_TIMER } from './store';
import TableComponent from './TableComponent';
import MineForm from './MineForm';

let interval;

export default {
    store,
  components: {
      TableComponent,
      MineForm,
  },
    
   data() {
       
   },
    computed: {
        ...mapState(['timer','result','halted']),

        
            
    },
methods:{
},
watch: {
    halted(value, oldValue){
        if (value === false){ //false = game start
            interval = setInterval(() =>{
                this.$store.commit(INCREMENT_TIMER);
        },1000);
        } else {// game set
            clearInterval(interval);
        }
    },
},
};



</script>

<style>
table{
    border-collapse: collapse;
}
td{
    border: 1px solid black;
    width: 50px;
    height: 50px;
    text-align: center;
}
</style>







