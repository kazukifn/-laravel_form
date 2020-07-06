<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <title>お問い合わせ</title>
</head>
<body>

<h2>お問い合わせ</h2>
<form method="POST" action="/confirm">
  {{ csrf_field() }}
  <div><span> 氏名： </span>
  <input type="text" name="name" size="50" class="validate required max30" value="">
  {{ $errors->first('name')}}
  </div>
  <br/>
	<div><span>氏名(かな)：</span>
  <input type="text" name="ruby" size="50" class="validate max30 kana" value="">
  {{ $errors->first('ruby') }}
  </div>
  <br/>
	<div><span>生年月日：</span>
  <input type="date" name="dt" class="validate required date" >
  {{ $errors->first('dt') }}
  </div>
  <br/>
  <div><span>性別：</span>
  <select name="gender"  class="validate not0" >
    <option value="">▼選択</option>
    <option value="男">男</option>
    <option value="女">女</option>
    <option value="その他">その他</option>
  </select>
  <span class="error-message"></span>
  {{ $errors->first('gender') }}
  </div>
  <br/>
	<div><span>メールアドレス：</span>
  <input type="text" name="email" size="50" class="validate required mail" value="" />
  {{ $errors->first('email') }}
  </div>
  <br/>
	<div><span>電話番号：</span>
  <input type="text" name="phone" size="50" value="" class="validate required phone">
  {{ $errors->first('phone') }}
  </div>
  <br/>
	<div><span>問合せ内容：</span>
  <textarea name="inquiry" cols="50" rows="5" class="validate required max100" value=""></textarea>	
  {{ $errors->first('inquiry') }}
  </div> 
  <br/>

	<div><p><span id="count"> </span>/100</p></div>
  <br>
  <button class="btn btn-success"> 送信 </button>
</form>



</body>
<script type="text/javascript" src="/check_list.js">
</script>
<style>
  .error input , 
  .error textarea {
    background-color: #F8DFDF;
  }
  p.error{
    margin:0;
    color:red;
    font-weight:bold;
    margin-bottom:1em;
  }
</style>

{{--入力チェック--}}
@include('js._script')


</html>