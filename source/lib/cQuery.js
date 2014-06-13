/*!
 * minQuery
 */

var SweetSelector = (function() {
  var _id = function(selector){
    if( selector.match(/^#[a-z]+/)){
      return document.getElementById(selector.slice(1));
    }
  };
  var _class = function(selector) {
    if (selector.match(/^.[a-z]+/)) {
      return document.getElementsByClassName(selector.slice(1));
    }
  };

  var _element = function(selector) {
    var elements = document.getElementsByTagName(selector);
    if (elements.length === null) {
      return false;
    }
    return elements;
  };

  return {
    select: function (selector) {
       return  _id(selector) || (_element(selector) || _class(selector) );
    }
  };
}());

var DOM = (function(){

  // utility helper functions

  var _massExecute = function(array, func) {
    for (var i = 0; i < array.length; i++) {
      func(array[i]);
    }
  };

  var _prepareElements = function(element) {
    var elements = SweetSelector.select(element);
    return elements.length === undefined ? [elements] : elements;
  };

    // display helper functions

  var _addHiddenClass = function(collection) {
    var hide = function(element){
      element.setAttribute("style", "display: none");
    };

    _massExecute(collection, hide);
  };

  var _removeHiddenClass = function(collection) {
    var reveal = function(element){
      element.setAttribute("style", "display: initial");
    };

    _massExecute(collection, reveal);
  };

  // public

  return {
    hide: function(element) {
      var elements = _prepareElements(element);
      _addHiddenClass(elements);
    },

    show: function(element) {
      var elements = _prepareElements(element);
      _removeHiddenClass(elements);
    },

    addClass: function(findClass, newClass) {
      var elements = _prepareElements(findClass);
      var appendClassName = function(element){
        element.classList.add(newClass);
      };

      _massExecute(elements, appendClassName);
    },

    removeClass: function(findClass, removeClass) {
      var elements = _prepareElements(findClass);
      var removeClassName = function(element){
        element.classList.remove(removeClass);
      };

      _massExecute(elements, removeClassName);
    }
  };
})();