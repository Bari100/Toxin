// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"blocks/_commons/guests/guests.js":[function(require,module,exports) {
var guestsTextBaby = document.getElementsByClassName('guests__text-baby');
var iBaby = -1;
var objectBaby = [", 1 младенец", ", 2 младенца", ", 3 младенца", ", 4 младенца", ", 5 младенцев", ", 6 младенцев", ", 7 младенцев"];

function getMessageBaby() {
  return objectBaby[iBaby];
}

var i = -1;
var tt = ["1 гость", "2 гостя", "3 гостя", "4 гостя", "5 гостей", "6 гостей", "7 гостей"];
var guestsText = document.getElementById('guests__text');
$('.guests__minus').attr("disabled", true);
$(document).ready(function func() {
  $('.guests__minus-adults').click(function () {
    var $inputAdults = $(this).parent().find('input');
    var count = parseInt($inputAdults.val()) - 1;
    count = count < 1 ? 0 : count;
    $inputAdults.val(count);
    $inputAdults.change();

    if (count < 1) {
      $(guestsText).text('0 гостей');
      $(this).attr("disabled", true);
    }

    if ($inputAdults.val() < 7) {
      $('.guests__plus-adults').removeAttr("disabled");
    }

    return false;
  });
  $('.guests__minus-kids').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 0 : count;
    $input.val(count);
    $input.change();

    if (count < 1) {
      $(guestsText).text('0 гостей');
      $(this).attr("disabled", true);
    }

    return false;
  });
  $('.guests__click-baby-minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 0 : count;
    $input.val(count);
    $input.change();

    if (count < 1) {
      $(this).attr("disabled", true);
    }

    return false;
  });
  $('.guests__plus-adults').click(function () {
    var $inputAdults = $(this).parent().find('input');
    $inputAdults.val(parseInt($inputAdults.val()) + 1);
    $inputAdults.change();
    var countAdults = parseInt($inputAdults.val()) - 1;

    if (countAdults >= 0) {
      $('.guests__minus-adults').removeAttr("disabled");
    }

    if ($inputAdults.val() >= 7) {
      $inputAdults.val(7);
      $(this).attr("disabled", true);
    }

    return false;
  });
  $('.guests__plus-kids').click(function () {
    var $inputKids = $(this).parent().find('input');
    $inputKids.val(parseInt($inputKids.val()) + 1);
    $inputKids.change();
    var countKids = parseInt($inputKids.val()) - 1;

    if (countKids >= 0) {
      $('.guests__minus-kids').removeAttr("disabled");
    }

    return false;
  });
  $('.guests__click-baby').click(function () {
    var $inputBaby = $(this).parent().find('input');
    $inputBaby.val(parseInt($inputBaby.val()) + 1);
    $inputBaby.change();
    var countBaby = parseInt($inputBaby.val()) - 1;

    if (countBaby >= 0) {
      $('.guests__click-baby-minus').removeAttr("disabled");
    }

    return false;
  });
});
$(document).ready(function () {
  $('.guests__minus-adults').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val());

    if (count < 1) {
      $('.guests__circle-minus-adults').css("border-color", "rgba(31, 32, 65, 0.15)");
      $('.guests__minus-adults').css("color", "rgba(31, 32, 65, 0.25)");
    }
  });
  $('.guests__plus-adults').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val());

    if (count > 0) {
      $('.guests__circle-minus-adults').css("border-color", "rgba(31, 32, 65, 0.25)");
      $('.guests__minus-adults').css("color", "rgba(31, 32, 65, 0.5)");
    }
  });
  $('.guests__minus-kids').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val());

    if (count < 1) {
      $('.guests__circle-minus-kids').css("border-color", "rgba(31, 32, 65, 0.15)");
      $('.guests__minus-kids').css("color", "rgba(31, 32, 65, 0.25)");
    }
  });
  $('.guests__plus-kids').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val());

    if (count > 0) {
      $('.guests__circle-minus-kids').css("border-color", "rgba(31, 32, 65, 0.25)");
      $('.guests__minus-kids').css("color", "rgba(31, 32, 65, 0.5)");
    }
  });
  $('.guests__click-baby-minus').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val());

    if (count < 1) {
      $(guestsTextBaby).hide(getMessageBaby());
      $('.guests__circle-minus-baby').css("border-color", "rgba(31, 32, 65, 0.15)");
      $('.guests__click-baby-minus').css("color", "rgba(31, 32, 65, 0.25)");
    }
  });
  $('.guests__click-baby').click(function () {
    var $input = $(this).parent().find('input');
    var count = parseInt($input.val());

    if (count > 0) {
      $(guestsTextBaby).show(getMessageBaby());
      $('.guests__circle-minus-baby').css("border-color", "rgba(31, 32, 65, 0.25)");
      $('.guests__click-baby-minus').css("color", "rgba(31, 32, 65, 0.5)");
    }
  });
}); // Dropdown Menu

var dropdown = document.querySelectorAll('.guests__dropdown');
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
  var button = el.querySelector('.guests__adults-baby'),
      menu = el.querySelector('.guests__dropdown-menu'),
      arrow = button.querySelector('i.icon-arrow');

  button.onclick = function (event) {
    if (!menu.hasClass('show')) {
      menu.classList.add('show');
      menu.classList.remove('hide');
      arrow.classList.add('open');
      arrow.classList.remove('close');
      event.preventDefault();
    } else {
      menu.classList.remove('show');
      menu.classList.add('hide');
      arrow.classList.remove('open');
      arrow.classList.add('close');
      event.preventDefault();
    }
  }; // BUTTONS APPLY


  $('.guests__button[data-action="apply"]').click(function () {
    if (menu.hasClass('show')) {
      menu.classList.remove('show');
      menu.classList.add('hide');
      event.preventDefault();
    }
  });
});

Element.prototype.hasClass = function (className) {
  return this.className && new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className);
};

$(function () {
  var i = -1;
  var tt = ["1 гость", "2 гостя", "3 гостя", "4 гостя", "5 гостей", "6 гостей", "7 гостей"];

  function getMessage() {
    return tt[i];
  }

  var guestsText = document.getElementById('guests__text');
  var a = $('a');
  var guestsTextSpan = a.find('span.guests__text-baby');
  var iBaby = -1;
  var objectBaby = [", 1 младенец", ", 2 младенца", ", 3 младенца", ", 4 младенца", ", 5 младенцев", ", 6 младенцев", ", 7 младенцев"];

  function getMessageBaby() {
    return objectBaby[iBaby];
  }

  var guestsTextBaby = document.getElementsByClassName('guests__text-baby');
  $(".guests__click").click(function () {
    ++i;
    $(guestsText).text(getMessage());
    $(guestsText).append(guestsTextSpan); // ***button + off & style change***

    if (i >= 6) {
      $('.guests__plus-adults').attr("disabled", true);
      $('.guests__plus-kids').attr("disabled", true);
      $('.guests__circle-plus-adults').css("border-color", "rgba(31, 32, 65, 0.15)");
      $('.guests__circle-plus-kids').css("border-color", "rgba(31, 32, 65, 0.15)");
      $('.guests__plus-adults').css("color", "rgba(31, 32, 65, 0.25)");
      $('.guests__plus-kids').css("color", "rgba(31, 32, 65, 0.25)");
    }
  });
  $(".guests__click-minus").click(function () {
    i--;
    $(guestsText).text(getMessage());
    $(guestsText).append(guestsTextSpan); // ***button + on & style change***

    if (i < 6) {
      $('.guests__plus-adults').removeAttr("disabled");
      $('.guests__plus-kids').removeAttr("disabled");
      $('.guests__circle-plus-adults').css("border-color", "rgba(31, 32, 65, 0.25)");
      $('.guests__plus-adults').css("color", "rgba(31, 32, 65, 0.5)");
      $('.guests__circle-plus-kids').css("border-color", "rgba(31, 32, 65, 0.25)");
      $('.guests__plus-kids').css("color", "rgba(31, 32, 65, 0.5)");
    }
  });
  $(".guests__click-baby").click(function () {
    ++iBaby;
    $(guestsTextBaby).text(getMessageBaby()); // ***button baby + off & style change***

    if (iBaby >= 6) {
      $('.guests__click-baby').attr("disabled", true);
      $('.guests__circle-plus-baby').css("border-color", "rgba(31, 32, 65, 0.15)");
      $('.guests__click-baby').css("color", "rgba(31, 32, 65, 0.25)");
    }
  });
  $(".guests__click-baby-minus").click(function () {
    iBaby--;
    $(guestsTextBaby).text(getMessageBaby()); // ***button + on & style change***

    if (i < 6) {
      $('.guests__click-baby').removeAttr("disabled");
      $('.guests__circle-plus-baby').css("border-color", "rgba(31, 32, 65, 0.25)");
      $('.guests__click-baby').css("color", "rgba(31, 32, 65, 0.5)");
    }
  }); // BUTTON CLEAR

  $('.guests__button[data-action="clear"]').click(function () {
    $('.guests__plus-adults').parent().find('input').val(0);
    $('.guests__plus-kids').parent().find('input').val(0);
    $('.guests__click-baby').parent().find('input').val(0);
    iBaby = -1;
    i = -1;
    $(guestsText).text('0 гостей');
    $(guestsTextSpan).text('');
    $(guestsText).append(guestsTextSpan);
    $('.guests__minus').attr("disabled", true);
    $('.guests__circle-minus-adults').css("border-color", "rgba(31, 32, 65, 0.15)");
    $('.guests__minus-adults').css("color", "rgba(31, 32, 65, 0.25)");
    $('.guests__circle-minus-kids').css("border-color", "rgba(31, 32, 65, 0.15)");
    $('.guests__minus-kids').css("color", "rgba(31, 32, 65, 0.25)");
    $('.guests__circle-minus-baby').css("border-color", "rgba(31, 32, 65, 0.15)");
    $('.guests__click-baby-minus').css("color", "rgba(31, 32, 65, 0.25)");
  });
});
},{}],"C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "64238" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/user/AppData/Local/Yarn/Data/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","blocks/_commons/guests/guests.js"], null)
//# sourceMappingURL=/guests.1f39167e.js.map