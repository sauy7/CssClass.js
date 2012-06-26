var CssClass = {
    is: function(element, cssClass) {
        var classes = element.className;
        if (!classes) {
            return false;
        }
        if (classes === cssClass) {
            return true;
        }
        return element.className.search("\\b" + cssClass + "\\b") !== -1;
    },
    add: function(element, cssClass) {
        if (CssClass.is(element, cssClass)) {
            return;
        }
        if (element.className) {
            cssClass = " " + cssClass;
        }
        element.className += cssClass;
    },
    remove: function(element, cssClass) {
        element.className = element.className.replace(new RegExp("\\b\\s*" + cssClass +  "\\b\\s*", "g"), "");
    }
};