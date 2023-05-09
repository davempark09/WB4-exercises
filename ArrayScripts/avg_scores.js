let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100]; 
const avgScore = scores => {
    let totalScore = 0;
    for(let i = 0;i<scores.length;i++) {
        totalScore += scores[i];
    }
    return totalScore/scores.length
}
console.log(avgScore(myScores).toFixed(2))
console.log(avgScore(yourScores).toFixed(2))