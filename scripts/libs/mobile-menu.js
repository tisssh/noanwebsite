class MobileMenu {
    constructor() {
        this.DOM = {};
        this.DOM.btn = document.querySelector('.mobile-menu__btn');
        this.DOM.cover = document.querySelector('.mobile-menu__cover');
        this.DOM.container = document.querySelector('#global-container');
        this.DOM.menu = document.querySelector('.mobile-menu');
        this.eventType = this._getEventType();
        this._addEvent();
    }

    _getEventType() {
        return window.ontouchstart ? 'touchstart' : 'click';
    }

    _toggle() {
        this.DOM.container.classList.toggle('menu-open');
    }

    _addEvent() {
        this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.cover.addEventListener(this.eventType, this._toggle.bind(this));
        this.DOM.menu.addEventListener(this.eventType, this._toggle.bind(this));
    }
}
