
const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const totalScore = exams.reduce((sum, exam) => sum + exam.score, 0);
console.log(totalScore);

const totalApprovedScore = exams.reduce((sum, exam) => {
    if (exam.score >= 5) {
        return sum + exam.score;
    }
    return sum;
}, 0);
console.log(totalApprovedScore);


const averageScore = exams.reduce((sum, exam) => sum + exam.score, 0) / exams.length;
console.log(averageScore);
