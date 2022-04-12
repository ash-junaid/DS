var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Byond;
(function (Byond) {
    var State = Byond.Core.State;
    var Module = Byond.Core.Module;
    var TimedState = Byond.Common.TimedState;
    var Modules;
    (function (Modules) {
        var Menu = (function (_super) {
            __extends(Menu, _super);
            function Menu(element) {
                _super.call(this, Menu.CLASS.MENU, Menu.verifyMenuStructure(element));
                this._buttons = new Byond.Core.List();
                this._heightChecker = new Byond.Common.ElementWatcher(this.element);
                this.active = new State('active', false);
                this.animating = new TimedState('animating', false);
                this.wrapper = this.element.querySelector('.' + this.moduleName + Menu.CLASS.WRAP);
                this.active.addElement(this.element);
                this.animating.addElement(this.element);
                this.active.before(this.getBeforeActiveChange());
                this.active.after(this.getAfterActiveChange());
                window.addEventListener('resize', (function (self) {
                    var last = 0;
                    return function () {
                        var current = self.staticHeight;
                        if (current != last) {
                            self.updateHeight();
                            last = current;
                        }
                    };
                })(this));
                this.updateHeight();
            }
            Object.defineProperty(Menu.prototype, "staticHeight", {
                get: function () {
                    var height = 0;
                    if (this.active.isActive) {
                        height += this.wrapper.clientHeight;
                        this.childMenus.query((function (x) {
                            height -= x.element ?
                                x.element.clientHeight : 0;
                            if (x.active.isActive) {
                                height += x.element && x.wrapper ?
                                    x.staticHeight : 0;
                            }
                            return;
                        }));
                    }
                    if (height < 0)
                        height = 0;
                    return height;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Menu.prototype, "parentMenu", {
                get: function () {
                    var parents = this.element.getParents();
                    var parentMenu = null;
                    for (var i = 0; i < parents.length; i++) {
                        var mod = parents.itemAt(i).getModule(this.moduleName);
                        if (mod == null)
                            continue;
                        if (!(mod instanceof Menu))
                            continue;
                        parentMenu = mod;
                        break;
                    }
                    return parentMenu;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Menu.prototype, "childMenus", {
                get: function () {
                    var children = this.element.querySelectorAll('.' + this.moduleName);
                    var childMenus = new Byond.Core.List();
                    for (var i = 0; i < children.length; i++) {
                        var mod = children.item(i).getModule(this.moduleName);
                        if (mod == null)
                            continue;
                        if (!(mod instanceof Menu))
                            continue;
                        if (mod.parentMenu != this)
                            continue;
                        childMenus.addItem(mod);
                    }
                    return childMenus;
                },
                enumerable: true,
                configurable: true
            });
            Menu.verifyMenuStructure = function (element) {
                if (element == null)
                    throw new Error(Byond.Core.ERR.NOT_PARSED.replace(Byond.Core.ERR.REPLACE_VAR, 'element'));
                if (!(element instanceof HTMLElement))
                    throw new Error(Byond.Core.ERR.NOT_AN_INSTANCE_OF
                        .replace(Byond.Core.ERR.REPLACE_VAR, 'element')
                        .replace(Byond.Core.ERR.REPLACE_INST, 'HTMLElement'));
                var menuClass = Module.prefix + Menu.CLASS.MENU;
                var wrapClass = menuClass + Menu.CLASS.WRAP;
                function createDiv(className) {
                    var div = document.createElement('div');
                    div.addClass(className);
                    return div;
                }
                function wrap(el, _with) {
                    el.parentElement.insertBefore(_with, el);
                    _with.appendChild(el);
                }
                function createMenuFor(el) {
                    var t = createDiv(menuClass);
                    wrap(el, t);
                    return t;
                }
                function createWrapFor(el) {
                    var t = createDiv(wrapClass);
                    wrap(el, t);
                    return t;
                }
                if (element.hasClass(menuClass)) {
                    element = element;
                }
                else if (element.parentElement.hasClass(menuClass)) {
                    element = element.parentElement;
                }
                else {
                    element = createMenuFor(element);
                }
                if (element.children.length > 1) {
                    throw new Error(Byond.Core.ERR.TOO_MANY_ITEMS
                        .replace(Byond.Core.ERR.REPLACE_VAR, '.' + menuClass)
                        .replace(Byond.Core.ERR.REPLACE_INST, 'children') +
                        ' Must be one element, with class .' + wrapClass);
                }
                if (element.children.length == 0) {
                    element.removeClass(menuClass);
                    element.addClass(wrapClass);
                    element = createMenuFor(element);
                }
                if (element.children.length == 1) {
                    var child = element.children.item(0);
                    if (!child.hasClass(wrapClass)) {
                        createWrapFor(child);
                    }
                }
                return element;
            };
            Menu.prototype.triggerChildCheck = function () {
                this.updateHeight();
            };
            Menu.prototype.getBeforeActiveChange = function () {
                var _this = this;
                return (function () {
                    _this.updateHeight();
                    _this.animating.isActive = true;
                });
            };
            Menu.prototype.getAfterActiveChange = function () {
                var _this = this;
                return (function () {
                    if (_this.parentMenu != null) {
                        _this.parentMenu.triggerChildCheck();
                    }
                    if (_this.active.isActive === false) {
                        _this.childMenus.query((function (x) {
                            x.active.isActive = false;
                            return;
                        }));
                    }
                });
            };
            Menu.prototype.updateHeight = function () {
                if (this.parentMenu)
                    this.parentMenu.triggerChildCheck();
                this.element.style['height'] = (this.staticHeight) + 'px';
            };
            Menu.prototype.addButton = function (button) {
                var _this = this;
                button.addEventListener('click', (function (e) {
                    _this.active.isActive = !_this.active.isActive;
                }));
                this._buttons.addItem(button);
            };
            Menu.CLASS = {
                MENU: 'menu',
                WRAP: '-wrap'
            };
            return Menu;
        })(Module);
        Modules.Menu = Menu;
    })(Modules = Byond.Modules || (Byond.Modules = {}));
})(Byond || (Byond = {}));
//# sourceMappingURL=menu.js.map