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
    var U = [];
    
    Object.keys(HTMLElement.prototype).forEach(function(prop){
        U[prop] = function(){ return this[0][prop].apply(this[0], arguments); }
    });
    
    U.find = function(s){ 
        var u = Object.create(U);
        U.push.apply(u, document.querySelectorAll("div"))
        return u;
    };

    // Source: http://stackoverflow.com/a/901144/1507139
    U.getParameter = function(name, url) {
        name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
        var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
            search = url || location.search;
            results = regex.exec(search);
        return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
    };

    
        
    U.addClass = function(c) { this.classList.add(c); return this };
    U.removeClass = function(c) { this.classList.remove(c); return this };
    U.toggleClass = function(c) { this.classList.toggle(c); return this };

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

    return U;
});
