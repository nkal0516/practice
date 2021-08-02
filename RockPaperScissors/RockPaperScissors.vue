<template>
 <div>
      <div id="computer"  :style="computedStyleObject"></div>
 <div>
    <button @click="onClickButton('Rock')">Rock</button>
    <button @click="onClickButton('Paper')">Paper</button>
    <button @click="onClickButton('Scissors')">Scissors</button>
 </div>
    <div>{{result}}</div>
    <div>현재 {{score}}점</div>
 </div>
</template>

<script>
const rpsCoords = {
Rock:'0',
Paper:'-284px',
Scissors:'-136px',
};
const scores = {
    Scissors:1,
    Rock:0,
    Paper: -1,
};
const computerChoice = (imgCoord) => {
    return Object.entries(rpsCoords).find(function(v){
        return v[1] === imgCoord;
    })[0];
};

let interval = null;
export default {
    data(){
        return {
            imgCoord: rpsCoords.Rock,
            result:'',
            score: 0,
        }
 },
    computed: {
computedStyleObject(){
    return{
        background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg)${this.imgCoord} 0` ,
    };
}
 },
    methods:{
        changeHand() {
            interval = setInterval(() => {
         if (this.imgCoord === rpsCoords.Rock){
             this.imgCoord = rpsCoords.Paper;
         }else if(this.imgCoord === rpsCoords.Paper){
             this.imgCoord = rpsCoords.Scissors
         }else if(this.imgCoord === rpsCoords.Scissors){
             this.imgCoord = rpsCoords.Rock
         }
     }, 100);
     },
        onClickButton(choice){
                 clearInterval(interval);
                 const myScore = scores[choice];
                 const cpuScore = scores[computerChoice(this.imgCoord)];
                 const diff = myScore - cpuScore;
                 if (diff ===0){
                     this.result ='Draw';
                 }else if ([-1,2].includes(diff)){
                     this.result = 'Win';
                     this.score += 1;
                 }else {
                     this.result ='Lose';
                     this.score -=1;
                 }
                 setTimeout(()=>{
                     this.changeHand();
                 },1000);
        },
 },
 beforeCreate(){
     console.log('beforeCreate');
 },
 created(){
     console.log('created');
 },
 beforeMount(){
     console.log('beforeMount');
 },
 mounted(){
     console.log('mounted');
  this.changeHand()
 },
  beforeUpdate(){
      console.log('beforeUpdate');
  },
 updated(){
     console.log('updated');
      },
beforeDestroy(){
           console.log('beforeDestroy');
           clearInterval(interval);
       },
destroyed(){
    console.log('destroyed');
},

};
</script>

<style scoped>

#computer{
    width: 147px;
    height: 200px;
    background-position: 0 0;
}
</style>