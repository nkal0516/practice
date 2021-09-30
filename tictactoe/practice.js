

    const candidate = Array(45).fill().map((v,i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winningNumbers = shuffle.slice(0, 6).sort((p,c) => p - c);
    return[...winningNumbers, bonusNumber];


const winnerChecker = (target) => {
    let rowIndex; 
    let cellIndex;
    rows.forEach((row, ri) =>{
        row.forEach((cell,ci) =>{
            if (cell === target){
                rowIndex = ri;
                cellIndex = ci;
            }
        });
});
let hasWinner = false; 
}

 