### [html-practice](https://github.com/katayama8000/angular-practice/tree/master/src/app/HTML/html-practice)

---

# Angular-Practice

- データバインディング
  - コンポーネント→テンプレート
    - cssの切り替え
    - []
    - {{}} ※この中には「?.」「|」しか書けない
  - テンプレート→コンポーネント
  - コンポーネント←→テンプレート(双方向バインディング)
    - [()]
- パイプ --- template利用できるAngularの構文
  - async pipe --- templateの中で自動で処理される --- subscribeをしなくてもよい
- コンポーネント --- Vue,Reactと同じ
- 親から子にデータを受け渡し
  - @Input
- 子から親にデータを受け渡し
  - @Output
- service --- メソッドを切り分けるもの
- http通信 --- APIをたたく
- Observable
  - of --- 実行の際にObservableに変換して値を返す
  - HttpClient --- リクエスト後にObservableを返す
  - subscribe --- Observableを受け取って操作する
  - pipe --- Observableのメソッド --- pipeの中に中間処理をすることが可能
    - tap --- レスポンスを受け取れる
    - catchError --- エラー時の処理
- RxJs
  - subject
    - Observableを継承したクラス --- 任意のタイミングでデータを流したいときに使う
    - next subjectのメソッド --- 実行されたらsubscribeにデータを流せる
  - operator
    - map
    - filter
    - take
    
## need to learn
- factory

## EVENT
イベント|概要
---|---|
click|クリック時
dblclick|ダブルクリック時
mousedown|マウスボタンを押した時
mouseup|マウスボタンを離した時
mouseenter|マウスポインターが要素に入った時
mousemove|マウスポインターが要素内を移動した時
mouseleave|マウスポインターが要素から離れる時
keydown|キーを押した時
keypress|キーを押し続けている時
focus|要素にフォーカスが当たった時
blur|要素からフォーカスが外れた時
input|入力値が変更された時
select|テキストが選択された時
keyup|キーを離した時
reset|リセット時
submit|サブミット時
    
## Angular-CLI

```
ng new [プロジェクト名]
```
```
ng g component [コンポーネント名]
```
```
ng g service [サービス名]
```
```
ng g m [モジュール名]
```
```
ng g pipe --name=[pipe名]
```
