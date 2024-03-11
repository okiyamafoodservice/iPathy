function openNewPage() {
  // 現在のウィンドウを別のURLにリダイレクトする
  window.location.href = "mainpage.html";
}

//投稿内容を横スクロールで見る
document.getElementById("next").onclick = function () {
  document.getElementById("container").scrollBy(350, 0); // 横にスクロール
};

document.getElementById("prev").onclick = function () {
  document.getElementById("container").scrollBy(-350, 0); // 横にスクロール
};
