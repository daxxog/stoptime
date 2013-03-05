stoptime
========

A basic stop watch timing object for JavaScript.

Install
-------
stable
```bash
npm install stoptime
```

edge
```bash
npm install https://github.com/daxxog/stoptime/tarball/master
```

Usage
-----
```javascript
(function() {
    var watch = stoptime();
    setTimeout(function() {
        console.log(watch.elapsed());
    }, 100);
    setTimeout(function() {
        console.log(watch.reset().elapsed());
    }, 200);
    setTimeout(function() {
        console.log(watch.elapsed());
    }, 300);
})();
```