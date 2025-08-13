"use strict";
/*
 * Original code (c) 2010 Nick Galbreath
 * http://code.google.com/p/stringencoders/source/browse/#svn/trunk/javascript
 *
 * jQuery port (c) 2010 Carlo Zottmann
 * http://github.com/carlo/jquery-base64
 *
 * Permission is hereby granted, free of charge, to any person
 * obtaining a copy of this software and associated documentation
 * files (the "Software"), to deal in the Software without
 * restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the
 * Software is furnished to do so, subject to the following
 * conditions:
 *
 * The above copyright notice and this permission notice shall be
 * included in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
 * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
 * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
 * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
 * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
*/jQuery.base64=function(r){var t="=",e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",n="1.0";function a(r,t){var n=e.indexOf(r.charAt(t));if(n===-1){throw"Cannot decode base64"}return n}function h(r){var e=0,n,h,c=r.length,o=[];r=String(r);if(c===0){return r}if(c%4!==0){throw"Cannot decode base64"}if(r.charAt(c-1)===t){e=1;if(r.charAt(c-2)===t){e=2}c-=4}for(n=0;n<c;n+=4){h=a(r,n)<<18|a(r,n+1)<<12|a(r,n+2)<<6|a(r,n+3);o.push(String.fromCharCode(h>>16,h>>8&255,h&255))}switch(e){case 1:h=a(r,n)<<18|a(r,n+1)<<12|a(r,n+2)<<6;o.push(String.fromCharCode(h>>16,h>>8&255));break;case 2:h=a(r,n)<<18|a(r,n+1)<<12;o.push(String.fromCharCode(h>>16));break}return o.join("")}function c(r,t){var e=r.charCodeAt(t);if(e>255){throw"INVALID_CHARACTER_ERR: DOM Exception 5"}return e}function o(r){if(arguments.length!==1){throw"SyntaxError: exactly one argument required"}r=String(r);var n,a,h=[],o=r.length-r.length%3;if(r.length===0){return r}for(n=0;n<o;n+=3){a=c(r,n)<<16|c(r,n+1)<<8|c(r,n+2);h.push(e.charAt(a>>18));h.push(e.charAt(a>>12&63));h.push(e.charAt(a>>6&63));h.push(e.charAt(a&63))}switch(r.length-o){case 1:a=c(r,n)<<16;h.push(e.charAt(a>>18)+e.charAt(a>>12&63)+t+t);break;case 2:a=c(r,n)<<16|c(r,n+1)<<8;h.push(e.charAt(a>>18)+e.charAt(a>>12&63)+e.charAt(a>>6&63)+t);break}return h.join("")}return{decode:h,encode:o,VERSION:n}}(jQuery);
//# sourceMappingURL=jquery.base64.js.map