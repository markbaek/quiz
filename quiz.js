//퀴즈영역 생성
let quiz = document.getElementById("quiz");

//입력값 관리
const result = [];

//질문+보기
myQuestions.forEach(function (data) {

    //질문과 보기를 slide로 묶음 (1개씩 보이게 하기 위해)
    let slide = document.createElement('div');
    slide.className = 'slide';
    quiz.append(slide);

    //질문
    let questions = document.createElement('div');
    questions.className = 'question';
    questions.innerHTML = data.question;
    slide.append(questions);

    //보기영역
    let optionContainer = document.createElement('form');
    optionContainer.className = 'optionContainer';
    slide.append(optionContainer);

    //낱개별 보기
    data.option.forEach(function (subData) {
        let labels = document.createElement('label');
        labels.innerHTML =
            '<input type="radio" name="radio_btn" value=' + subData.score + '>' +
            subData.text +
            '<br>';
        optionContainer.prepend(labels);
    });
});

//보기 입력값 체크
function radioCheck(){
    let radio_btn=document.getElementsByName('radio_btn');
    let radio_btn_check=false;
    for(let i=0; i<radio_btn.length; i++){
        if(radio_btn[i].checked){
            radio_btn_check=true;
            result.push(radio_btn[i].value);
            plusSlides(1);
            break;
        }
    }
    if(!radio_btn_check){
        alert("답변을 선택해주세요.");
    }  
}


//버튼
let buttonArea = document.createElement('div');
buttonArea.className = 'button';
buttonArea.innerHTML =
    '<button id="done" onclick="resulte();delQuiz()">' +
    '결과 보기' +
    '</button>' +
    '<button id="next" onclick="radioCheck()">' +
    '다음 질문' +
    '</button>';
quiz.append(buttonArea);


//퀴즈 영역의 문제를 1개씩 제공
let slideIndex = 1;

//이전, 다음 버튼 선택에 따른 증가, 감소
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//상황에 따른 슬라이드 보여주기
function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    const doneButton = document.getElementById("done");
    const nextButton = document.getElementById("next");

    // 마지막 페이지일 경우 완료버튼 제공
    if (slideIndex != slides.length) {
        doneButton.style.display = 'none';
    } else {
        doneButton.style.display = 'inline-block';
    }

    //슬라이드가 마지막페이지 일 경우, 다음버튼 제공하지 않음
    if (slideIndex === slides.length) {
        nextButton.style.display = 'none';
    } else {
        nextButton.style.display = 'inline-block';
    }

    //모든 슬라이드를 보이지 않게 하고 1개씩 보이게 함         
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

//슬라이드 실행
showSlides(slideIndex);