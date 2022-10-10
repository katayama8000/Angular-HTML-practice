## WAI-ARIA

#### HTML が正しくマークアップされていることが大前提

- Role

同じ意味

```html
<div role="nav">navigation</div>
<nav>navigation</nav>
```

- Property

スクリーンリーダーで読み上げるときは閉じると読まれる

```html
<button aria-label="閉じる">✖</button>
```

- State

コンテンツの無効化をブラウザに伝える

```html
<button aria-disabled="true">toggle</button>
```

---

## html 表示までの流れ

- ブラウザに URL を入力
- ブラウザが DNS サーバーにドメイン名を問い合わせる
- DNS サーバーが IP アドレスを返す
- ブラウザがサーバーに HTTP リクエストを送る
- サーバーが HTTP200 と HTML を返す

### HTML をパース後

- ブラウザが HTML をパースする
- css ファイルと js ファイルの参照を解析
- html をパース後、DOM ツリーを構築
- ブラウザが CSS をパースする
- CSS をパース後、CSSOM ツリーを構築
- DOM ツリーと CSSOM ツリーを合成してレンダーツリーを構築
- JS のパースと実行

---

web ページの表示には多くのステップがある
これを解決するのが SPA

#### SPA

- 更新差分のデータを取得
- 新データを反映した element を作成
- DOM ツリーに反映

#### MPA

上の HTML のステップを毎回やる

---

## SPA のメリット

- 宣言的 UI
- 仮想 DOM
- 差分検知
