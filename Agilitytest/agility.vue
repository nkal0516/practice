<template>
<div>
<div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
<template v-if ="result.length">
<div> response time : {{result[result.length-1]}}ms <br> avg : {{average}}ms</div>

<button @click="onReset">reset</button>
</template>
   </div>
</template>

<script>
let startTime = 0;
let endTime = 0;
let timeout = null;
export default{
    data(){
        return{
            result: [],
            state:'waiting',
            message:'Click to start',
        };
    },
    computed:{
        average(){
            return this.result.reduce((a,c)=>a+c,0) / this.result.length || 0;
        }
    },
    methods:{
        onReset(){
            this.result=[];
            this.result1='';
        },
        onClickScreen(){
            if(this.state === 'waiting'){ 
                this.state='ready';
                this.message='Click after screen is green'; 
               timeout = setTimeout(() => {
                    this.state ='now';
                    this.message='CLICK NOW!';
                    startTime = new Date();
                },Math.floor(Math.random()*1000)+2000);//2~3sec
            }else if(this.state ==='ready'){
                clearTimeout(timeout);
                this.state ='waiting';
                this.message=`Too FAST! click AFTER GREEN! \n \n(click again)`;
            }else if(this.state === 'now'){
                endTime = new Date();
                this.state = 'waiting';
                this.message = 'Click to start';
                this.result.push(endTime - startTime);
                this.result1.push(`${endTime - startTime}`);
            }
        }
    },

};



</script>

<style scoped>
 #screen {
     width: 300px;
     height: 200px;
     text-align: center;
     user-select: none;
 }
 #screen.waiting{
     background-color: aqua;
     color: black;
     white-space: pre-line
 }
 #screen.ready{
     background-color:red;
     color: white;
 }
 #screen.now{
     background-color: greenyellow;


 }
</style>