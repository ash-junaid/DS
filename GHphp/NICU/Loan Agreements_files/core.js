var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
HTMLElement.prototype._checkModules = function () {
    if (this.modules == null)
        this.modules = new Byond.Core.List();
};
HTMLElement.prototype.addModule = function (module) {
    this._checkModules();
    var _this = this.modules;
    _this.addItem(module);
};
HTMLElement.prototype.getModule = function (moduleName) {
    this._checkModules();
    var _this = this.modules;
    var q = _this.query((function (x) {
        if (x.moduleName == moduleName)
            return x;
        return null;
    }));
    return q.first();
};
HTMLElement.prototype.removeModule = function (module) {
    this._checkModules();
    var _this = this.modules;
    var item = module;
    if (typeof (module) === 'string') {
        item = this.getModules(module);
    }
    this.modules.removeItem(item);
};
HTMLElement.prototype.getParents = function (selector) {
    var list = new Byond.Core.List(), selection = new Byond.Core.List(), child = this, hasSelection = false;
    if (selector != null && typeof (selector) !== 'string')
        selector = '';
    selector = selector || '';
    selector = selector.trim();
    if (selector != '') {
        var s = document.querySelectorAll(selector);
        hasSelection = true;
        if (hasSelection) {
            for (var i = 0; i < s.length; i++) {
                selection.addItem(s[i]);
            }
        }
        return selection;
    }
    while (child.parentElement != null) {
        child = child.parentElement;
        if (hasSelection) {
            if (selection.indexOf(child) > -1)
                list.addItem(child);
        }
        else {
            list.addItem(child);
        }
    }
    return list;
};
HTMLElement.prototype.isStatic = function () {
    var css = window.getComputedStyle(this);
    if (css.position == 'fixed')
        return false;
    if (css.position == 'absolute')
        return false;
    return true;
};
Object.defineProperty(HTMLElement.prototype, '_classList', {
    enumerable: false,
    get: function () {
        var self = this;
        var classList = [];
        if (self.classList !== undefined) {
            for (var i = 0; i < self.classList.length; i++) {
                try {
                    classList.push(self.classList.item(i));
                }
                catch (e) { }
            }
        }
        else {
            var t = this.className.split(' ');
            for (var i = 0; i < t.length; i++)
                if (t[i] !== undefined && t[i].trim() !== '')
                    classList.push(t[i].trim());
        }
        return classList;
    },
    set: function (nClassList) {
        var Core = Byond.Core;
        if (!(nClassList instanceof Array))
            throw new Error(Core.ERR.NOT_AN_INSTANCE_OF
                .replace(Core.ERR.REPLACE_VAR, 'value')
                .replace(Core.ERR.REPLACE_INST, 'string[]'));
        var self = this;
        var attr = self.attributes.getNamedItem('class');
        if (attr == null) {
            attr = document.createAttribute('class');
            self.attributes.setNamedItem(attr);
        }
        if (nClassList.length)
            attr.value = nClassList.join(' ');
    }
});
HTMLElement.prototype.hasClass = function (className) {
    var self = this;
    if (self._classList.indexOf(className) > -1)
        return true;
    return false;
};
HTMLElement.prototype.addClass = function (className) {
    var self = this;
    if (!self.hasClass(className)) {
        var classes = self._classList;
        classes.push(className);
        self._classList = classes;
    }
};
HTMLElement.prototype.removeClass = function (className) {
    var self = this;
    if (self.hasClass(className)) {
        var classes = self._classList;
        var i = classes.indexOf(className);
        classes.splice(i, 1);
        this._classList = classes;
    }
};
HTMLElement.prototype.toggleClass = function (className, state) {
    var self = this;
    if (state != null && typeof (state) === 'boolean')
        state = state;
    else
        state = !self.hasClass(className);
    if (state === true)
        self.addClass(className);
    else
        self.removeClass(className);
};
String.prototype.hash = function (prime) {
    if (prime === void 0) { prime = 5; }
    var hash = 0, i, chr, len;
    if (this.length === 0)
        return hash.toString(16);
    for (i = 0, len = this.length; i < len; i++) {
        chr = this.charCodeAt(i);
        hash = ((hash << prime) - hash) + chr;
        hash |= 0;
    }
    return hash.toString(16);
};
var Byond;
(function (Byond) {
    var Core;
    (function (Core) {
        Core.ERR = {
            REPLACE_VAR: '{{variable}}',
            REPLACE_INST: '{{instance}}',
            NOT_PARSED: 'No value for {{variable}} was parsed.',
            NOT_DEFINED: 'No value for "{{variable}}" has been defined.',
            NOT_AN_INSTANCE_OF: '"{{variable}}" is not an instance of {{instance}}',
            NOT_A_STRING: '"{{variable}}" is not a string.',
            NOT_A_BOOLEAN: '"{{variable}}" is not a boolean.',
            TOO_MANY_ITEMS: '"{{variable}}" has too many {{instance}}.'
        };
        var Handler = (function () {
            function Handler(initHandler) {
                this.handlers = new List();
                if (initHandler != null) {
                    if (typeof (initHandler) !== 'function')
                        throw new Error(Core.ERR.NOT_PARSED.replace(Core.ERR.REPLACE_VAR, 'initHandler'));
                    this.addHandle(initHandler);
                }
            }
            Handler.prototype.addHandle = function (func) {
                if (!func || typeof (func) !== 'function')
                    throw new Error(Core.ERR.NOT_PARSED.replace(Core.ERR.REPLACE_VAR, 'func'));
                if (typeof (func) !== 'function')
                    throw new Error(Core.ERR.NOT_AN_INSTANCE_OF
                        .replace(Core.ERR.REPLACE_VAR, 'func')
                        .replace(Core.ERR.REPLACE_INST, 'function'));
                this.handlers.addItem(func);
            };
            Handler.prototype.removeHandle = function (func) {
                if (!func || typeof (func) !== 'function')
                    throw new Error(Core.ERR.NOT_PARSED.replace(Core.ERR.REPLACE_VAR, 'func'));
                for (var i = 0; i < this.handlers.length; i++) {
                    if (this.handlers.itemAt(i) !== func)
                        continue;
                    this.handlers.removeItem(i);
                }
            };
            Handler.prototype.dispatch = function (context) {
                var data = [];
                for (var _i = 1; _i < arguments.length; _i++) {
                    data[_i - 1] = arguments[_i];
                }
                if (this.handlers.length) {
                    for (var i = 0; i < this.handlers.length; i++) {
                        (function (func, context, data) {
                            var args = data;
                            func.apply(context, args);
                        })(this.handlers.itemAt(i), context, data);
                    }
                }
            };
            return Handler;
        })();
        Core.Handler = Handler;
        var State = (function () {
            function State(activeClass, initState, inactiveClass) {
                if (initState === void 0) { initState = false; }
                this._usePrefix = true;
                this._isActive = false;
                this._activeClass = 'active';
                this._inactiveClass = null;
                this.allowInactiveClass = true;
                this.elements = new List();
                this._beforeHandlers = new Handler();
                this._afterHandlers = new Handler();
                if (!activeClass || typeof (activeClass) !== "string")
                    throw new Error(Core.ERR.NOT_A_STRING.replace(Core.ERR.REPLACE_VAR, 'activeClass'));
                this._activeClass = activeClass;
                if (inactiveClass != null) {
                    if (typeof (inactiveClass) === 'boolean') {
                        this.allowInactiveClass = inactiveClass;
                    }
                    else if (typeof (inactiveClass) !== 'string') {
                        throw new Error(Core.ERR.NOT_AN_INSTANCE_OF
                            .replace(Core.ERR.REPLACE_VAR, 'inactiveClass')
                            .replace(Core.ERR.REPLACE_INST, 'boolean or string'));
                    }
                }
            }
            Object.defineProperty(State.prototype, "usePrefix", {
                get: function () {
                    return this._usePrefix;
                },
                set: function (n) {
                    if (n != this._usePrefix) {
                        this._usePrefix = n;
                        this.updateElements(true);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(State.prototype, "isActive", {
                get: function () {
                    return this._isActive;
                },
                set: function (nState) {
                    if (typeof (nState) !== "boolean")
                        throw new Error();
                    if (this._isActive != nState) {
                        this._isActive = nState;
                        this.updateElements();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(State.prototype, "activeClass", {
                get: function () {
                    if (this.usePrefix)
                        return State.prefix + this._activeClass;
                    return this._activeClass;
                },
                set: function (nClass) {
                    this.updateElements(true);
                    this._activeClass = nClass;
                    this.updateElements();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(State.prototype, "inactiveClass", {
                get: function () {
                    if (!this.allowInactiveClass || this._inactiveClass == null)
                        return null;
                    if (this.usePrefix)
                        return State.prefix + this._inactiveClass;
                    return this._inactiveClass;
                },
                set: function (nClass) {
                    this.updateElements(true);
                    this._activeClass = nClass;
                    this.updateElements();
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(State.prototype, "count", {
                get: function () {
                    return this.elements.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(State.prototype, "element", {
                get: function () {
                    return this.elements.first();
                },
                enumerable: true,
                configurable: true
            });
            State.prototype.updateElements = function (forceRemove) {
                if (forceRemove != null && typeof (forceRemove) !== 'boolean')
                    throw new Error(Core.ERR.NOT_A_BOOLEAN.replace(Core.ERR.REPLACE_VAR, 'forceState'));
                var state = this._isActive;
                if (forceRemove == null)
                    this._beforeHandlers.dispatch(this);
                for (var i = 0; i < this.elements.length; i++) {
                    var cElement = this.elements.itemAt(i);
                    if (cElement != null)
                        this.updateElementsClass(cElement, state, forceRemove);
                }
                if (forceRemove == null)
                    this._afterHandlers.dispatch(this);
            };
            State.prototype.updateElementsClass = function (element, active, forceRemove) {
                if (forceRemove === void 0) { forceRemove = false; }
                if (!element)
                    throw new Error(Core.ERR.NOT_PARSED.replace(Core.ERR.REPLACE_VAR, 'element'));
                if (!(element instanceof HTMLElement))
                    throw new Error(Core.ERR.NOT_AN_INSTANCE_OF
                        .replace(Core.ERR.REPLACE_VAR, 'element')
                        .replace(Core.ERR.REPLACE_INST, 'HTMLElement'));
                if (forceRemove) {
                    element.removeClass(this.activeClass);
                    element.removeClass(this.inactiveClass);
                    return;
                }
                element.toggleClass(this.activeClass, active);
                if (this._inactiveClass != null) {
                    element.toggleClass(this.inactiveClass, !active);
                }
            };
            State.prototype.addElement = function (element) {
                if (element != null) {
                    this.elements.addItem(element);
                    this.updateElementsClass(element, this.isActive);
                }
            };
            State.prototype.removeElement = function (element) {
                try {
                    var index = this.elements.removeItem(element);
                }
                catch (e) {
                    console.error(e);
                }
            };
            State.prototype.elementAt = function (index) {
                return this.elements.itemAt(index);
            };
            State.prototype.before = function (func, remove) {
                if (remove === true)
                    this._beforeHandlers.removeHandle(func);
                else
                    this._beforeHandlers.addHandle(func);
            };
            State.prototype.after = function (func, remove) {
                if (remove === true)
                    this._afterHandlers.removeHandle(func);
                else
                    this._afterHandlers.addHandle(func);
            };
            State.prototype.addHandle = function (func, remove) {
                this.after(func, remove);
            };
            State.prefix = 'is-';
            return State;
        })();
        Core.State = State;
        var Module = (function () {
            function Module(moduleName, element) {
                this.states = new List();
                this._moduleName = Module.prefix + moduleName;
                this._element = element;
                this.bind(this._element);
            }
            Object.defineProperty(Module.prototype, "moduleName", {
                get: function () {
                    return this._moduleName;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Module.prototype, "element", {
                get: function () {
                    return this._element;
                },
                set: function (nElement) {
                    this._element = nElement;
                },
                enumerable: true,
                configurable: true
            });
            Module.prototype.bind = function (element) {
                if (!(element instanceof HTMLElement))
                    throw new Error(Core.ERR.NOT_AN_INSTANCE_OF
                        .replace(Core.ERR.REPLACE_INST, 'HTMLElement')
                        .replace(Core.ERR.REPLACE_VAR, 'element'));
                element.addModule(this);
            };
            Module.prototype.unbind = function (element) {
                element.removeModule(this);
            };
            Module.prefix = 'mod-';
            return Module;
        })();
        Core.Module = Module;
        var List = (function () {
            function List() {
                var items = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    items[_i - 0] = arguments[_i];
                }
                this.items = [];
                for (var i = 0; i < items.length; i++) {
                    this.items.push(items[i]);
                }
            }
            Object.defineProperty(List.prototype, "length", {
                get: function () {
                    return this.items.length;
                },
                enumerable: true,
                configurable: true
            });
            List.prototype.addItem = function (item, addAt) {
                if (addAt != null && addAt > -1) {
                    this.items.splice(addAt, 0, item);
                    return addAt;
                }
                this.items.push(item);
                return this.indexOf(item);
            };
            List.prototype.itemAt = function (index) {
                if (typeof (index) !== 'number' || index < 0)
                    throw new Error(List.ERR_NOT_A_NUMBER.replace('{{replace}}', 'index'));
                var item = this.items[index];
                return item;
            };
            List.prototype.removeItem = function (i) {
                var isIndex = typeof (i) == 'number' && i > -1;
                var index = isIndex ? i : this.items.indexOf(i);
                if (index > -1)
                    this.items.splice(index, 1);
                else
                    throw new Error(List.ERR_OUT_OF_RANGE.replace('{{replace}}', index));
            };
            List.prototype.indexOf = function (item) {
                return this.items.indexOf(item);
            };
            List.prototype.toArray = function () {
                return [].concat(this.items);
            };
            List.prototype.first = function () {
                return this.items[0];
            };
            List.prototype.last = function () {
                return this.items[this.items.length - 1];
            };
            List.prototype.query = function (func) {
                var ar = new List();
                for (var i = 0; i < this.items.length; i++) {
                    var rst = func(this.items[i], i);
                    if (rst != null)
                        ar.addItem(rst);
                }
                return ar;
            };
            List.ERR_NOT_A_NUMBER = 'Unhandled Error: "{{replace}}" is not a number';
            List.ERR_OUT_OF_RANGE = 'Unhandled Error: Index "{{replace}}" is out of range';
            return List;
        })();
        Core.List = List;
    })(Core = Byond.Core || (Byond.Core = {}));
    var Common;
    (function (Common) {
        var State = Core.State;
        var Module = Core.Module;
        var List = Core.List;
        var Timer;
        (function (Timer) {
            var CSSTimeRegex = /^((\d+(\.\d+)?)([m]?s))$/i;
            function StringToTimeObj(timeStr) {
                var objs = timeStr.match(CSSTimeRegex);
                var kv = {
                    key: '',
                    value: 0
                };
                if (objs != null) {
                    if (objs[2] != null && objs[4] != null) {
                        kv.value = parseFloat(objs[2]);
                        kv.key = objs[4];
                    }
                }
                return kv;
            }
            Timer.StringToTimeObj = StringToTimeObj;
            function TimeObjToString(timeObj) {
                return timeObj.value + timeObj.key;
            }
            Timer.TimeObjToString = TimeObjToString;
            function TimeObjToTime(timeObj) {
                return timeObj.value * (timeObj.key == 's' ? 1000 : 1);
            }
            Timer.TimeObjToTime = TimeObjToTime;
            function strngToTime(timeStr) {
                return TimeObjToTime(StringToTimeObj(timeStr));
            }
            Timer.strngToTime = strngToTime;
        })(Timer = Common.Timer || (Common.Timer = {}));
        var TimedState = (function (_super) {
            __extends(TimedState, _super);
            function TimedState(activeClass, initialState) {
                var _this = this;
                if (initialState === void 0) { initialState = false; }
                _super.call(this, activeClass, initialState, false);
                this._interval = {
                    key: 's',
                    value: 1
                };
                this.before((function () {
                    if (_this.element != null) {
                        if (_this.isActive == true) {
                            _this.start(_this._interval);
                        }
                    }
                    else {
                        console.warn(Core.ERR.NOT_DEFINED
                            .replace(Core.ERR.REPLACE_VAR, 'this.element'));
                    }
                }));
            }
            Object.defineProperty(TimedState.prototype, "interval", {
                get: function () {
                    return Timer.TimeObjToString(this._interval);
                },
                set: function (to) {
                    this._interval = Timer.StringToTimeObj(to);
                },
                enumerable: true,
                configurable: true
            });
            TimedState.prototype.cancel = function () {
                if (this.timer)
                    clearTimeout(this.timer);
            };
            TimedState.prototype.start = function (timeObj) {
                var _this = this;
                this.cancel();
                this.timer = setTimeout((function () {
                    _this.isActive = false;
                }), Timer.TimeObjToTime(timeObj));
            };
            TimedState.prototype.addElement = function (element) {
                _super.prototype.addElement.call(this, element);
                var cssTime = window.getComputedStyle(element).transitionDuration;
                if (cssTime != null && typeof (cssTime) === 'string') {
                    if (Timer.StringToTimeObj(cssTime).value != 0)
                        this.interval = cssTime;
                }
            };
            return TimedState;
        })(State);
        Common.TimedState = TimedState;
        var ElementWatcher = (function (_super) {
            __extends(ElementWatcher, _super);
            function ElementWatcher(element) {
                _super.call(this, 'element-watcher', element);
                this.watchers = new List();
            }
            ElementWatcher.prototype.tick = function () {
                var _this = this;
                for (var i = 0; i < this.watchers.length; i++) {
                    this.observeChanges(this.watchers.itemAt(i));
                }
                if (this.timer != null)
                    clearTimeout(this.timer);
                this.timer = setTimeout(function () {
                    _this.tick();
                });
            };
            ElementWatcher.prototype.observeChanges = function (watcher) {
                var c = watcher.getMethod(this.element);
                if (c !== watcher.lastValue) {
                    var e = {
                        current: c,
                        previous: watcher.lastValue
                    };
                    watcher.lastValue = c;
                    watcher.handler.call(this, e, this.element);
                }
            };
            ElementWatcher.prototype.addWatcher = function (getMethod, func) {
                var watcher = {
                    getMethod: getMethod,
                    handler: func
                };
                var startTimer = this.watchers.length == 0;
                this.watchers.addItem(watcher);
                this.observeChanges(watcher);
                if (startTimer === true) {
                    this.tick();
                }
                return watcher;
            };
            ElementWatcher.prototype.attrWatcher = function (attr, func) {
                var getter = function (element) {
                    var attrItem = element.attributes.getNamedItem(attr);
                    if (attrItem != null)
                        return attrItem.value;
                    return null;
                };
                this.addWatcher(getter, func);
            };
            ElementWatcher.prototype.styleWatcher = function (property, func) {
                var getter = function (element) {
                    var css = window.getComputedStyle(element);
                    if (css[property] != null)
                        return css[property];
                    return null;
                };
                this.addWatcher(getter, func);
            };
            ElementWatcher.prototype.removeWatcher = function (watcher) {
                if (watcher == null)
                    throw new Error(Core.ERR.NOT_PARSED.replace(Core.ERR.REPLACE_VAR, 'watcher'));
                this.watchers.removeItem(watcher);
            };
            return ElementWatcher;
        })(Module);
        Common.ElementWatcher = ElementWatcher;
        var Persist = (function () {
            function Persist(persistThis) {
                this.canceled = false;
                this.justCanceled = false;
                this.persistMethod = persistThis;
                this.tick();
            }
            Object.defineProperty(Persist.prototype, "result", {
                get: function () {
                    return this._result;
                },
                enumerable: true,
                configurable: true
            });
            Persist.prototype.tick = function () {
                this._result = this.persistMethod();
                if (!this.justCanceled)
                    this.canceled = false;
                this.justCanceled = false;
                if (!this.canceled) {
                    if (requestAnimationFrame)
                        requestAnimationFrame(this.tock());
                    else
                        setTimeout(this.tock());
                }
            };
            Persist.prototype.tock = function () {
                var _this = this;
                return (function () {
                    _this.tick();
                });
            };
            Persist.prototype.stop = function () {
                this.canceled = true;
                this.justCanceled = true;
            };
            return Persist;
        })();
        Common.Persist = Persist;
        function NetRequest(path, handler, error) {
            var req;
            req = new XMLHttpRequest();
            if (!req)
                throw new Error(Core.ERR.NOT_DEFINED
                    .replace(Core.ERR.REPLACE_INST, "XMLHttpRequest"));
            req.open('GET', path, true);
            req.addEventListener('loadend', handler);
            if (error !== null && typeof (error) === 'function') {
                req.addEventListener('abord', error);
                req.addEventListener('error', error);
                req.addEventListener('timeout', error);
            }
            req.send();
        }
        Common.NetRequest = NetRequest;
        var Cookies;
        (function (Cookies) {
            function set(cname, cvalue, exdays) {
                var d = new Date();
                d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
                var expires = "expires=" + d.toUTCString();
                document.cookie = cname + "=" + cvalue + "; " + expires;
            }
            Cookies.set = set;
            function get(cname) {
                var name = cname + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i];
                    while (c.charAt(0) == ' ')
                        c = c.substring(1);
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            }
            Cookies.get = get;
            function check(name) {
                var c = get(name);
                return c != null && c.trim() != '';
            }
            Cookies.check = check;
        })(Cookies = Common.Cookies || (Common.Cookies = {}));
    })(Common = Byond.Common || (Byond.Common = {}));
})(Byond || (Byond = {}));
//# sourceMappingURL=core.js.map