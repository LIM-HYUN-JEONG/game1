// 1. move에 가위바위보 텍스트 추가

let scissorsText = document.getElementById('move').innerText += "✌️";
let rockText = document.getElementById('move').innerText += "✊"; 
let paperText = document.getElementById('move').innerText += "🖐"; 

    

// 2. setInterval 설정: interval 변수에 할당 
//setInterval(콜백함수, 시간) 는 "시간(ms)"을 간격으로 "콜백함수"를 반복 호출 하는 함수

//setInterval 함수의 반환값을 변수에 할당해두고,
//clearInterval(변수)를 호출하여 반복을 중단하고,
//다시 setInterval로 재시작해주면 된다.

//setInterval()함수의 반환값을 변수에 할당하여 반복 시작
// let 변수 = setInterval(콜백함수, 시간);

// clearInterval(변수)로 반복 중단
// clearInterval(변수);

// setInterval()함수의 반환값을 변수에 재할당하여 재시작
// 변수 = setInterval(콜백함수, 시간);

let interval1 = setInterval(scissorsText, 500); 
let interval2 = setInterval(rockText, 500); 
let interval3 = setInterval(scissorsText, 500); 

// 3. 마우스 클릭시, interval 중단/재시작 구현 
let toggle = true; 


