  $(function() {
    alert("jQueryが正常に動作しています！");
  })
  //エラーを表示する関数の定義
  function show_error(message, this$) {
    text = this$.parent().find('span').text() + message;
    this$.parent().append("<p class='error'>" + text + "</p>")
  }
  
  $("form").submit(function(){  
    //エラー表示の初期化
    $("p.error").remove();
    $("div").removeClass("error");
    var text = "";
    
    //1行テキスト入力フォームとテキストエリアの検証
    $(":text,textarea").filter(".validate").each(function(){
        
      //必須項目の検証
      $(this).filter(".required").each(function(){
        if($(this).val()==""){
          show_error("は必須項目です。", $(this));
        }
      })
      
      $(this).filter(".max30").each(function(){
        if($(this).val().length > 30){
          show_error("は30文字以内です。", $(this));
        }
      })
      
      $(this).filter(".max100").each(function(){
        if($(this).val().length > 100){
          show_error("は100文字以内です。", $(this));
        }
      })
      
      //メールアドレスの検証
      $(this).filter(".mail").each(function(){
        if($(this).val() && !(/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/g).test($(this).val())){
          $(this).parent().prepend("<p class='error'>メールアドレスの形式が異なります</p>");
        }
      }) 
      
      //かなの検証
      $(this).filter(".kana").each(function(){
        let value = $(this).val();
        if(!(value.match(/[ぁ-ん]/g))){
          show_error("を入力してください。", $(this));
        }
      }) 

      //電話番号の検証
      $(this).filter(".phone").each(function(){
        if(!$(this).val().match(/^[0-9\-]+$/)){
          show_error("を正しく入力してください。", $(this));
        }
      })
    })

    //セレクトメニューの検証
    $("select").filter(".validate").each(function(){
       $(this).filter(".not0").each(function(){
         if($(this).val() == 0 ) {
           show_error("を選択してください。", $(this));
         }      
       }); 
    });


    //カレンダーの検証
    $("input").filter(".validate").each(function(){
       $(this).filter(".date").each(function(){
         if($(this).val() == 0 ) {
           show_error("を選択してください。", $(this));
         }      
       }); 
    });
    


    //error クラスの追加の処理
    if($("p.error").size() > 0){
      $("p.error").parent().addClass("error");
      return false;
    }
  })
  
    
  
    
    //テキストエリアに入力された文字数を表示
  $("textarea").on('keydown keyup change', function() {
    var count = $(this).val().length;
    $("#count").text(count);
    if(count > 100) {
      $("#count").css({color: 'red', fontWeight: 'bold'});
    }else{
      $("#count").css({color: '#333', fontWeight: 'normal'});
    }
  });
  
 

