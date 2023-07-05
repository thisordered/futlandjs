// ==UserScript==
// @name        FUT Auto Buyer
// @version     1.6.2
// @author      CK Algos
// @description FUT Auto Buyer
// @match       https://www.ea.com/*/fifa/ultimate-team/web-app/*
// @match       https://www.ea.com/fifa/ultimate-team/web-app/*
// @namespace   http://tampermonkey.net/
// @grant       GM_xmlhttpRequest
// @connect     ea.com
// @connect     ea2.com
// @connect     futbin.com
// @connect     futwiz.com
// @connect     discordapp.com
// @connect     futbin.org
// @connect     exp.host
// @connect     on.aws
// @require     https://code.jquery.com/jquery-3.6.1.min.js
// @require     https://raw.githubusercontent.com/ckalgos/FUT-Auto-Buyer/main/external/discord.11.4.2.min.js
// @require     https://greasyfork.org/scripts/47911-font-awesome-all-js/code/Font-awesome%20AllJs.js?version=275337
// @require     https://github.com/ckalgos/fut-trade-enhancer/releases/latest/download/fut-trade-enhancer.user.js
// @updateURL   https://github.com/ckalgos/fut-auto-buyer/releases/latest/download/fut-auto-buyer.user.js
// @downloadURL https://github.com/ckalgos/fut-auto-buyer/releases/latest/download/fut-auto-buyer.user.js
// @noFrame
// ==/UserScript==

(() => {
  var e = {
      665: () => {
        const e = window.fetch;
        window.fetch = function (t, n) {
          if (
            t &&
            (/discordapp/.test(t) || /exp.host/.test(t)) &&
            ("POST" === n.method || "DELETE" === n.method)
          )
            return new Promise((e, i) => {
              const s = Object.assign({}, n.headers, {
                "User-Agent": "From Node",
              });
              GM_xmlhttpRequest({
                method: n.method,
                headers: s,
                url: t,
                data: n.body,
                onload: (t) => {
                  200 === t.status || 204 === t.status
                    ? ((t.text = () => new Promise((e) => e(t.responseText))),
                      (t.headers = t.responseHeaders
                        .split("\r\n")
                        .reduce(function (e, t) {
                          var n = t.split(": ");
                          return e.set(n[0], n[1]), e;
                        }, new Map())),
                      e(t))
                    : i(t);
                },
              });
            });
          return e.call(this, t, n);
        };
      },
    },
    t = {};
  function n(i) {
    var s = t[i];
    if (void 0 !== s) return s.exports;
    var o = (t[i] = { exports: {} });
    return e[i](o, o.exports, n), o.exports;
  }
  (n.d = (e, t) => {
    for (var i in t)
      n.o(t, i) &&
        !n.o(e, i) &&
        Object.defineProperty(e, i, { enumerable: !0, get: t[i] });
  }),
    (n.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
    (n.r = (e) => {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (() => {
      "use strict";
      var e = {};
      n.r(e),
        n.d(e, {
          idAbActiveTransfers: () => Ve,
          idAbAddBuyDelay: () => de,
          idAbAddFilterBC: () => Ot,
          idAbAddFilterGK: () => ue,
          idAbAvailableItems: () => Oe,
          idAbBidExact: () => q,
          idAbBidFutBin: () => wt,
          idAbBuyPrice: () => H,
          idAbCardCount: () => z,
          idAbCloseTabToggle: () => pe,
          idAbCoins: () => ke,
          idAbCountDown: () => Tt,
          idAbCustomDiscordNameNotificationToggle: () => me,
          idAbCycleAmount: () => Z,
          idAbDelayToAdd: () => ce,
          idAbDontMoveWon: () => At,
          idAbDownloadFilter: () => ot,
          idAbDownloadStats: () => Bt,
          idAbFiltersFileToUpload: () => mt,
          idAbFiltersToUpload: () => rt,
          idAbIgnoreAllowToggle: () => ht,
          idAbItemExpiring: () => G,
          idAbMaxBid: () => j,
          idAbMaxPurchases: () => Ut,
          idAbMaxRating: () => ie,
          idAbMaxSearchPage: () => le,
          idAbMessageNotificationToggle: () => fe,
          idAbMinDeleteCount: () => X,
          idAbMinRating: () => ne,
          idAbNumberFilterSearch: () => He,
          idAbOverSearchWarning: () => kt,
          idAbPauseFor: () => ee,
          idAbProfit: () => at,
          idAbQuickSell: () => Wt,
          idAbRandMinBidInput: () => se,
          idAbRandMinBidToggle: () => ae,
          idAbRandMinBuyInput: () => oe,
          idAbRandMinBuyToggle: () => re,
          idAbReportProblem: () => Ct,
          idAbRequestCount: () => Ee,
          idAbResumeAfterErrorOccured: () => $t,
          idAbSearchProgress: () => Fe,
          idAbSearchResult: () => J,
          idAbSellPrice: () => Y,
          idAbSellToggle: () => K,
          idAbSendListingNotificationToggle: () => ge,
          idAbShouldSort: () => _t,
          idAbSoldItems: () => Le,
          idAbSolveCaptcha: () => De,
          idAbSortBy: () => Pt,
          idAbSortOrder: () => It,
          idAbSoundToggle: () => be,
          idAbStatisticsProgress: () => Re,
          idAbStatus: () => Ue,
          idAbStopAfter: () => te,
          idAbStopErrorCode: () => ze,
          idAbStopErrorCodeCount: () => je,
          idAbToggleRunner: () => St,
          idAbUnsoldItems: () => We,
          idAbUploadBtn: () => gt,
          idAbUploadFilter: () => st,
          idAbUseFutWiz: () => Lt,
          idAbWaitTime: () => Q,
          idAddIgnorePlayers: () => ct,
          idAddIgnorePlayersList: () => pt,
          idAntiCaptchKey: () => Qe,
          idAutoClearExpired: () => bt,
          idAutoClearLog: () => et,
          idBtnActions: () => xt,
          idBtnReport: () => Mt,
          idBuyFutBinPercent: () => vt,
          idBuyFutBinPrice: () => yt,
          idCalcBinPrice: () => Ie,
          idCapatchaMp3: () => qe,
          idClearLogButton: () => Pe,
          idDeleteFilter: () => Me,
          idDiscordChannelId: () => we,
          idDiscordToken: () => Se,
          idFUTMarketAlertToken: () => Ae,
          idFilterDropdown: () => W,
          idFilterDropdownHeader: () => O,
          idFinishMp3: () => Rt,
          idFutBinDuration: () => ft,
          idInfoWrapper: () => Te,
          idLog: () => Et,
          idNotificationType: () => ve,
          idPreserveChanges: () => Be,
          idProgressAutobuyer: () => $e,
          idProxyAddress: () => Ye,
          idProxyLogin: () => Ke,
          idProxyPassword: () => Ze,
          idProxyPort: () => Xe,
          idRemoveIgnorePlayers: () => ut,
          idRunFilterSequential: () => dt,
          idSearchCancelButton: () => Ce,
          idSearchWrapper: () => Je,
          idSelectFilterCount: () => xe,
          idSelectedFilter: () => V,
          idSellAfterTax: () => Ne,
          idSellCheckBuyPrice: () => lt,
          idSellFutBinPercent: () => it,
          idSellFutBinPrice: () => nt,
          idSellRatingThreshold: () => tt,
          idSession: () => Nt,
          idTelegramBotToken: () => he,
          idTelegramChatId: () => ye,
          idTestNotification: () => _e,
          idTooltip: () => Dt,
          idWebHookUrl: () => Ft,
          idWinMp3: () => Ge,
        });
      var t = {};
      n.r(t), n.d(t, { startAutoBuyer: () => Ji, stopAutoBuyer: () => Gi });
      const i = "Paused",
        s = "Stopped",
        o = {
          521: "Request Rejected",
          512: "Request Rejected",
          429: "Too many request from this user",
          426: "Other user won the (card / bid)",
          461: "Other user won the (card / bid)",
        },
        r = {
          idBuyFutBinPercent: 95,
          idAbCardCount: 1e3,
          idAbCardCountisDefaultValue: !0,
          idAbItemExpiring: "1H",
          idAbItemExpiringisDefaultValue: !0,
          idAbSearchResult: 21,
          idAbSearchResultisDefaultValue: !0,
          idSellFutBinPercent: "105-110",
          idFutBinDuration: "1H",
          idFutBinDurationisDefaultValue: !0,
          idAbMinDeleteCount: 10,
          idSellRatingThreshold: 100,
          idSellRatingThresholdisDefaultValue: !0,
          idAbMinRating: 10,
          idAbMinRatingisDefaultValue: !0,
          idAbMaxRating: 100,
          idAbMaxRatingisDefaultValue: !0,
          idAbMaxSearchPage: 5,
          idAbMaxSearchPageisDefaultValue: !0,
          idAbRandMinBidInput: 300,
          idAbRandMinBidInputisDefaultValue: !0,
          idAbRandMinBuyInput: 300,
          idAbRandMinBuyInputisDefaultValue: !0,
          idBuyFutBinPrice: !0,
          idSellFutBinPrice: !0,
          idSellCheckBuyPrice: !0,
          idAbSellToggle: !1,
          idAbRandMinBidToggle: !0,
        },
        a = {
          idAbAddBuyDelay: !0,
          idAbCycleAmount: "15-20",
          idAbDelayToAdd: "3S",
          idAbMaxPurchases: 1,
          idAbNumberFilterSearch: 3,
          idAbNumberFilterSearchisDefaultValue: !0,
          idAbPauseFor: "15-30S",
          idAbSoundToggle: !0,
          idAbStopAfter: "1-2H",
          idAbStopErrorCodeCount: 3,
          idAbWaitTime: "5-8",
          idAbWaitTimeisDefaultValue: !1,
          idAutoClearExpired: !0,
          idAutoClearLog: !0,
        },
        l = !!window.ReactNativeWebView;
      let d;
      const c = () => {
          let e = (
            window.indexedDB ||
            window.mozIndexedDB ||
            window.webkitIndexedDB ||
            window.msIndexedDB ||
            window.shimIndexedDB
          ).open("userDatasAB", 2);
          (e.onupgradeneeded = function (t) {
            d = e.result;
            try {
              t.oldVersion < 1 &&
                d.createObjectStore("Filters", { keyPath: "filterName" }),
                t.oldVersion < 2 &&
                  d.createObjectStore("CommonSettings", {
                    keyPath: "filterName",
                  });
            } catch (t) {}
          }),
            (e.onsuccess = function () {
              d = e.result;
            });
        },
        u = (e) =>
          new Promise((t, n) => {
            const i = d.transaction("Filters", "readwrite");
            i.objectStore("Filters").delete(e),
              (i.oncomplete = function () {
                t();
              }),
              (i.onerror = function () {
                n();
              });
          }),
        p = (e, t, n = "Filters") =>
          new Promise((i, s) => {
            const o = d.transaction(n, "readwrite");
            o.objectStore(n).put({ filterName: e, jsonData: t }),
              (o.oncomplete = function () {
                i();
              }),
              (o.onerror = function () {
                s();
              });
          }),
        f = (e = "Filters") =>
          new Promise((t, n) => {
            const i = d.transaction(e, "readonly").objectStore(e).getAll();
            (i.onsuccess = function () {
              const e = {};
              if (i.result.length)
                for (let t = 0; t < i.result.length; t++)
                  e[i.result[t].filterName] = i.result[t].jsonData;
              t(e);
            }),
              (i.onerror = function () {
                n();
              });
          }),
        m = (e = "Filters") => f(e),
        g = (e, t, n = "Filters") => p(e, t, n),
        b = new Map(),
        h = (e, t) => {
          b.set(e, t);
        },
        y = (e) => {
          const t = b.get(e);
          return t && t.expiryTimeStamp && t.expiryTimeStamp < Date.now()
            ? (b.delete(e), null)
            : t;
        },
        v = (e = !1) => {
          const t = y("BuyerSettings") || {};
          if (e) return t;
          const n = y("CommonSettings") || {};
          return Object.assign({}, t, n);
        },
        S = (e) => {
          let t = y(e) || 0;
          return t++, h(e, t), t;
        },
        w = () =>
          ((y("CommonSettings") || {}).idAbUseFutWiz
            ? "futwiz"
            : "futbin"
          ).toUpperCase(),
        A = () => {
          let e = window.XMLHttpRequest.prototype.open;
          window.XMLHttpRequest.prototype.open = function (t, n, i) {
            this.addEventListener(
              "readystatechange",
              function () {
                if (4 === this.readyState)
                  if (
                    l &&
                    this.responseURL.includes("/ut/game/fifa23/usermassinfo")
                  ) {
                    let e = JSON.parse(this.responseText);
                    if (e) {
                      const { personaId: t, personaName: n } = e.userInfo,
                        i = y("useremail");
                      window.ReactNativeWebView.postMessage(
                        JSON.stringify({
                          payload: {
                            personaId: t,
                            personaName: n,
                            userEmail: i,
                            language: services.Localization.locale.language,
                          },
                          type: "initUser",
                        })
                      );
                    }
                  } else if (
                    l &&
                    this.responseURL.includes("/ut/game/fifa23/tradepile")
                  ) {
                    let e = JSON.parse(this.responseText);
                    if (e) {
                      const t = e.auctionInfo
                        .filter((e) => e.itemData.assetId)
                        .map(({ itemData: e }) => {
                          const {
                            id: t,
                            assetId: n,
                            definitionId: i,
                            rareflag: s,
                            rating: o,
                          } = e;
                          return {
                            id: t,
                            assetId: n,
                            definitionId: i,
                            rareflag: s,
                            rating: o,
                          };
                        });
                      window.ReactNativeWebView.postMessage(
                        JSON.stringify({ payload: t, type: "transferList" })
                      );
                    }
                  } else if (
                    this.responseURL.includes(
                      "https://gateway.ea.com/proxy/identity/pids/me"
                    )
                  ) {
                    let e = JSON.parse(this.responseText);
                    e &&
                      e.pid &&
                      !y("useremail") &&
                      h("useremail", e.pid.email);
                  }
              },
              !1
            ),
              e.call(this, t, n, i);
          };
        },
        C = (e) => {
          let t = "",
            n =
              "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
            i = n.length;
          for (var s = 0; s < e; s++)
            t += n.charAt(Math.floor(Math.random() * i));
          return t;
        },
        T = async (e = 1) => {
          const t = Math.floor(Math.random());
          await new Promise((n) => setTimeout(n, 1e3 * (t + e)));
        },
        B = (e, t) => {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({
              type: "downloadFile",
              payload: { data: JSON.stringify(e, null, 4), fileName: t },
            })
          );
        },
        P = (e, t) => {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({
              type: "downloadFile",
              payload: { data: e, fileName: t },
            })
          );
        },
        I = (e, t) => {
          const n =
              "data:text/json;charset=utf-8," +
              encodeURIComponent(JSON.stringify(e, null, 4)),
            i = document.createElement("a");
          i.setAttribute("href", n),
            i.setAttribute("download", `${t}.json`),
            document.body.appendChild(i),
            i.click(),
            document.body.removeChild(i);
        },
        _ = (e, t) => {
          const n =
              "data:text/csv;charset=utf-8,%EF%BB%BF" + encodeURIComponent(e),
            i = document.createElement("a");
          i.setAttribute("href", n),
            i.setAttribute("download", `${t}.csv`),
            document.body.appendChild(i),
            i.click(),
            document.body.removeChild(i);
        },
        x = (e) => {
          if (e) {
            let t = (e += "")[e.length - 1].toUpperCase(),
              n = D(e.substring(0, e.length - 1)) / 1e3,
              i = "M" === t ? 60 : "H" === t ? 3600 : 1;
            return n && (n *= i), n;
          }
          return 0;
        },
        M = (e) => {
          const t = R(e);
          return t.length >= 2 ? F(t[0], t[1]) : t[0] || 0;
        },
        D = (e) => {
          if (e) {
            const [t, n] = e.split("-").map((e) => parseInt(e));
            return 1e3 * Math.round(Math.random() * (n - t) + t);
          }
          return 0;
        },
        N = (e) => {
          if (e) {
            let t = e[e.length - 1].toUpperCase(),
              n = parseInt(e.substring(0, e.length - 1)),
              i = "M" === t ? 60 : "H" === t ? 3600 : 1;
            return n && (n *= i), n;
          }
          return 0;
        },
        F = (e, t) => Math.round(Math.random() * (t - e) + e),
        R = (e) => (e ? (e + "").split("-").map((e) => parseInt(e)) : []),
        E = (e, t) => (e.length <= t && (e += " ".repeat(t - e.length)), e),
        k = function (e) {
          const t = v();
          if (!l && t.idAbSoundToggle) {
            let t = document.getElementById(Ge);
            "capatcha" == e
              ? (t = document.getElementById(qe))
              : "finish" == e
              ? (t = document.getElementById(Rt))
              : "cardWon" == e && (t = document.getElementById(Ge)),
              (t.currentTime = 0),
              t.play();
          }
        },
        U = function (e) {
          if (!e) return 0;
          var t = new Date().getTime();
          return (Math.max(0, e.end - t) / (e.end - e.start)) * 100;
        },
        L = function (t) {
          for (let n of Object.keys(t)) {
            const i = t[n];
            if (t[n + "isDefaultValue"]) continue;
            const s = `#${e[n]}`;
            if ("boolean" == typeof i) {
              if (i) {
                $(s).addClass("toggled");
                continue;
              }
              $(s).removeClass("toggled");
            } else $(s).val(i);
          }
        },
        W = "elem_" + C(15),
        O = "elem_" + C(15),
        V = "elem_" + C(15),
        H = "elem_" + C(15),
        z = "elem_" + C(15),
        j = "elem_" + C(15),
        J = "elem_" + C(15),
        G = "elem_" + C(15),
        q = "elem_" + C(15),
        Y = "elem_" + C(15),
        X = "elem_" + C(15),
        K = "elem_" + C(15),
        Q = "elem_" + C(15),
        Z = "elem_" + C(15),
        ee = "elem_" + C(15),
        te = "elem_" + C(15),
        ne = "elem_" + C(15),
        ie = "elem_" + C(15),
        se = "elem_" + C(15),
        oe = "elem_" + C(15),
        re = "elem_" + C(15),
        ae = "elem_" + C(15),
        le = "elem_" + C(15),
        de = "elem_" + C(15),
        ce = "elem_" + C(15),
        ue = "elem_" + C(15),
        pe = "elem_" + C(15),
        fe = "elem_" + C(15),
        me = "elem_" + C(15),
        ge = "elem_" + C(15),
        be = "elem_" + C(15),
        he = "elem_" + C(15),
        ye = "elem_" + C(15),
        ve = "elem_" + C(15),
        Se = "elem_" + C(15),
        we = "elem_" + C(15),
        Ae = "elem_" + C(15),
        $e = "elem_" + C(15),
        Ce = "elem_" + C(15),
        Te = "elem_" + C(15),
        Be = "elem_" + C(15),
        Pe = "elem_" + C(15),
        Ie = "elem_" + C(15),
        _e = "elem_" + C(15),
        xe = "elem_" + C(15),
        Me = "elem_" + C(15),
        De = "elem_" + C(15),
        Ne = "elem_" + C(15),
        Fe = "elem_" + C(15),
        Re = "elem_" + C(15),
        Ee = "elem_" + C(15),
        ke = "elem_" + C(15),
        Ue = "elem_" + C(15),
        Le = "elem_" + C(15),
        We = "elem_" + C(15),
        Oe = "elem_" + C(15),
        Ve = "elem_" + C(15),
        He = "elem_" + C(15),
        ze = "elem_" + C(15),
        je = "elem_" + C(15),
        Je = "elem_" + C(15),
        Ge = "elem_" + C(15),
        qe = "elem_" + C(15),
        Ye = "elem_" + C(15),
        Xe = "elem_" + C(15),
        Ke = "elem_" + C(15),
        Qe = "elem_" + C(15),
        Ze = "elem_" + C(15),
        et = "elem_" + C(15),
        tt = "elem_" + C(15),
        nt = "elem_" + C(15),
        it = "elem_" + C(15),
        st = "elem_" + C(15),
        ot = "elem_" + C(15),
        rt = "elem_" + C(15),
        at = "elem_" + C(15),
        lt = "elem_" + C(15),
        dt = "elem_" + C(15),
        ct = "elem_" + C(15),
        ut = "elem_" + C(15),
        pt = "elem_" + C(15),
        ft = "elem_" + C(15),
        mt = "elem_" + C(15),
        gt = "elem_" + C(15),
        bt = "elem_" + C(15),
        ht = "elem_" + C(15),
        yt = "elem_" + C(15),
        vt = "elem_" + C(15),
        St = "elem_" + C(15),
        wt = "elem_" + C(15),
        At = "elem_" + C(15),
        $t = "elem_" + C(15),
        Ct = "elem_" + C(15),
        Tt = "elem_" + C(15),
        Bt = "elem_" + C(15),
        Pt = "elem_" + C(15),
        It = "elem_" + C(15),
        _t = "elem_" + C(15),
        xt = "elem_" + C(15),
        Mt = "elem_" + C(15),
        Dt = "elem_" + C(15),
        Nt = C(15),
        Ft = "elem_" + C(15),
        Rt = "elem_" + C(15),
        Et = "elem_" + C(15),
        kt = "elem_" + C(15),
        Ut = "elem_" + C(15),
        Lt = "elem_" + C(15),
        Wt = "elem_" + C(15),
        Ot = "elem_" + C(15);
      h("sessionStats", {
        soldItems: "-",
        unsoldItems: "-",
        activeTransfers: "-",
        availableItems: "-",
        coins: "-",
        coinsNumber: 0,
        previousPause: 0,
        searchCount: 0,
        profit: 0,
        transactions: [],
        searchPerMinuteCount: 0,
      });
      const Vt = () => {
          const e = U(y("searchInterval")),
            t = y("sessionStats");
          $("#" + Ee).html(t.searchCount),
            $("#" + at).html(t.profit),
            $("#" + ke).html(t.coins),
            $("#" + Fe).css("width", e),
            zt();
        },
        Ht = () => {
          const e = U(y("searchInterval")),
            t = y("sessionStats");
          $("#" + Fe).css("width", e),
            $("#" + Re).css("width", e),
            $("#" + ke).html(t.coins),
            $("#" + Ee).html(t.searchCount),
            $("#" + Le).html(t.soldItems),
            $("#" + We).html(t.unsoldItems),
            $("#" + Oe).html(t.availableItems),
            $("#" + Ve).html(t.activeTransfers),
            $("#" + at).html(t.profit),
            zt(),
            t.unsoldItems
              ? $("#" + We).css("color", "red")
              : $("#" + We).css("color", ""),
            t.availableItems
              ? $("#" + Oe).css("color", "orange")
              : $("#" + Oe).css("color", "");
        },
        zt = () => {
          const e = y("botStartTime");
          if (e && y("autoBuyerActive")) {
            const t = Math.abs(new Date() - e) / 1e3,
              n = Math.floor((t / 60 / 60) % 24),
              i = Math.floor((t / 60) % 60),
              s = Math.floor(t % 60),
              o =
                (n < 10 ? "0" : "") +
                n +
                ":" +
                (i < 10 ? "0" : "") +
                i +
                ":" +
                (s < 10 ? "0" : "") +
                s;
            $("#" + Tt).html(o), jt("runningTime", o);
          }
        },
        jt = (e, t) => {
          const n = y("sessionStats");
          (n[e] = t), h("sessionStats", n);
        },
        Jt = (e) => y("sessionStats")[e] || 0,
        Gt = function (e, t, n) {
          const i = new UTStandardButtonControl();
          if ((i.init(), i.addTarget(i, t, EventType.TAP), i.setText(e), n)) {
            const e = n.split(" ");
            for (let t of e) i.getRootElement().classList.add(t);
          }
          return i;
        },
        qt = () => {
          const e = $("#" + $e);
          let t = `Autobuyer Ready ${
            "[" + new Date().toLocaleTimeString() + "] "
          }\n`;
          e.val(t);
        };
      let Yt = new Set();
      const Xt = (e, t, n, i, s = !1) => {
          const o = y(t) || {};
          "number" === i && (n = parseInt(n)),
            (o[e] = n || null),
            (o[e + "isDefaultValue"] = s),
            h(t, o);
        },
        Kt = (
          e,
          t,
          n,
          i,
          s,
          o = "number",
          r = ".*",
          a = "buyer-settings-field",
          l = null
        ) => {
          const d = Object.keys(n)[0];
          return (
            t && (l && l(t), Xt(d, s, t, o, !0)),
            Yt.has(d) ||
              ($(document).on(
                "input",
                `#${n[d]}`,
                ({ target: { value: e } }) => {
                  l && l(e), Xt(d, s, e || t, o, !e);
                }
              ),
              Yt.add(d)),
            `<div class="price-filter ${a}">\n       <div class="info">\n           <span class="secondary label">${e} :<br/><small>${i}</small></span>\n       </div>\n       <div class="buttonInfo">\n           <div class="inputBox">\n               <input pattern="${r}" type="${o}" class="numericInput" id='${n[d]}' placeholder=${t}>\n           </div>\n       </div>\n    </div>`
          );
        };
      let Qt = new Set();
      const Zt = (e, t, n, i, s = "buyer-settings-field", o = null) => {
          const r = Object.keys(t)[0];
          return (
            Qt.has(r) ||
              ($(document).on("click touchend", `#${t[r]}`, (e) => {
                !o &&
                  ((e, t, n) => {
                    const i = y(t) || {};
                    i[e]
                      ? ((i[e] = !1), $(n.currentTarget).removeClass("toggled"))
                      : ((i[e] = !0), $(n.currentTarget).addClass("toggled")),
                      h(t, i);
                  })(r, i, e),
                  o && o(e);
              }),
              Qt.add(r)),
            `\n    <div class="price-filter  ${s}">\n        <div class="ut-toggle-cell-view">\n           <span class="ut-toggle-cell-view--label">${e} <br/><small>${n}</small></span>\n             <div id='${t[r]}' class="ut-toggle-control">\n               <div class="ut-toggle-control--track">\n              </div>\n              <div class= "ut-toggle-control--grip" >\n          </div> \n           </div> \n       </div>\n    </div> `
          );
        },
        en = function () {
          const e = w();
          return `<div class='buyer-settings-wrapper buy-settings-view'>\n      ${Zt(
            "Find Buy Price",
            { idBuyFutBinPrice: yt },
            `(Uses ${e} price for Buy)`,
            "BuyerSettings"
          )}\n      ${Kt(
            "Buy/Bid Price Percent",
            100,
            { idBuyFutBinPercent: vt },
            `(Buy/Bid Price percent of ${e} Price)`,
            "BuyerSettings"
          )}\n      ${Zt(
            `Bid For ${e} Price`,
            { idAbBidFutBin: wt },
            `(Bid if the current bid is lesser than ${e} Price)`,
            "BuyerSettings"
          )}\n      ${Kt(
            "Buy Price",
            "",
            { idAbBuyPrice: H },
            "<br/>",
            "BuyerSettings"
          )}\n      ${Kt(
            "No. of cards to buy",
            1e3,
            { idAbCardCount: z },
            "(Works only with Buy price)",
            "BuyerSettings"
          )}\n      ${Kt(
            "Bid Price",
            "",
            { idAbMaxBid: j },
            "<br/>",
            "BuyerSettings"
          )}\n      ${Kt(
            "Bid items expiring in",
            "1H",
            { idAbItemExpiring: G },
            "(S for seconds, M for Minutes, H for hours)",
            "BuyerSettings",
            "text",
            "\\d+[H|M|S|h|m|s]$"
          )} \n      ${Kt(
            "Search result threshold",
            21,
            { idAbSearchResult: J },
            "(Buy or bid cards only if the no.of search results is lesser than the specified value)",
            "BuyerSettings"
          )}\n      ${Zt(
            "Bid Exact Price",
            { idAbBidExact: q },
            "",
            "BuyerSettings"
          )}      \n     </div>\n    `;
        };
      $(document).on("keyup", "#" + Y, function ({ target: { value: e } }) {
        tn(e);
      });
      const tn = (e) => {
          const t = parseInt(e);
          if (isNaN(t)) return void $("#" + Ne).html(0);
          const n = (e - (e / 100) * 5).toLocaleString();
          $("#" + Ne).html(n);
        },
        nn = function () {
          const e = w();
          return `<div style='display : none' class='buyer-settings-wrapper sell-settings-view'>\n  ${Zt(
            "Find Sale Price",
            { idSellFutBinPrice: nt },
            `(Uses ${e} price for listing)`,
            "BuyerSettings"
          )}\n  ${Kt(
            "Sell Price Percent",
            "100-100",
            { idSellFutBinPercent: it },
            `(Sale Price percent of ${e} Price)`,
            "BuyerSettings",
            "text",
            "\\d+-\\d+$"
          )}  \n  ${Zt(
            "Check buy price before listing",
            { idSellCheckBuyPrice: lt },
            "(List only if Buy Price is lesser than Sale Price)",
            "BuyerSettings"
          )}\n  ${Zt(
            "Quick Sell",
            { idAbQuickSell: Wt },
            "(Will quick sell card if sell price is not given)",
            "BuyerSettings"
          )}\n  ${Kt(
            "Sell Price",
            "",
            { idAbSellPrice: Y },
            `(-1 to send to transferlist)<br />Receive After Tax: <span id=${Ne}>0</span>`,
            "BuyerSettings"
          )} \n   ${Kt(
            "List Duration",
            "1H",
            { idFutBinDuration: ft },
            "List Duration when listing",
            "BuyerSettings",
            "text",
            "\\d+[H|M|S|h|m|s]$"
          )}\n  ${Kt(
            "Clear sold count",
            10,
            { idAbMinDeleteCount: X },
            "(Clear sold items when reach a specified count)",
            "BuyerSettings"
          )}\n  ${Kt(
            "Rating Threshold",
            100,
            { idSellRatingThreshold: tt },
            "(Rating threshold to list the sniped player)",
            "BuyerSettings"
          )}\n  ${Zt(
            "Relist Unsold Items",
            { idAbSellToggle: K },
            "",
            "BuyerSettings"
          )}\n  ${Zt(
            "Dont move won items",
            { idAbDontMoveWon: At },
            "(Keep won items in Unassigned or Transfer Targets)",
            "BuyerSettings"
          )}\n  </div>`;
        },
        sn = function () {
          return `<div style='display : none' class='buyer-settings-wrapper safety-settings-view'>\n  ${Kt(
            "Wait Time",
            "7-15",
            { idAbWaitTime: Q },
            "(Random second range eg. 7-15)",
            "CommonSettings",
            "text",
            "\\d+-\\d+$"
          )}\n  ${Kt(
            "Max purchases per search request",
            1,
            { idAbMaxPurchases: Ut },
            "Increase this, only if you are Adding Delay After Buy of alteast 3S",
            "CommonSettings"
          )}\n  ${Kt(
            "Pause Cycle",
            "10-15",
            { idAbCycleAmount: Z },
            "(No. of searches performed before triggering Pause eg. 10-15)",
            "CommonSettings",
            "text",
            "\\d+-\\d+$"
          )}\n  ${Kt(
            "Pause For",
            "5-8S",
            { idAbPauseFor: ee },
            "(S for seconds, M for Minutes, H for hours eg. 0-0S)",
            "CommonSettings",
            "text",
            "\\d+-\\d+[H|M|S|h|m|s]$"
          )}\n  ${Zt(
            "Add Delay After Buy",
            { idAbAddBuyDelay: de },
            "(Adds Delay after trying to buy / bid a card)",
            "CommonSettings"
          )}\n  ${Kt(
            "Delay To Add",
            "1S",
            { idAbDelayToAdd: ce },
            "(S for seconds, M for Minutes, H for hours)",
            "CommonSettings",
            "text",
            "\\d+[H|M|S|h|m|s]$"
          )}\n  ${Kt(
            "Stop After",
            "3-4H",
            { idAbStopAfter: te },
            "(S for seconds, M for Minutes, H for hours  eg. 3-4H)",
            "CommonSettings",
            "text",
            "\\d+-\\d+[H|M|S|h|m|s]$"
          )}\n  ${Zt(
            "Show Search Exceed Warning",
            { idAbOverSearchWarning: kt },
            "(Shows a warning in log if number of search per minute exceeds 15)",
            "CommonSettings"
          )} \n  </div>`;
        },
        on = function () {
          return `<div style='display : none' class='buyer-settings-wrapper captcha-settings-view'>\n    ${Zt(
            "Close Web App on Captcha Trigger",
            { idAbCloseTabToggle: pe },
            "",
            "CommonSettings"
          )}         \n    ${Zt(
            "Auto Solve Captcha",
            { idAbSolveCaptcha: De },
            "",
            "CommonSettings"
          )}\n    ${Kt(
            "Anti-Captcha Key",
            "",
            { idAntiCaptchKey: Qe },
            "",
            "CommonSettings",
            "text"
          )}\n    ${Kt(
            "Proxy Address",
            "",
            { idProxyAddress: Ye },
            "",
            "CommonSettings",
            "text"
          )}\n    ${Kt(
            "Proxy Port",
            "",
            { idProxyPort: Xe },
            "",
            "CommonSettings"
          )}\n    ${Kt(
            "Proxy User Name (Optional)",
            "",
            { idProxyLogin: Ke },
            "",
            "CommonSettings",
            "text"
          )}\n    ${Kt(
            "Proxy User Password (Optional)",
            "",
            { idProxyPassword: Ze },
            "",
            "CommonSettings",
            "text"
          )} \n    `;
        };
      let rn = new Set();
      const an = (e, t, n, i) => (
          rn.has(e) || (ln(e, n), rn.add(e)),
          `<button class="btn-standard ${i}" id="${e}">${t}</button>`
        ),
        ln = (e, t) => {
          $(document).on(
            {
              mouseenter: function () {
                $(this).addClass("hover");
              },
              mouseleave: function () {
                $(this).removeClass("hover");
              },
              click: function () {
                t();
              },
              touchenter: function () {
                $(this).addClass("hover");
              },
              touchleave: function () {
                $(this).removeClass("hover");
              },
              touchend: function () {
                t();
              },
            },
            `#${e}`
          );
        },
        dn = function () {
          return `<div style='display : none' class='buyer-settings-wrapper notification-settings-view'> \n ${
            l
              ? ""
              : `${Kt(
                  "Telegram Bot Token",
                  "",
                  { idTelegramBotToken: he },
                  "Token of your own bot",
                  "CommonSettings",
                  "text"
                )}\n  ${Kt(
                  "Telegram Chat ID",
                  "",
                  { idTelegramChatId: ye },
                  "Your Telegram ChatID",
                  "CommonSettings",
                  "text"
                )}\n  ${Kt(
                  "Discord Bot Token",
                  "",
                  { idDiscordToken: Se },
                  "Your Discord Bot Token",
                  "CommonSettings",
                  "text"
                )}\n  ${Kt(
                  "Discord Channel ID",
                  "",
                  { idDiscordChannelId: we },
                  "Your Discord Channel ID",
                  "CommonSettings",
                  "text"
                )}\n  ${Kt(
                  "Discord WebHook Url",
                  "",
                  { idWebHookUrl: Ft },
                  "Your Discord Channel Webhook Url",
                  "CommonSettings",
                  "text"
                )}\n  ${Kt(
                  "Fut Market Alert Notification Token",
                  "",
                  { idFUTMarketAlertToken: Ae },
                  "Your FUT Market Alert App's Token",
                  "CommonSettings",
                  "text"
                )}\n  ${Zt(
                  "Send Listing Notification",
                  { idAbSendListingNotificationToggle: ge },
                  "",
                  "CommonSettings"
                )}`
          }\n  ${Kt(
            "Notification Type",
            "",
            { idNotificationType: ve },
            "Type A for all notifications, B for buy or L for lost",
            "CommonSettings",
            "text"
          )}\n  ${Zt(
            "Send Notification",
            { idAbMessageNotificationToggle: fe },
            "",
            "CommonSettings"
          )}\n   ${
            l
              ? ""
              : `${Zt(
                  "Sound Notification",
                  { idAbSoundToggle: be },
                  "",
                  "CommonSettings"
                )}\n  <audio id='${Ge}' hidden>\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-869-coins.ogg" type="audio/ogg">\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-869-coins.mp3" type="audio/mpeg">\n      "Your browser does not support the audio element"\n  </audio>\n  <audio id='${qe}' hidden>\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-897-alarm-frenzy.ogg" type="audio/ogg">\n    <source src="https://notificationsounds.com/storage/sounds/file-sounds-897-alarm-frenzy.mp3" type="audio/mpeg">\n      "Your browser does not support the audio element"\n  </audio>\n  <audio id='${Rt}' hidden>\n    <source src="https://freesound.org/data/previews/220/220763_4104696-lq.ogg" type="audio/ogg">\n    <source src="https://freesound.org/data/previews/220/220763_4104696-lq.mp3" type="audio/mpeg">\n      "Your browser does not support the audio element"\n  </audio> `
          }\n     ${Zt(
            "Use Custom Discord Webhook Name",
            { idAbCustomDiscordNameNotificationToggle: me },
            "",
            "CommonSettings"
          )}\n   <div class="btn-test-notification buyer-settings-field">\n   ${an(
            _e,
            "Test Notification",
            () => zn("Test Notification Message", !0, void 0, !0),
            "call-to-action"
          )}\n   </div>\n  `;
        },
        cn = function () {
          return `<div style='display : none' class='buyer-settings-wrapper common-settings-view'>\n  ${Kt(
            "Error Codes to stop bot (csv)",
            "",
            { idAbStopErrorCode: ze },
            "(Eg. 412,421,521)",
            "CommonSettings",
            "text",
            "^\\d+(,\\d+)*$"
          )}\n  ${Kt(
            "No. of times error code should occur",
            3,
            { idAbStopErrorCodeCount: je },
            "<br />",
            "CommonSettings"
          )}\n  ${Kt(
            "Resume bot after",
            "",
            { idAbResumeAfterErrorOccured: $t },
            "(S for seconds, M for Minutes, H for hours eg. 0-0S)",
            "CommonSettings",
            "text",
            "\\d+-\\d+[H|M|S|h|m|s]$"
          )}\n  ${Zt(
            "Auto Clear Log",
            { idAutoClearLog: et },
            "(Automatically clear logs every 2 minutes)",
            "CommonSettings"
          )}\n  ${Zt(
            "Auto Clear Expired Items",
            { idAutoClearExpired: bt },
            "(Automatically clear expired items from transfer targets)",
            "CommonSettings"
          )}\n  ${Zt(
            "Use Futwiz Price",
            { idAbUseFutWiz: Lt },
            "(Uses Futwiz price for buying/selling cards)",
            "CommonSettings"
          )}\n  </div>`;
        },
        un = function (e, t) {
          let n = !1;
          return (
            $(`${e} option`).each(function () {
              if (this.value === t) return (n = !0), !1;
            }),
            n || $(e).append($("<option></option>").attr("value", t).text(t)),
            n
          );
        },
        pn = function () {
          const e = $(`#${V}`).val() || [];
          e.length ? h("selectedFilters", e) : h("selectedFilters", []);
        };
      let fn;
      $(document).on(
        {
          change: () => {
            const e = $(`#${Pt}`).val() || "buy",
              t = y("BuyerSettings") || {};
            (t.idAbSortBy = e), h("BuyerSettings", t);
          },
        },
        `#${Pt}`
      );
      const mn = function () {
          const e = $(
              `<div style='display : none' class='buyer-settings-wrapper results-filter-view'>\n    <div class="place-holder">\n    </div>\n    ${Zt(
                "Ignore/Buy Players List",
                { idAbIgnoreAllowToggle: ht },
                "(If toggled bot will only buy/bid the above players else bot will ignore the players when bidding/buying )",
                "BuyerSettings"
              )}\n    ${Kt(
                "Min Rating",
                10,
                { idAbMinRating: ne },
                "Minimum Player Rating",
                "BuyerSettings"
              )}\n    ${Kt(
                "Max Rating",
                100,
                { idAbMaxRating: ie },
                "Maximum Player Rating",
                "BuyerSettings"
              )}    \n    ${Kt(
                "Search result page limit",
                5,
                { idAbMaxSearchPage: le },
                "No of. pages bot should move forward before going back to page 1",
                "BuyerSettings"
              )}\n    ${Kt(
                "Max value of random min bid",
                300,
                { idAbRandMinBidInput: se },
                "",
                "BuyerSettings"
              )}\n    ${Zt(
                "Use random min bid",
                { idAbRandMinBidToggle: ae },
                "",
                "BuyerSettings"
              )}\n    ${Kt(
                "Max value of random min buy",
                300,
                { idAbRandMinBuyInput: oe },
                "",
                "BuyerSettings"
              )}\n    ${Zt(
                "Use random min buy",
                { idAbRandMinBuyToggle: re },
                "",
                "BuyerSettings"
              )}\n    ${Zt(
                "SKIP GK",
                { idAbAddFilterGK: ue },
                "(Skip all goalkeepers to buy / bid a card)",
                "BuyerSettings"
              )}\n    ${Zt(
                "SKIP Basic Chemistry",
                { idAbAddFilterBC: Ot },
                "(Skip cards with basic chemistry to buy / bid a card)",
                "BuyerSettings"
              )}\n    ${Zt(
                "Sort players",
                { idAbShouldSort: _t },
                "",
                "BuyerSettings"
              )}\n    <div class="price-filter buyer-settings-field">\n      <div class="displayCenterFlx">\n      <select style="width:95%;height: 3rem;font-size: 1.5rem;" class="select-sortBy filter-header-settings" id="${Pt}">\n        <option disabled selected>--Select Sort Attribute--</option>\n        <option value="expires">Expires on</option>          \n        <option value="buy">Buy now price</option>\n        <option value="bid">Bid now price</option>\n        <option value="rating">Player rating</option>\n      </select>\n      </div>\n    </div>\n    ${Zt(
                "Order",
                { idAbSortOrder: It },
                "(Enabled = descending, Disabled = ascending)",
                "BuyerSettings"
              )}\n  </div>`
            ),
            t = e.find(".place-holder");
          return (
            (function () {
              fn = new UTPlayerSearchControl();
              const e = `#${pt}`,
                t = $(
                  `\n            <div class="price-filter buyer-settings-field">\n              <div class="info">\n               <span class="secondary label">\n                  <button id=${Dt} style="font-size:16px" class="flat camel-case">Players List</button><br/>\n                </span>\n              </div>\n              <div class="ignore-players displayCenterFlx">\n                ${an(
                    ct,
                    "+",
                    () => {
                      const t = `${fn._playerNameInput.value}(${fn.selected.rating})`,
                        n = un(e, t);
                      if (
                        ($(`${e} option[value="${t}"]`).attr("selected", !0),
                        !n)
                      ) {
                        const e = y("BuyerSettings") || {},
                          n = e.idAddIgnorePlayersList || [];
                        n.push({ id: fn.selected.id, displayName: t }),
                          (e.idAddIgnorePlayersList = n),
                          h("BuyerSettings", e);
                      }
                    },
                    "btn-standard filterSync action-icons"
                  )}                \n                </div>\n              </div>\n              <div class="price-filter buyer-settings-field">\n                <div class="info">\n                <span class="secondary label">\n                  <button id=${Dt} style="font-size:16px" class="flat camel-case">Remove from Players List</button><br/>\n                </span>\n                </div>\n                <div class="displayCenterFlx">\n                  <select style="width:90%;height: 3rem;font-size: 1.5rem;" class="filter-header-settings" id=${pt}>\n                    <option selected="true" disabled>Players List</option>                            \n                  </select>\n                  ${an(
                    ut,
                    "❌",
                    () => {
                      const t = $(`${e} option`).filter(":selected").val();
                      if ("Ignored Players List" != t) {
                        $(`${e} option[value="${t}"]`).remove(),
                          $(`${e}`).prop("selectedIndex", 0);
                        const n = y("BuyerSettings") || {};
                        let i = n.idAddIgnorePlayersList || [];
                        (i = i.filter(({ displayName: e }) => e != t)),
                          (n.idAddIgnorePlayersList = i),
                          h("BuyerSettings", n);
                      }
                    },
                    "btn-standard filterSync font15 action-icons"
                  )}\n                </div>\n              </div>              \n              `
                );
              return (
                $(fn.__root).insertBefore(t.find(`#${ct}`)),
                fn.init(),
                fn._playerNameInput.setPlaceholder("Search Players"),
                t
              );
            })().insertAfter(t),
            e
          );
        },
        gn = (e, t, n, i) => {
          const s = new EADialogViewController({
            dialogOptions: e,
            message: n,
            title: t,
          });
          s.init(),
            s.onExit.observe(void 0, function (e, t) {
              e.unobserve(this), i.call(this, t);
            }),
            gPopupClickShield.setActivePopup(s);
        };
      $(document).on(
        {
          touchend: function () {
            $(`#${mt}`).trigger("click");
          },
        },
        `#${mt}`
      );
      const bn = (e) => {
          const t = {},
            n = $(`#${rt}`).val() || [];
          if (n.length) {
            for (let i of n) {
              const n = e[i],
                s = JSON.parse(n);
              t[i] = s;
            }
            var i, s;
            (i = { filters: t }),
              (s = "filters"),
              l ? B(i, s) : I(i, s),
              Vn("Filters downloaded successfully");
          } else Vn("No filter selected", UINotificationType.NEGATIVE);
        },
        hn = () => {
          const e = $(`#${mt}`).prop("files");
          if (!e || !e[0])
            return void Vn(
              "No filter file selected",
              UINotificationType.NEGATIVE
            );
          const t = e[0],
            n = new FileReader();
          (n.onload = (e) => {
            const t = JSON.parse(e.target.result);
            if (t && t.filters) {
              for (let e in t.filters) Un(e, t.filters[e]);
              Vn("Filters uploaded successfully");
            } else Vn("Not a valid filters file");
          }),
            n.readAsText(t);
        },
        yn = async () => {
          y("filters") || h("filters", (await m()) || {});
          let e = y("filters");
          return (
            (e = Object.keys(e)
              .sort()
              .reduce((t, n) => ((t[n] = e[n]), t), {})),
            e
          );
        };
      $(document).on({ change: pn, click: pn, touchend: pn }, `#${V}`);
      const vn = (e, t) => {
          let n = y(t);
          return (
            n
              ? ((n = !1), $(e.currentTarget).removeClass("toggled"))
              : ((n = !0), $(e.currentTarget).addClass("toggled")),
            h(t, n),
            n
          );
        },
        Sn = async function () {
          return (
            y("runSequentially") &&
              (h("runSequentially", !1),
              setTimeout(() => {
                $(`#${dt}`).click();
              })),
            `<div style='display : none' class='buyer-settings-wrapper filter-settings-view'>\n                <div class="price-filter buyer-settings-field multiple-filter teleporter">\n                    <select  multiple="multiple" class="multiselect-filter filter-header-settings" id="${V}"\n                     name="selectedFilters" style="overflow-y : scroll;">\n                     ${Object.keys(
              await yn()
            ).map(
              (e) => `<option value='${e}'>${e}</option>`
            )}\n                    </select>\n                </div>\n                ${Kt(
              "No. of search For each filter",
              y("fiterSearchCount") || 3,
              { idAbNumberFilterSearch: He },
              "(Count of searches performed before switching to another filter)",
              "CommonSettings",
              "number",
              null,
              "buyer-settings-field",
              (e) => h("fiterSearchCount", parseInt(e) || 3)
            )}\n                ${Zt(
              "Switch filter sequentially",
              { idRunFilterSequential: dt },
              "",
              "CommonSettings",
              "buyer-settings-field",
              (e) => vn(e, "runSequentially")
            )}\n            </div>\n    `
          );
        },
        wn = async function (e) {
          const t = this,
            n = e ? "transfer" : "";
          $(document).off("change", `#${W}${n}`),
            $(document).on(
              {
                change: function () {
                  const i = $(`#${W}${n} option`).filter(":selected").val();
                  Ln.call(t, i, e);
                },
              },
              `#${W}${n}`
            );
          const i = $(
            `<div style="width:100%;display: flex;flex-direction: column;">\n            ${
              isPhone() && !e
                ? Zt(
                    "Runner Mode",
                    { idAbToggleRunner: St },
                    "",
                    "MisSettings",
                    "runner",
                    (e) => {
                      const t = vn(e, "runnerToggle");
                      $(".auto-buyer").toggleClass("displayNone"),
                        t
                          ? $(".filter-place").append($(`#${V}`))
                          : $(".teleporter").append($(`#${V}`));
                    }
                  )
                : ""
            }\n            ${
              e ? "" : `<div id=${Mt} class="btn-report"></div>`
            }         \n            <div class="price-filter buyer-settings-field multiple-filter filter-place">\n            </div> \n            <div class="button-container btn-filters">\n                 <select class="filter-header-settings" id='${W}${n}'>\n                    <option selected="true" disabled>Choose filter to load</option>\n                    ${
              e ? "" : '<option value="_default">_DEFAULT</option>'
            }  \n                    ${Object.keys(await yn()).map(
              (e) => `<option value="${e}">${e}</option>`
            )}                    \n                 </select>                 \n                ${
              e
                ? ""
                : an(
                    st,
                    "⇧",
                    () => {
                      (() => {
                        let e = `Upload Filter Json file <br /> <br />\n  <input accept=".json" type="file" id="${mt}">\n   </input> <br /> <br /> <br />\n   Uploading filters will override filters with the same name`;
                        gn(
                          [
                            { labelEnum: enums.UIDialogOptions.OK },
                            { labelEnum: enums.UIDialogOptions.CANCEL },
                          ],
                          "Upload filters",
                          e,
                          (e) => {
                            2 === e && hn();
                          }
                        );
                      })();
                    },
                    "filterSync"
                  )
            }\n               ${
              e
                ? ""
                : an(
                    ot,
                    "⇩",
                    () => {
                      (() => {
                        const e = y("filters");
                        let t = `Choose filters to Download <br /> <br />\n  <select  multiple="multiple" class="multiselect-filter filter-header-settings" id="${rt}"\n      style="overflow-y : scroll">\n      ${Object.keys(
                          e
                        ).map(
                          (e) => `<option value='${e}'>${e}</option>`
                        )}\n   </select> <br /> <br /> <br />`;
                        gn(
                          [
                            { labelEnum: enums.UIDialogOptions.OK },
                            { labelEnum: enums.UIDialogOptions.CANCEL },
                          ],
                          "Download filters",
                          t,
                          async (t) => {
                            2 === t && (await bn(e));
                          }
                        );
                      })();
                    },
                    "filterSync"
                  )
            }\n             </div> \n               ${
              e
                ? ""
                : `<div id=${xt} style="margin-top: 1%;" class="button-container btn-filters"></div>`
            }\n             </div>`
          );
          return !e && An.call(this, i, t), i;
        },
        An = function (e, t) {
          const n = e.find(`#${xt}`),
            i = e.find(`#${Mt}`);
          n.append(
            Gt(
              "Delete Filter",
              () => Wn.call(t),
              "call-to-action btn-delete-filter"
            ).__root
          ),
            n.append(
              Gt(
                "Save Filter",
                function () {
                  kn.call(this, t);
                },
                "call-to-action btn-save-filter"
              ).__root
            ),
            i.append(
              Gt(
                "Report a problem",
                () => {
                  gn(
                    [
                      { labelEnum: atob("RGlzY29yZA==") },
                      { labelEnum: atob("VHdpdHRlcg==") },
                      { labelEnum: atob("R2l0aHVi") },
                    ],
                    atob("UmVwb3J0IGEgcHJvYmxlbQ=="),
                    atob(
                      "QmVsb3cgYXJlIHRoZSBsaXN0IG9mIHdheXMgdG8gcmVwb3J0IGEgcHJvYmxlbSA8YnIgLz5NYWtlIHN1cmUgdG8gZ28gdGhyb3VnaCB0aGUgPGEgaHJlZj0naHR0cHM6Ly95b3V0dWJlLmNvbS9wbGF5bGlzdD9saXN0PVBMR21LTWczYVJrWGpQUjVna2x4TXlxeHRoWW9vV0k1SUMnIHRhcmdldD0nX2JsYW5rJz55b3V0dWJlIHBsYXlsaXN0PC9hPiBpZiBhbnkgc2V0dGluZ3MgYXJlIHVuY2xlYXIgPGJyIC8+"
                    ),
                    (e) => {
                      e === atob("R2l0aHVi")
                        ? window.open(
                            atob(
                              "aHR0cHM6Ly9naXRodWIuY29tL2NoaXRoYWt1bWFyMTMvRlVULUF1dG8tQnV5ZXIvaXNzdWVz"
                            ),
                            atob("X2JsYW5r")
                          )
                        : e === atob("RGlzY29yZA==")
                        ? window.open(
                            atob(
                              "aHR0cHM6Ly9kaXNjb3JkLmNvbS9pbnZpdGUvY2t0SFltcA=="
                            ),
                            atob("X2JsYW5r")
                          )
                        : e === atob("VHdpdHRlcg==") &&
                          window.open(
                            atob("aHR0cHM6Ly90d2l0dGVyLmNvbS9BbGdvc0Nr"),
                            atob("X2JsYW5r")
                          );
                    }
                  );
                },
                "call-to-action"
              ).__root
            );
        },
        $n = new Map();
      let Cn, Tn;
      $n.set(0, { label: "Buy/Bid Settings", selector: ".buy-settings-view" }),
        $n.set(1, { label: "Sell Settings", selector: ".sell-settings-view" }),
        $n.set(2, {
          label: "Search Settings",
          selector: ".results-filter-view",
        }),
        $n.set(3, {
          label: "Safety Settings",
          selector: ".safety-settings-view",
        }),
        $n.set(4, {
          label: "Filter Settings",
          selector: ".filter-settings-view",
        }),
        $n.set(5, {
          label: "Captcha Settings",
          selector: ".captcha-settings-view",
        }),
        $n.set(6, {
          label: "Notification Settings",
          selector: ".notification-settings-view",
        }),
        $n.set(7, {
          label: "Common Settings",
          selector: ".common-settings-view",
        });
      const Bn = function () {
          return (
            (Tn = new EAFilterBarView()),
            $n.forEach((e, t) => {
              Tn.addTab(t, e.label);
            }),
            Tn.setActiveTab(0),
            Tn.layoutSubviews(),
            Tn.addTarget(this, Mn, EventType.TAP),
            (Tn.__root.style = "margin-top: 20px;"),
            (Cn = $(Tn.__root)),
            Cn.find(".menu-container").css("overflow-x", "auto"),
            _n(!0),
            Tn
          );
        },
        Pn = async function () {
          xn(), Nn(), await _n();
          const e = y("AutoBuyerInstance");
          UTMarketSearchFiltersViewController.prototype._eResetSelected.call(e);
        },
        In = async (e) => {
          let t = await m("CommonSettings");
          if (
            ((t = JSON.parse(t.CommonSettings || "{}")), !$.isEmptyObject(t))
          ) {
            const n = e ? y("CommonSettings") : {};
            h("CommonSettings", Object.assign({}, n, t));
          }
        },
        _n = async function (e) {
          Tn.setActiveTab(0),
            Cn.append(en.call(this)),
            Cn.append(nn.call(this)),
            Cn.append(mn.call(this)),
            Cn.append(sn.call(this));
          const t = await Sn.call(this);
          Cn.append(t),
            Cn.append(on.call(this)),
            Cn.append(dn.call(this)),
            Cn.append(cn.call(this)),
            $(".menu-container").animate({ scrollLeft: 0 }),
            setTimeout(async () => {
              const t = y("selectedFilters") || [],
                { idAbSortBy: n } = y("BuyerSettings") || {};
              n && $(`${Pt} option[value='${n}']`).prop("selected", "selected"),
                $.each(t, function (e, t) {
                  $(".multiselect-filter option[value='" + t + "']").prop(
                    "selected",
                    "selected"
                  );
                }),
                e && (await In());
            });
        },
        xn = () => {
          $n.forEach((e, t) => {
            $(e.selector).remove();
          }),
            fn.destroy(),
            (fn = null);
        },
        Mn = function (e, t, n) {
          Dn();
          const i = $n.get(n.index).selector;
          $(i).css("display", "");
        },
        Dn = () => {
          $n.forEach((e, t) => {
            $(e.selector).css("display", "none");
          });
        },
        Nn = () => {
          h("currentFilter", null),
            h("BuyerSettings", {}),
            h("currentFilter", {});
        },
        Fn = () => {
          document.querySelectorAll(":invalid").length &&
            Vn(
              "Settings with invalid value found, fix these values for autobuyer to work as intended",
              UINotificationType.NEGATIVE
            );
        },
        Rn = `#${W}`,
        En = `#${V}`,
        kn = function (e) {
          const t = this;
          $(t).addClass("active");
          let n = v(!0),
            i = y("CommonSettings");
          setTimeout(function () {
            let s = {};
            const o = e._viewmodel;
            s.searchCriteria = {
              criteria: o.searchCriteria,
              playerData: o.playerData,
              buyerSettings: n,
            };
            let r = $(`${Rn} option`).filter(":selected").val();
            "Choose filter to load" === r && (r = void 0);
            let a = prompt("Enter a name for this filter", r);
            if ((Fn(), a)) {
              if ("_DEFAULT" === a.toLocaleUpperCase())
                return Vn(
                  "Cannot override _DEFAULT filter",
                  UINotificationType.NEGATIVE
                );
              Un(a, s),
                g("CommonSettings", JSON.stringify(i), "CommonSettings"),
                h("currentFilter", a),
                $(t).removeClass("active"),
                Vn("Changes saved successfully");
            } else $(t).removeClass("active"), Vn("Filter Name Required", UINotificationType.NEGATIVE);
          }, 200);
        },
        Un = (e, t) => {
          (e = e.toUpperCase()),
            un(Rn, e),
            un(`#${V}`, e),
            $(`${Rn} option[value="${e}"]`).attr("selected", !0),
            (y("filters")[e] = JSON.stringify(t)),
            g(e, y("filters")[e]);
        },
        Ln = async function (e, t) {
          if ("_default" === e)
            return (
              (() => {
                h("BuyerSettings", Object.assign({}, r)),
                  h("CommonSettings", Object.assign({}, a));
                const e = v();
                L(e);
              })(),
              !1
            );
          y("runnerToggle") || t || (await Pn());
          const n = y("filters")[e];
          if (!n) return !1;
          let {
            searchCriteria: { criteria: i, playerData: s, buyerSettings: o },
          } = JSON.parse(n);
          if (
            (this._viewmodel.resetSearch(),
            this.viewDidAppear(),
            (this._viewmodel.playerData = {}),
            Object.assign(this._viewmodel.searchCriteria, i),
            Object.assign(this._viewmodel.playerData, s),
            $.isEmptyObject(this._viewmodel.playerData) &&
              (this._viewmodel.playerData = null),
            this.viewDidAppear(),
            t)
          )
            return;
          await In();
          const l = y("CommonSettings") || {};
          if (
            (h("BuyerSettings", o),
            h("currentFilter", e),
            (o = Object.assign({}, o, l)),
            L(o),
            o.idAddIgnorePlayersList && o.idAddIgnorePlayersList.length)
          )
            for (let { displayName: e } of o.idAddIgnorePlayersList)
              un(`#${pt}`, e);
          return Fn(), !0;
        },
        Wn = async function () {
          const e = $(`${Rn} option`).filter(":selected").val();
          if ("_DEFAULT" === e.toLocaleUpperCase())
            return Vn(
              "Cannot delete _DEFAULT filter",
              UINotificationType.NEGATIVE
            );
          "Choose filter to load" != e &&
            ($(`${Rn} option[value="${e}"]`).remove(),
            $(`${Rn}`).prop("selectedIndex", 0),
            await Pn(),
            this.viewDidAppear(),
            delete y("filters")[e],
            $(`${En} option[value="${e}"]`).remove(),
            pn(),
            ((e) => {
              u(e);
            })(e),
            Vn("Changes saved successfully"));
        };
      let On = null;
      const Vn = function (e, t) {
          (t = t || UINotificationType.POSITIVE),
            services.Notification.queue([e, t]);
        },
        Hn = (e) => {
          services.PIN.sendData(PINEventType.PAGE_VIEW, {
            type: PIN_PAGEVIEW_EVT_TYPE,
            pgid: e,
          });
        },
        zn = (e, t, n, i) => {
          const s = v();
          (s.idAbMessageNotificationToggle || i) &&
            (l ? jn(e) : qn(s, t, e, n), i && Vn("Test Notification Sent"));
        },
        jn = (e) => {
          window.ReactNativeWebView.postMessage(
            JSON.stringify({ type: "Notification", message: e })
          );
        },
        Jn = (e, t, n, i) => {
          let s = {
            embeds: [
              {
                description: e,
                color: i || (t ? 2555648 : 16711680),
                footer: {
                  text: `Auto Buyer Alert - ${new Date().toLocaleTimeString()} - Balance: ${
                    services.User.getUser().coins.amount
                  }`,
                  icon_url:
                    "https://cdn.discordapp.com/icons/768336764447621122/9de9ea0a7c6239e2f2fbfbd716189e79.webp",
                },
              },
            ],
            avatar_url:
              "https://cdn.discordapp.com/icons/768336764447621122/9de9ea0a7c6239e2f2fbfbd716189e79.webp",
            username: "Fut Market Alert",
          };
          return n && delete s.username, s;
        },
        Gn = (e) => {
          const {
            embeds: [t],
          } = e;
          return new Discord.RichEmbed()
            .setColor(t.color)
            .setDescription(t.description)
            .setFooter(t.footer.text, t.footer.icon_url);
        },
        qn = (e, t, n, i) => {
          const s = e.idTelegramBotToken,
            o = e.idTelegramChatId,
            r = e.idWebHookUrl,
            a = e.idDiscordChannelId,
            l = e.idFUTMarketAlertToken,
            d = e.idAbCustomDiscordNameNotificationToggle;
          Yn(s, o, n), Kn(a, t, n, d, i), Xn(r, t, n, d, i), Zn(l, n);
        },
        Yn = (e, t, n) => {
          if (e && t) {
            const i = `https://api.telegram.org/bot${e}/sendMessage?chat_id=${t}&parse_mode=Markdown&text=${n}`,
              s = new XMLHttpRequest();
            s.open("GET", i, !0), s.send();
          }
        },
        Xn = (e, t, n, i, s) => {
          e &&
            fetch(e, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(Jn(n, t, i, s)),
            });
        },
        Kn = (e, t, n, i, s) => {
          if (e)
            if (On) {
              const o = On.channels.get(e);
              o && o.send(Gn(Jn(n, t, i, s)));
            } else
              On = Qn(() => {
                setTimeout(() => {
                  if (On) {
                    const o = On.channels.get(e);
                    o && o.send(Gn(Jn(n, t, i, s)));
                  }
                }, 200);
              });
        },
        Qn = (e) => {
          const t = v(),
            n = new Discord.Client();
          let i = t.idDiscordToken;
          if (!i) return null;
          try {
            n.login(i),
              n.on("ready", function () {
                e && e();
              }),
              n.on("message", async function (e) {
                if (e.author.id != n.user.id)
                  if (/start/i.test(e.content)) {
                    const t = y("AutoBuyerInstance");
                    Ji.call(t),
                      e.channel.send(Gn(Jn("Bot started successfully", !0)));
                  } else if (/stop/i.test(e.content))
                    Gi(),
                      e.channel.send(Gn(Jn("Bot stopped successfully", !0)));
                  else if (/runfilter/i.test(e.content)) {
                    let t = e.content.split("-")[1];
                    if (t) {
                      (t = t.toUpperCase()), Gi(), h("selectedFilters", []);
                      const n = y("AutoBuyerInstance");
                      if (!(await Ln.call(n, t)))
                        return void e.channel.send(
                          Gn(Jn(`unable to find filter${t}`, !1))
                        );
                      Ji.call(n),
                        e.channel.send(Gn(Jn(`${t} started successfully`, !0)));
                    } else
                      e.channel.send(Gn(Jn("Unable to find filter name", !1)));
                  }
              });
          } catch (e) {}
          return n;
        },
        Zn = (e, t) => {
          e &&
            fetch("https://exp.host/--/api/v2/push/send", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify([
                { to: `ExponentPushToken[${e}]`, title: t, body: t },
              ]),
            });
        },
        ei = function (e) {
          zn(
            "Captcha, please solve the problem so that the bot can work again.",
            !1
          ),
            e
              ? (window.location.href = "about:blank")
              : ti("[!!!] Autostopping bot since Captcha got triggered", $e);
        },
        ti = function (e, t) {
          setTimeout(() => {
            var n = $("#" + t);
            (e = "[" + new Date().toLocaleTimeString() + "] " + e + "\n"),
              n.val(n.val() + e),
              n[0] && n.scrollTop(n[0].scrollHeight);
          }, 50);
        },
        ni = () => {
          $("#" + $e).val(""), qt();
        };
      setInterval(() => {
        const e = v();
        e && e.idAutoClearLog && ni();
      }, 12e4);
      const ii = () => {
          let e = y("userPlatform");
          return (
            e ||
            (services.User.getUser().getSelectedPersona().isPC
              ? (h("userPlatform", "pc"), "pc")
              : (h("userPlatform", "ps"), "ps"))
          );
        },
        si = () =>
          new Promise((e) => {
            services.User.requestCurrencies().observe(void 0, function (t, n) {
              e();
            });
          });
      let oi, ri;
      const ai = function (e) {
          if (!y("autoBuyerActive")) return;
          const t = 1e3 * x(e.idAbPauseFor);
          ri = ri || M(e.idAbCycleAmount);
          const { searchCount: n, previousPause: i } = y("sessionStats");
          return !n || (n - i) % ri
            ? void 0
            : (jt("previousPause", n),
              si(),
              Gi(!0),
              setTimeout(() => {
                (ri = M(e.idAbCycleAmount)), Ji.call(this, !0);
              }, t));
        },
        li = async function () {
          const e = y("selectedFilters"),
            t = y("fiterSearchCount"),
            n = y("currentFilterCount");
          if (!e || !e.length || t > n) return S("currentFilterCount"), !1;
          h("currentFilterCount", 1), h("currentPage", 1);
          const i = y("currentFilterIndex") || 0;
          let s = y("runSequentially") ? i % e.length : F(0, e.length - 1);
          h("currentFilterIndex", s + 1);
          let o = e[s];
          return await Ln.call(this, o), ti(`Running for filter ${o}`, $e), !0;
        },
        di = async (e) => {
          l ? ci(e) : ui(e);
        },
        ci = (e) => {
          h(e.identifier, e.onload),
            delete e.onload,
            window.ReactNativeWebView.postMessage(
              JSON.stringify({
                type: "fetchFromExternalAB",
                payload: { options: e },
              })
            );
        },
        ui = (e) => {
          GM_xmlhttpRequest({
            method: e.method,
            url: e.url,
            onload: e.onload,
            headers: { "User-Agent": Nt },
          });
        },
        pi = (e, t, n) =>
          new Promise((i, s) => {
            di({
              method: t,
              identifier: n,
              url: e,
              onload: (e) => (200 !== e.status ? s() : i(e.response)),
            });
          }),
        fi = async (e, t) => {
          try {
            const n = await mi(e),
              i = ii();
            if (!n) return;
            const s = await pi(
                `https://www.futwiz.com/en/app/sold23/${n[0].lineid}/console`,
                "GET",
                `${e.definitionId}_fetchFutWizPlayerPrices`
              ),
              o = JSON.parse(s);
            let r = o.prices[i].bin;
            "ps" !== i || r || (r = o.prices.xb.bin);
            const a = parseInt(r.replace(/[,.]/g, "")),
              l = `${e.definitionId}_futwiz_price`,
              d = { expiryTimeStamp: new Date(Date.now() + 9e5), price: a };
            h(l, d), t.set(l, a);
          } catch (e) {
            console.log(e);
          }
        },
        mi = (e) =>
          new Promise((t, n) => {
            const i = TextUtils.stripSpecialCharacters(
              "---" !== e._staticData.knownAs
                ? e._staticData.knownAs
                : e._staticData.name
            );
            di({
              url: `https://www.futwiz.com/en/searches/player23/${i}`,
              method: "GET",
              identifier: `${e.definitionId}_getFutWizPlayerUrl`,
              onload: (n) => {
                if (200 !== n.status) return t();
                const i = JSON.parse(n.response);
                if (!i) return t();
                let s = i.filter((t) => parseInt(t.rating) === e.rating);
                i && !s.length && (s = i),
                  s &&
                    s.length > 1 &&
                    (s = s.filter(
                      (t) =>
                        t.rare === e.rareflag.toString() &&
                        t.club === e.teamId + ""
                    )),
                  t(s);
              },
            });
          }),
        gi = async (e) => {
          const t = new Map(),
            n = new Map();
          let i = [];
          for (const i of e) {
            if (!i.definitionId) continue;
            const e = y(`${i.definitionId}_futwiz_price`);
            e
              ? t.set(`${i.definitionId}_futwiz_price`, e.price)
              : i.isPlayer() && n.set(i.definitionId, i);
          }
          if (n.size) for (const e of n.values()) i.push(fi(e, t));
          return await Promise.all(i), t;
        },
        bi = (e) => {
          const t = services.Localization;
          return t
            ? e.isManagerContract()
              ? t.localize("card.title.managercontracts")
              : e.isPlayerContract()
              ? t.localize("card.title.playercontracts")
              : e.isStyleModifier()
              ? UTLocalizationUtil.playStyleIdToName(e.subtype, t)
              : e.isPlayerPositionModifier()
              ? t
                  .localize(
                    "card.desc.training.pos." +
                      e._staticData.trainPosFrom +
                      "_" +
                      e._staticData.trainPosTo
                  )
                  .replace(" >> ", "->")
              : e._staticData.name
            : "";
        },
        hi = new Set(["Position", "Chemistry Style"]),
        yi = async (e, t) => {
          const n = Array.from(e),
            i = ii();
          for (; n.length; ) {
            const e = n.splice(0, 30),
              s = e.shift();
            if (!s) continue;
            const o = e.join(",");
            try {
              const n = await pi(
                  `https://www.futbin.com/23/playerPrices?player=${s}&rids=${o}`,
                  "GET",
                  `${Math.floor(+new Date())}_fetchPlayerPrices`
                ),
                r = JSON.parse(n);
              for (const n of [s, ...e]) {
                const e = r[n].prices[i].LCPrice;
                if (!e) continue;
                const s = parseInt(e.replace(/[,.]/g, "")),
                  o = `${n}_futbin_price`,
                  a = { expiryTimeStamp: new Date(Date.now() + 9e5), price: s };
                h(o, a), t.set(o, s);
              }
            } catch (e) {
              console.log(e);
            }
          }
        },
        vi = async (e, t) => {
          const n = ii(),
            i = "ps" === n ? "PS" : "xbox" === n ? "XB" : "PC",
            s = Array.from(e.keys());
          for (const n of s)
            try {
              const s = n.split(" ")[0],
                o = await pi(
                  `https://www.futbin.org/futbin/api/fetchConsumables?category=${s}&platformtype=${i}`,
                  "GET",
                  `${Math.floor(+new Date())}_fetchConsumablesPrices`
                ),
                r = JSON.parse(o).data.reduce(
                  (e, t) => (e.set(t.SubType.toUpperCase(), t.LCPrice), e),
                  new Map()
                ),
                a = e.get(n) || [];
              for (const { definitionId: e, subType: n } of a) {
                let i = r.get(n);
                const s = `${e}_futbin_price`;
                if (i) {
                  const e = {
                    expiryTimeStamp: new Date(Date.now() + 9e5),
                    price: i,
                  };
                  h(s, e), t.set(s, i);
                }
              }
            } catch (e) {
              console.log(e);
            }
        },
        Si = async (e) => {
          const t = new Map(),
            n = new Set(),
            i = new Map();
          for (const s of e) {
            if (!s.definitionId) continue;
            const e = y(`${s.definitionId}_futbin_price`);
            e
              ? t.set(`${s.definitionId}_futbin_price`, e.price)
              : s.isPlayer()
              ? n.add(s.definitionId)
              : s.isTraining() &&
                hi.has(s._staticData.name) &&
                (i.has(s._staticData.name) || i.set(s._staticData.name, []),
                i
                  .get(s._staticData.name)
                  .push({ definitionId: s.definitionId, subType: bi(s) }));
          }
          const s = [];
          return (
            n.size && s.push(yi(n, t)),
            i.size && s.push(vi(i, t)),
            await Promise.all(s),
            t
          );
        },
        wi = async (e) => {
          const t = w();
          return "FUTWIZ" === t ? gi(e) : "FUTBIN" === t ? Si(e) : void 0;
        },
        Ai = (e) => {
          let t = JSUtils.find(
            UTCurrencyInputControl.PRICE_TIERS,
            function (t) {
              return e >= t.min;
            }
          );
          var n = Math.round(e / t.inc) * t.inc;
          return Math.max(Math.min(n, 14999e3), 0);
        },
        $i = (e) =>
          e <= 1e3
            ? e - 50
            : e > 1e3 && e <= 1e4
            ? e - 100
            : e > 1e4 && e <= 5e4
            ? e - 250
            : e > 5e4 && e <= 1e5
            ? e - 500
            : e - 1e3,
        Ci = (e) =>
          e < 1e3
            ? e + 50
            : e >= 1e3 && e < 1e4
            ? e + 100
            : e >= 1e4 && e < 5e4
            ? e + 250
            : e >= 5e4 && e < 1e5
            ? e + 500
            : e + 1e3,
        Ti = async (e, t, n) => {
          let i;
          try {
            const s = n.definitionId,
              o = w();
            if ("player" !== n.type) return i;
            await wi([n]);
            const r = y(`${s}_${o.toLowerCase()}_price`);
            if (r && r.price) {
              i = r.price;
              const s = M(e.idSellFutBinPercent) || 100;
              let a = (i * s) / 100;
              await Bi(n),
                n.hasPriceLimits() &&
                  ((a = Ai(
                    Math.min(
                      n._itemPriceLimits.maximum,
                      Math.max(n._itemPriceLimits.minimum, a)
                    )
                  )),
                  a === n._itemPriceLimits.minimum && (a = Ci(a))),
                (a = Ai(a)),
                ti(
                  `= ${o} price for ${t}: ${i}: ${s}% of sale price: ${a}`,
                  $e
                ),
                (i = a);
            } else (i = null), ti(`= Unable to get ${o} price for ${t}`, $e);
          } catch (e) {
            (e = e.statusText || e.status || e),
              (i = null),
              ti(
                `= Unable to get Futbin price for ${t}, err: ${
                  e || "error occured"
                }`,
                $e
              );
          }
          return i;
        },
        Bi = async (e) =>
          new Promise((t) => {
            e.hasPriceLimits()
              ? t()
              : services.Item.requestMarketData(e).observe(
                  void 0,
                  async function (e, n) {
                    t();
                  }
                );
          }),
        Pi = (e) => {
          const t = y("sessionStats");
          (t.profit += e), h("sessionStats", t);
        },
        Ii = (e) => {
          const t = y("sessionStats");
          (t.transactions = t.transactions || []),
            t.transactions.push(e),
            h("sessionStats", t);
        },
        _i = () => {
          const {
            coinsNumber: e,
            searchCount: t,
            profit: n,
            runningTime: i,
            transactions: s,
          } = y("sessionStats");
          let o =
            "Available Coins,Search Count,Profit,Running Time,BIN Won Count,BID Won Count,Loss Count\n";
          (o += `${e || ""},${t || ""},${n || 0},${i || ""},${
            y("winCount") || 0
          },${y("bidCount") || 0},${y("lossCount") || 0}\n\n`),
            (o += "Transactions\n"),
            (o += s.map((e) => `${e}\n`).join("")),
            ((e, t) => {
              l ? P(e, t) : _(e, t);
            })(o, "Stats");
        };
      setInterval(() => {
        const e = y("sessionStats");
        (e.searchPerMinuteCount = 0), h("sessionStats", e);
      }, 55e3);
      const xi = new Map(),
        Mi = (e, t, n, i, s, r) => {
          const a = v();
          return new Promise((l) => {
            services.Item.bid(e, n).observe(void 0, async function (d, c) {
              let u = E(n.toString(), 6);
              const p = a.idNotificationType || "";
              if (c.success) {
                s && (S("purchasedCardCount"), k("cardWon"));
                const o = a.idSellRatingThreshold;
                let l = parseInt(e.rating);
                const d = !o || l <= o,
                  c = a.idSellFutBinPrice;
                d && c && s && (i = await Ti(a, t, e));
                a.idSellCheckBuyPrice && n > (95 * i) / 100 && (i = -1);
                const f = i && !isNaN(i) && d,
                  m = (a.idAbQuickSell ? e.discardValue : 0.95 * i) - n;
                if (s) {
                  const s = S("winCount");
                  if (
                    (Ii(
                      `[${new Date().toLocaleTimeString()}] ${t.trim()} buy success - Price : ${n}`
                    ),
                    ti(`W: ${s} ${t} buy success added to sell queue`, $e),
                    !a.idAbDontMoveWon)
                  ) {
                    const n = y("sellQueue") || [];
                    n.push({
                      player: e,
                      playerName: t,
                      sellPrice: i,
                      shouldList: f,
                      profit: m,
                    }),
                      h("sellQueue", n);
                  }
                } else {
                  const e = S("bidCount");
                  Ii(
                    `[${new Date().toLocaleTimeString()}] ${t.trim()} bid success - Price : ${n}`
                  ),
                    ti(`B:${e} ${t} bid success`, $e);
                  const i = y("currentFilter") || "default";
                  if (i) {
                    const e = y("filterBidItems") || new Map();
                    e.has(i) ? e.get(i).add(r) : e.set(i, new Set([r])),
                      h("filterBidItems", e);
                  }
                }
                (p.includes("B") || "A" === p) &&
                  zn(
                    "| " +
                      t.trim() +
                      " | " +
                      u.trim() +
                      ` | ${s ? "buy" : "bid"} |`,
                    !0
                  );
              } else {
                let e = S("lossCount");
                Ii(
                  `[${new Date().toLocaleTimeString()}] ${t.trim()} buy failed - Price : ${n}`
                );
                let i = ((c.error && c.error.code) || c.status) + "";
                if (
                  (ti(
                    `L: ${e} ${t} ${s ? "buy" : "bid"} failure ERR: (${
                      o[i] + "(" + i + ")" || 0
                    })`,
                    $e
                  ),
                  (p.includes("L") || "A" === p) &&
                    zn("| " + t.trim() + " | " + u.trim() + " | failure |", !1),
                  a.idAbStopErrorCode)
                ) {
                  const e = new Set(a.idAbStopErrorCode.split(","));
                  if (
                    (xi.has(i) || xi.set(i, { currentVal: 0 }),
                    xi.get(i).currentVal++,
                    e.has(i) &&
                      xi.get(i).currentVal >= a.idAbStopErrorCodeCount &&
                      (ti(
                        `[!!!] Autostopping bot since error code ${i} has occured ${
                          xi.get(i).currentVal
                        } times\n`,
                        $e
                      ),
                      xi.clear(),
                      Gi(),
                      a.idAbResumeAfterErrorOccured))
                  ) {
                    const e = x(a.idAbResumeAfterErrorOccured);
                    ti(`Bot will resume after ${e}(s)`, $e),
                      setTimeout(() => {
                        Ji.call(y("AutoBuyerInstance"));
                      }, 1e3 * e);
                  }
                }
              }
              a.idAbAddBuyDelay && (await T(N(a.idAbDelayToAdd))), l();
            });
          });
        },
        Di = new Set(),
        Ni = function (e) {
          return (
            Hn("Transfer Targets - List View"),
            new Promise((t) => {
              services.Item.clearTransferMarketCache(),
                services.Item.requestWatchedItems().observe(
                  this,
                  function (n, i) {
                    let s = e.idAbMaxBid,
                      o = e.idAbSellPrice,
                      r = i.response.items.filter(function (e) {
                        return !!e._auction;
                      });
                    if (!r.length) return t();
                    services.Item.refreshAuctions(r).observe(
                      this,
                      function (n, i) {
                        services.Item.requestWatchedItems().observe(
                          this,
                          async function (n, i) {
                            const r = y("autoBuyerActive"),
                              a = y("currentFilter") || "default",
                              l =
                                (y("filterBidItems") || new Map()).get(a) ||
                                new Set(),
                              d = y("userWatchItems");
                            if (r && s) {
                              let t = i.response.items.filter(function (e) {
                                return (
                                  "outbid" === e._auction._bidState &&
                                  (!a || l.has(e._auction.tradeId)) &&
                                  !d.has(e._auction.tradeId) &&
                                  "active" === e._auction._tradeState
                                );
                              });
                              if (t.length) {
                                const n = t[F(0, t.length - 1)];
                                await Fi(n, s, o, e);
                              }
                            }
                            const c = e.idSellFutBinPrice;
                            if (
                              r &&
                              !e.idAbDontMoveWon &&
                              ((o && !isNaN(o)) || c)
                            ) {
                              let t = i.response.items.filter(function (e) {
                                return (
                                  e.getAuctionData().isWon() &&
                                  (!a || l.has(e._auction.tradeId)) &&
                                  !d.has(e._auction.tradeId) &&
                                  !Di.has(e._auction.tradeId)
                                );
                              });
                              for (var u = 0; u < t.length; u++) {
                                const n = t[u],
                                  i = e.idSellRatingThreshold;
                                let s = parseInt(n.rating);
                                const r = !i || s <= i;
                                let a = E(n._staticData.name, 15),
                                  l = n._auction.currentBid;
                                r && c && (o = await Ti(e, a, n));
                                e.idSellCheckBuyPrice &&
                                  l > (95 * o) / 100 &&
                                  (o = -1);
                                const d = o && !isNaN(o) && r;
                                if (
                                  (d && Di.add(n._auction.tradeId),
                                  !e.idAbDontMoveWon)
                                ) {
                                  const t = y("sellQueue") || [],
                                    i =
                                      (e.idAbQuickSell
                                        ? n.discardValue
                                        : 0.95 * o) - l;
                                  t.push({
                                    player: n,
                                    sellPrice: o,
                                    playerName: a,
                                    shouldList: d,
                                    profit: i,
                                  }),
                                    h("sellQueue", t);
                                }
                              }
                            }
                            let p = i.response.items.filter((e) => {
                              var t = e.getAuctionData();
                              return (
                                t.isExpired() ||
                                (t.isClosedTrade() && !t.isWon())
                              );
                            });
                            e.idAutoClearExpired &&
                              p.length &&
                              (services.Item.untarget(p),
                              ti(
                                `Found ${p.length} expired items and removed from watchlist`,
                                $e
                              )),
                              services.Item.clearTransferMarketCache(),
                              t();
                          }
                        );
                      }
                    );
                  }
                );
            })
          );
        },
        Fi = async (e, t, n, i) => {
          let s = e._auction,
            o = s.currentBid,
            r = s.currentBid || s.startingBid,
            a = E(e._staticData.name, 15);
          const l = y("autoBuyerActive");
          let d = i.idAbBidExact ? t : o ? $i(t) : t,
            c = i.idAbBidExact ? t : o ? Ci(r) : r;
          l &&
            r <= d &&
            (ti("Bidding on outbidded item -> Bidding Price :" + c, $e),
            await Mi(e, a, c, n),
            i.idAbAddBuyDelay && (await T(1)));
        },
        Ri = () => {
          const e = v();
          let t = e.idAntiCaptchKey,
            n = e.idProxyAddress,
            i = e.idProxyPort,
            s = e.idProxyLogin,
            o = e.idProxyPassword;
          if (!n || !i || !t)
            return (
              ti("Proxy info not filled properly", $e),
              void ei(e.idAbCloseTabToggle)
            );
          function r(e) {
            let n = { clientKey: t, taskId: e };
            var i = new XMLHttpRequest();
            i.open("POST", "https://api.anti-captcha.com/getTaskResult", !0),
              i.setRequestHeader("Content-Type", "application/json"),
              (i.onreadystatechange = function () {
                if (4 === i.readyState && 200 === i.status) {
                  var t = JSON.parse(i.responseText);
                  if (0 == t.errorId)
                    if ("ready" == t.status) {
                      new UTCaptchaViewModel(accessobjects.Captcha)
                        .validateToken(t.solution.token)
                        .observe(this, function (e, t) {
                          if (t.success) {
                            ti("Captcha Solved", $e);
                            const e = y("AutoBuyerInstance");
                            Ji.call(e);
                          }
                        });
                    } else setTimeout(() => r(e), 1e3);
                  else
                    ti(
                      "Error occured when checking captcha result : " +
                        t.errorCode +
                        ", " +
                        t.errorDescription,
                      $e
                    );
                }
              });
            var s = JSON.stringify(n);
            i.send(s);
          }
          !(function () {
            accessobjects.Captcha.getCaptchaData().observe(
              this,
              function (e, a) {
                if (a.success) {
                  if (!(d = a.response.blob)) return !1;
                  let e = {
                    clientKey: t,
                    task: {
                      type: "FunCaptchaTask",
                      websiteURL:
                        "https://www.ea.com/fifa/ultimate-team/web-app/",
                      websitePublicKey: "A4EECF77-AC87-8C8D-5754-BF882F72063B",
                      funcaptchaApiJSSubdomain: "ea-api.arkoselabs.com",
                      data: a.response,
                      proxyType: "http",
                      proxyAddress: n,
                      proxyPort: i,
                      proxyLogin: s,
                      proxyPassword: o,
                      userAgent:
                        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/52.0.2743.116 Safari/537.36",
                    },
                  };
                  var l = new XMLHttpRequest();
                  l.open("POST", "https://api.anti-captcha.com/createTask", !0),
                    l.setRequestHeader("Content-Type", "application/json"),
                    (l.onreadystatechange = function () {
                      if (4 === l.readyState && 200 === l.status) {
                        var e = JSON.parse(l.responseText);
                        0 == e.errorId
                          ? r(e.taskId)
                          : ti(
                              "Got error from Captcha API: " +
                                e.errorCode +
                                ", " +
                                e.errorDescription,
                              $e
                            );
                      }
                    });
                  var d = JSON.stringify(e);
                  return l.send(d), !0;
                }
              }
            );
          })();
        },
        Ei = new Set(),
        ki = function (e) {
          return new Promise((t) => {
            const n = N(e.idAbItemExpiring),
              i = e.idAbRandMinBidToggle,
              s = e.idAbRandMinBuyToggle,
              o = e.idBuyFutBinPercent || 100;
            let r = y("currentPage") || 1;
            Jt("searchPerMinuteCount") > 15 &&
              (e.idAbOverSearchWarning || void 0 === e.idAbOverSearchWarning) &&
              (ti("--------------------", $e),
              ti(
                "!!! More than 15 searches performed in last minute, increase your wait time",
                $e
              ),
              ti("--------------------", $e));
            const a = new Set(
                (e.idAddIgnorePlayersList || []).map(({ id: e }) => e)
              ),
              l = w();
            let d = e.idAbMaxBid,
              c = e.idAbBuyPrice,
              u = e.idBuyFutBinPrice || e.idAbBidFutBin;
            if (!c && !d && !u)
              return ti("skip search >>> (No Buy or Bid Price given)", $e), t();
            Hn("Transfer Market Search"),
              (() => {
                const e = y("sessionStats");
                e.searchCount++, e.searchPerMinuteCount++, h("sessionStats", e);
              })();
            let p = this._viewmodel.searchCriteria;
            i && (p.minBid = Ai(F(0, e.idAbRandMinBidInput))),
              s && (p.minBuy = Ai(F(0, e.idAbRandMinBuyInput))),
              services.Item.clearTransferMarketCache(),
              services.Item.searchTransferMarket(p, r).observe(
                this,
                async function (i, s) {
                  if (s.success) {
                    h("searchFailedCount", 0);
                    let t = !0;
                    ti(
                      `Found ${s.data.items.length} items, page - ${r} => (minbid: ${p.minBid} minbuy:${p.minBuy})`,
                      $e
                    ),
                      s.data.items.length > 0 &&
                        (ti("--------------------", $e),
                        1 === r && Hn("Transfer Market Results - List View"),
                        u &&
                          "player" === s.data.items[0].type &&
                          (await wi(s.data.items))),
                      s.data.items.length > e.idAbSearchResult && (t = !1);
                    let i = e.idAbMaxPurchases || 1;
                    e.idAbShouldSort &&
                      (s.data.items = ((e, t, n) => {
                        let i = (e) => e._auction.buyNowPrice;
                        return (
                          "bid" === t
                            ? (i = (e) =>
                                e._auction.currentBid || e._auction.startingBid)
                            : "rating" === t
                            ? (i = (e) => parseInt(e.rating))
                            : "expires" === t &&
                              (i = (e) => parseInt(e._auction.expires)),
                          e.sort((e, t) => {
                            const s = i(e),
                              o = i(t);
                            return n ? s - o : o - s;
                          }),
                          e
                        );
                      })(s.data.items, e.idAbSortBy || "buy", e.idAbSortOrder));
                    for (
                      let r = s.data.items.length - 1;
                      r >= 0 && y("autoBuyerActive");
                      r--
                    ) {
                      let p = s.data.items[r],
                        g = p._auction,
                        b = services.Localization.localizeAuctionTimeRemaining(
                          g.expires
                        ),
                        h = p.type,
                        { id: v } = p._metaData || {},
                        S = parseInt(p.rating);
                      if (u && "player" === h) {
                        const t = y(
                          `${p.definitionId}_${l.toLowerCase()}_price`
                        );
                        if (!t || !t.price) {
                          ti(`Price unavailable for ${p._staticData.name}`, $e);
                          continue;
                        }
                        {
                          const n = Ai((t.price * o) / 100);
                          (c = n), e.idAbBidFutBin && (d = n);
                        }
                      }
                      let w = g.buyNowPrice,
                        A = g.currentBid || g.startingBid,
                        $ = g.currentBid,
                        C = e.idAbBidExact ? d : $ ? $i(d) : d,
                        T = e.idAbBidExact ? C : $ ? Ci(A) : A,
                        B = e.idAbSellPrice,
                        P = e.idAbMinRating,
                        I = e.idAbMaxRating,
                        _ = p._staticData.name;
                      const x = !(P || I) || ((m = I), (f = S) >= P && f <= m),
                        M = Ui(`${_}(${S}) Price: ${w} time: ${b}`);
                      if (
                        (!e.idAbIgnoreAllowToggle && a.has(v)) ||
                        (e.idAbIgnoreAllowToggle && !a.has(v))
                      ) {
                        M("(Ignored player)");
                        continue;
                      }
                      if (!t) {
                        M("(Exceeded search result threshold)");
                        continue;
                      }
                      if (i < 1) break;
                      if (!p.preferredPosition && e.idAbAddFilterGK) {
                        M("(is a Goalkeeper)");
                        continue;
                      }
                      if (
                        (p.playStyle === DEFAULT_PLAYSTYLE_ID ||
                          p.playStyle ===
                            ItemSubType.TRAINING_PLAYERSTYLE_GOALKEEPER_5) &&
                        e.idAbAddFilterBC
                      ) {
                        M("(is a Basic Chemistry)");
                        continue;
                      }
                      if (!x) {
                        M("(rating does not fit criteria)");
                        continue;
                      }
                      if (Ei.has(g.tradeId)) {
                        M("(Cached Item)");
                        continue;
                      }
                      const D = services.User.getUser().coins.amount;
                      if ((!d && D < w) || (d && D < T))
                        M("(Insufficient coins to buy/bid)");
                      else if (w <= c)
                        M("attempt buy: " + w),
                          i--,
                          Ei.add(g.tradeId),
                          await Mi(p, _, w, B, !0, g.tradeId);
                      else if (d && A <= C) {
                        if (g.expires > n) {
                          M("(Waiting for specified expiry time)");
                          continue;
                        }
                        M("attempt bid: " + T),
                          Ei.add(g.tradeId),
                          i--,
                          await Mi(p, _, T, B, T === w, g.tradeId);
                      } else
                        M(
                          (c && w > c) || (d && A > C)
                            ? `BuyPrice: ${
                                c || C
                              } (higher than specified buy/bid price)`
                            : "(No Actions Required)"
                        );
                    }
                  } else
                    ((e, t, n) => {
                      let i = !1;
                      if (
                        e.status === UtasErrorCode.CAPTCHA_REQUIRED ||
                        (e.error &&
                          e.error.code == UtasErrorCode.CAPTCHA_REQUIRED)
                      )
                        (i = !0),
                          t
                            ? (ti(
                                "[!!!] Captcha got triggered, trying to solve it",
                                $e
                              ),
                              Ri())
                            : ei(n);
                      else {
                        const t = S("searchFailedCount");
                        t >= 3
                          ? ((i = !0),
                            ti(
                              `[!!!] Autostopping bot as search failed for ${t} consecutive times, please check if you can access transfer market in Web App ${e.status}`,
                              $e
                            ))
                          : ti(`[!!!] Search failed - ${e.status}`, $e);
                      }
                      i &&
                        (k("capatcha"),
                        "A" === v().idNotificationType &&
                          zn("Autobuyer Stopped", !1),
                        Gi());
                    })(s, e.idAbSolveCaptcha, e.idAbCloseTabToggle);
                  var f, m;
                  Hn("Transfer Market Search"),
                    r < e.idAbMaxSearchPage && 21 === s.data.items.length
                      ? S("currentPage")
                      : h("currentPage", 1),
                    t();
                }
              );
          });
        },
        Ui = (e) => (t) => {
          ti(e + " " + t, $e);
        },
        Li = function (e, t, n) {
          return (
            Hn("Transfer List - List View"),
            new Promise((i) => {
              n || repositories.Item.isDirty(ItemPile.TRANSFER)
                ? services.Item.requestTransferItems().observe(
                    this,
                    async function (n, s) {
                      let o = s.response.items.filter(function (e) {
                        return e.getAuctionData().isSold();
                      }).length;
                      Jt("soldItems") < o && (await si()), jt("soldItems", o);
                      const r = s.response.items.filter(function (e) {
                        return (
                          !e.getAuctionData().isSold() &&
                          e.getAuctionData().isExpired()
                        );
                      }).length;
                      jt("unsoldItems", r);
                      const a = o >= t;
                      r &&
                        e &&
                        services.Item.relistExpiredAuctions().observe(
                          this,
                          function (e, t) {
                            !a &&
                              UTTransferListViewController.prototype.refreshList();
                          }
                        );
                      const l = s.response.items.filter(function (e) {
                        return e.getAuctionData().isSelling();
                      }).length;
                      jt("activeTransfers", l);
                      const d = s.response.items.filter(function (e) {
                        return e.getAuctionData().isInactive();
                      }).length;
                      jt("availableItems", d);
                      const c = services.User.getUser().coins.amount;
                      jt("coinsNumber", c),
                        jt("coins", c.toLocaleString()),
                        a &&
                          (ti("[TRANSFER-LIST] > " + o + " item(s) sold\n", $e),
                          UTTransferListViewController.prototype._clearSold()),
                        i();
                    }
                  )
                : i();
            })
          );
        },
        Wi = function () {
          return {
            switchFilterWithContext: li.bind(this),
            srchTmWithContext: ki.bind(this),
            watchListWithContext: Ni.bind(this),
            transferListWithContext: Li.bind(this),
            pauseBotWithContext: ai.bind(this),
          };
        },
        Oi = async () => {
          const e = y("sellQueue") || [],
            t = v(),
            n = t.idAbSendListingNotificationToggle,
            i = e.length;
          for (i && ti("--------------------", $e); e.length; ) {
            const {
                player: i,
                sellPrice: s,
                shouldList: o,
                playerName: r,
                profit: a,
              } = e.pop(),
              l = await Hi(i, s, a, o, t);
            Vi(s, o, a, t, r, l, n, i.discardValue), e.length && (await T(2));
          }
          i && ti("--------------------", $e);
        },
        Vi = (e, t, n, i, s, o, r, a) => {
          const l = `${s.trim()}, ${
            o ||
            (e < 0
              ? "moved to transferlist"
              : t
              ? "listed for: " + e + ", Profit: " + n
              : i.idAbDontMoveWon
              ? ""
              : i.idAbQuickSell
              ? "quick sold for:" + a
              : "moved to club")
          } `;
          ti(l, $e), r && zn(l, !0);
        },
        Hi = (e, t, n, i, s) =>
          new Promise((o) => {
            if (t < 0)
              services.Item.move(e, ItemPile.TRANSFER).observe(
                void 0,
                async function () {
                  o();
                }
              );
            else if (i) {
              if (repositories.Item.isPileFull(ItemPile.TRANSFER))
                return o("Unable to list, transfer List if Full");
              Pi(n),
                services.Item.list(
                  e,
                  $i(t),
                  t,
                  N(s.idFutBinDuration || "1H") || 3600
                ).observe(void 0, async function (e, t) {
                  o();
                });
            } else
              s.idAbQuickSell
                ? (services.Item.discard([e]), Pi(n), o())
                : services.Item.move(e, ItemPile.CLUB).observe(
                    void 0,
                    async function (e, t) {
                      o();
                    }
                  );
          });
      let zi = null,
        ji = null;
      const Ji = async function (e) {
          $("#" + Ue)
            .css("color", "#2cbe2d")
            .html("RUNNING");
          if (y("autoBuyerActive")) return;
          ((e) => {
            Vn(e ? "Autobuyer Resumed" : "Autobuyer Started"),
              h("autoBuyerActive", !0),
              h("autoBuyerState", "Active"),
              isPhone() && $(".ut-tab-bar-item").attr("disabled", !0),
              e ||
                (h("botStartTime", new Date()),
                h("purchasedCardCount", 0),
                h("searchFailedCount", 0),
                h("currentPage", 1));
          })(e);
          const {
            switchFilterWithContext: t,
            srchTmWithContext: n,
            watchListWithContext: i,
            transferListWithContext: s,
            pauseBotWithContext: o,
          } = Wi.call(this);
          await t();
          let r = v();
          e && "A" === r.idNotificationType && zn("Autobuyer Started", !0),
            !e &&
              (await new Promise((e, t) => {
                services.Item.requestWatchedItems().observe(
                  void 0,
                  function (t, n) {
                    if (n.success) {
                      const e = y("filterBidItems") || new Map(),
                        t = new Set(
                          Array.from(e.values())
                            .flat(1)
                            .reduce((e, t) => e.concat([...t]), [])
                        ),
                        i =
                          n.response.items
                            .filter(
                              (e) => e._auction && !t.has(e._auction.tradeId)
                            )
                            .map((e) => e._auction.tradeId) || [];
                      h("userWatchItems", new Set(i)),
                        i.length &&
                          ti(
                            `Found ${i.length} items in users watch list and ignored from selling`,
                            $e
                          );
                    }
                    e();
                  }
                );
              })),
            Hn("Hub - Transfers"),
            await n(r),
            Hn("Hub - Transfers"),
            await s(r.idAbSellToggle, r.idAbMinDeleteCount, !0);
          let a = !1;
          y("autoBuyerActive") &&
            (zi = ((e, t, n) => {
              let i,
                s = !1;
              const o = () => {
                if (s) return;
                const r = { start: Date.now() },
                  a =
                    1e3 * parseFloat((Math.random() * (n - t) + t).toFixed(1));
                (r.end = r.start + a),
                  h("searchInterval", r),
                  (i = setTimeout(() => {
                    e(), o();
                  }, a));
              };
              return (
                o(),
                {
                  clear() {
                    (s = !0), clearTimeout(i);
                  },
                }
              );
            })(async () => {
              (ji = o(r)),
                ((e) => {
                  const t = y("purchasedCardCount"),
                    n = e.idAbCardCount,
                    i = y("botStartTime").getTime();
                  let s = oi || x(e.idAbStopAfter);
                  oi || (oi = s);
                  let o = (new Date().getTime() - i) / 1e3 >= s;
                  if (o || (n && t >= n)) {
                    const t = o
                      ? "Time elapsed"
                      : "Max purchases count reached";
                    ti(`Autobuyer stopped | ${t}`, $e),
                      (oi = null),
                      (ri = null),
                      "A" === e.idNotificationType &&
                        zn(`Autobuyer Stopped - ${t}`),
                      Gi();
                  }
                })(r);
              y("autoBuyerActive") &&
                !a &&
                ((a = !0),
                await Oi(),
                await t(),
                (r = v()),
                Hn("Hub - Transfers"),
                await n(r),
                Hn("Hub - Transfers"),
                await i(r),
                Hn("Hub - Transfers"),
                await s(r.idAbSellToggle, r.idAbMinDeleteCount)),
                (a = !1);
            }, ...R(r.idAbWaitTime)));
        },
        Gi = (e) => {
          zi && zi.clear(), !e && ji && clearTimeout(ji);
          const t = y("autoBuyerState");
          if ((e && t === i) || (!e && t === s)) return;
          h("autoBuyerActive", !1);
          const n = y("searchInterval") || {};
          h("searchInterval", { start: n.start, end: Date.now() }),
            e || k("finish"),
            isPhone() && $(".ut-tab-bar-item").removeAttr("disabled"),
            h("autoBuyerState", e ? i : s);
          const o = v();
          e &&
            "A" === o.idNotificationType &&
            zn("Autobuyer Paused", e, 16705372),
            Vn(e ? "Autobuyer Paused" : "Autobuyer Stopped"),
            e || Oi(),
            $("#" + Ue)
              .css("color", "red")
              .html(e ? "PAUSED" : "IDLE");
        },
        qi = () =>
          `<div class="view-navbar-currency">\n            <span id=${Tt} style="font-weight: bold;\n            margin: auto 2px;">00:00:00</span>\n            <div style="margin: auto 2px;">Search:</div> \n            <div class="stats-progress">\n              <div id=${Fe} class="stats-fill"></div>\n            </div>\n            <div class="view-navbar-currency-coins ab coins">Coins: <span id=${ke}></span></div>\n            <div class="view-navbar-currency-coins ab profit">Profit: <span id=${at}></span></div>\n            ${an(
            Bt,
            "⇩",
            () => {
              _i();
            },
            "filterSync download-stats"
          )} \n          </div>`,
        Yi = () =>
          `\n  <div class="view-navbar-clubinfo-data">\n    <div class="view-navbar-clubinfo-name">\n    ${an(
            Bt,
            "⇩",
            () => {
              _i();
            },
            "filterSync"
          )}\n    </div>\n  </div>\n  <div class="view-navbar-clubinfo">\n    <div class="view-navbar-clubinfo-data">\n      <div class="view-navbar-clubinfo-name">\n        <span id=${Tt} style="font-weight: bold;">00:00:00</span>\n      </div>\n    </div>\n  </div>\n  <div class="view-navbar-clubinfo">\n    <div class="view-navbar-clubinfo-data">\n       <div class="view-navbar-clubinfo-name">\n          <div style="float: left;">Search:</div>\n          <div class="stats-progress">\n             <div id=${Fe} class="stats-fill"></div>\n          </div>\n       </div>\n       <div class="view-navbar-clubinfo-name">\n          <div style="float: left;">Statistics:</div>\n          <div class="stats-progress">\n             <div id=${Re} class="stats-fill"></div>\n          </div>     \n       </div>\n    </div>\n  </div>\n  <div class="view-navbar-currency" style="margin-left: 10px;">\n    <div class="view-navbar-currency-coins ab coins">Coins: <span  id=${ke}></span></div>\n    <div class="view-navbar-currency-coins ab profit">Profit: <span  id=${at}></span></div>\n  </div>\n  <div class="view-navbar-clubinfo">\n    <div class="view-navbar-clubinfo-data">\n       <span class="view-navbar-clubinfo-name">Sold Items: <span id=${Le}></span></span>\n       <span class="view-navbar-clubinfo-name">Unsold Items: <span id=${We}></span></span>\n    </div>\n  </div>\n  <div class="view-navbar-clubinfo" style="border: none;">\n    <div class="view-navbar-clubinfo-data">\n       <span class="view-navbar-clubinfo-name">Available Items: <span id=${Oe}></span></span>\n       <span class="view-navbar-clubinfo-name">Active transfers: <span id=${Ve}></span></span>\n    </div>\n  </div>`,
        { startAutoBuyer: Xi, stopAutoBuyer: Ki } = t,
        Qi = function (e) {
          UTMarketSearchFiltersViewController.call(this);
        },
        Zi = UTMarketSearchFiltersViewController.prototype.init,
        es = UTMarketSearchFiltersViewController.prototype.viewDidAppear;
      JSUtils.inherits(Qi, UTMarketSearchFiltersViewController),
        JSUtils.inherits(
          UTMarketSearchFiltersViewController,
          UTMarketSearchFiltersViewController
        ),
        (Qi.prototype.init = function () {
          Zi.call(this);
          let e = this.getView();
          isPhone() || (e.__root.style = "width: 52%; float: left;"),
            h("AutoBuyerInstance", this);
          const t = Bn.call(this);
          let n = $(e.__root);
          const i = Gt.bind(this),
            s = i("Stop", () => Ki.call(this)),
            o = i("Clear Log", () => ni.call(this), "btn-other"),
            r = i(
              "Start",
              () => {
                Xi.call(this),
                  $(".ut-navigation-container-view--content").animate(
                    {
                      scrollTop: $(
                        ".ut-navigation-container-view--content"
                      ).prop("scrollHeight"),
                    },
                    400
                  );
              },
              "call-to-action"
            );
          setInterval(() => {
            isPhone() ? Vt() : Ht();
          }, 1e3),
            n.addClass("auto-buyer");
          const a = n.find(".button-container");
          a.addClass("buyer-actions"), a.find(".call-to-action").remove();
          const l = a.find('button:contains("Reset")');
          l.on("click touchend", async function () {
            $(`#${W}`).prop("selectedIndex", 0), await Pn();
          }),
            l.addClass("btn-other"),
            a.append($(r.__root)),
            a.append($(s.__root)),
            a.append($(o.__root)),
            $(t.__root).find(".menu-container").addClass("settings-menu"),
            n.find(".search-prices").append(t.__root);
        }),
        (Qi.prototype.viewDidAppear = function () {
          this.getNavigationController().setNavigationVisibility(!0, !0),
            ts.call(this, !1);
        }),
        (UTMarketSearchFiltersViewController.prototype.viewDidAppear =
          function () {
            ts.call(this, !0);
          });
      const ts = function (e) {
        es.call(this);
        let t = this.getView(),
          n = $(t.__root);
        n.find(".filter-place").length ||
          wn.call(this, e).then((e) => {
            n.find(".ut-item-search-view").first().prepend(e);
          });
      };
      Qi.prototype.getNavigationTitle = function () {
        return (
          setTimeout(() => {
            const e = $(".title");
            isPhone() && e.addClass("buyer-header"),
              $(".view-navbar-currency").remove(),
              $(".view-navbar-clubinfo").remove(),
              e.append(
                `<span style='color:red' id="${Ue}"> IDLE </span> | REQUEST COUNT: <span id="${Ee}">0</span> \n  `
              ),
              $(isPhone() ? qi() : Yi()).insertAfter(e),
              $(".ut-navigation-container-view--content")
                .find(`#${Et}`)
                .remove(),
              $(".ut-navigation-container-view--content").append(
                (() => {
                  const e = $(
                    `<div style=${
                      isPhone()
                        ? "height: 90%;display: flex;flex-direction: column;padding: 7px;"
                        : "width:48%"
                    } id=${Et}>\n            <div class="logs-container">\n              <label>Logs:</label>\n              <div data-title="Clear logs" class="button-clear">\n              </div>\n            </div>\n            <br/>\n            <div class="logWrapper">\n              <textarea wrap="off"  style="height: 100%;overflow-x: auto;resize: none; width: 100%;" readonly id=${$e} class="autoBuyerLog"></textarea>\n              <a class="joinServer" target="_blank" rel="noopener noreferrer" href="https://discord.com/invite/cktHYmp">Join Our Discord Server</a>\n            <br/>\n        </div>`
                  );
                  return (
                    e.find(".button-clear").append(Gt("⎚", () => ni()).__root),
                    e
                  );
                })()
              ),
              qt(),
              L(y("CommonSettings") || {});
          }),
          "AutoBuyer "
        );
      };
      const ns = () => {
          const e = UTGameTabBarController.prototype.initWithViewControllers;
          UTGameTabBarController.prototype.initWithViewControllers = function (
            t
          ) {
            const n = new UTGameFlowNavigationController();
            n.initWithRootController(new Qi()),
              (n.tabBarItem = ss("Autobuyer")),
              (t = is(t)).push(n),
              e.call(this, t);
          };
        },
        is = (e) => {
          if (!isPhone()) return e;
          const t = [];
          return t.push(e[0]), t.push(e[2]), t.push(e[3]), t.push(e[4]), t;
        },
        ss = (e) => {
          const t = new UTTabBarItemView();
          return (
            t.init(), t.setTag(8), t.setText(e), t.addClass("icon-transfer"), t
          );
        },
        os = () => {
          const e = UTNavigationBarView.prototype.layoutSubviews;
          function t() {
            const e = new UTNavigationButtonControl();
            return (
              e.init(),
              e.addClass("menu-btn"),
              e.setInteractionState(!0),
              e.addTarget(
                this,
                () => {
                  window.ReactNativeWebView.postMessage(
                    JSON.stringify({ type: "OpenDrawer" })
                  );
                },
                EventType.TAP
              ),
              e
            );
          }
          UTNavigationBarView.prototype.layoutSubviews = function (...n) {
            const i = e.call(this, ...n);
            if (this.primaryButton && this.__clubInfo) {
              this._menuBtn && this._menuBtn.removeFromSuperview(),
                (this._menuBtn = t.call(this));
              const e = $(this.primaryButton.getRootElement()),
                n = $(this._menuBtn.getRootElement());
              $(".top-nav").remove(),
                e.wrap('<div class="top-nav"></div>'),
                n.insertBefore(e);
            }
            return i;
          };
        };
      n(665);
      const rs = () => {
          const e = UTCurrencyNavigationBarView.prototype._tapDetected;
          UTCurrencyNavigationBarView.prototype._tapDetected = function (t) {
            const n = e.call(this, t);
            if (t.target.classList.contains("coins")) return si(), n;
            return (
              t.target.classList.contains("profit") &&
                (() => {
                  const e = y("sessionStats");
                  (e.profit = 0), h("sessionStats", e);
                })(),
              n
            );
          };
        },
        as = () => {
          c(), ns(), isPhone() && os(), A(), rs();
        },
        ls = () =>
          "\n  ::-webkit-scrollbar {\n    -webkit-appearance: none;\n  }\n  ::-webkit-scrollbar:vertical {\n      width: 12px;\n  }\n  ::-webkit-scrollbar:horizontal {\n      height: 12px;\n  }\n  ::-webkit-scrollbar-thumb {\n      background-color: rgba(0, 0, 0, .5);\n      border-radius: 10px;\n      border: 2px solid #ffffff;\n  }\n  ::-webkit-scrollbar-track {\n      border-radius: 10px;\n      background-color: #ffffff;\n  }",
        ds = function () {
          let e = !1;
          isPhone() && $("body").removeClass("landscape").addClass("phone"),
            $(".ui-orientation-warning").attr(
              "style",
              "display: none !important"
            ),
            $(".ut-fifa-header-view").attr("style", "display: none !important"),
            services.Localization &&
              $("h1.title").html() ===
                services.Localization.localize("navbar.label.home") &&
              (e = !0),
            e
              ? (() => {
                  const e = document.createElement("style");
                  $(".ui-orientation-warning").css("display", "none"),
                    $(".ut-fifa-header-view").css("display", "none"),
                    (e.innerText = `\n  .buyer-header {\n      font-size: 20px !important;\n  }\n  .with-fifa-header .ut-root-view {\n    height: 100%;\n  }\n  .buyer-settings {\n      width: 100%;\n  }\n  .buyer-settings-field {\n    margin-top: 15px;\n    margin-bottom: 15px;\n  }\n  .phone .buyer-settings-field{\n    margin-top: auto;\n    margin-bottom: auto;\n    width: 100%;\n    padding: 10px;\n  }\n  .buyer-settings-wrapper {\n    display: flex; \n    flex-wrap: wrap; \n    margin-top: 20px;\n  }\n  .buyer-settings-field .ut-toggle-cell-view{\n    justify-content: center;\n  }\n  .buyer-settings-field input:disabled {\n    background-color: #c3c6ce;\n    cursor: not-allowed;\n  }\n  .btn-test-notification\n  {\n    width: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n  input[type="number"]{\n    padding: 0 .5em;\n    border-radius: 0;\n    background-color: #262c38;\n    border: 1px solid #4ee6eb;\n    box-sizing: border-box;\n    color: #4ee6eb;\n    font-family: UltimateTeam,sans-serif;\n    font-size: 1em;\n    height: 2.8em;\n    opacity: 1;\n    width: 100%;\n  }\n  .autoBuyerLog {\n    font-size: ${
                      isPhone() ? "13px" : "15px"
                    }; \n    height: 50%;\n    background-color:#141414;\n    color:#e2dde2;\n  }\n  .searchLog {\n    font-size: 10px; \n    height: 50%;\n  }\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n  .captcha-settings-view input,\n  .notification-settings-view input {\n    text-transform: none;\n  }\n  .phone .buyer-header{\n    font-size: 1.2em !important;\n  }\n  .phone .buyer-actions .btn-standard{\n    padding: 0;\n    font-size: 1.2em;\n    text-overflow: unset;\n  }\n  .filter-header-settings {\n    width: 100%;\n    padding: 10px;\n    font-family: UltimateTeamCondensed, sans-serif;\n    font-size: 1.6em;\n    color: #e2dde2;\n    text-transform: uppercase;\n    background-color: #171826;\n  }\n  .btn-save-filter {\n    width:100%\n  }\n  .btn-delete-filter {\n    width:50%\n  }\n  .multiple-filter {\n    width: 100%  !important;\n    display: flex  !important;\n    justify-content: center;\n    align-items: center;\n  }\n  .logs-container {\n    display: flex;\n    justify-content: space-between;\n    font-size: 20px;\n    align-items: center;\n  }\n  .button-clear button {\n    color: #fff;\n    background-color: unset;\n    height: unset;\n    line-height: unset;\n  }\n  .top-nav{\n    display:flex; \n  }\n  .ut-navigation-button-control.menu-btn:before {\n    content: "≡";\n    transform: unset;\n  }\n  .menu-btn {\n    min-width: 0px;\n    margin-left: 5px;\n  }\n  .filterSync {\n    background: transparent;\n    color: #c4f750;\n    text-overflow: clip;\n  }\n  .filterSync:hover {\n    background: transparent !important;\n  }\n  .stats-progress {\n    float: right; \n    height: 10px; \n    width: 100px; \n    background: #888; \n    margin: ${
                      isPhone() ? "auto 5px" : "5px 0px 5px 5px"
                    };\n  }\n  .stats-fill {\n    background: #000; \n    height: 10px; \n    width: 0%\n  }\n  .numericInput:invalid {\n    color: red;\n    border: 1px solid;\n  }\n  .ignore-players{\n    width: 100%;\n    display: flex;\n    background: transparent;\n  }\n  .ignore-players .ut-player-search-control{\n    width: 90% !important;\n  }\n  .ignore-players filterSync{\n    flex: unset;\n  }\n  .font15 {\n    font-size: 15px;\n  }  \n  .action-icons {\n    display: unset !important;\n    width: 10%\n  }\n  .displayCenterFlx {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .displayNone {\n    height: 275px;\n  }\n  .displayNone .inline-list-select,\n  .displayNone .search-prices,\n  .displayNone .btn-actions,\n  .displayNone .btn-filters,\n  .displayNone .btn-report,\n  .displayNone .buyer-actions .btn-other {\n    display: none !important;\n  }\n  .mrg10 {\n    margin: 10px;\n  }\n  .ut-toggle-cell-view--label{\n    overflow: unset;\n  }\n  .download-stats {\n    line-height: 1;\n    display: flex;\n  }\n  .btn-report {\n    display: flex;\n    justify-content: center;\n  }\n  small{\n    white-space: break-spaces;\n  }  \n  .joinServer {\n    position: absolute;\n    right: 25px;\n    top: 50%;\n    color: wheat\n  }\n  .phone .joinServer{\n    display: none;\n  }\n  textarea {\n    resize: none;\n  }  \n  .logWrapper {\n    position: relative;\n    height: 100%\n  } \n \n  .auto-buyer .autoBuyMin{\n    display: none;\n  }\n  .auto-buyer .search-prices .settings-field{\n    display: none;\n  }\n  `),
                    (e.innerText += ls()),
                    document.head.appendChild(e);
                })()
              : setTimeout(ds, 1e3);
        },
        cs = function () {
          let e = !1;
          services.Localization && (e = !0),
            e
              ? (as(),
                ds(),
                l &&
                  window.addEventListener(
                    "message",
                    (e) => {
                      const t = JSON.parse(e.data);
                      if ("dataFromExternalAB" === t.type) {
                        const { res: e, identifier: n } = t.response,
                          i = y(n);
                        return i && i(e), h(n, null);
                      }
                    },
                    !0
                  ))
              : setTimeout(cs, 1e3);
        };
      cs();
    })();
})();
