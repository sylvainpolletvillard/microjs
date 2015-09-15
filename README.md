# Microjs

Microjs is inspired by the many libraries that demonstrate jQuery is no longer
necessary. Microjs is the primary/sole javascript library behind our
[Thinkful](https://thinkful.me) and [Shopful](https://shopful.me) projects.

## AJAX

Support not provided. Zepto's [AJAX](http://zeptojs.com/#$.ajax) module is one
option, but we decided instead to go with the [Reqwest](https://github.com/ded/reqwest)
library for better AMD support.

## AMD

Support provided. Microjs can be used with or without RequireJS.

## Examples

The code is pretty simple intent-wise. Here are a few examples.

### find

```javascript
u.find("body").style.backgroundColor = "#fff";

u.find("div#my-div").find("p").onclick = myAction;
```

### findAll

```javascript
u.findAll("div").toArray().forEach(function(div) {
    div.style.height = "200px";

    div.findAll("p").toArray().forEach(function(p) {
        p.innerHTML = "Text";
    });
});
```

### addClass

```javascript
u.find("#sidebar").addClass("hidden");
```

### removeClass

```javascript
u.find("#sidebar").removeClass("hidden");
```

### toggleClass

```javascript
u.find("#sidebar").toggleClass("hidden");
```

### serialize

```javascript
u.find("form#my-form").serialize().forEach(function(field) {
    console.log(field.name, field.value);
});
```

### toArray

```javascript
u.findAll("div").toArray().forEach(function(div) {
    div.onclick = myAction;
});
```

## Users

- [Shopful](https://shopful.me)
- [Thinkful](https://thinkful.me)

## Further reading

http://perfectionkills.com/whats-wrong-with-extending-the-dom/
