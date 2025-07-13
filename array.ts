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


// Q1. 정수 배열 arr이 주어졌을 때, 첫 번째 요소를 반환하는 함수를 작성하세요. lv.0

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


// Q2. 정수 배열 arr이 주어졌을 때, 모든 요소를 한줄 씩 콘솔에 출력하세요. lv.0
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


// Q3. 배열 arr의 길이를 반환하세요. lv.0
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


// Q4. 정수 배열 arr의 모든 요소의 합을 반환하세요. lv.0
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


// Q5. 정수 배열 arr에서 짝수만 남긴 새로운 배열을 반환하세요. lv.1
/**
 * 입력
 * [1, 2, 3]
 * [10, -5, 4]
 * 출력
 * 6
 * 9
 */

function arrQ5(arr: number[]): number[] {
  // const ans5 = arr.filter((v) => {
  //   return v % 2 === 0
  // })
  // return ans5;

  return arr.filter((v) => v % 2 === 0)
}

console.log("arrQ5:", arrQ5([1, 2, 3, 4]));
console.log("arrQ5:", arrQ5([5, 7, 9, 10]));


// Q6. 정수 배열 arr을 내림차순으로 정렬하여 반환하세요. lv.1
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


// Q7. 정수 배열 arr에서 가장 큰 값을 반환하세요. lv.1
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


// Q8. 정수 배열 arr과 값 target이 주어졌을 때, target이 존재하는 인덱스를 반환하세요. 존재하지 않으면 -1을 반환하세요. lv.1
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


// Q9. 정수 배열 arr에 정수 n을 추가한 새로운 배열을 반환하세요. lv.1
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


// Q10. 정수 배열에서 첫 번째 요소를 제거한 새로운 배열을 반환하세요. lv.0
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