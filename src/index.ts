// string
let todayDate: string = "2025-07-15";
console.log(`📅 오늘은 ${todayDate}이에요.`);

// number
let drawingTime: number = 1;
console.log(`🖌️ 디지털 드로잉 연습 시간: ${drawingTime}시간`);

// boolean
let isBootcampDay: boolean = true;
console.log(
  `💻 오늘 부트캠프 수업 있나요? ${
    isBootcampDay ? "네, 온라인으로 듣는 중" : "오늘은 쉬는 날이에요"
  }`
);

// null
let dinnerMenu: string | null = null;
console.log(`🍽️ 저녁 메뉴: ${dinnerMenu ?? "아직 정하지 않았어요."}`);

// any
let note: any = "어제 프로크리에이트로 강아지 그리는 연습함";
console.log(`📝 오늘의 메모: ${note}`);

note = ["타입스크립트 복습", "고양이 그리기", "코딩 연습"];
console.log("📌 오늘 할 일 리스트:", note);
