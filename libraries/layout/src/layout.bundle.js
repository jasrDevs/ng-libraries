/*!
 * Bootstrap v5.1.3 (https://getbootstrap.com/)
 * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
 */
const initLayout = (function (t, e) {
  'object' == typeof exports && 'undefined' != typeof module
    ? (module.exports = e())
    : 'function' == typeof define && define.amd
    ? define(e)
    : ((t = 'undefined' != typeof globalThis ? globalThis : t || self).bootstrap = e());
})(this, function () {
  'use strict';
  const t = 'transitionend',
    e = t => {
      let e = t.getAttribute('data-bs-target');
      if (!e || '#' === e) {
        let i = t.getAttribute('href');
        if (!i || (!i.includes('#') && !i.startsWith('.'))) return null;
        i.includes('#') && !i.startsWith('#') && (i = `#${i.split('#')[1]}`),
          (e = i && '#' !== i ? i.trim() : null);
      }
      return e;
    },
    i = t => {
      const i = e(t);
      return i && document.querySelector(i) ? i : null;
    },
    n = t => {
      const i = e(t);
      return i ? document.querySelector(i) : null;
    },
    s = e => {
      e.dispatchEvent(new Event(t));
    },
    o = t =>
      !(!t || 'object' != typeof t) && (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
    r = t =>
      o(t)
        ? t.jquery
          ? t[0]
          : t
        : 'string' == typeof t && t.length > 0
        ? document.querySelector(t)
        : null,
    a = (t, e, i) => {
      Object.keys(i).forEach(n => {
        const s = i[n],
          r = e[n],
          a =
            r && o(r)
              ? 'element'
              : null == (l = r)
              ? `${l}`
              : {}.toString
                  .call(l)
                  .match(/\s([a-z]+)/i)[1]
                  .toLowerCase();
        var l;
        if (!new RegExp(s).test(a))
          throw new TypeError(
            `${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`
          );
      });
    },
    l = t =>
      !(!o(t) || 0 === t.getClientRects().length) &&
      'visible' === getComputedStyle(t).getPropertyValue('visibility'),
    c = t =>
      !t ||
      t.nodeType !== Node.ELEMENT_NODE ||
      !!t.classList.contains('disabled') ||
      (void 0 !== t.disabled
        ? t.disabled
        : t.hasAttribute('disabled') && 'false' !== t.getAttribute('disabled')),
    h = t => {
      if (!document.documentElement.attachShadow) return null;
      if ('function' == typeof t.getRootNode) {
        const e = t.getRootNode();
        return e instanceof ShadowRoot ? e : null;
      }
      return t instanceof ShadowRoot ? t : t.parentNode ? h(t.parentNode) : null;
    },
    u = t => {
      t.offsetHeight;
    },
    f = () => {
      const { jQuery: t } = window;
      return t && !document.body.hasAttribute('data-bs-no-jquery') ? t : null;
    },
    p = [],
    g = t => {
      var e;
      (e = () => {
        const e = f();
        if (e) {
          const i = t.NAME,
            n = e.fn[i];
          (e.fn[i] = t.jQueryInterface),
            (e.fn[i].Constructor = t),
            (e.fn[i].noConflict = () => ((e.fn[i] = n), t.jQueryInterface));
        }
      }),
        'loading' === document.readyState
          ? (p.length ||
              document.addEventListener('DOMContentLoaded', () => {
                p.forEach(t => t());
              }),
            p.push(e))
          : e();
    },
    _ = t => {
      'function' == typeof t && t();
    },
    b = (e, i, n = !0) => {
      if (!n) return void _(e);
      const o =
        (t => {
          if (!t) return 0;
          let { transitionDuration: e, transitionDelay: i } = window.getComputedStyle(t);
          const n = Number.parseFloat(e),
            s = Number.parseFloat(i);
          return n || s
            ? ((e = e.split(',')[0]),
              (i = i.split(',')[0]),
              1e3 * (Number.parseFloat(e) + Number.parseFloat(i)))
            : 0;
        })(i) + 5;
      let r = !1;
      const a = ({ target: n }) => {
        n === i && ((r = !0), i.removeEventListener(t, a), _(e));
      };
      i.addEventListener(t, a),
        setTimeout(() => {
          r || s(i);
        }, o);
    },
    y = /[^.]*(?=\..*)\.|.*/,
    w = /\..*/,
    E = /::\d+$/,
    A = {};
  let T = 1;
  const O = { mouseenter: 'mouseover', mouseleave: 'mouseout' },
    C = /^(mouseenter|mouseleave)/i,
    k = new Set([
      'click',
      'dblclick',
      'mouseup',
      'mousedown',
      'contextmenu',
      'mousewheel',
      'DOMMouseScroll',
      'mouseover',
      'mouseout',
      'mousemove',
      'selectstart',
      'selectend',
      'keydown',
      'keypress',
      'keyup',
      'orientationchange',
      'touchstart',
      'touchmove',
      'touchend',
      'touchcancel',
      'pointerdown',
      'pointermove',
      'pointerup',
      'pointerleave',
      'pointercancel',
      'gesturestart',
      'gesturechange',
      'gestureend',
      'focus',
      'blur',
      'change',
      'reset',
      'select',
      'submit',
      'focusin',
      'focusout',
      'load',
      'unload',
      'beforeunload',
      'resize',
      'move',
      'DOMContentLoaded',
      'readystatechange',
      'error',
      'abort',
      'scroll',
    ]);
  function L(t, e) {
    return (e && `${e}::${T++}`) || t.uidEvent || T++;
  }
  function x(t) {
    const e = L(t);
    return (t.uidEvent = e), (A[e] = A[e] || {}), A[e];
  }
  function D(t, e, i = null) {
    const n = Object.keys(t);
    for (let s = 0, o = n.length; s < o; s++) {
      const o = t[n[s]];
      if (o.originalHandler === e && o.delegationSelector === i) return o;
    }
    return null;
  }
  function S(t, e, i) {
    const n = 'string' == typeof e,
      s = n ? i : e;
    let o = P(t);
    return k.has(o) || (o = t), [n, s, o];
  }
  function N(t, e, i, n, s) {
    if ('string' != typeof e || !t) return;
    if ((i || ((i = n), (n = null)), C.test(e))) {
      const t = t =>
        function (e) {
          if (
            !e.relatedTarget ||
            (e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget))
          )
            return t.call(this, e);
        };
      n ? (n = t(n)) : (i = t(i));
    }
    const [o, r, a] = S(e, i, n),
      l = x(t),
      c = l[a] || (l[a] = {}),
      h = D(c, r, o ? i : null);
    if (h) return void (h.oneOff = h.oneOff && s);
    const d = L(r, e.replace(y, '')),
      u = o
        ? (function (t, e, i) {
            return function n(s) {
              const o = t.querySelectorAll(e);
              for (let { target: r } = s; r && r !== this; r = r.parentNode)
                for (let a = o.length; a--; )
                  if (o[a] === r)
                    return (
                      (s.delegateTarget = r), n.oneOff && j.off(t, s.type, e, i), i.apply(r, [s])
                    );
              return null;
            };
          })(t, i, n)
        : (function (t, e) {
            return function i(n) {
              return (n.delegateTarget = t), i.oneOff && j.off(t, n.type, e), e.apply(t, [n]);
            };
          })(t, i);
    (u.delegationSelector = o ? i : null),
      (u.originalHandler = r),
      (u.oneOff = s),
      (u.uidEvent = d),
      (c[d] = u),
      t.addEventListener(a, u, o);
  }
  function I(t, e, i, n, s) {
    const o = D(e[i], n, s);
    o && (t.removeEventListener(i, o, Boolean(s)), delete e[i][o.uidEvent]);
  }
  function P(t) {
    return (t = t.replace(w, '')), O[t] || t;
  }
  const j = {
      on(t, e, i, n) {
        N(t, e, i, n, !1);
      },
      one(t, e, i, n) {
        N(t, e, i, n, !0);
      },
      off(t, e, i, n) {
        if ('string' != typeof e || !t) return;
        const [s, o, r] = S(e, i, n),
          a = r !== e,
          l = x(t),
          c = e.startsWith('.');
        if (void 0 !== o) {
          if (!l || !l[r]) return;
          return void I(t, l, r, o, s ? i : null);
        }
        c &&
          Object.keys(l).forEach(i => {
            !(function (t, e, i, n) {
              const s = e[i] || {};
              Object.keys(s).forEach(o => {
                if (o.includes(n)) {
                  const n = s[o];
                  I(t, e, i, n.originalHandler, n.delegationSelector);
                }
              });
            })(t, l, i, e.slice(1));
          });
        const h = l[r] || {};
        Object.keys(h).forEach(i => {
          const n = i.replace(E, '');
          if (!a || e.includes(n)) {
            const e = h[i];
            I(t, l, r, e.originalHandler, e.delegationSelector);
          }
        });
      },
      trigger(t, e, i) {
        if ('string' != typeof e || !t) return null;
        const n = f(),
          s = P(e),
          o = e !== s,
          r = k.has(s);
        let a,
          l = !0,
          c = !0,
          h = !1,
          d = null;
        return (
          o &&
            n &&
            ((a = n.Event(e, i)),
            n(t).trigger(a),
            (l = !a.isPropagationStopped()),
            (c = !a.isImmediatePropagationStopped()),
            (h = a.isDefaultPrevented())),
          r
            ? ((d = document.createEvent('HTMLEvents')), d.initEvent(s, l, !0))
            : (d = new CustomEvent(e, { bubbles: l, cancelable: !0 })),
          void 0 !== i &&
            Object.keys(i).forEach(t => {
              Object.defineProperty(d, t, { get: () => i[t] });
            }),
          h && d.preventDefault(),
          c && t.dispatchEvent(d),
          d.defaultPrevented && void 0 !== a && a.preventDefault(),
          d
        );
      },
    },
    M = new Map(),
    H = {
      set(t, e, i) {
        M.has(t) || M.set(t, new Map());
        const n = M.get(t);
        n.has(e) || 0 === n.size
          ? n.set(e, i)
          : console.error(
              `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                Array.from(n.keys())[0]
              }.`
            );
      },
      get: (t, e) => (M.has(t) && M.get(t).get(e)) || null,
      remove(t, e) {
        if (!M.has(t)) return;
        const i = M.get(t);
        i.delete(e), 0 === i.size && M.delete(t);
      },
    };
  class B {
    constructor(t) {
      (t = r(t)) && ((this._element = t), H.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      H.remove(this._element, this.constructor.DATA_KEY),
        j.off(this._element, this.constructor.EVENT_KEY),
        Object.getOwnPropertyNames(this).forEach(t => {
          this[t] = null;
        });
    }
    _queueCallback(t, e, i = !0) {
      b(t, e, i);
    }
    static getInstance(t) {
      return H.get(r(t), this.DATA_KEY);
    }
    static getOrCreateInstance(t, e = {}) {
      return this.getInstance(t) || new this(t, 'object' == typeof e ? e : null);
    }
    static get VERSION() {
      return '5.1.3';
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
  }
  const $ = '[data-bs-toggle="button"]';
  class z extends B {
    static get NAME() {
      return 'button';
    }
    toggle() {
      this._element.setAttribute('aria-pressed', this._element.classList.toggle('active'));
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = z.getOrCreateInstance(this);
        'toggle' === t && e[t]();
      });
    }
  }
  function q(t) {
    return (
      'true' === t ||
      ('false' !== t &&
        (t === Number(t).toString() ? Number(t) : '' === t || 'null' === t ? null : t))
    );
  }
  function F(t) {
    return t.replace(/[A-Z]/g, t => `-${t.toLowerCase()}`);
  }
  j.on(document, 'click.bs.button.data-api', $, t => {
    t.preventDefault();
    const e = t.target.closest($);
    z.getOrCreateInstance(e).toggle();
  }),
    g(z);
  const U = {
      setDataAttribute(t, e, i) {
        t.setAttribute(`data-bs-${F(e)}`, i);
      },
      removeDataAttribute(t, e) {
        t.removeAttribute(`data-bs-${F(e)}`);
      },
      getDataAttributes(t) {
        if (!t) return {};
        const e = {};
        return (
          Object.keys(t.dataset)
            .filter(t => t.startsWith('bs'))
            .forEach(i => {
              let n = i.replace(/^bs/, '');
              (n = n.charAt(0).toLowerCase() + n.slice(1, n.length)), (e[n] = q(t.dataset[i]));
            }),
          e
        );
      },
      getDataAttribute: (t, e) => q(t.getAttribute(`data-bs-${F(e)}`)),
      offset(t) {
        const e = t.getBoundingClientRect();
        return { top: e.top + window.pageYOffset, left: e.left + window.pageXOffset };
      },
      position: t => ({ top: t.offsetTop, left: t.offsetLeft }),
    },
    V = {
      find: (t, e = document.documentElement) =>
        [].concat(...Element.prototype.querySelectorAll.call(e, t)),
      findOne: (t, e = document.documentElement) => Element.prototype.querySelector.call(e, t),
      children: (t, e) => [].concat(...t.children).filter(t => t.matches(e)),
      parents(t, e) {
        const i = [];
        let n = t.parentNode;
        for (; n && n.nodeType === Node.ELEMENT_NODE && 3 !== n.nodeType; )
          n.matches(e) && i.push(n), (n = n.parentNode);
        return i;
      },
      prev(t, e) {
        let i = t.previousElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.previousElementSibling;
        }
        return [];
      },
      next(t, e) {
        let i = t.nextElementSibling;
        for (; i; ) {
          if (i.matches(e)) return [i];
          i = i.nextElementSibling;
        }
        return [];
      },
      focusableChildren(t) {
        const e = [
          'a',
          'button',
          'input',
          'textarea',
          'select',
          'details',
          '[tabindex]',
          '[contenteditable="true"]',
        ]
          .map(t => `${t}:not([tabindex^="-"])`)
          .join(', ');
        return this.find(e, t).filter(t => !c(t) && l(t));
      },
    };

  const ot = 'collapse',
    rt = { toggle: !0, parent: null },
    at = { toggle: 'boolean', parent: '(null|element)' },
    lt = 'show',
    ct = 'collapse',
    ht = 'collapsing',
    dt = 'collapsed',
    ut = ':scope .collapse .collapse',
    ft = '[data-bs-toggle="collapse"]';
  class pt extends B {
    constructor(t, e) {
      super(t),
        (this._isTransitioning = !1),
        (this._config = this._getConfig(e)),
        (this._triggerArray = []);
      const n = V.find(ft);
      for (let t = 0, e = n.length; t < e; t++) {
        const e = n[t],
          s = i(e),
          o = V.find(s).filter(t => t === this._element);
        null !== s && o.length && ((this._selector = s), this._triggerArray.push(e));
      }
      this._initializeChildren(),
        this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()),
        this._config.toggle && this.toggle();
    }
    static get Default() {
      return rt;
    }
    static get NAME() {
      return ot;
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t,
        e = [];
      if (this._config.parent) {
        const t = V.find(ut, this._config.parent);
        e = V.find('.collapse.show, .collapse.collapsing', this._config.parent).filter(
          e => !t.includes(e)
        );
      }
      const i = V.findOne(this._selector);
      if (e.length) {
        const n = e.find(t => i !== t);
        if (((t = n ? pt.getInstance(n) : null), t && t._isTransitioning)) return;
      }
      if (j.trigger(this._element, 'show.bs.collapse').defaultPrevented) return;
      e.forEach(e => {
        i !== e && pt.getOrCreateInstance(e, { toggle: !1 }).hide(),
          t || H.set(e, 'bs.collapse', null);
      });
      const n = this._getDimension();
      this._element.classList.remove(ct),
        this._element.classList.add(ht),
        (this._element.style[n] = 0),
        this._addAriaAndCollapsedClass(this._triggerArray, !0),
        (this._isTransitioning = !0);
      const s = `scroll${n[0].toUpperCase() + n.slice(1)}`;
      this._queueCallback(
        () => {
          (this._isTransitioning = !1),
            this._element.classList.remove(ht),
            this._element.classList.add(ct, lt),
            (this._element.style[n] = ''),
            j.trigger(this._element, 'shown.bs.collapse');
        },
        this._element,
        !0
      ),
        (this._element.style[n] = `${this._element[s]}px`);
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (j.trigger(this._element, 'hide.bs.collapse').defaultPrevented) return;
      const t = this._getDimension();
      (this._element.style[t] = `${this._element.getBoundingClientRect()[t]}px`),
        u(this._element),
        this._element.classList.add(ht),
        this._element.classList.remove(ct, lt);
      const e = this._triggerArray.length;
      for (let t = 0; t < e; t++) {
        const e = this._triggerArray[t],
          i = n(e);
        i && !this._isShown(i) && this._addAriaAndCollapsedClass([e], !1);
      }
      (this._isTransitioning = !0),
        (this._element.style[t] = ''),
        this._queueCallback(
          () => {
            (this._isTransitioning = !1),
              this._element.classList.remove(ht),
              this._element.classList.add(ct),
              j.trigger(this._element, 'hidden.bs.collapse');
          },
          this._element,
          !0
        );
    }
    _isShown(t = this._element) {
      return t.classList.contains(lt);
    }
    _getConfig(t) {
      return (
        ((t = { ...rt, ...U.getDataAttributes(this._element), ...t }).toggle = Boolean(t.toggle)),
        (t.parent = r(t.parent)),
        a(ot, t, at),
        t
      );
    }
    _getDimension() {
      return this._element.classList.contains('collapse-horizontal') ? 'width' : 'height';
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t = V.find(ut, this._config.parent);
      V.find(ft, this._config.parent)
        .filter(e => !t.includes(e))
        .forEach(t => {
          const e = n(t);
          e && this._addAriaAndCollapsedClass([t], this._isShown(e));
        });
    }
    _addAriaAndCollapsedClass(t, e) {
      t.length &&
        t.forEach(t => {
          e ? t.classList.remove(dt) : t.classList.add(dt), t.setAttribute('aria-expanded', e);
        });
    }
    static jQueryInterface(t) {
      return this.each(function () {
        const e = {};
        'string' == typeof t && /show|hide/.test(t) && (e.toggle = !1);
        const i = pt.getOrCreateInstance(this, e);
        if ('string' == typeof t) {
          if (void 0 === i[t]) throw new TypeError(`No method named "${t}"`);
          i[t]();
        }
      });
    }
  }
  j.on(document, 'click.bs.collapse.data-api', ft, function (t) {
    ('A' === t.target.tagName || (t.delegateTarget && 'A' === t.delegateTarget.tagName)) &&
      t.preventDefault();
    const e = i(this);
    V.find(e).forEach(t => {
      pt.getOrCreateInstance(t, { toggle: !1 }).toggle();
    });
  }),
    g(pt);
  return {
    Collapse: pt,
  };
});
export default initLayout;
