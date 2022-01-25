class HoverDirClass {
    constructor(element, options = {}) {
        this.defaults = {
            speed: 300,
            easing: 'ease',
            hoverDelay: 0,
            hoverElem: 'div'
        };

        // get the element
        this.$el = element;
        // get the element parent
        this.$elParent = this.$el.parentNode;
        // set options
        this.options = Object.assign(this.defaults, options);
        // initialize visibility to false for show and hide method
        this.isVisible = false;
        // get the hover for this element
        this.$hoverElem = this.$el.querySelector(this.options.hoverElem);
        // transition properties
        this.transitionProp = 'all ' + this.options.speed + 'ms ' + this.options.easing;
        // support for CSS transitions
        this.support = this._supportsTransitions();
        // load the events
        this._loadEvents();
    }

    /**
     * Detect if CSS transitions are supported
     *
     * @return {Boolean}
     */
    _supportsTransitions() {
        if (typeof Modernizr !== 'undefined') {
            return Modernizr.csstransitions;
        } else {
            var b = document.body || document.documentElement,
                s = b.style,
                p = 'transition';

            if (typeof s[p] === 'string') {
                return true;
            }

            // Tests for vendor specific prop
            var v = ['Moz', 'webkit', 'Webkit', 'Khtml', 'O', 'ms'];
            p = p.charAt(0).toUpperCase() + p.substr(1);

            for (var i = 0; i < v.length; i++) {
                if (typeof s[v[i] + p] === 'string') {
                    return true;
                }
            }

            return false;
        }
    }

    /**
     * Bind the events to the element
     */
    _loadEvents() {
        this.$el.addEventListener('mouseenter', event => {
            this.direction = this._getDir({x: event.pageX, y: event.pageY});
            this._showHover();
        });
        this.$el.addEventListener('mouseleave', event => {
            this.direction = this._getDir({x: event.pageX, y: event.pageY});
            this._hideHover();
        });
    }

    /**
     * Show the hover of the element
     */
    _showHover() {
        var styleCSS = this._getStyle(this.direction);

        if (this.support) {
            this.$hoverElem.style.transition = '';
        }

        // this.$hoverElem.style.display = 'none';
        this._setStyles(this.$hoverElem, styleCSS.from);
        clearTimeout(this.tmhover);

        this.tmhover = setTimeout(() => {
            // Show the hover element
            this.$hoverElem.style.display = '';
            this.$hoverElem.style.transition = this.transitionProp;
            this.$elParent.classList.add('is-being-hovered');

            this._applyAnimation(styleCSS.to);

        }, this.options.hoverDelay);

        this.isVisible = true;
    }

    /**
     * Hide the hover to the element
     */
    _hideHover() {
        var styleCSS = this._getStyle(this.direction);

        if (this.support) {
            this.$hoverElem.style.transition = this.transitionProp;
        }

        this.$elParent.classList.remove('is-being-hovered');
        clearTimeout(this.tmhover);
        this._applyAnimation(styleCSS.from);
        this.isVisible = false;
    }

    _getOffset(elem) {
        const rect = elem.getBoundingClientRect();
        const bodyScrollTop = Math.max(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop);
        const bodyScrollLeft = Math.max(window.pageXOffset, document.documentElement.scrollLeft, document.body.scrollLeft);

        return {
            top: rect.top + bodyScrollTop,
            left: rect.left + bodyScrollLeft
        }
    }

    /**
     * get the direction when the event is triggered
     * credits : http://stackoverflow.com/a/3647634
     *
     * @param {Object} coordinates
     * @returns {Interger}
     */
    _getDir(coordinates) {
        // the width and height of the current div
        var w = this.$el.offsetWidth,
            h = this.$el.offsetHeight,
            // calculate the x and y to get an angle to the center of the div from that x and y.
            // gets the x value relative to the center of the DIV and "normalize" it
            x = (coordinates.x - this._getOffset(this.$el).left - (w / 2)) * (w > h ? (h / w) : 1),
            y = (coordinates.y - this._getOffset(this.$el).top - (h / 2)) * (h > w ? (w / h) : 1),
            // the angle and the direction from where the mouse came in/went out clockwise (TRBL=0123);
            // first calculate the angle of the point,
            // add 180 deg to get rid of the negative values
            // divide by 90 to get the quadrant
            // add 3 and do a modulo by 4 to shift the quadrants to a proper clockwise TRBL (top/right/bottom/left) **/
            direction = Math.round((((Math.atan2(y, x) * (180 / Math.PI)) + 180) / 90) + 3) % 4;
        return direction;
    }

    /**
     * get the style when the event is triggered
     *
     * @param {(Interger|String)} direction
     * @returns {Object}
     */
    _getStyle(direction) {
		var fromStyle,
            toStyle,
            slideFromTop = {transform: 'translateY(-100%) translateX(0)'},
            slideFromBottom = {transform: 'translateY(100%) translateX(0)'},
            slideFromLeft = {transform: 'translateY(0) translateX(-100%)'},
            slideFromRight = {transform: 'translateY(0) translateX(100%)'},
            slideTop = {transform: 'translateY(0)'},
            slideLeft = {transform: 'translateX(0)'};

        switch (direction) {
            case 0:
            case 'top':
                // from top
                fromStyle = slideFromTop;
                toStyle = slideTop;
                break;
            case 1:
            case 'right':
                // from right
                fromStyle = slideFromRight;
                toStyle = slideLeft;
                break;
            case 2:
            case 'bottom':
                // from bottom
                fromStyle = slideFromBottom;
                toStyle = slideTop;
                break;
            case 3:
            case 'left':
                // from left
                fromStyle = slideFromLeft;
                toStyle = slideLeft;
                break;
        }

        return {from: fromStyle, to: toStyle};
    }

    _setStyles(ele, styles = {}) {
        for (var key in styles) {
            var value = styles[key];
            ele.style[key] = value;
        }
    }

    /**
     * Apply the transition
     *
     * @param {Object} styleCSS
     */
    _applyAnimation(styleCSS) {
        this._setStyles(this.$hoverElem, Object.assign(styleCSS, {duration: this.options.speed}));
    }

    setOptions(options) {
        this.options = Object.assign(this.defaults, this.options, options);
    }

    /**
     * Bind the plugin.
     */
    rebuild(options) {
        if (typeof options === 'object') {
            this.setOptions(options);
        }
        this._loadEvents();
    }
}

var hoverDir = function(elOrEls, option) {
    function isSingleElement(o) {
        return (
            typeof HTMLElement === "object" ? o instanceof HTMLElement :
            o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
        );
    }

    // if only one dom element is passed, wrap in array so we can forEach
    var els = isSingleElement(elOrEls) ? [ elOrEls ] : [...elOrEls];

    els.forEach(el => {
        var data = el.getAttribute('data-hoverdir');
        var options = typeof option === 'object' && option;

        // Initialize hoverdir.
        if (!data) {
            data = new HoverDirClass(el, options);
            el.setAttribute('data-hoverdir', data);
        }
    })
}

module.exports = hoverDir;