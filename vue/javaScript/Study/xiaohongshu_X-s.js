function sign(t, e) {
    var r = 'A4NjFqYu5wPHsO0XTdDgMa2r1ZQocVte9UJBvk6/7=yRnhISGKblCWi+LpfE8xzm3',
    n = 'iamspam',
    o = (new Date).getTime(),
    i = 'undefined' == typeof window ? __webpack_require__.g : window;
    void 0 !== i && i && i.navigator && i.navigator.userAgent && i.alert && (n = 'test');
    var a = '[object Object]' === Object.prototype.toString.call(e) ||
    '[object Array]' === Object.prototype.toString.call(e);
    return {
      'X-s': function (t) {
        var e, n, o, i, a, u, c, s = '', l = 0;
        for (
          t = function (t) {
            t = t.replace(/\r\n/g, '\n');
            for (var e = '', r = 0; r < t.length; r++) {
              var n = t.charCodeAt(r);
              n < 128 ? e += String.fromCharCode(n) : n > 127 &&
              n < 2048 ? (
                e += String.fromCharCode(n >> 6 | 192),
                e += String.fromCharCode(63 & n | 128)
              ) : (
                e += String.fromCharCode(n >> 12 | 224),
                e += String.fromCharCode(n >> 6 & 63 | 128),
                e += String.fromCharCode(63 & n | 128)
              )
            }
            return e
          }(t);
          l < t.length;
        ) i = (e = t.charCodeAt(l++)) >> 2,
        a = (3 & e) << 4 | (n = t.charCodeAt(l++)) >> 4,
        u = (15 & n) << 2 | (o = t.charCodeAt(l++)) >> 6,
        c = 63 & o,
        isNaN(n) ? u = c = 64 : isNaN(o) &&
        (c = 64),
        s = s + r.charAt(i) + r.charAt(a) + r.charAt(u) + r.charAt(c);
        return s
      }(MD5([o, n, t, a ? _JSON$stringify(e) : ''].join(''))),
      'X-t': o
    }
  }

sign("123","456")
function encrypt_sign(t, e) {
    var r = 1586,
    n = 1648,
    o = 1361,
    i = 1441,
    a = 1680,
    u = 1457,
    c = 1589,
    s = 1545,
    l = 1407,
    f = 1544,
    p = 1438,
    d = 1279,
    h = 1522,
    v = 1464,
    g = 1327,
    m = 1345,
    y = 1394,
    w = 1512,
    b = 1540,
    _ = 1455,
    E = 1622,
    x = 1557,
    k = 1401,
    T = 1566,
    S = 1504,
    L = 1376,
    O = 1472,
    A = 1553,
    R = 1608,
    I = 1599,
    C = 1536,
    N = 1696,
    P = 1525,
    B = 1525,
    F = 1593,
    M = 1502,
    j = 1633,
    D = 1443,
    q = 1607,
    U = 1380,
    Z = 1397,
    G = 1372,
    H = 1313,
    V = 1609,
    Y = 1666,
    W = 1431,
    z = 1312,
    X = 1335,
    K = 1229,
    J = 1337,
    $ = 1570,
    Q = 1605,
    tt = 1230,
    et = 1317,
    rt = 1300,
    nt = 1344,
    ot = 721,
    it = 648,
    at = 654,
    ut = 1027,
    ct = 862,
    st = 848,
    lt = 980,
    ft = 815,
    pt = 780,
    dt = 860,
    ht = 749,
    vt = 676,
    gt = 779,
    mt = 636,
    yt = 606,
    wt = 753,
    bt = 759,
    _t = 689,
    Et = 768,
    xt = 840,
    kt = 775,
    Tt = 776,
    St = 902,
    Lt = 975,
    Ot = 835,
    At = 775,
    Rt = 894,
    It = 992,
    Ct = 894,
    Nt = 699,
    Pt = 658,
    Bt = 619,
    Ft = 621,
    Mt = 750,
    jt = 586,
    Dt = 624,
    qt = 616,
    Ut = 720,
    Zt = 810,
    Gt = 792,
    Ht = 775,
    Vt = 808,
    Yt = 657,
    Wt = 564,
    zt = 720,
    Xt = 979,
    Kt = 810,
    Jt = 967,
    $t = 63,
    Qt = 77,
    te = 277,
    ee = 48,
    re = 205,
    ne = 120,
    oe = 95,
    ie = 30,
    ae = 35,
    ue = 333,
    ce = 181,
    se = 118,
    le = 272,
    fe = 82,
    pe = 2,
    de = 39,
    he = 73,
    ve = 37,
    ge = 91,
    me = 236,
    ye = 240,
    we = 94,
    be = 18,
    _e = 181,
    Ee = 82,
    xe = 3,
    ke = 119,
    Te = 241,
    Se = 31,
    Le = 114,
    Oe = 20,
    Ae = 65,
    Re = 96,
    Ie = 65,
    Ce = 67,
    Ne = 81,
    Pe = 177,
    Be = 114,
    Fe = 7;
    function Me(t, e) {
      return a0_0x4a254a(e, t - - Fe)
    }
    var je = {
      iyoNy: function (t, e) {
        return t < e
      },
      wCdGm: function (t, e) {
        return t > e
      },
      CxQHg: function (t, e) {
        return t < e
      },
      INusx: function (t, e) {
        return t | e
      },
      qMMON: function (t, e) {
        return t | e
      },
      gmSgP: function (t, e) {
        return t | e
      },
      IstbC: function (t, e) {
        return t | e
      },
      EnSzA: function (t, e) {
        return t & e
      },
      XOXay: function (t, e) {
        return t >> e
      },
      LZuoV: function (t, e) {
        return t | e
      },
      sGyDi: Me(1503, 1349) + Me(r, n),
      xfUef: function (t, e) {
        return t(e)
      },
      Kmxaq: function (t, e) {
        return t < e
      },
      ZRJRq: function (t, e) {
        return t << e
      },
      ZRRRm: function (t, e) {
        return t & e
      },
      ygUsJ: function (t, e) {
        return t << e
      },
      Secac: function (t, e) {
        return t + e
      },
      JSwYc: Me(o, i) + Me(1516, a) + Me(u, c) + Me(s, c) + Me(l, f) + Me(p, d) + Me(h, v) + Me(g, m) + Me(y, w) + 'm3',
      PCBuY: Me(b, 1575),
      PdmJK: function (t, e) {
        return t !== e
      },
      pzkhk: function (t, e) {
        return t === e
      },
      oUCPp: Me(1455, 1321) + Me(1437, 1594) + ']',
      mtDgH: function (t, e) {
        return t === e
      },
      PzLhx: Me(_, E) + Me(x, k),
      puwNE: function (t, e) {
        return t(e)
      }
    },
    De = function (t) {
      var e = 1560;
      t = t[n( - $t, - Qt)](/\r\n/g, '\n');
      var r = '';
      function n(t, r) {
        return Me(r - - e, t)
      }
      for (var o = 0; je[n( - te, - 124)](o, t[n(ee, - 25)]); o++) {
        var i = t[n( - re, - ne) + n( - oe, - ie)](o);
        i < 128 ? r += String[n(ae, 18) + n( - ue, - ce)](i) : je[n( - se, - le)](i, 127) &&
        je[n(fe, - pe)](i, 2048) ? (
          r += String[n(de, 18) + n( - 70, - 181)](je[n( - he, - ve)](i >> 6, 192)),
          r += String[n( - ge, 18) + n( - me, - 181)](je[n( - ye, - we)](63 & i, 128))
        ) : (
          r += String[n(86, be) + n( - ve, - _e)](je[n( - Ee, xe)](i >> 12, 224)),
          r += String[n(ke, 18) + n( - Te, - 181)](je[n( - 340, - 267)](je[n(Se, - Le)](je[n( - Oe, - Ae)](i, 6), 63), 128)),
          r += String[n(Re, 18) + n( - Ie, - 181)](je[n(Ce, - Ne)](je[n( - Pe, - Be)](i, 63), 128))
        )
      }
      return r
    },
    qe = je[Me(T, S)],
    Ue = je[Me(L, 1342)],
    Ze = (new Date) [Me(O, A)](),
    Ge = (
      'undefined' == typeof window ? 'undefined' : (0, esm_typeof.Z) (window)
    ) === Me(R, I) + 'ed' ? __webpack_require__.g : window;
    je[Me(C, N)]((0, esm_typeof.Z) (Ge), Me(R, 1497) + 'ed') &&
    Ge &&
    Ge[Me(P, 1600) + 'or'] &&
    Ge[Me(B, F) + 'or'][Me(M, j) + 'nt'] &&
    Ge[Me(D, q)] &&
    (Ue = Me(U, Z));
    var He = je[Me(G, 1410)](Object[Me(1337, H) + 'pe'][Me(V, Y) + 'g'][Me(W, z)](e), je[Me(X, K)]) ||
    je[Me(1511, 1395)](
      Object[Me(J, 1495) + 'pe'][Me(V, $) + 'g'][Me(W, 1275)](e),
      je[Me(Q, R)]
    );
    return {
      'X-s': function (t) {
        var e = 720,
        r = je[o(ot, 856)][o(it, at)]('|'),
        n = 0;
        function o(t, r) {
          return Me(r - - e, t)
        }
        for (; ; ) {
          switch (r[n++]) {
            case '0':
              t = je[o(ut, 894)](De, t);
              continue;
            case '1':
              var i,
              a,
              u,
              c,
              s,
              l,
              f;
              continue;
            case '2':
              for (; je[o(ct, st)](v, t[o(lt, ft)]); ) for (var p = (o(pt, dt) + o(ht, vt) + o(gt, mt)) [o(yt, 654)]('|'), d = 0; ; ) {
                switch (p[d++]) {
                  case '0':
                    l = je[o(wt, bt)](je[o(_t, Et)](je[o(685, 835)](a, 15), 2), je[o(xt, kt)](u, 6));
                    continue;
                  case '1':
                    s = je[o(Tt, 759)](je[o(799, St)](je[o(Lt, Ot)](i, 3), 4), je[o(937, At)](a, 4));
                    continue;
                  case '2':
                    je[o(lt, Rt)](isNaN, a) ? l = f = 64 : je[o(It, Ct)](isNaN, u) &&
                    (f = 64);
                    continue;
                  case '3':
                    h = je[o(Nt, Pt)](
                      je[o(645, Pt)](je[o(Bt, Pt)](h, qe[o(Ft, Mt)](c)), qe[o(689, 750)](s)) + qe[o(jt, 750)](l),
                      qe[o(Dt, 750)](f)
                    );
                    continue;
                  case '4':
                    u = t[o(qt, Ut) + o(Ot, Zt)](v++);
                    continue;
                  case '5':
                    c = je[o(Gt, Ht)](i, 2);
                    continue;
                  case '6':
                    i = t[o(Vt, Ut) + o(Yt, Zt)](v++);
                    continue;
                  case '7':
                    a = t[o(Wt, zt) + o(Xt, Kt)](v++);
                    continue;
                  case '8':
                    f = je[o(Jt, Ot)](u, 63);
                    continue
                }
                break
              }
              continue;
            case '3':
              return h;
            case '4':
              var h = '';
              continue;
            case '5':
              var v = 0;
              continue
          }
          break
        }
      }(
        je[Me(1306, tt)](
          encrypt_MD5,
          [
            Ze,
            Ue,
            t,
            He ? JSON[Me(et, rt) + 'fy'](e) : ''
          ][Me(H, nt)]('')
        )
      ),
      'X-t': Ze
    }
  }