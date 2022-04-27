function solution(id_list, report, k) {
  var answer = [];
  let temp = [];
  let count = Array.from(id_list, (x) => 0);
  for (let i = 0; i < report.length; i++) {
    if (!temp.includes(report[i])) {
      temp.push(report[i]);
      count[id_list.indexOf(report[i].split(" ")[1])]++;
    }
  }

  return answer;
}

console.log(solution(["muzi", "frodo", "apeach", "neo"], ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"], 2));
