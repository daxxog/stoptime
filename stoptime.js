/* stoptime.js
 * A basic stop watch timing object for JavaScript.
 * (c) 2013 David (daXXog) Volm ><> + + + <><
 * Released under Apache License, Version 2.0:
 * http://www.apache.org/licenses/LICENSE-2.0.html  
 */

/* UMD LOADER: https://github.com/umdjs/umd/blob/master/returnExports.js */
(function (root, factory) {
    if (typeof exports === 'object') {
        // Node. Does not work with strict CommonJS, but
        // only CommonJS-like enviroments that support module.exports,
        // like Node.
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(factory);
    } else {
        // Browser globals (root is window)
        root.stoptime = factory();
    }
}(this, function() {
    return function() {
        var d = function() { //function that returns the current date in ms
            return +new Date();
        };
        
        return {
            t: d(), //store the current date
            
            elapsed: function() {
                return d() - (this.t); //return the current date minus the past date
            },
            
            reset: function() {
                this.t = d(); //set the past date to the current date
                return this; //allow chaining
            }
        };
    };
}));