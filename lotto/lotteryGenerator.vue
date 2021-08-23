<template>
<div>
<div>Winning Numbers</div>
<div id="result screen"></div>
<ball-maker v-for = "balls in winningBalls" :key="balls" v-bind:number="balls"></ball-maker>
<div>Bounus</div>
<ball-maker v-if="bonus" :number="bonus"></ball-maker>
<button v-if="redo" @click="onClickRedo">One more Time!</button>
</div>
</template>
 
<script>
import ballMaker from './ballMaker.vue';

function getWinningNumbers(){
    console.log('getWinningNumbers');
    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winningNumbers = shuffle.slice(0, 6).sort((p,c) => p - c);
    return[...winningNumbers, bonusNumber];
}



export default {
  components:{ ballMaker, }, 
    data(){
        return{
            winningNumbers:getWinningNumbers(),
            winningBalls:[],
            bonus:null,
            redo:false,
        }
    },

    computed:{

    },

    methods:{
        onClickRedo(){
            this.winningNumbers = getWinningNumbers();
            this.winningBalls = [];
            this.bonus = null;
            this.redo =false;
            this.ballProjecter();
        
    },
    ballProjecter(){
           for (let i =0; i < this.winningNumbers.length - 1; i++){
                setTimeout(() => {
                    this.winningBalls.push(this.winningNumbers[i]);
                }, (i + 1) * 1000);
            }
            setTimeout(() =>{
                this.bonus = this.winningNumbers[6];
                this.redo = true;
            },7000);
    }
    },
    mounted(){
      this.ballProjecter();
    },

    beforeDestroy(){


       },
       watch:{},
    
};
</script>

<style scoped>
#computer {
    width: 142px; 
    height: 200px;
    background-position: 0 0;
}

</style>