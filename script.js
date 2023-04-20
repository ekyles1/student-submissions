"use strict";
// 1.
const submissions = [
  { name: "Jane", score: 95, date: "2020-01-24", passed: true },
  { name: "Joe", score: 77, date: "2018-05-14", passed: true },
  { name: "Jack", score: 59, date: "2019-07-05", passed: false },
  { name: "Jill", score: 88, date: "2020-04-22", passed: true },
];

const oldSubmissions = [
  { name: "Andrea", score: 20, date: "2018-01-24", passed: false },
];

// 2.
const addSubmission = (array, newName, newScore, newDate) => {
  // push to "placeholder array (parameter)"
  // dynamic destination for whatever we push
  let newPassed = null;
  if (newScore >= 60) {
    newPassed = true;
  } else {
    newPassed = false;
  }
  const newSubmission = {
    name: newName,
    score: newScore,
    date: newDate,
    passed: newPassed,
  };
  array.push(newSubmission);
};

addSubmission(oldSubmissions, "James", 60, "2018-01-24");
console.log(oldSubmissions);
addSubmission(submissions, "James", 90, "2018-01-24");
console.log(submissions);

const addSubmissionV2 = (array, name, score, date) => {
  const newSubmission = {
    // name: name,
    // shorthand for object key/value pairs: we can only do this bc the key (left of :) is spelled the same as the variable (right of the :)
    name,
    // score: score,
    score,
    // date: date,
    date,
    passed: score >= 60,
  };
  array.push(newSubmission);
};
 //3.
const deleteSubmissionByIndex = (array, index) => {
  array.splice(index, 1);
};

deleteSubmissionByIndex(oldSubmissions, 0);
console.log(oldSubmissions);
deleteSubmissionByIndex(submissions, 2);
console.log(submissions);

//4.
const deleteSubmissionByName=(array,name)=>{
   let foundName=array.findIndex(submissions=>submissions.name===name);
   array.splice(foundName,1);

}
//5.
const editSubmission=(array,index,score)=>{
    array[index].score=score;
    if (score >= 60) {
        array[index].passed = true;
      } else {
        array[index].passed= false;
      }
    }
    editSubmission(submissions, 1, 83);
    console.log(submissions);
    //6.
    const findSubmissionByName= (array,name)=>{
       return array.find(submissions=>submissions.name===name);
        

    }
    console.log(findSubmissionByName(submissions, 'Jane'));

    // change score of a particular index 
    // be sure to do a if for the passed property
    //when you want to access an item, you use bracket notation[]
    //the set up is arrayName[index of item] ex. submission[4]
}
editSubmission(submissions,0,80);


//7.
// const findLowestScore =(array)=> {
//     const lowestscoreHolder = array [0]{

//     }
//     //assign lowestscore to first element
//     //loop through all the things
// //array [0] is an object
// array.forEach((submission)=>{
//     //3a. check if there is a lower score
//     //3b. if there is, hand over the
//     if(submission)< lowestscoreHolder 
// }
// }
// declare a function named findAverageScore
// Parameter(s): array
// Functionality: return the average quiz score.  Use a for...of loop.

//8.
const findAverageScore=(array)=>{
    let totalScore=0 
    for(let student of array){
        totalScore+=student.score;

    }
    let average = totalScore/array.length;
    return average;
}
console.log(findAverageScore(submissions));
  //9.
  function filterPassing(array) {
    let passingArray = array.filter(submission => submission.passed);
    return passingArray;  
  }
  console.log(filterPassing(submissions));

