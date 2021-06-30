<template>
    <div>
        <h1>{{result}}</h1>
        <form @submit.prevent="onSubmitForm">
          <input ref="answer" maxlength="4" v-model="value" />
        <button type="submit">입력(Enter)</button>
        </form>
    <div>try:{{tries.length}}</div>
    <ul>
        <li v-for="(t,i) in tries" :key='i'>
            <div>{{t.try}}</div> 
            <div>{{t.result}}</div>
            </li>
    </ul>
    </div>

</template>

<script>
const getNumbers =() => {
    const candidates = [1,2,3,4,5,6,7,8,9];
    const array =[];
    for(let i =0; i<4; i += 1){
        const chosen = candidates.splice(Math.floor(Math.random() * (9-i)),1)[0];
        array.push(chosen);
}
    return array;
};



export default {
    data(){
        return{
            answer:getNumbers(),
            tries:[],
            value:'',
            result:'',
        }
    },
    methods: {
        onSubmitForm(){
            console.log(this.answer.join(''));
            if(this.value === this.answer.join('')){
                this.tries.push({   
                try: this.value,
                result: `homerun`,
            });
            this.result = 'HomeRun!';
            alert('game clear.');
            this.value = '';
            this.tries =[];
            this.answer = getNumbers();
            this.$refs.answer.focus();
            
            }
            else{// wrong answers
            if(this.tries.length >= 9){//10th try
            this.result =`YOU were WRONG 10 times! the answer was ${this.answer.join('')}!`
            alert('game over.');
            this.value = '';
            this.tries =[];
            this.answer = getNumbers();
            this.$refs.answer.focus();
            }else{
                let strike = 0;
                let ball = 0;
                const answerArray = this.value.split('').map(v => parseInt(v));
                for(let i =0; i<4; i+=1){
                if (answerArray[i] === this.answer[i]){
                    strike++;
                }else if(this.answer.includes(answerArray[i]) ){
                    ball++;
                }
                }
                this.tries.push({
                    try: this.value,
                    result: `${strike}strike, ${ball} ball(s).`,
              })
            }};
        
        this.value ='';
        this.$refs.answer.focus();

        }
    }
};
</script>

<style>

</style>