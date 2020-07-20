@extends('layout')

@section('content')
<h1>送信履歴</h1>
<p><a href="/">入力画面に戻る</a></p>
@foreach ($users as $user) 
  <table>
    <tr><th>氏名</th><td>{{ $user -> name }}</td></tr>
    <tr><th>氏名（かな）</th><td>{{ $user -> ruby }}</td></tr>
    <tr><th>生年月日</th><td>{{ $user -> dt }}</td></tr>
    <tr><th>性別</th><td>{{ $user -> gender }}</td></tr>
    <tr><th>メールアドレス</th><td>{{ $user -> email }}</td></tr>
    <tr><th>電話番号</th><td>{{ $user -> phone }}</td></tr>
    <tr><th>問合わせ内容</th><td>{{ $user -> inquiry }}</td></tr>
  </table>
  <hr>
@endforeach

@endsection