function gradingStudents(grades) {
  // Write your code here
  for (i = 0; i < grades.length; i++) {
    // console.log( grades[i]);
    let multipleOf5 = Math.ceil(grades[i] / 5) * 5;
    // console.log(multipleOf5);
    if (grades[i] >= 38 && multipleOf5 - grades[i] < 3) {
      grades[i] = multipleOf5;
    }
  }
  return grades;
}
gradingStudents([73, 67, 38, 33]);
