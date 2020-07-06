{{--@isset($users)
@foreach ($users as $d)
<table>
    <tr><th>氏名</th><td>{{ $d->$name }}</td></tr>
    <tr><th>氏名（かな）</th><td>{{ $d->$ruby }}</td></tr>
    <tr><th>生年月日</th><td>{{ $d->$date }}</td></tr>
    <tr><th>性別</th><td>{{ $d->$gender }}</td></tr>
    <tr><th>メールアドレス</th><td>{{ $d->$email }}</td></tr>
    <tr><th>電話番号</th><td>{{ $d->$phone }}</td></tr>
    <tr><th>問合わせ内容</th><td>{{ $d->$inquiry }}</td></tr>
</table>
<br><hr>
@endforeach
@endisset--}}


ok
