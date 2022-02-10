function solution(answers) {
  var answer = [];
  const first = [1, 2, 3, 4, 5];
  const second = [2, 1, 2, 3, 2, 4, 2, 5];
  const third = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const check = (student) => {
    let temp = [];
    for (let i = 0; i < Math.ceil(answers.length / student.length); i++) {
      temp.push(...student);
    }

    return answers.filter((l, idx) => {
      return l === temp[idx];
    }).length;
  };
  let score = [check(first), check(second), check(third)];

  score.map((l, idx) => {
    if (l === Math.max(...score)) {
      answer.push(idx + 1);
    }
  });

  return answer;
}
