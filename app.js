const quiz = [
  {
    question: '日本で最も売れたゲーム機は次の内どれ？',
    answers: [
      'プレイステーション２',
      'ニンテンドーDS',
      'プレイステーション４',
      'ニンテンドースイッチ'
    ],
    correct: 'ニンテンドーDS'
  }, {
    question: '糸井重里が企画に関わった任天堂の看板ゲームといえば？',
    answers: [
    'スーパーマリオブラザーズ３',
    '星のカービィ',
    'MOTHER2',
    'スーパードンキーコング'
    ],
    correct: 'MOTHER2'
  }, {
    question: 'ファイナルファンタジーⅣの主人公の名前は？',
    answers: [
      'フリオニール',
      'セシル・ハーヴィ',
      'クラウド・ストライフ',
      'ティーダ'
    ],
    correct: 'セシル・ハーヴィ'
  }
];

const quizLength = quiz.length;
let quizIndex = 0
let score = 0;

const $button = document.getElementsByTagName('button');
let buttonLength = $button.length;

//クイズの問題文、選択肢を定義
const setupQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while (buttonIndex < buttonLength) {
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex]
    buttonIndex++;
  };
};
setupQuiz();

const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！')
    score++;
  } else {
    window.alert('不正解')
  }

quizIndex++;

if(quizIndex < quizLength) {
  setupQuiz();
} else {
  window.alert('終了！あなたの正解数は' + score + '/' + quizLength + 'です!')
}

};

//ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while (handlerIndex < buttonLength) {
  $button[handlerIndex].addEventListener('click', (e) => {
  clickHandler (e);
  });
  handlerIndex++;
};
