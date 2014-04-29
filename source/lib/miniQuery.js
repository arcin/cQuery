/*!
 * minQuery
 */

var SweetSelector = (function() {
  var _id = function(selector){
    if( selector.match(/^#[a-z]+/)){
      return document.getElementById(selector.slice(1))
    }
  }
  var _class = function(selector) {
    if (selector.match(/^.[a-z]+/)) {
      return document.getElementsByClassName(selector.slice(1))
    }
  }

  var _element = function(selector) {
    var elements = document.getElementsByTagName(selector)
    if (elements[0] == null) {
      return false
    }
    return elements
  }

  return {
    select: function (selector) {
       return  _id(selector) || (_element(selector) || _class(selector) )
    }
  }
}())