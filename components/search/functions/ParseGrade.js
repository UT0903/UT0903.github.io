const grade_name = ["A+", "A", "A-", "B+", "B", "B-", "C+", "C", "C-", "F"];
const ParseGrade = (grade) => {
    const { partition_line: line, partition_grade: grades } = grade;
    const reducer = (acc, curr, index) => {
      if (curr && index === 8) {
        if (acc.start === index) {
          acc.grade[grade_name[index]] = grades[acc.gradeIndex++] / 100;
        } else {
          acc.grade[`${grade_name[acc.start]}-${grade_name[index]}`] =
            grades[acc.gradeIndex++] / 100;
        }
        acc.grade["F"] = grades[acc.gradeIndex++] / 100;
        acc.start = index + 1;
      } else if (curr) {
        if (acc.start === index) {
          acc.grade[grade_name[index]] = grades[acc.gradeIndex++] / 100;
        } else {
          acc.grade[`${grade_name[acc.start]}-${grade_name[index]}`] =
            grades[acc.gradeIndex++] / 100;
        }
        acc.start = index + 1;
      } else if (index === 8) {
        acc.grade[`${grade_name[acc.start]}-F`] =
          grades[acc.gradeIndex++] / 100;
      }
      return acc;
    };
    return line.reduce(reducer, { grade: {}, start: 0, gradeIndex: 0 }).grade;
  };
export default ParseGrade