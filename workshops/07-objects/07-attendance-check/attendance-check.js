let classRoom = [
    {
        "Marnie" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : true},
                {"Thursday" : true},
                {"Friday" : true}
            ]
    }, //0
    {
        "Lena" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : true},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    }, //1 
    {
        "Shoshanna" : [
                {"Monday" : true},
                {"Tuesday" : true},
                {"Wednesday" : false},
                {"Thursday" : true},
                {"Friday" : false}
            ]
    }, //2 
    {
        "Jessa" : [
                {"Monday" : false},
                {"Tuesday" : false},
                {"Wednesday" : false},
                {"Thursday" : false},
                {"Friday" : true}
            ]
    } //3 
];

// YOUR CODE BELOW
// const attendanceCheck = (day) => {
//     let present = []; 
//     for (let i = 0; i < classRoom.length; i++){
//         let student = classRoom[i]
//         let studentName = Object.keys(student)[0];
//         let record = student[studentName]
//         for (let j = 0; j < record.length; j++){
//             let attendance = record[j]
//             let dayName = Object.keys(attendance)[0]
//             if (dayName === day && record[dayName]){
//                 present.push(student);
//             }
//         }
//     }
//     return present 
// }

function attendanceCheck(day) {
    let presentStudents = [];
  
    // loop through the students in classRoom
    for (let i = 0; i < classRoom.length; i++) {
  
      // store each student object in a variable
      let studentObj = classRoom[i];
  
      // each object has one key, which is the name of the student
      let studentName = Object.keys(studentObj)[0];
  
      // the only value in studentObj is the array of attendance objects
      let attendanceObjs = studentObj[studentName];
  
      // loop through the array of attendance objects
      for (let j = 0; j < attendanceObjs.length; j++) {
  
        // store each attendance object in a variable
        let attendanceObj = attendanceObjs[j];
  
        // each attendance has one key, which is the name of a day of the week
        let dayName = Object.keys(attendanceObj)[0];
  
        // if the dayName is the same as the day parameter...
        // ...and the value in the attendanceObj is true...
        if (dayName === day && attendanceObj[dayName]){
  
          // ...the student was present on that day!
          presentStudents.push(studentName);
        }
      }
    }
  
    return presentStudents;
  }