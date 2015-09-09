/*The MIT License (MIT)

Copyright (c) 2015 Phil Eaton

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.*/

(function(factory) {
    if (typeof define === "function" && define.amd)
        define(factory);
    else
        factory();
})(function() {
    var u = {};

    // Source: http://stackoverflow.com/a/901144/1507139
    u.getParameter = function(name, url) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            search = url || location.search;
            results = regex.exec(search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    u.find = document.querySelector.bind(document);
    u.findAll = document.querySelectorAll.bind(document);

    HTMLElement.prototype.find = function(s) {
        return this.querySelector(s);
    };

    HTMLElement.prototype.findAll = function(s) {
        return this.querySelectorAll(s);
    };

    HTMLElement.prototype.addClass = function(c) {
        this.classList.add(c);
    };

    HTMLElement.prototype.removeClass = function(c) {
        this.classList.remove(c);
    };

    HTMLElement.prototype.toggleClass = function(c) {
        this.classList.toggle(c);
    };

    HTMLFormElement.prototype.serialize = function() {
        var children = this.children;
        var formData = children.toArray().map(function(field, i) {
            if (field.tagName !== "INPUT") 
                field = children[i].find("input");

            if (field === null)
                return;

            return {'name': field.name, 'value': field.value};
        }).reduce(function(fs, f) {
            if (!f) return fs;
            fs.push(f);
            return fs;
        }, []);

        return formData;
    };

    HTMLCollection.prototype.toArray = function() {
       var arr = [];
       for (var i = 0; i < this.length; i++) arr.push(this.item(i));
       return arr;
    };

    NodeList.prototype.toArray = HTMLCollection.prototype.toArray;

    return u;
});
