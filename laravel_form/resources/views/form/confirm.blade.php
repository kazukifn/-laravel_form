<!DOCTYPE HTML>
<html>
<head>
    <title>お問い合わせ</title>
</head>
<body>

<h1>確認画面</h1>




<form action="{{action('ConfirmController@update')}}" method="post">
  @csrf
  <table>
  <tr><th>氏名</th><td>{{ $users -> name }}</td></tr>
    <tr><th>氏名（かな）</th><td>{{ $users -> ruby }}</td></tr>
    <tr><th>生年月日</th><td>{{ $users -> dt }}</td></tr>
    <tr><th>性別</th><td>{{ $users -> gender }}</td></tr>
    <tr><th>メールアドレス</th><td>{{ $users -> email }}</td></tr>
    <tr><th>電話番号</th><td>{{ $users -> phone }}</td></tr>
    <tr><th>問合わせ内容</th><td>{{ $users -> inquiry }}</td></tr>
  </table>
  </br>
  
  <input type="submit" value="送信"> 
  
  </form>

