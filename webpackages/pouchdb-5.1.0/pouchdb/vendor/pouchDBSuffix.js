//second part of workaround to make pouchdb working when an amd module loader is used (like requirejs)
(function() {
    'use strict';
    if ("function" == typeof __define__ && __define__.amd) {
        window.define = __define__;
    }
})();
