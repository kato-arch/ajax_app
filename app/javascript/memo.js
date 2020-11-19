function memo() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
    const formData = new FormData(document.getElementById("form"));
    const XHR = new XMLHttpRequest();
    XHR.open("POST", "/posts", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      }
      const item = XHR.response.post;
      const list = document.getElementById("list");
      const formText = document.getElementById("content");
      const HTML = `
        <div class="post" data-id=${item.id}>
          <div class="post-date">
            投稿日時：${item.created_at}
          </div>
          <div class="post-content">
          ${item.content}
          </div>
        </div>`;
      list.insertAdjacentHTML("afterend", HTML);
      formText.value = "";
    };
    e.preventDefault();
  });
 }
 window.addEventListener("load", memo);

// 1 memo.jsに関数を定義し、ページを読み込んだときに実行されるように
// 2 getElementByIdを用いて「投稿する」ボタンの情報を取得
// 3 addEventListener、投稿するボタンを「click」した場合に実行される関数を定義
// 4 非同期通信を実装するために必要なXMLHttpRequestのオブジェクト
// 5 openメソッドを使用して、リクエストの内容を引数へ追記
// 詳細：HTTPメソッドはPOST、パスは/posts、非同期通信はtrueと設定
// 6 返却されるデータ形式はJSONになりますので、jsonを指定
// 7 FormDataとsendを使用して、メモ投稿のフォームに入力された情報を送信



