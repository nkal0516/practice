<template>
<div>
<div id="screen" :class="state" @click="onClickScreen">{{message}}</div>
<div>avg : {{result.reduce((a,c) => a + c,0)/result.length ||0}}ms <br> response time : {{result[result.length-1]}}ms</div>
<button @click="onReset">reset</button>
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
            result1: ``,
            state:'waiting',
            message:'Click to start',
        };
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