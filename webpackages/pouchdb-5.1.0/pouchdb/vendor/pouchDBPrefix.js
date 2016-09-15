//first part of workaround to make pouchdb working when an amd module loader is used (like requirejs)
(function() {
    'use strict';
    if ("function" == typeof define && define.amd) {
        window.__define__ = define;
        window.define = null;
    }
})();
