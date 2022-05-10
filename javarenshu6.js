(()=>{
//ここに命令,他のファイルと関数とかが競合してしまう
const $doc = document;
const $tab = $doc.getElementById("js-tab");
const $nav = $tab.querySelectorAll("[data-nav]");
const $content = $tab.querySelectorAll("[data-content]");
const ACTIVE_CLASS = "is-active";
const navLen = $nav.length;

//初期化
const init = () => {
  $content[0].style.display = "block";
};
init();

//クリックで何が起こるか
const handleClick = (e) => {
  e.preventDefault();

//クリックされたnavとそのデータを取得
const $this = e.target;
const targetVal = $this.dataset.nav;

//いらないのリセット
let index = 0;
while(index < navLen){
  $content[index].style.display = "none";
  $nav[index].classList.remove(ACTIVE_CLASS);
  index++;
}

//対象物のみにアクティブ化
$tab.querySelectorAll("[data-content='" + targetVal + "']")[0].style.display = "block";
$nav[targetVal].classList.add("is-active");

};
//それぞれのタブが押せるようになる
let index = 0;
while(index < navLen){
  $nav[index].addEventListener("click", (e) => handleClick(e));
  index++;
}


})();
