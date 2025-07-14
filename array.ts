// 배열

/**
 * 같은 타입의 값을 순차적으로 저장하는 자료구조
 * js에서는 다양한 타입을 함께 넣을 수 있지만, ts에서는 타입을 고정할 수 있음
 */


const arr1: number[] = [1, 2, 3, 4]
const arr2: (number | string)[] = [1, "a", 2, "b"]

console.log("arr1:", arr1)
console.log("arr2:", arr2)

console.log("==========")

// 배열의 특징
/**
 * 1. 인덱스 접근
 * 2. 삽입/ 삭제
 * 3. 메모리
 * 4. 순회 방식
 */

// 주요 메소드
const arr3: number[] = [1, 2, 3];
// 삽입, 삭제
arr3.push(4);
console.log("arr3.push(): ", arr3)
arr3.pop();
console.log("arr3.pop(): ", arr3)
arr3.shift();
console.log("arr3.shift(): ", arr3)
arr3.unshift(0);
console.log("arr3.unshift(): ", arr3)

// 순회
const arr4: number[] = [1, 2, 3, 4];
arr4.forEach((v) => {
  console.log("arr4.v: ", v)
})

// 필터링
const arr5: number[] = [1, 2, 3, 4];
const even = arr5.filter((v) => {
  return v % 2 === 0
})
console.log("arr5.filter: ", even)

// 정렬
const arr6: number[] = [1, 3, 2, 4];
arr6.sort((a, b) => a - b); // 오른차순
console.log("arr6.sort: ", arr6)

arr6.sort((a, b) => b - a); // 내림차순
console.log("arr6.sort: ", arr6)


console.log("==========")



// ✅ 1번. 첫 번째 요소 반환
// 난이도: Lv.0

// 문제 설명
// 정수 배열 arr이 주어졌을 때, 첫 번째 요소를 반환하세요.

/**
 * 입력
 * [5, 10, 15]
 * [100]
 * 
 * 출력
 * 5
 * 100
 */

function arrQ1(arr:number[]): number {
  // 방법1
  return arr[0]

  // 방법2
  // let num = arr.shift();
  // return num!;
}

console.log("arrQ1:", arrQ1([5, 10, 15]))
console.log("arrQ1:", arrQ1([100]))



// ✅ 2번. 모든 요소 콘솔 출력
// 난이도: Lv.0

// 문제 설명
// 정수 배열 arr이 주어졌을 때, 모든 요소를 한 줄씩 콘솔에 출력하세요.

/**
 * 입력
 * [1, 2, 3]
 * 출력
 * 1
 * 2
 * 3
 */

function arrQ2(arr: number[]): void {
  arr.forEach((v) => {
    console.log("arrQ2:", v)
  })
}

arrQ2([1, 2, 3])


// ✅ 3번. 배열 길이 반환
// 난이도: Lv.0

// 문제 설명
// 배열 arr의 길이를 반환하세요.

/**
 * 입력
 * ["a", "b", "c"]
 * []
 * 출력
 * 3
 * 0
 */

function arrQ3(arr: number[] | string[]): number {
  return arr.length;
}

console.log("arrQ3:", arrQ3(["a", "b", "c"]))
console.log("arrQ3:", arrQ3([1, 2, 3, 4, 5]))
console.log("arrQ3:", arrQ3([]))



// ✅ 4번. 배열의 합 구하기
// 난이도: Lv.0

// 문제 설명
// 정수 배열 arr의 모든 요소의 합을 반환하세요.

/**
 * 입력
 * [1, 2, 3]
 * [10, -5, 4]
 * 출력
 * 6
 * 9
 */

function arrQ4(arr: number[]): number {
  // 방법1
  return arr.reduce((a, b) => a + b, 0);
  // return arr.reduce((acc, cur) => acc + cur, 0)

  // 방법2
  // let num: number = 0;
  // for(let i = 0; i < arr.length; i++) {
  //   num += arr[i]
  // }
  // return num;
}

console.log("arrQ4:", arrQ4([1, 2, 3]));
console.log("arrQ4:", arrQ4([10, -5, 4]));



// ✅ 5번. 짝수만 필터링
// 난이도: Lv.1

// 문제 설명
// 정수 배열 arr에서 짝수만 남긴 새로운 배열을 반환하세요.

/**
 * 입력
 * [1, 2, 3]
 * [10, -5, 4]
 * 출력
 * 6
 * 9
 */

function arrQ5(arr: number[]): number[] {
  // const ansQ5 = arr.filter((v) => {
  //   return v % 2 === 0
  // })
  // return ansQ5;

  return arr.filter((v) => v % 2 === 0)
}

console.log("arrQ5:", arrQ5([1, 2, 3, 4]));
console.log("arrQ5:", arrQ5([5, 7, 9, 10]));



// ✅ 6번. 내림차순 정렬
// 난이도: Lv.1

// 문제 설명
// 정수 배열 arr을 내림차순으로 정렬하여 반환하세요.

/**
 * 입력
 * [5, 1, 3]
 * [10, 2, 8]
 * 출력
 * [5, 3, 1]
 * [10, 8, 2]
 */

function arrQ6(arr: number[]): number[] {
  return arr.sort((a, b) => b - a);
}

console.log("arrQ6:", arrQ6([5, 1, 3]));
console.log("arrQ6:", arrQ6([10, 2, 8]));



// ✅ 7번. 최대값 구하기
// 난이도: Lv.1

// 문제 설명
// 정수 배열 arr에서 가장 큰 값을 반환하세요.

/**
 * 입력
 * [1, 9, 3]
 * [-1, -2, -3]
 * 출력
 * 9
 * -1
 */

function arrQ7(arr: number[]): number {
  // 방법1
  // return Math.max(...arr)

  // 방법2
  return arr.sort((a, b) => b - a)[0]
}

console.log("arrQ7:", arrQ7([1, 9, 3]));
console.log("arrQ7:", arrQ7([-1, -2, -3]));



// ✅ 8번. 특정 값의 인덱스 찾기
// 난이도: Lv.1

// 문제 설명
// 정수 배열 arr과 값 target이 주어졌을 때, target이 존재하는 인덱스를 반환하세요.
// 존재하지 않으면 -1을 반환하세요.

/**
 * 입력
 * ([1, 2, 3], 2)
 * ([4, 5, 6], 10)
 * 출력
 * 1
 * -1
 */

function arrQ8(arr: number[], target: number): number {
  // 방법1
  return arr.indexOf(target)
}

console.log("arrQ8:", arrQ8([1, 2, 3], 2));
console.log("arrQ8:", arrQ8([4, 5, 6,], 10));



// ✅ 9번. 요소 추가
// 난이도: Lv.0

// 문제 설명
// 정수 배열 arr에 정수 n을 추가한 새로운 배열을 반환하세요.

/**
 * 입력
 * ([1, 2], 3)
 * ([], 10)
 * 출력
 * [1, 2, 3]
 * [10]
 */

function arrQ9(arr: number[], n: number): number[] {
  return [...arr, n]
}

console.log("arrQ9:", arrQ9([1, 2], 3));
console.log("arrQ9:", arrQ9([], 10));



// ✅ 10번. 첫 요소 제거
// 난이도: Lv.0

// 문제 설명
// 정수 배열에서 첫 번째 요소를 제거한 새로운 배열을 반환하세요.

/**
 * 입력
 * [1, 2, 3]
 * [10]
 * 출력
 * [2, 3]
 * []
 */

function arrQ10(arr: number[]): number[] {
  // 방법1
  return arr.slice(1)
  
  // 방법2
  // arr.shift();
  // return arr
}

console.log("arrQ10:", arrQ10([1, 2, 3]));
console.log("arrQ10:", arrQ10([10]));



// ✅ 11번. 중복 제거
// 난이도: Lv.2

// 문제 설명
// 숫자 배열에서 중복된 요소를 제거한 새 배열을 반환하세요. (순서 유지)

/**
 * 입력
 * [1, 2, 2, 3, 1]
 * [5, 5, 5]
 * 
 * 출력
 * [1, 2, 3]
 * [5]
 */

function arrQ11(arr: number[]): number[] {
  // 방법1
  let answer:number[] = []
  for(let i = 0; i < arr.length; i++) {
    if(!answer.includes(arr[i])) {
      answer.push(arr[i])
    } else {
      continue;
    }
  }
  return answer;

  // 방법2
  // return [...new Set(arr)]
}

console.log("arrQ11:", arrQ11([1, 2, 2, 3, 1]));
console.log("arrQ11:", arrQ11([5, 5, 5]));


// ✅ 12번. 두 배열 이어 붙이기
// 난이도: Lv.1

// 문제 설명
// 두 개의 숫자 배열 a, b를 이어 붙인 새 배열을 반환하세요.

/**
 * 입력
 * [1, 2], [3, 4]
 * [], [5]
 * 
 * 출력
 * [1, 2, 3, 4]
 * [5]
 */


function arrQ12(a: number[], b: number[]): number[] {
  // 방법1
  // return a.concat(b);

  // 방법2
  return [...a, ...b];
}

console.log("arrQ12:", arrQ12([1, 2], [3, 4]));
console.log("arrQ12:", arrQ12([], [5]));



// ✅ 13번. 문자열 배열 정렬하기
// 난이도: Lv.1

// 문제 설명
// 문자열 배열을 알파벳 순으로 정렬하여 반환하세요.

/**
 * 입력
 * ["banana", "apple", "cherry"]
 * 
 * 출력
 * ["apple", "banana", "cherry"]
 */


function arrQ13(arr: string[]): string[] {
  // 방법1
  return arr.sort()

  // 방법2
  // 뺴기 이용해서 풀기
}

console.log("arrQ13:", arrQ13(["banana", "apple", "cherry"]));



// ✅ 14번. 내림차순 정렬 (응용)
// 난이도: Lv.1

// 문제 설명
// 배열을 내림차순으로 정렬한 뒤, 앞에서 3개의 요소만 반환하세요.
// (3개 미만이면 전체 반환)

/**
 * 입력
 * [7, 2, 9, 1]
 * [5]
 * 
 * 출력
 * [9, 7, 2]
 * [5]
 */


function arrQ14(arr: number[]): number[] {
  // 방법1
  return arr.sort((a, b) => b - a).slice(0, 3)
}

console.log("arrQ14:", arrQ14([7, 2, 9, 1]));
console.log("arrQ14:", arrQ14([5]));



// ✅ 15번. 일부 잘라내기 (slice)
// 난이도: Lv.1

// 문제 설명
// 배열 arr의 인덱스 start부터 end 전까지 자른 배열을 반환하세요.

/**
 * 입력
 * [1, 2, 3, 4, 5], 1, 4
 * [7, 8, 9], 0, 2
 * 
 * 출력
 * [2, 3, 4]
 * [7, 8]
 */


function arrQ15(arr: number[], start: number, end: number): number[] {
  // 방법1
  return arr.slice(start, end);
}

console.log("arrQ15:", arrQ15([1, 2, 3, 4, 5], 1, 4));
console.log("arrQ15:", arrQ15([7, 8, 9], 0, 2));



// ✅ 16번. 제곱값 배열 만들기
// 난이도: Lv.1

// 문제 설명
// 정수 배열의 각 요소를 제곱한 새 배열을 반환하세요.

/**
 * 입력
 * [2, 3, 4]
 * [7, 8, 9]
 * 
 * 출력
 * [4, 9, 16]
 * [49, 64, 81]
 */


function arrQ16(arr: number[]): number[] {
  // 방법1
  return arr.map((v) => v ** 2)
}

console.log("arrQ16:", arrQ16([2, 3, 4]));
console.log("arrQ16:", arrQ16([7, 8, 9]));



// ✅ 17번. 포함 여부 확인
// 난이도: Lv.1

// 문제 설명
// 배열에 값 target이 포함되어 있으면 true, 아니면 false를 반환하세요.

/**
 * 입력
 * [1, 2, 3], 2
 * [4, 5], 10
 * 
 * 출력
 * true
 * false
 */


function arrQ17(arr: number[], target: number): boolean {
  // 방법1
  return arr.includes(target) ? true : false;
  
  // includes는 반환값이 true 또는 false이기때문에 굳이 삼항연산자 넣을 필요 없음
}

console.log("arrQ17:", arrQ17([1, 2, 3], 2));
console.log("arrQ17:", arrQ17([4, 5], 10));



// ✅ 18번. 평균값 구하기
// 난이도: Lv.2

// 문제 설명
// 정수 배열의 평균을 소수 둘째 자리까지 반환하세요.

/**
 * 입력
 * [2, 4, 6]
 * [1, 1, 2, 2]	
 * 
 * 출력
 * 4.00
 * 1.50
 */


function arrQ18(arr: number[]): number {
  // 방법1
  let avg = arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  return Number(avg.toFixed(2))
}

console.log("arrQ18:", arrQ18([2, 4, 6]));
console.log("arrQ18:", arrQ18([1, 1, 2, 2]));



// ✅ 19번. 홀수 제거
// 난이도: Lv.1

// 문제 설명
// 정수 배열에서 홀수 값을 제거한 새 배열을 반환하세요.

/**
 * 입력
 * [1, 2, 3, 4, 5]
 * 
 * 출력
 * [2, 4]
 */


function arrQ19(arr: number[]): number[] {
  // 방법1
  return arr.filter((v) => v % 2 === 0)

  // 방법2
  // const ansQ19 = arr.map((v) => v % 2 === 0)
  // return ansQ19
  // !map은 무조건 동일한 길이의 새로운 배열을 반환한다. 따라서 위 코드로 구현할 시
  // [undefined, 2, undefined, 4, undefined] 가 출력된다.
}

console.log("arrQ19:", arrQ19([1, 2, 3, 4, 5]));



// ✅ 20번. 문자열 변환 배열 만들기
// 난이도: Lv.1

// 문제 설명
// 정수 배열의 모든 요소를 문자열로 변환한 새 배열을 반환하세요.

/**
 * 입력
 * [1, 2, 3, 4, 5]
 * 
 * 출력
 * ["1", "2", "3", "4", "5"]
 */


function arrQ20(arr: number[]): string[] {
  // 방법1
  const ansQ20 = arr.map((v) => {
    return v.toString();
  })
  return ansQ20;
}

console.log("arrQ20:", arrQ20([1, 2, 3, 4, 5]));