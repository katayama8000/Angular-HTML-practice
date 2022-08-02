# Angular-Practice

- メソッド
- {{}} ※この中には「?.」「|」しか書けない
- プロパティバインディング
  - []
  - cssの切り替え
- 双方向バインディング
  - [()]
- パイプ --- template利用できるAngularの構文
  - async pipe --- templateの中で自動で処理される --- subscribeをしなくてもよい
- コンポーネント --- Vue,Reactと同じ
- 親から子にデータを受け渡し
- 子から親にデータを受け渡し
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
    
## Angular-CLI
- ng new [プロジェクト名]
- ng g component [コンポーネント名]
- ng g service [サービス名]
- ng g m [モジュール名]
- ng g pipe --name=[pipe名]
