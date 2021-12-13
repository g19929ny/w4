const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'その日は華氏86度であったため、とても暑かった。 だから:insertx:は:inserty:に行った。 着いたらまず足から:inserty:に入ってみた。とても冷たかった。しばらく遊んでいると、天気が:insertz:になってきた。体重が122ポンドの:insertx:は興奮していたが、津田はそうでもなかった。:inserty:では天気が変化するのは当たり前だったから。';
const insertX = ['クマ', 'ネコ', 'ウサギ'];
const insertY = ['海', 'プール', '川'];
const insertZ = ['晴れ', '曇り', '雨'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('津田', name);
  }

  if (document.getElementById("日本").checked) {
    const weight = `${Math.round(300*0.0714286)}kg`;
    const temperature =  `摂氏 ${Math.round((86-32) * 5 / 9)} 度`;
    newStory = newStory.replace('華氏86度', temperature);
    newStory = newStory.replace('122ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
