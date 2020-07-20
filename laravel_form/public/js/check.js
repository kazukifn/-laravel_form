/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/asset/check.js":
/*!*************************************!*\
  !*** ./resources/js/asset/check.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

$(function () {
  alert("jQueryが正常に動作しています！");
}); //エラーを表示する関数の定義

function show_error(message, this$) {
  text = this$.parent().find('span').text() + message;
  this$.parent().append("<p class='error'>" + text + "</p>");
}

$("form").submit(function () {
  //エラー表示の初期化
  $("p.error").remove();
  $("div").removeClass("error");
  var text = ""; //1行テキスト入力フォームとテキストエリアの検証

  $(":text,textarea").filter(".validate").each(function () {
    //必須項目の検証
    $(this).filter(".required").each(function () {
      if ($(this).val() == "") {
        show_error("は必須項目です。", $(this));
      }
    });
    $(this).filter(".max30").each(function () {
      if ($(this).val().length > 30) {
        show_error("は30文字以内です。", $(this));
      }
    });
    $(this).filter(".max100").each(function () {
      if ($(this).val().length > 100) {
        show_error("は100文字以内です。", $(this));
      }
    }); //メールアドレスの検証

    $(this).filter(".mail").each(function () {
      if ($(this).val() && !/^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/g.test($(this).val())) {
        $(this).parent().prepend("<p class='error'>メールアドレスの形式が異なります</p>");
      }
    }); //かなの検証

    $(this).filter(".kana").each(function () {
      var value = $(this).val();

      if (!value.match(/[ぁ-ん]/g)) {
        show_error("を入力してください。", $(this));
      }
    }); //電話番号の検証

    $(this).filter(".phone").each(function () {
      if (!$(this).val().match(/^[0-9\-]+$/)) {
        show_error("を正しく入力してください。", $(this));
      }
    });
  }); //セレクトメニューの検証

  $("select").filter(".validate").each(function () {
    $(this).filter(".not0").each(function () {
      if ($(this).val() == 0) {
        show_error("を選択してください。", $(this));
      }
    });
  }); //カレンダーの検証

  $("input").filter(".validate").each(function () {
    $(this).filter(".date").each(function () {
      if ($(this).val() == 0) {
        show_error("を選択してください。", $(this));
      }
    });
  }); //error クラスの追加の処理

  if ($("p.error").size() > 0) {
    $("p.error").parent().addClass("error");
    return false;
  }
}); //テキストエリアに入力された文字数を表示

$("textarea").on('keydown keyup change', function () {
  var count = $(this).val().length;
  $("#count").text(count);

  if (count > 100) {
    $("#count").css({
      color: 'red',
      fontWeight: 'bold'
    });
  } else {
    $("#count").css({
      color: '#333',
      fontWeight: 'normal'
    });
  }
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** multi ./resources/js/asset/check.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/laravel_form/resources/js/asset/check.js */"./resources/js/asset/check.js");


/***/ })

/******/ });