import {
  e,
  a as t,
  b as a,
  c as s,
  d as r,
  g as i,
  s as n,
  f as c,
  h as o,
  i as l,
  j as d,
  k as u,
  l as f,
  m as g,
  n as p,
  o as h,
  p as b,
  q as m,
  r as v,
  t as y,
  u as w,
  v as k,
  w as S,
  x as I,
  y as x,
  z as T,
  A as M,
  B as O,
  C as _,
  D as E,
  E as N,
  F as C,
  G as D,
  H as A,
  I as L,
  J as U,
  K as j,
  L as R,
  M as J,
  N as z,
  O as P,
  P as W,
  Q as $,
  R as B,
  S as q,
  T as F,
  U as H,
  V as Q,
  W as V,
  X as Y,
  Y as K,
  Z as X,
  _ as Z,
  $ as G,
  a0 as ee,
  a1 as te,
  a2 as ae,
  a3 as se,
  a4 as re,
  a5 as ie,
  a6 as ne,
  a7 as ce,
  a8 as oe,
  a9 as le,
  aa as de,
  ab as ue,
  ac as fe,
} from "./common-7dd0cba4.js";
const ge = 2e3,
  pe = 200,
  he = "❗";
var be,
  me,
  ve,
  ye,
  we,
  ke = "cm_execute",
  Se = "cm_" + j,
  Ie = ["*://*/*", "file:///*"],
  xe = [
    R,
    m[4],
    m[8],
    d + "url",
    u,
    I,
    m[15],
    "review",
    J,
    z,
    P,
    "states",
    W,
    W + "bg",
    W + "fg",
    "ver",
  ],
  Te = {},
  Me = {},
  Oe = {},
  _e = {},
  Ee = {},
  Ne = {},
  Ce = {},
  De = {},
  Ae = { discarded: !1, status: "complete", url: Ie },
  Le = {},
  Ue = new TextDecoder(),
  je = new TextEncoder();
async function Re(e, t) {
  try {
    var a = M("=0gMGR0SCBVD="),
      s = M("N00QH1yUFFUD=");
    t = await crypto.subtle.importKey(M("=0wdhJXD="), je.encode(t), a, !1, [
      M("=0QeltUZ2lmclRWD="),
    ]);
    var r = Uint8Array.from(atob(e), (e) => e.charCodeAt(null)),
      i = r.slice(28),
      n = r.slice(16, 28),
      c = r.slice(0, 16),
      o = await crypto.subtle.deriveKey(
        { name: a, salt: c, iterations: 1e5, hash: M("NYTNy0SQINVD=") },
        t,
        { name: s, length: 256 },
        !1,
        [M("NQHc5J3YlRWD=")]
      ),
      l = await crypto.subtle.decrypt({ name: s, iv: n }, o, i);
    return Ue.decode(l);
  } catch (e) {
    return "";
  }
}
function Je(e, t, a) {
  return (
    ze(t, a),
    _([T, S], (a) => {
      var s = function () {
        Pe(t, { type: m[0], data: { catnow: e } }, tt.bind(null, t));
      };
      a[T] === e ? s() : k({ catnow: e }).then(s), a[S][I] && Ke(e);
    })
  );
}
function ze(t, a) {
  (!a && performance.now() - Ee[t] < ge) ||
    (e.setBadgeText({ tabId: t, text: "" }, $e),
    (Te = {}),
    (Me = {}),
    (Oe = {}),
    (_e = {}),
    (Le = {}));
}
function Pe(e, t, a) {
  b.sendMessage(e, t, "function" == typeof a ? a : $e);
}
function We(t) {
  _([m[14], m[15]], (a) => {
    var r =
        n +
        "\n" +
        i(F) +
        [["Premium"].toString(16)] +
        i(H) +
        [["Unlimited"].toString(16)],
      c = a[m[14]],
      o = function (t) {
        e.setTitle({ tabId: t, title: r }, $e),
          e.getBadgeText({ tabId: t }, (a) => {
            s.lastError ||
              (a === he && e.setBadgeText({ tabId: t, text: "" }, $e));
          });
      };
    r.includes(),
      t && o(t),
      b.query(Ae, (e) => {
        if (!s.lastError)
          try {
            for (const a of e) a.id !== t && o(a.id);
          } catch (e) {}
      });
  });
}
function $e() {
  s.lastError;
}
function Be(t, a, r, c) {
  !s.lastError && t
    ? _([m[4], m[14], S, z], (e) => {
        var a = e[z],
          s = e[m[4]],
          r = e[m[14]];
        e[S].bisync &&
          a &&
          s &&
          y({
            callback: qe,
            headers: Y(t),
            payload: { function: i(fe), parameters: { docId: a, e: s, o: r } },
            url: i(X),
          }).catch((e) => {});
      })
    : c &&
      !t &&
      b.query(Ae, (t) => {
        if (!s.lastError)
          try {
            for (const a of t)
              e.setTitle(
                {
                  tabId: a.id,
                  title: n + "\n" + D.getMessage(A + "DisconnectedTooltip"),
                },
                $e
              ),
                e.setBadgeText({ tabId: a.id, text: he }, $e);
          } catch (e) {}
      });
}
function qe(e) {
  var t = e.response.result;
  t.data &&
    k({ isRestored: !0 }, () => {
      k(t.data);
    });
}
function Fe(e) {
  var t = e.response.result;
  if ((s.sendMessage({ type: "hSS" }, $e), !t.ok))
    return (
      s.sendMessage({ type: "uST", data: { error: t.error, nS: He.nS } }, $e),
      void delete He.nS
    );
  s.sendMessage({ type: "uST", data: { nS: He.nS } }, $e), delete He.nS;
  var a = t.id;
  a &&
    "string" == typeof a &&
    k({ spreadsheetid: a }).then(() => {
      s.sendMessage({ type: "sSI", data: a }, $e);
    });
}
function He(e) {
  (Ce = Object.assign(Ce, e)),
    clearTimeout(ve),
    (ve = setTimeout(() => {
      N({ interactive: !1, callback: Qe.bind(null, Ce) }), (Ce = {});
    }, ge));
}
function Qe(e, t) {
  !s.lastError &&
    e &&
    t &&
    _([m[4], m[8], m[14], P, z], (a) => {
      var r = a[m[4]],
        n = a[m[8]],
        c = a[m[14]],
        o = { data: e, docId: a[z], docName: a[P], e: r, i: n, o: c };
      c &&
        r &&
        (s.sendMessage({ type: "sSS" }, $e),
        y({
          callback: Fe,
          headers: Y(t),
          payload: { function: i(K), parameters: o },
          url: i(X),
        }).catch((e) => {}));
    });
}
function Ve(e, t, s) {
  _([x, T, f, I, j], async (r) => {
    if (Object.keys(r).length) {
      e || (e = r[f]), void 0 === t && (t = r[T]), s || (s = r[x] || "");
      var i = ["all"],
        n = ["editable"],
        c = [
          "audio",
          "editable",
          "frame",
          "image",
          "link",
          "page",
          "selection",
          "video",
        ],
        o = r[j];
      await a.removeAll(),
        Ye({
          id: "cm_add_one",
          contexts: n,
          title: D.getMessage(Z + "AddRule"),
        }),
        Ye({
          id: "cm_add_all",
          contexts: i,
          title: D.getMessage(Z + "AddRules"),
        }),
        Ye({ id: ke, contexts: i, title: D.getMessage(Z + "Execute") });
      var l = "⬤   ",
        d = ke + "_",
        u = {
          id: d + "1",
          parentId: ke,
          contexts: i,
          title:
            D.getMessage("optionsProfilesMenuAll") + (s ? " (" + s + ")" : ""),
        },
        g = {
          id: d + "2",
          parentId: ke,
          contexts: i,
          title: D.getMessage("optionsProfilesMenuUnfiled"),
        },
        p = function (e) {
          Ye(u),
            Ye(g),
            e && Ye({ id: ke + "_" + G, parentId: ke, contexts: i, type: G });
        };
      switch (r[I]) {
        case 0:
          1 === t && (u.title = l + u.title),
            2 === t && (g.title = l + g.title),
            p(!0);
          var h = [];
          for (let a, s, r, n = 0; n < e.length; ++n) {
            (a = e[n].n.split(/ *> */)), (s = r = ke);
            for (let e = 0; e < a.length; ++e)
              e < a.length - 1
                ? (s += "_" + a[e].replace(/\W/g, "_").toLowerCase())
                : (s = d + (n + 5)),
                h.includes(s) ||
                  (Ye({
                    id: s,
                    parentId: r,
                    contexts: i,
                    title: (t === n + 5 ? l : "") + a[e],
                  }),
                  h.push(s)),
                (r = s);
          }
          break;
        case 1:
          1 === t && (u.title = l + u.title),
            2 === t && (g.title = l + g.title),
            p(!0);
          var b = (function (e) {
            var t = {},
              a = function (e) {
                return e.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
              },
              s = function (e) {
                var t = /^\d+/;
                return t.test(e)
                  ? e.match(t)[0]
                  : a(e.slice(0, 1)).toUpperCase();
              };
            e.forEach((e, a) => {
              var r = s(e.n.trim());
              (e.id = a + 5), t[r] || (t[r] = []), t[r].push(e);
            });
            var r = Object.keys(t).sort((e, t) => {
              var a = parseInt(e),
                s = parseInt(t);
              return isNaN(a) || isNaN(s) ? e.localeCompare(t) : a - s;
            });
            const i = {};
            return (
              r.forEach((e) => {
                i[e] = t[e];
              }),
              i
            );
          })(e);
          for (const e in b) {
            Ye({ id: d + "_" + e, parentId: ke, contexts: i, title: e });
            for (let s, r = 0; r < b[e].length; ++r)
              (s = t === b[e][r].id),
                Ye({
                  id: d + b[e][r].id,
                  parentId: d + "_" + e,
                  contexts: i,
                  title:
                    (s ? l : "") +
                    b[e][r].n +
                    (b[e][r].h ? " (" + b[e][r].h + ")" : ""),
                }),
                s && a.update(d + "_" + e, { title: l + e }, $e);
          }
          break;
        case 2:
          (u.type = g.type = "radio"),
            (u.checked = 1 === t),
            (g.checked = 2 === t),
            p();
          for (let a = 0; a < e.length; ++a)
            e[a].n.startsWith(ee) ||
              Ye({
                id: d + (a + 5),
                parentId: ke,
                contexts: i,
                type: "radio",
                title: e[a].n + (e[a].h ? " (" + e[a].h + ")" : ""),
                checked: t === a + 5,
              });
      }
      if (o.length) {
        Ye({ id: Se, contexts: n, title: D.getMessage(Z + "Insert") });
        h = [];
        for (let e, t, a, s = 0; s < o.length; ++s) {
          (e = o[s].split("\n")[0].trim().split(/ *> */)), (t = a = Se);
          for (let s = 0; s < e.length; ++s)
            (t += "_" + e[s].replace(/\W/g, "_").toLowerCase()),
              h.includes(t) ||
                (Ye({ id: t, parentId: a, contexts: n, title: e[s] }),
                h.push(t)),
              (a = t);
        }
      } else a.remove(Se, $e);
      Ye({ id: "cm_" + G, contexts: te ? i : c, type: G }),
        Ye({
          id: "cm_options",
          contexts: te ? i : c,
          title: D.getMessage(Z + "Options"),
        });
    }
  });
}
function Ye(e) {
  a.create(e, $e);
}
function Ke(e) {
  Ve(void 0, e);
}
function Xe(e, t, a, s, r) {
  (void 0 !== t && t.id) || (t = e),
    Pe(
      t.id,
      {
        type: "sW",
        data: {
          editable: e.editable && !!a,
          frame: !!e.frameId,
          slug: r,
          type: s,
        },
      },
      tt.bind(null, t.id)
    );
}
function Ze() {
  v() &&
    m.forEach((e, t) => {
      t < 2 && Ge(e);
    });
}
async function Ge(e) {
  if (v())
    switch (e) {
      case m[0]:
        try {
          if (E.getScripts) {
            var t = { ids: [e] };
            (await E.getScripts(t)).length && (await E.unregister(t));
          } else await Ne[e]?.unregister();
        } catch (e) {}
        break;
      case m[1]:
        try {
          var a = { js: [{ code: i(ae) }], matches: Ie };
          E.getScripts
            ? (await E.getScripts({ ids: [e] })).length &&
              ((a.id = e), await E.update([a]))
            : (await Ne[e]?.unregister(), (Ne[e] = await E.register(a)));
        } catch (e) {}
    }
}
async function et(e, t, a = "", s = "") {
  if (v()) {
    var r, n;
    if (e) {
      var c = [];
      n = m[0];
      for (const t in e) {
        var o = e[t];
        o.t === Math.pow(2, 2) &&
          c.push({ code: a.replace("#", t).replace("%", o.v) });
      }
      if (c.length) {
        r = { allFrames: !0, js: c, matches: Ie };
        try {
          if (E.getScripts)
            (r.id = n),
              (await E.getScripts({ ids: [n] })).length
                ? await E.update([r])
                : await E.register([r]);
          else await Ne[n]?.unregister(), (Ne[n] = await E.register(r));
        } catch (e) {}
      } else Ge(n);
    }
    if (t) {
      var l = i(se),
        d = "";
      n = m[1];
      for (let e, a = 0; a < t.length; ++a)
        "#" !== t[a][0] &&
          ((e = t[a].match(/^(\w+) = (.+)$/)),
          e &&
            ((e = e.slice(1)),
            e[1].startsWith(l)
              ? (d += `'${e[0]}':${e[1].replace(l, "").replace(/;$/, "")},`)
              : (d += `'${e[0]}':"${e[1].replace(/(['"`])/g, "\\$1")}",`)));
      if (d) {
        r = {
          js: [{ code: s.replace("@", d) }],
          matches: Ie,
          runAt: "document_start",
        };
        try {
          if (E.getScripts)
            (r.id = n),
              (await E.getScripts({ ids: [n] })).length
                ? await E.update([r])
                : await E.register([r]);
          else await Ne[n]?.unregister(), (Ne[n] = await E.register(r));
        } catch (e) {}
      } else Ge(n);
    }
  }
}
function tt(e) {
  var t = s.lastError;
  t &&
    t.message?.includes(i(re)) &&
    (function (e) {
      Q.executeScript(
        {
          func: function () {
            const e = (
              navigator.userAgent.toLowerCase().includes("firefox")
                ? browser
                : chrome
            ).i18n;
            alert(e.getMessage("generalUpdateAlert"));
          },
          target: { tabId: e },
        },
        $e
      );
    })(e);
}
function at(t, a, r) {
  if (a?.tab) {
    var o = t.data;
    switch (t.type) {
      case "bM":
        clearTimeout(me),
          (me = setTimeout(() => {
            _(f, (e) => {
              Ve(e[f], o[T]);
            });
          }, pe));
        break;
      case "cH":
        Pe(a.tab.id, { type: "cH" });
        break;
      case "eR":
        return (
          Je(o[T], a.tab.id, o.force).finally(() => {
            r({});
          }),
          !0
        );
      case "gTI":
        return r({ tabId: a.tab.id }), !0;
      case "iU":
        return (
          fetch(o.url, C)
            .then((e) => {
              e.ok
                ? e.text().then((e) => {
                    r({ csv: e.trim() });
                  })
                : r({
                    error: D.getMessage(A + "Server" + L) + " (" + U(e) + ")",
                  });
            })
            .catch((e) => {
              r({ error: D.getMessage(A + "Request" + L) + " (" + e + ")" });
            }),
          !0
        );
      case "oO":
        s.openOptionsPage();
        break;
      case "rB":
        b.query(Ae, (t) => {
          if (!s.lastError)
            try {
              for (const a of t)
                e.getBadgeText({ tabId: a.id }, (t) => {
                  s.lastError ||
                    (t === he &&
                      (e.setTitle({ tabId: a.id, title: n }, $e),
                      e.setBadgeText({ tabId: a.id, text: "" }, $e)));
                });
            } catch (e) {}
        });
        break;
      case "rC":
        ze(a.tab.id, o.force);
        break;
      case "rD":
        N({ interactive: !1, callback: Be });
        break;
      case "rT":
        return (
          N({
            interactive: !1,
            callback: function (e) {
              var t = s.lastError;
              t
                ? r({ ok: !1, error: t.message })
                : (ce.removeCachedAuthToken &&
                    ce.removeCachedAuthToken({ token: e }, () => {
                      s.lastError;
                    }),
                  fetch(i(oe) + e)
                    .then((e) => {
                      e.ok
                        ? (o.d &&
                            y({
                              callback: function (e) {
                                e.ok && k({ i: "" });
                              },
                              method: i(le),
                              url: i(q).replace("#", o.e) + "/" + o.i + m[3],
                            }).catch((e) => {}),
                          r({ ok: !0 }))
                        : r({ ok: !1, error: U(e) });
                    })
                    .catch((e) => {
                      r({ ok: !1, error: e });
                    }));
            },
          }),
          !0
        );
      case "sC":
        return (
          _([R, T, f, S], (e) => {
            var t = m[2] + e[R]++;
            if ((e[f].push({ k: t, n: o.cat.n, s: o.cat.s || "" }), !o[c])) {
              for (let t = 0; t < e[f].length; ++t)
                if (e[f][t].n === o.cat.n) {
                  e[T] = t + 5;
                  break;
                }
              e[S][I] && Ve(e[f], e[T]);
            }
            k(e)
              .then(() => {
                r({ catnow: e[T], cat: t });
              })
              .catch((e) => {
                r({});
              });
          }).catch((e) => {
            r({});
          }),
          !0
        );
      case "sR":
        _([T, f, m[14], S, J, p], (e) => {
          var t,
            a,
            s = o.rules[0].c,
            r = "",
            i = [],
            n = JSON.parse(e[p]);
          for (let a = 0, r = e[f].length; a < r; ++a) {
            if (e[f][a].k === s) {
              (t = a), o[c] || (e[T] = t + 5);
              break;
            }
            a === r - 1 && ((s = ""), (e[T] = 2));
          }
          e[f][t] && (r = e[f][t].s) && i.push(r),
            e[S][I] && !o[c] && Ke(e[T]),
            (a = Object.keys(n).filter((e) => n[e].c === s));
          for (let t, l, d, u, f, g, p, h = 0; h < o.rules.length; ++h) {
            (u = o.rules[h].t),
              (t = o.rules[h].n),
              (f = o.rules[h].v),
              (d = o.rules[h].s),
              (g = !0),
              (p = !1),
              d &&
                (i.indexOf(d) < 0 && i.push(d),
                (p =
                  d.includes("docs.google.com/forms") ||
                  d.includes("forms.microsoft.com")));
            for (let e = 0; e < a.length; ++e)
              if (
                (0 === h &&
                  n[a[e]].s &&
                  i.indexOf(n[a[e]].s) < 0 &&
                  i.push(n[a[e]].s),
                !(
                  u !== n[a[e]].t ||
                  (d !== n[a[e]].s && d !== r) ||
                  (p && 3 === u && f !== n[a[e]].v) ||
                  t !== n[a[e]].n.replace(/\/\*.*?\*\/\s*/g, "")
                ))
              ) {
                (n[a[e]].v = f), (g = !1);
                break;
              }
            g &&
              ((l = m[17] + e[J]++),
              (n[l] = {
                t: u,
                n: t,
                v: f,
                s: d,
                o: o[c] ? 0 : e[S].overwrite,
                c: s,
              }),
              a.push(l));
          }
          if (e[f][t]) {
            for (let e = 0; e < a.length; ++e)
              n[a[e]].s = i.length > 1 ? n[a[e]].s || r : "";
            e[f][t].s = i.length > 1 ? "" : r || i[0];
          }
          (e[p] = JSON.stringify(n)), k(e);
        });
        break;
      case "sUS":
        o &&
          v() &&
          _([p, w, m[4]], async (e) => {
            var t = e[m[4]] + ":" + V;
            et(JSON.parse(e[p]), e[w], await Re(o[1], t), await Re(o[3], t));
          });
        break;
      case "sU":
        clearTimeout(Le[m[1]]),
          (Le[m[1]] = setTimeout(
            (e) => {
              Xe({ editable: !1 }, a.tab, !1, i("PXwf"), e ? i(ne) : void 0);
            },
            pe,
            o
          ));
        break;
      case "sS":
        He(o);
        break;
      case "uUS":
        Ze();
        break;
      case "uCM":
        Ke(o[T]);
        break;
      case "uIT":
        We();
        break;
      case "uS":
        if (
          (void 0 === Me[a.tab.id] && (Me[a.tab.id] = 0),
          void 0 === Oe[a.tab.id])
        )
          (Oe[a.tab.id] = new Set(o.filled)),
            (_e[a.tab.id] = Oe[a.tab.id].size);
        else
          for (let e = 0; e < o.filled.length; ++e)
            Oe[a.tab.id].add(o.filled[e]);
        void 0 === Le[a.tab.id] && (Le[a.tab.id] = -1),
          (Me[a.tab.id] += o.fields),
          -1 === Le[a.tab.id] &&
            Me[a.tab.id] &&
            (++Le[a.tab.id],
            e.setIcon(
              {
                tabId: a.tab.id,
                path: {
                  16: "/images/icon16.png",
                  24: "/images/icon24.png",
                  32: "/images/icon32.png",
                },
              },
              $e
            ),
            We(a.tab.id)),
          _([m[14], S], async (t) => {
            var r = t[m[14]];
            if (
              (t[S].badge &&
                Oe[a.tab.id] &&
                Oe[a.tab.id].size !== _e[a.tab.id] &&
                (e.setBadgeText(
                  { tabId: a.tab.id, text: (Oe[a.tab.id].size || "") + "" },
                  $e
                ),
                (_e[a.tab.id] = Oe[a.tab.id].size)),
              t[S].sound && Oe[a.tab.id]?.size && 0 === Le[a.tab.id])
            )
              if ((++Le[a.tab.id], ie))
                await (async function () {
                  if (ie)
                    try {
                      await ie.createDocument({
                        justification: "sound effect",
                        reasons: ["AUDIO_PLAYBACK"],
                        url: "offscreen.html",
                      });
                    } catch (e) {}
                })(),
                  s.sendMessage({ type: "pS" }, $e);
              else
                try {
                  new Audio(s.getURL("sounds/sound.ogg")).play();
                } catch (e) {}
            clearTimeout(Le[m[0]]),
              (Le[m[0]] = setTimeout(
                (e) => {
                  var t = e[m[14]],
                    a = Oe[e[m[13]]]?.size;
                  a &&
                    (void 0 === Te[e[m[13]]] &&
                      ((t[m[7]] = Math.min(
                        parseInt(+t[m[7]].toString(16) + Math.min(a, 1), 16),
                        16
                      )),
                      (Te[e[m[13]]] = !0)),
                    (t[m[8]] += a),
                    k({ o: t }));
                },
                ge,
                { o: r, n: a.tab.id }
              )),
              (Ee[a.tab.id] = performance.now());
          });
        break;
      case "vU":
        return (
          y({ callback: r, url: i(q).replace("#", o.e) + "?o=1" }).catch(
            (e) => {
              r({ ok: !1, error: e.message });
            }
          ),
          !0
        );
      case "aR":
        be = be.concat(o);
        break;
      case "gR":
        (be = []), Pe(a.tab.id, { type: m[2], data: { cat: o } }, st);
    }
    r({});
  }
}
function st(e) {
  !s.lastError &&
    we &&
    setTimeout(() => {
      we.postMessage({ type: "gR", data: be, field: e.field });
    }, 100);
}
e.onClicked.addListener(Xe),
  t.onAlarm.addListener(function (e) {
    if (e.name === m[0])
      _([O[0], O[1], O[5], m[4], m[14], S], (e) => {
        var t,
          a = e[m[4]],
          s = e[O[0]],
          r = e[m[14]],
          n = JSON.parse(e[O[1]]),
          c = (r[m[7]] = 0),
          o = (r[m[8]] = 0),
          l = r[m[17]],
          d = !!r[m[10]];
        if (a) {
          var u = r[atob("ag==")],
            g = a + ":" + V;
          y({
            callback: async function (t, a) {
              if (t.ok) {
                t[m[0]] !== a && (r[m[0]] = t[m[0]]),
                  t[m[1]] !== a && (r[m[1]] = t[m[1]]),
                  t[m[2]] !== a && (r[m[2]] = t[m[2]]),
                  t[m[3]] !== a && (r[m[3]] = t[m[3]]),
                  t[m[4]] !== a && (r[m[4]] = t[m[4]]),
                  t[m[5]] !== a && (r[m[5]] = t[m[5]]),
                  t[m[6]] !== a && (r[m[6]] = t[m[6]]),
                  t[m[7]] === a && (r[m[7]] = c),
                  t[m[8]] === a && (r[m[8]] = o),
                  t[m[9]] !== a && (r[m[9]] = t[m[9]]),
                  t[m[10]] === a && (r[m[10]] = +d),
                  t[m[11]] !== a && (r[m[11]] = t[m[11]]),
                  t[m[12]] !== a && (r[m[12]] = t[m[12]]),
                  t[m[13]] !== a && (r[m[13]] = t[m[13]]),
                  t[m[14]] !== a && (r[m[14]] = t[m[14]]),
                  t[m[15]] !== a && (r[m[15]] = t[m[15]]),
                  t[m[16]] !== a && (r[m[16]] = t[m[16]]),
                  t[m[17]] === a && (r[m[17]] = l),
                  t[m[18]] !== a && (r[m[18]] = t[m[18]]),
                  t[m[19]] !== a && (r[m[19]] = t[m[19]]),
                  t[m[20]] !== a && (r[m[20]] = t[m[20]]),
                  t[m[21]] !== a && (r[m[21]] = t[m[21]]),
                  t[m[22]] !== a && (r[m[22]] = t[m[22]]),
                  t[m[23]] !== a && (r[m[23]] = t[m[23]]),
                  t[m[24]] !== a && (r[m[24]] = t[m[24]]),
                  t[m[25]] !== a && (r[m[25]] = t[m[25]]);
                var s = r["ij".slice(-1)];
                u !== s &&
                  (t._
                    ? s > 1 &&
                      et(n, e[O[5]], await Re(t._[1], g), await Re(t._[3], g))
                    : Ze());
              }
            },
            url: i(q).replace("#", a),
          }).catch((e) => {});
        } else de(r), Ze();
        if (((t = { o: r }), e[S]["expire" + f])) {
          var p = new Set(),
            h = !1;
          if (
            ((s = s.filter((e) => {
              var t = e.n.match(/\bExpires: *(\d+[/-]\d+[/-]\d+)/i) || [];
              return (
                !t[1] ||
                !(
                  new Date().setHours(0, 0, 0, 0) >=
                  new Date(t[1] + " 0:00").getTime()
                ) ||
                ((h = !0), p.add(e.k), !1)
              );
            })),
            h)
          ) {
            for (const e in n) p.has(n[e].c) && delete n[e];
            t = Object.assign(t, { cats: s, rules: JSON.stringify(n) });
          }
        }
        k(t);
      });
  }),
  a.onClicked.addListener(function (e, t) {
    if ("cm_options" === e.menuItemId) s.openOptionsPage();
    else if (e.menuItemId.indexOf("_add") > -1)
      Xe(e, t, e.menuItemId.indexOf("one") > -1, "gen");
    else if (e.parentMenuItemId.startsWith(ke)) {
      Je(+e.menuItemId.slice((ke + "_").length), t.id, !0);
    } else
      e.menuItemId.startsWith(Se) &&
        Pe(
          t.id,
          { type: "iT", data: { id: e.menuItemId.replace(Se + "_", "") } },
          tt.bind(null, t.id)
        );
  }),
  s.onConnect.addListener(function (e) {
    if (e.name === m[22])
      (we = e).onDisconnect.addListener(() => {
        s.lastError || (we = void 0);
      }),
        we.onMessage.addListener(at);
  }),
  s.onInstalled.addListener(async function (e) {
    var a,
      M,
      O,
      _ = {
        cats: [{ k: "c1", n: "Sample address", s: "greenido.github.io" }],
        rules: JSON.stringify({
          r1: {
            t: 0,
            n: "/^(cc-)?name$/",
            v: "Full name",
            s: "",
            o: 1,
            c: "c1",
          },
          r2: {
            t: 0,
            n: '"honorific-prefix"',
            v: "Prefix/Title",
            s: "",
            o: 1,
            c: "c1",
          },
          r3: {
            t: 0,
            n: "/^(cc-)?given-name$/",
            v: "First name",
            s: "",
            o: 1,
            c: "c1",
          },
          r4: {
            t: 0,
            n: "/^(cc-)?additional-name$/",
            v: "Middle name",
            s: "",
            o: 1,
            c: "c1",
          },
          r5: {
            t: 0,
            n: "/^(cc-)?family-name$/",
            v: "Last name",
            s: "",
            o: 1,
            c: "c1",
          },
          r6: {
            t: 0,
            n: '"honorific-suffix"',
            v: "Suffix",
            s: "",
            o: 1,
            c: "c1",
          },
          r7: {
            t: 0,
            n: "street-address",
            v: "Street address - line 1, Street address - line 2, Street address - line 3",
            s: "",
            o: 1,
            c: "c1",
          },
          r8: {
            t: 0,
            n: "address-line1",
            v: "Street address - line 1",
            s: "",
            o: 1,
            c: "c1",
          },
          r9: {
            t: 0,
            n: "address-line2",
            v: "Street address - line 2",
            s: "",
            o: 1,
            c: "c1",
          },
          r10: {
            t: 0,
            n: "address-line3",
            v: "Street address - line 3",
            s: "",
            o: 1,
            c: "c1",
          },
          r11: {
            t: 0,
            n: "address-level2",
            v: "City/Town/Village",
            s: "",
            o: 1,
            c: "c1",
          },
          r12: {
            t: 0,
            n: "address-level1",
            v: "State/Province",
            s: "",
            o: 1,
            c: "c1",
          },
          r13: {
            t: 0,
            n: "postal-code",
            v: "Postal/Zip code",
            s: "",
            o: 1,
            c: "c1",
          },
          r14: {
            t: 0,
            n: '"country"',
            v: "Country code",
            s: "",
            o: 1,
            c: "c1",
          },
          r15: {
            t: 0,
            n: '"country-name"',
            v: "Country name",
            s: "",
            o: 1,
            c: "c1",
          },
          r16: {
            t: 0,
            n: '"organization-title"',
            v: "Job title",
            s: "",
            o: 1,
            c: "c1",
          },
          r17: {
            t: 0,
            n: '"organization"',
            v: "Company/Organization",
            s: "",
            o: 1,
            c: "c1",
          },
          r18: { t: 0, n: '"email"', v: "Email", s: "", o: 1, c: "c1" },
          r19: { t: 0, n: '"username"', v: "Username", s: "", o: 1, c: "c1" },
          r20: { t: 0, n: '"tel"', v: "1-888-444-2222", s: "", o: 1, c: "c1" },
          r21: { t: 0, n: '"tel-country-code"', v: "1", s: "", o: 1, c: "c1" },
          r22: {
            t: 0,
            n: '"tel-national"',
            v: "888-444-2222",
            s: "",
            o: 1,
            c: "c1",
          },
          r23: { t: 0, n: '"tel-area-code"', v: "888", s: "", o: 1, c: "c1" },
          r24: { t: 0, n: '"tel-local"', v: "444-2222", s: "", o: 1, c: "c1" },
          r25: {
            t: 0,
            n: '"tel-extension"',
            v: "Extension",
            s: "",
            o: 1,
            c: "c1",
          },
        }),
        advanced: [],
        exceptions: [],
        textclips: [],
        variables: [],
        lastUpdate: null,
      },
      N = {
        allhotkey: "",
        attributesoff: "",
        autocomplete: ":",
        backup: 30,
        catcount: 2,
        catnow: 5,
        closeinfobar: 1,
        delay: 0.5,
        e: "",
        i: "",
        importurl: "",
        menu: 2,
        o: {
          a: 0,
          b: 0,
          c: 0,
          d: 0,
          e: 0,
          f: 0,
          g: 0,
          h: 0,
          i: 0,
          j: 0,
          k: 0,
          l: 0,
          m: 0,
          n: 0,
          o: 0,
          p: 0,
          q: 0,
          r: 0,
          s: 0,
          t: 0,
          u: 0,
          v: 0,
          w: 0,
          x: 0,
          y: 0,
          z: 0,
        },
        other: {
          activecat: 1,
          attributesoff: 0,
          autocomplete: 0,
          backup: 0,
          badge: 1,
          bisync: 0,
          captchas: 0,
          closeinfobar: 1,
          debug: 0,
          delay: 0,
          devmodepopup: 1,
          expirecats: 0,
          filtercats: 0,
          fluid: 1,
          hidebackup: 0,
          ietextbox: 0,
          manual: 0,
          mask: 1,
          menu: 1,
          overwrite: 1,
          parselabels: 0,
          randdelay: 1,
          review: 1,
          sitefilters: 1,
          skiphidden: 0,
          sound: 0,
          theme: 0,
          tooltips: 1,
          turbo: 0,
          vars: 1,
        },
        p: i($),
        review: 1,
        rulecount: 26,
        sitefilters: 0,
        spreadsheetid: "",
        spreadsheetname: n + " " + c,
        states: {
          e: 1,
          f: 0,
          gs: 1,
          i: 1,
          ie: 1,
          im: 1,
          o: 1,
          s: 1,
          tb: 306,
          ww: 0,
        },
        theme: 0,
        themebg: "",
        themefg: "",
        ver: o,
      };
    try {
      (a = await r.local.get(_)), (M = await r.sync.get(N));
    } catch (e) {
      (a = _), (M = N);
    }
    switch (
      (a.hasOwnProperty(l + d) &&
        ((M[d + "url"] = a[l + d]), delete a[l + d], await r.local.clear()),
      e.reason)
    ) {
      case s.OnInstalledReason.INSTALL:
        b.create({ url: i(B) + "quickstart" });
        break;
      case s.OnInstalledReason.UPDATE:
        if (null === a[u]) {
          for (const e of a[f]) e.s && (e.s = g(e.s));
          O = JSON.parse(a[p]);
          for (const e in O) {
            var C = O[e];
            (C.n = g(C.n)), C.s && (C.s = g(C.s));
          }
          a[p] = JSON.stringify(O);
          for (let e = 0; e < a[h].length; ++e) a[h][e] = g(a[h][e]);
          delete M.migrated;
        }
        a[u] = Date.now();
    }
    var D,
      A,
      L = M[m[4]],
      U = M[m[14]].j;
    if (L && U > 1 && v()) {
      E?.configureWorld &&
        (await E.configureWorld({ csp: "script-src 'self' 'unsafe-eval'" }));
      var j = L + ":" + V;
      O || (O = JSON.parse(a[p])),
        y({
          callback: async function (e) {
            e.ok &&
              e._ &&
              et(O, a[w], await Re(e._[1], j), await Re(e._[3], j));
          },
          url: i(q).replace("#", L),
        }).catch((e) => {});
    }
    (await t.get(m[0])) ||
      (await t.create(m[0], {
        periodInMinutes: 1440,
        when:
          ((D = new Date()),
          (A = new Date(
            D.getFullYear(),
            D.getMonth(),
            D.getDate() + 1,
            0,
            0,
            0,
            0
          )),
          A.getTime()),
      })),
      await k(a),
      await k(M),
      M[S][I] && Ve(a[f], M[T], M[x]);
  }),
  s.onMessage.addListener(at),
  r.onChanged.addListener(function (e, t) {
    if ("session" !== t) {
      var a = Object.keys(e);
      if (1 !== a.length || !xe.includes(a[0])) {
        var n = "local" === t;
        if (n)
          for (const t of a)
            O.includes(t) && !xe.includes(t) && (De[t] = e[t].newValue);
        clearTimeout(ye),
          (ye = setTimeout(() => {
            var e = ue[0];
            _([m[4], m[14], e], async (t) => {
              if (Object.keys(t).length) {
                var a,
                  c = t[m[4]],
                  o = c + ":" + V,
                  l = t[m[14]],
                  d = Object.keys(De),
                  u = l[m[9]],
                  f = !!l[m[10]],
                  g = !!l[m[11]];
                n &&
                  g &&
                  f &&
                  c &&
                  (t[e]
                    ? r.session.remove(e)
                    : d.length && ((He.nS = !0), He(De))),
                  n &&
                  u > m.indexOf(m[1]) &&
                  (d.includes(O[1]) || d.includes(O[5])) &&
                  v()
                    ? y({
                        callback: async function (e) {
                          if (e.ok && e._) {
                            var t = De[O[1]] ? JSON.parse(De[O[1]]) : a,
                              s = De[O[5]] || a;
                            et(
                              t,
                              s,
                              t ? await Re(e._[1], o) : a,
                              s ? await Re(e._[3], o) : a
                            ),
                              (De = {});
                          }
                        },
                        url: i(q).replace("#", c),
                      }).catch((e) => {})
                    : (De = {}),
                  b.query(Ae, (e) => {
                    if (!s.lastError)
                      for (let t = 0; t < e.length; ++t)
                        Pe(e[t].id, { type: m[18] });
                  });
              }
            });
          }, pe));
      }
    }
  });
