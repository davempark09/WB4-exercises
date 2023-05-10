let students = [
 {name: "Zephaniah", scores: [100, 96, 99, 92]},
 {name: "Pursalane", scores: [92, 89, 96, 100, 94]},
 {name: "Siddalee", scores: [86, 72, 92]},
 {name: "Ian", scores: [98, 84, 89, 100, 100, 76]},
 {name: "Elisha", scores: [89, 100]},
 {name: "Ezra", scores: [100, 99, 100, 87]}
];

function getAverage (person) {
    for(let i = 0; i <person.length; i++) {
        let totalScore = 0;
        for (let y = 0; y < person[i].scores.length; y++) {
            totalScore += person[i].scores[y]
            console.log(totalScore)
        }
        let avg = totalScore/person[i].scores.length
        console.log(`${person[i].name} got a average score of: ${avg.toFixed(2)}.`)
    }
}
getAverage(students)
