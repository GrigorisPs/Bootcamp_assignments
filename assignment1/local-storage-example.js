const existingTrainersJSON = localStorage.getItem('AllTrainers');
let existingTrainers = JSON.parse(existingTrainersJSON);
const trainersArray = existingTrainers || [];
const trainer = {
    name: 'Kostas',
    surname: 'Tsoukalas',
    subject: 'Ante GEIA',
    isOlympiakos: true,
    dateOfBirth: new Date()
}
trainersArray.push(trainer);
const dummy = JSON.stringify(trainersArray);
// kanw douleies edw
localStorage.setItem('AllTrainers', JSON.stringify(trainersArray));