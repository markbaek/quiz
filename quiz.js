
//1. 질문

    //질문, 보기 제공하는 함수 만들기
    function psychologicalTest() {

        // 출력을 저장하는 배열
        const output = [];

        // myQestions.js에 저장된 '질문'과 '보기' 가져오기
        myQuestions.forEach(function (data) {
            // answers : 보기를 저장하는 배열
            const answers = [];
            // 라디오 버튼 형식으로 '보기'를 answers 배열에 push
            for (letter in data.answers) {
                answers.push(
                    '<label>' 
                        + '<input type="radio" name="{questionNumber}" value="{data.answers[letter]}">' 
                            + data.answers[letter] 
                            + '<br>' 
                    + '</label>'
                );
            }

            // 질문과 보기를 output 배열에 push
            output.push(
                '<div class="slide">' 
                    //질문
                    + '<div class="question">' 
                        + data.question 
                    + '</div>' 
                    //보기
                    + '<div class="answers">' 
                        + answers.join("") 
                    + '</div>' 
                + '</div>'
            );
        });

        const quizContainer = document.getElementById('quiz');
        // output 배열에 추가된 내용을 quizContainer 에 출력 
        quizContainer.innerHTML = output.join('');
    }     

    // 심리테스트 함수 실행
    psychologicalTest();

    //한문제당 한개씩 슬라이드 
        var slideIndex = 1;
        showSlides(slideIndex);

        //이전, 다음 버튼 선택에 따른 증가, 감소
        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var slides = document.getElementsByClassName("slide");
            const previousButton = document.getElementById("previous");
            const nextButton = document.getElementById("next");

            // 슬라이드가 첫페이지 일 경우, 이전버튼 제공하지 않음
            if(slideIndex === 1){
                previousButton.style.display = 'none';
            } else{
                previousButton.style.display = 'inline-block';
            }

            //슬라이드가 마지막페이지 일 경우, 다음버튼 제공하지 않음
            if(slideIndex === slides.length){
                nextButton.style.display = 'none';
            } else{
                nextButton.style.display = 'inline-block';
            }
                 
            //모든 슬라이드를 보이지 않게 하고 1개씩 보이게 함
            for (var i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";  
            }
            slides[slideIndex-1].style.display = "block";  
        }




//2. 결과
//작성중..