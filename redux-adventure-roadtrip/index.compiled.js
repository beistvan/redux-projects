(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
var initialWagonState = {
  supplies: 100,
  distance: 0,
  days: 0,
  // Extra credit
  cash: 200
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialWagonState;
  var action = arguments.length > 1 ? arguments[1] : undefined;
  switch (action.type) {
    case 'travel':
      {
        var days = action.payload;
        return _objectSpread(_objectSpread({}, state), {}, {
          supplies: state.supplies - 20 * days,
          distance: state.distance + 10 * days,
          days: state.days + days
        });
      }
    case 'gather':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          supplies: state.supplies + 15,
          distance: state.distance,
          days: state.days + 1
        });
      }
    case 'tippedWagon':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          supplies: state.supplies - 30,
          days: state.days + 1
        });
      }
    // Extra credit
    case 'sell':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          supplies: state.supplies - 20,
          cash: state.cash + 5
        });
      }
    // Extra credit
    case 'buy':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          supplies: state.supplies + 25,
          cash: state.cash - 15
        });
      }
    /*
    Extra credit
    Technically, we should round state.cash to the nearest two decimal places, but that's out of scope for this project
    */
    case 'theft':
      {
        return _objectSpread(_objectSpread({}, state), {}, {
          cash: state.cash / 2
        });
      }
    default:
      {
        return state;
      }
  }
};
var wagon = reducer(undefined, {});
console.log(wagon);
wagon = reducer(wagon, {
  type: 'travel',
  payload: 1
});
console.log(wagon);
wagon = reducer(wagon, {
  type: 'gather'
});
console.log(wagon);
wagon = reducer(wagon, {
  type: 'tippedWagon'
});
console.log(wagon);
wagon = reducer(wagon, {
  type: 'travel',
  payload: 3
});
console.log(wagon);

// Extra credit
wagon = reducer(wagon, {
  type: 'buy'
});
console.log(wagon);
wagon = reducer(wagon, {
  type: 'sell'
});
console.log(wagon);
wagon = reducer(wagon, {
  type: 'theft'
});
console.log(wagon);

},{}]},{},[1]);

