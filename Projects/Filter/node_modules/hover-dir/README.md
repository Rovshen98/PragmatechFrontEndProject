
# DirectionAwareHoverEffect

Direction-aware hover effect using CSS3 transforms and dependency-free JavaScript. The idea is to slide in an overlay from the direction we are moving with the mouse.

[article on Codrops](http://tympanus.net/codrops/?p=8328)

[demo](http://tympanus.net/TipsTricks/DirectionAwareHoverEffect/)

### How to use

```js
document.addEventListener('DOMContentLoaded', function() {
    var elements = document.querySelectorAll('.selector');
    
    hoverDir(elements);
    
    // or with custom options
    hoverDir(elements, {
        speed: 500,
        hoverElem: '.custom-class'
    });

});
```

### Default options

```js
defaults: {
    speed: 300, // time in ms
    easing: 'ease',
    hoverElem: 'div'
}
```


### Todo
* Write tests
* Add methods
* Write proper documentation

Licensed under the MIT License
