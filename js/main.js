//함수
function showContent(num) {
  $('article h2').html(data[num].content);
  $('article p').html(data[num].author);
}    
// 내용을 더 추가해 보세요. -> 6개 
// 시작할 때 첫 번째 명언이 표시됨 
var num = 0;
function nextContent() {
  num++;
  if(num > 5) {num = 0;}
  showContent(num);
}
function prevContent() {
  num--;
  if(num < 0) {num = 5;}
  showContent(num);
}

$(function() {
  showContent(num);
})