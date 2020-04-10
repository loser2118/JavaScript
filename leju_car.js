! function(i) {
    var a = {};

    function n(t) {
        if (a[t]) return a[t].exports;
        var e = a[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return i[t].call(e.exports, e, e.exports, n), e.l = !0, e.exports
    }
    n.m = i, n.c = a, n.d = function(t, e, i) {
        n.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, n.r = function(t) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var i = Object.create(null);
        if (n.r(i), Object.defineProperty(i, "default", {
            enumerable: !0,
            value: e
        }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(i, a, function(t) {
                return e[t]
            }.bind(null, a));
        return i
    }, n.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t.default
        } : function() {
            return t
        };
        return n.d(e, "a", e), e
    }, n.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, n.p = "", n(n.s = 0)
}([
    function(t, e, i) {
        function o(t) {
            return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var a = i(1),
            r = i(2),
            n = i(3),
            s = i(4),
            l = i(6),
            c = btn_status,
            d = pageConfig.content,
            u = "",
            h = "",
            p = ",",
            f = 1,
            m = total_page,
            v = !0,
            g = to,
            _ = app_code,
            C = method_no;
        i(7)($(".t_main"));
        var k = "",
            y = "robpark_" + pageConfig.project_id + "_" + pageConfig.activity_id;

        function b(t) {
            var e = 0;
            return t.each(function() {
                e = $(this).width() > e ? $(this).width() : e
            }), e
        }

        function S() {
            c = 3, $("#firstSubmitBtn").html(topic_content), $("#projectStatusText").html("活动剩余时间"), $("#choiceTip").hasClass("none") || $("#firstSubmitBtn").removeClass("t_disable"), F(),
                function() {
                    if ("" != h) return;
                    var t = had_start.split("_");
                    h = new a({
                        status: c,
                        day: t[0],
                        hour: t[1],
                        min: t[2],
                        sec: t[3],
                        callback: function(t) {
                            $("#hour").html(t.hour.F + "" + t.hour.S), $("#min").html(t.min.F + "" + t.min.S), $("#sec").html(t.sec.F + "" + t.sec.S), t.totalSec <= 0 && (clearInterval(h.timer), clearInterval(h.checkTimer), window.setTimeout(function() {
                                window.top.location.href = index_url + "?activity_id=" + pageConfig.activity_id + "&source=" + pageConfig.source
                            }, 1e3))
                        }
                    })
                }()
        }
        $(document).ready(function() {
            ! function() {
                var t = b($("#louCeng>li")),
                    e = ($("#louCeng>li").length + 1) * t;
                $("#louCeng").css("width", e + "px"),
                    function() {
                        var t = b($("#quYu>.onSelect>li")),
                            e = ($("#quYu>.onSelect>li").length + 1) * t;
                        $("#quYu>.onSelect").css("width", e + "px")
                    }()
            }(),
            function() {
                if (1 == onload_status) {
                    if (1 == sale_mode) {
                        $(".succTip").removeClass("none");
                        var t = diff_time_str.split("_");
                        w = new a({
                            day: t[0],
                            hour: t[1],
                            min: t[2],
                            sec: t[3],
                            callback: function(t) {
                                $(".succCountDown").html(t.min.S + "分钟" + t.sec.F + t.sec.S + "秒"), 0 == t.totalSec && (clearTimeout(w.timer), $(".succTip").addClass("none"), T("已超时，请重新提交！"), $(".parkUlList>li>.d-cur").removeClass("d-a2"))
                            }
                        })
                    }
                } else 2 == onload_status && window.setTimeout(function() {
                    $("#hasResult").addClass("none"), window.top.location.href = index_url + "?activity_id=" + pageConfig.activity_id + "&source=" + pageConfig.source
                }, 3e3)
            }(), 2 == c ? ($("#projectStatusText").html("距活动开始时间"), function() {
                if ("" == t) return;
                var t = not_start.split("_");
                u = new a({
                    status: c,
                    day: t[0],
                    hour: t[1],
                    min: t[2],
                    sec: t[3],
                    callback: function(t) {
                        $("#hour").html(t.hour.F + "" + t.hour.S), $("#min").html(t.min.F + "" + t.min.S), $("#sec").html(t.sec.F + "" + t.sec.S), t.totalSec <= 0 && window.setTimeout(function() {
                            sessionStorage[y] = "hasStart", clearInterval(u.timer), clearInterval(u.checkTimer), S()
                        }, 1e3)
                    }
                })
            }()) : 3 == c ? S() : 4 == c && (window.top.location.href = index_url + "?activity_id=" + pageConfig.activity_id + "&source=" + pageConfig.source)
        });
        var w = "";
        var x, T = function(t) {
            $("#errTip").removeClass("none"), $("#errMsg").html(t), window.setTimeout(function() {
                $("#errTip").addClass("none")
            }, 5e3)
        };
        "" == map_info ? console.log("缺少" + d + "图信息") : x = JSON.parse(map_info);
        var I = $("#numList").children().length;

        function j(s) {
            $("#choiceTip").addClass("none"), $("#firstSubmitBtn").addClass("t_disable"), $(".parkUlList").find("a").removeClass("d-cur");
            var t = $(".underFloor").val(),
                e = $(".position").val(),
                i = $(".collect").val(),
                a = $(".choice").val(),
                n = $(".acreage").val(),
                o = $(".price").val();
            $.ajax({
                url: "/activity/robpark/parking_select.html",
                type: "post",
                data: {
                    under_floor: t,
                    position: e,
                    page: f,
                    collect: i,
                    choice: a,
                    acreage: n,
                    price: o,
                    project_id: pageConfig.project_id,
                    activity_id: pageConfig.activity_id,
                    source: pageConfig.source
                },
                success: function(t) {
                    if ("succ" == (t = JSON.parse(t)).status) {
                        $("#goMore").addClass("none"), v = !0;
                        var e = JSON.parse(t.info),
                            i = e.park_list;
                        if (console.log(e.total_page), "click" == s ? (p = e.park_ids + ",", $("#parkUlListShow").html(i), m = e.total_page) : (p += e.park_ids + ",", $("#parkUlListShow").append(i)), 3 == c) {
                            var a = p,
                                n = $("input[name=park_ids]");
                            1 == f ? n.val(a) : n.val(n.val() + a), F()
                        }
                        console.log(p)
                    }
                },
                error: function() {
                    v = !0, $("#goMore").html("上拉加载更多").show()
                },
                complete: function() {
                    v = !0, $("#goMore").addClass("none")
                }
            })
        }

        function L() {
            for (var t = "", e = "", i = 0; i < arguments.length; i++) switch (t = arguments[i].split("_")[0], e = arguments[i].split("_")[1], t) {
                case "underFloor":
                case "position":
                    $("." + t).val(e);
                    break;
                case "collect":
                    $("." + t).val(e), $(".choice").val("");
                    break;
                case "choice":
                    $("." + t).val(e), $(".collect").val("");
                    break;
                case "all":
                    $(".collect, .choice").val("");
                    break;
                case "acreage":
                    console.log(t), console.log(e), $("." + t).val(e), $(".price").val(0), $("#price").removeClass();
                    break;
                case "price":
                    console.log($("." + t)), console.log(e), $("." + t).val(e), $(".acreage").val(0), $("#acreage").removeClass()
            }
            $(".page").val(1), f = 1, j("click")
        }
        $("#parkMapBtn").on("click", function() {
            if ("" == map_str || "" == map_info) return T("缺少" + d + "图信息"), !1;
            $("#container").removeClass("none"), $("#info_num").html("1/" + I),
                function() {
                    var t = $("#wrapper").width();
                    $("#wrapper li").attr("style", "float: left; width:" + t + "px;"), $("#wrapper li img").attr("style", "width: " + t + "px;height: " + $("#wrapper li").css("height")), $("#numList").css("width", $("#numList li").width() * (I + 1) + "px")
                }();
            var t = JSON.parse(map_str),
                e = $("input[class=position]").val() + $("input[class=underFloor]").val(),
                i = -1 == t.indexOf(e) ? 0 : t.indexOf(e);
            e = JSON.parse(map_info);
            new s("#container", {
                wrap: "#wrapper",
                trigger: "#numList",
                activeTriggerCls: "on",
                hasTrigger: !0,
                curIndex: i,
                prev: ".prev",
                next: ".next",
                callback: function(t) {
                    $("#info_louceng").html(e[t]), $("#info_num").html(t + 1 + "/" + I)
                }
            }), $("#numList").children().eq(i).addClass("on").siblings().removeClass("on"), $("#info_louceng").html(e[i]), $("#info_num").html(i + 1 + "/" + I)
        }), $("#numList li").on("click", function() {
            $(this).addClass("on").siblings().removeClass("on"), $("#info_louceng").html(x[$(this).index()]), $("#info_num").html($(this).val() + "/" + I)
        }), $("#container>.off").on("click", function() {
            $("#container").addClass("none")
        }), $(".t_main").scroll(function() {
            if (console.log($("input[name=car_no]").val()), console.log(!$("input[name=car_no]").val()), console.log(m + "$totalpage"), !$("input[name=car_no]").val() && v && f < m) {
                var t = $(".t_main").scrollTop(),
                    e = $(".t_box").eq(1).height(),
                    i = $(window).height(),
                    a = $(".t_box").eq(0).height();
                console.log(t + i + "aaa"), console.log(e + a + "aaa"), e + a <= t + i + 50 && ($("#goMore").removeClass("none"), f++, v = !1, j("scroll"))
            }
        }), $("#order>a").on("click", function() {
            var t = $(this);
            "moRen" != t.attr("id") ? (t.hasClass("t_od") ? t.addClass("t_ou") : t.removeClass("t_ou"), t.toggleClass("t_od")) : t.siblings().removeClass();
            var e = t.hasClass("t_od") ? "2" : t.hasClass("t_ou") ? "1" : "0";
            L.call(this, t.attr("id") + "_" + e)
        }), $(".l_update").on("click", function() {
            L.call(this)
        }), $("#orderBtn").on("click", function() {
            $("#orderUl").toggleClass("none")
        }), $(".orderLi").on("click", function() {
            $(this).addClass("none"), $(this).siblings().removeClass("none"), $("#orderUl").addClass("none"), $("#orderBtn").html($(this).find("a").text() + "<i></i>"), $("#choiceTip").addClass("none"), $("#firstSubmitBtn").addClass("t_disable"), L.call(this, $(this).data("info") + "_1"), $("input[name=car_no]").val(""), $("#louCeng" + $("input[class=underFloor]").val()).addClass("l_cur"), $("#quYu" + $("input[class=position]").val()).addClass("l_cur")
        }), $("#louCeng>li").on("click", function() {
            var t = $(this).index(),
                e = $("#quYu").children().eq(t);
            $(this).addClass("l_cur").siblings().removeClass("l_cur"), e.removeClass("none").addClass("onSelect").siblings().addClass("none").removeClass("onSelect"), $(".onSelect>li").first().addClass("l_cur").siblings().removeClass("l_cur"), $("input[name=car_no]").val(""), $("#all").addClass("none").siblings().removeClass("none"), $("#orderBtn").html("全部显示<i></i>"), $("#choiceTip").addClass("none"), $("#firstSubmitBtn").addClass("t_disable"), L.call(this, "underFloor_" + $(this).find("a").data("floor"), "position_" + e.find(".l_cur>a").data("position"), "all_0")
        }), $("#quYu>.onSelect>li").live("click", function() {
            var t = $(".onSelect").index();
            if (!$("#louCeng").children().eq(t).hasClass("l_cur")) return T("请先选择楼层！"), !1;
            $(this).addClass("l_cur").siblings().removeClass("l_cur"), $("#all").addClass("none").siblings().removeClass("none"), $("#orderBtn").html("全部显示<i></i>"), L.call(this, "position_" + $(this).find("a").data("position"), "all_0"), $("#choiceTip").addClass("none"), $("#firstSubmitBtn").addClass("t_disable")
        });
        var D = $(".parkUlList");
        D.on("click", "a", function() {
            var t = $(this),
                e = t.data("info");
            $("input[name=underFloor]").val(e.under_floor), $("input[name=carNo]").val(t.find("em").html()), $("input[name=area]").val(e.area), $("input[name=price]").val(e.price), $("input[name=mark]").val(e.mark), $("input[name=parkId]").val(t.data("parkid")), $("a", D).removeClass("d-cur"), t.addClass("d-cur").parent().siblings().find("a").removeClass("d-cur"), $("#choicePosition").html(t.find("em").html()), $("#choiceUnderFloor").html(e.under_floor), $("#choicePrice").html(e.price + "元"), "0.00" == e.area ? $("#choiceArea").html("-") : $("#choiceArea").html(e.area + "㎡");
            (function(t) {
                $.ajax({
                    url: "/activity/robpark/get_collect_num.html",
                    type: "post",
                    data: {
                        park_id: t,
                        activity_id: pageConfig.activity_id
                    },
                    success: function(t) {
                        null != t && "succ" === (t = JSON.parse(t)).status && $("#colNum").html(t.num)
                    },
                    error: function() {}
                })
            })(t.data("parkid")), e.mark ? $("#choiceMark").html("备注：" + e.mark) : $("#choiceMark").html("备注：地下层数、区域根据后台导入信息显示");
            $("#choiceTip").removeClass("none"), 3 != c || 2 != t.data("status") && $("#firstSubmitBtn").removeClass("t_disable");
            1 == t.data("collectstatus") ? $("#choiceTip_collectStatus").removeClass("on") : $("#choiceTip_collectStatus").addClass("on")
        }), $("#choiceCloseBtn").on("click", function() {
            $(".parkUlList").find("a").removeClass("d-cur"), $("#choiceTip").addClass("none"), $("#firstSubmitBtn").addClass("t_disable")
        });
        w = "";
        var N = "",
            E = !1,
            B = lock_time_str.split("_");

        function O(t, e, i) {
            i = Number(i);
            var a = e.repeat(i);
            t = r(t);
            var n = "";
            for (var s in t) n += Array.isArray(t[s]) ? md5(s + a) : "object" === o(t[s]) ? s + "=" + JSON.stringify(t[s]) + "&" : s + "=" + t[s] + "&";
            return "&" == n.charAt(n.length - 1) && (n = n.substr(0, n.length - 1)), md5(n + a)
        }
        $("#firstSubmitBtn").on("click", function() {
            var t = $(this);
            if (t.hasClass("t_disable")) return !1;
            if ($(".succCountDown").html(B[2] + "分钟" + B[3] + "秒"), $(".parkUlList>li>a").hasClass("d-cur")) {
                if (t.hasClass("isClick")) return !1;
                t.addClass("isClick"), E = !0;
                var e = O({
                    park_id: $("input[name=parkId]").val(),
                    activity_id: pageConfig.activity_id,
                    source: pageConfig.source
                }, _, C);
                $.ajax({
                    url: "/activity/robpark/do_parking_select.html?activity_id=" + pageConfig.activity_id + "&park_id=" + $("input[name=parkId]").val(), //立即秒杀
                    type: "post",
                    data: {
                        park_id: $("input[name=parkId]").val(),
                        activity_id: pageConfig.activity_id,
                        source: pageConfig.source,
                        sign: e  //防止黄牛sign
                    },
                    success: function(t) {
                        t = JSON.parse(t);
                        N = "", N = $(".parkUlList>li>.d-cur").html(), "succ" == t.status ? ($("#succCarNo").html($("input[name=carNo]").val()), "0.00" == $("input[name=area]").val() ? $("#succArea").html("-") : $("#succArea").html($("input[name=area]").val() + "<i>㎡</i>"), $("#succPrice").html($("input[name=price]").val() + '<i class="t_fz16">元</i>'), $("#succUnderFloor").html($("input[name=underFloor]").val()), $("#succMark").html("备注：" + $("input[name=mark]").val()), $(".succTip").removeClass("none"), 1 == sale_mode ? ($(".parkUlList>li>.d-cur").addClass("d-a2"), "" != $(".parkUlList>li>.d-cur").find("span").html() ? $(".parkUlList>li>.d-cur").find("span").html("<i></i>预定中") : $(".parkUlList>li>.d-cur").html(N + "<span><i></i>预定中</span>"), w = new a({
                            day: B[0],
                            hour: B[1],
                            min: B[2],
                            sec: B[3],
                            callback: function(t) {
                                $(".succCountDown").html(t.min.S + "分钟" + t.sec.F + t.sec.S + "秒"), 0 == t.totalSec && (clearTimeout(w.timer), $(".succTip").addClass("none"), T("已超时，请重新提交！"), $(".parkUlList>li>.d-cur").removeClass("d-a2").html(N))
                            }
                        })) : 2 == sale_mode && $("locktime").addClass("none")) : "fail" == t.status ? (401 == t.error_code && window.setTimeout(function() {
                            window.location.href = pageConfig.login_url
                        }, 1500), null != t.reason.info ? (T(t.reason.info), 1 == t.reason.status && window.setTimeout(function() {
                            window.location.reload()
                        }, 1e3)) : "10010" == t.error_code && 3 == c ? T("网络不稳定，请重试！") : T(t.reason)) : console.log("err")
                    },
                    complete: function() {
                        t.removeClass("isClick")
                    }
                })
            } else T("请选择" + d + "！")
        }), $(".secondSubmitBtn").on("click", function() {
            var e = $(this);
            if (e.hasClass("isClick")) return !1;
            e.addClass("isClick");
            var t = O({
                park_id: $("input[name=parkId]").val(),
                activity_id: pageConfig.activity_id,
                source: pageConfig.source
            }, _, C);
            $.ajax({
                url: "/activity/robpark/do_submit_parking_select.html?activity_id=" + pageConfig.activity_id + "&park_id=" + $("input[name=parkId]").val(), //秒杀确认
                type: "post",
                data: {
                    park_id: $("input[name=parkId]").val(),
                    activity_id: pageConfig.activity_id,
                    source: pageConfig.source,
                    sign: t //防止黄牛sign
                },
                headers: {
                    "User-Origin": l.encode(l.encode(g))
                },
                success: function(t) {
                    t = JSON.parse(t);
                    g = t.tk || "", "succ" == t.status ? window.location.href = succ_url + "?project_id=" + pageConfig.project_id + "&activity_id=" + pageConfig.activity_id + "&park_id=" + $("input[name=parkId]").val() + "&source=" + pageConfig.source : "fail" == t.status ? (e.removeClass("isClick"), null != t.reason.info ? 2 == t.reason.status || 3 == t.reason.status ? (T(t.reason.info), $(".parkUlList>li>.d-cur").removeClass("d-a2").html(N), $(".succTip").addClass("none")) : T(t.reason.info) : "10010" == t.error_code && 3 == c ? T("网络不稳定，请重试！") : T(t.reason)) : (e.removeClass("isClick"), console.log("err"))
                }
            })
        }), $(".succCancelBtn").on("click", function() {
            clearTimeout(w.timer), $.ajax({
                url: "/activity/robpark/cancel.html",
                type: "post",
                data: {
                    park_id: $("input[name=parkId]").val(),
                    project_id: pageConfig.project_id,
                    activity_id: pageConfig.activity_id,
                    source: pageConfig.source
                },
                success: function(t) {
                    if ("succ" == (t = JSON.parse(t)).status) {
                        var e = $(".parkUlList>li>.d-cur");
                        E ? 2 == e.data("status") ? e.find("span").html("售出") : e.removeClass("d-a2").html(N) : (e.removeClass("d-a2"), e.find("span").html("")), $(".succTip").addClass("none")
                    } else "fail" == t.status ? T("取消失败！") : console.log("err")
                }
            })
        }), $(".renGouXieYi").on("click", function() { //无 sign post 暂时废弃
            $("#renGouXieYiDiv").removeClass("none")
        }), $("#renGouXieYiDiv>.off").on("click", function() {
            $("#renGouXieYiDiv").addClass("none")
        }), $("input[name=car_no]").on("keydown", function(t) {
            13 == t.keyCode && ($(".parkUlList>li>a").removeClass("d-cur"), $("#choiceTip").addClass("none"), $("#firstSubmitBtn").addClass("t_disable"), $("#orderBtn").html("全部显示"), $(".orderLi").removeClass("none"), $("#all").addClass("none"), $("#louCeng>li").removeClass("l_cur"), $("#quYu>ul>li").removeClass("l_cur"), $(".page").val(1), $.ajax({
                type: "post",
                url: "/activity/robpark/parking_select.html",
                data: {
                    car_no: $("input[name=car_no]").val(),
                    project_id: pageConfig.project_id,
                    activity_id: pageConfig.activity_id
                },
                success: function(t) {
                    if ("succ" == (t = JSON.parse(t)).status) {
                        var e = JSON.parse(t.info),
                            i = e.park_list;
                        if ($("#parkUlListShow").html(i), 3 == c) {
                            var a = e.park_ids,
                                n = $("input[name=park_ids]");
                            1 == $(".page").val() ? n.val(a) : n.val(n.val() + a), F(), console.log(a)
                        }
                    }
                }
            }))
        });
        var A = !1;

        function F() {
            k && clearInterval(k), k = window.setInterval(function() {
                ! function() {
                    if ("" == $("input[name=park_ids]").val()) return;
                    $.ajax({
                        url: "/activity/robpark/check_park_status.html?project_id=" + pageConfig.project_id + "&activity_id=" + pageConfig.activity_id + "&source=weixin",
                        type: "POST",
                        data: {
                            park_ids: $("input[name=park_ids]").val(),
                            under_floor: $("input.underFloor").val(),
                            position: $("input.position").val()
                        },
                        dataType: "json",
                        success: function(t) {
                            "succ" == t.status && (t.info.park_list && "" != t.info.park_list && z(t.info.park_list), t.info.collect_list && "" != t.info.collect_list && z(t.info.collect_list))
                        }
                    })
                }()
            }, 3e3)
        }
        $("#choiceTip_collectStatus").on("click", function(t) {
            if (t.stopPropagation(), !A) {
                A = !0;
                $(this);
                var i = $("input[name=parkId]").val(),
                    a = $("a.d-cur");
                $.ajax({
                    url: "/activity/robpark/collect.html?activity_id=" + pageConfig.activity_id + "&park_id=" + $("input[name=parkId]").val(),
                    type: "post",
                    data: {
                        park_id: i,
                        project_id: pageConfig.project_id,
                        activity_id: pageConfig.activity_id,
                        source: pageConfig.source
                    },
                    success: function(t) {
                        if (null != t) {
                            if ("1" == (t = JSON.parse(t)).info) n("收藏成功！"), $("#choiceTip_collectStatus").removeClass("on"), $("#colNum").html(t.data.collect_num), a.hasClass("choosed") || a.addClass("d-a1").find("span").html("已收藏"), a.attr("data-collectstatus", "1"),
                                function(t) {
                                    var e, i;
                                    e = t.is_locked ? (i = "预定中", "d-a2 choosed") : 2 == t.status || 1 == t.is_reserve ? (i = "售出", "d-a2 choosed") : (i = "已收藏", "d-a1");
                                    var a = '<li><a class="' + e + '" href="javascript:;" data-parkid="' + t.id + '" data-info=' + t.data_info + '  data-collectstatus="1"><em>' + t.car_no + "</em><span>" + i + "</span></li>";
                                    $("#myCollectList").append(a), $("#myCollect").hasClass("none") && $("#myCollect").removeClass("none")
                                }(t.data);
                            else if ("2" == t.info) {
                                n("取消收藏！"), $("#choiceTip_collectStatus").addClass("on"), $("#colNum").html(t.ext.collect_num);
                                var e = $("#parkUlListShow").find('a[data-parkid="' + i + '"]');
                                0 < e.length && (e.attr("data-collectstatus", "0").removeClass("d-a1").addClass("d-cur"), e.hasClass("choosed") || e.find("span").html("")), $("#myCollectList").find('a[data-parkid="' + i + '"]').parent().remove(), 0 == $("#myCollectList").children().length && $("#myCollect").addClass("none")
                            } else "fail" == t.status ? (n(t.reason), 401 == t.error_code && window.setTimeout(function() {
                                window.location.href = pageConfig.login_url
                            }, 1500)) : n("网络错误！");
                            A = !1
                        } else A = !1
                    },
                    error: function() {
                        A = !1
                    },
                    complete: function() {
                        A = !1
                    }
                })
            }
        });
        var M = "",
            U = "",
            q = "";

        function z(s) {
            $.each(s, function(t, e) {
                for (var i = 0, a = (M = $('a[data-parkid="' + t + '"]')).length; i < a; i++) {
                    var n = M.eq(i);
                    if (s[t] != n.data("status")) {
                        switch (U = n.hasClass("d-cur") ? "d-cur" : "", s[t]) {
                            case 1:
                                q = n.data("collectstatus") ? (U += " d-a1", "已收藏") : (U += "", "");
                                break;
                            case 2:
                                U += " d-a2 choosed", q = "售出", t != $("input[name=parkId]").val() || $("#firstSubmitBtn").hasClass("t_disable") || $("#firstSubmitBtn").addClass("t_disable");
                                break;
                            case 3:
                                U += " d-a2 choosed", q = "<i></i>预定中"
                        }
                        n.attr("class", U), n.attr("data-status", s[t]), n.find("span").html(q)
                    }
                }
            })
        }
    },
    function(t, e) {
        var i = window.jQuery || window.Zepto;
        i.CountTime = function(t) {
            this.status = "", this.day = "", this.hour = "", this.min = "", this.sec = "", this.interval = 1e3, this.callback = null, this.timeBox = {
                day: {
                    F: "0",
                    S: "0"
                },
                hour: {
                    F: "0",
                    S: "0"
                },
                min: {
                    F: "0",
                    S: "0"
                },
                sec: {
                    F: "0",
                    S: "0"
                },
                totalSec: 1e16
            }, i.extend(this, t), this.flag = !0, this.init()
        }, i.extend(i.CountTime.prototype, {
            init: function() {
                var t = this;
                t.getServerClientTime(), "" != t.status && (t.checkTimer = window.setInterval(function() {
                    t.getServerClientTime()
                }, 3e3))
            },
            startCountDown: function() {
                this.timer || (this.stopCountDown(), this.countDown())
            },
            countDown: function() {
                var t = this;
                if (!1 === t.getDelta()) return null;
                t.timer = setInterval(function() {
                    t.calcMoment(t.getDelta())
                }, t.interval)
            },
            calcMoment: function(t) {
                var e = this.target - (new Date).getTime() - this.delta;
                e < 0 && (clearInterval(this.timer), e = 0), this.toShow(e)
            },
            toShow: function(t) {
                var e = this,
                    i = (t = Math.abs(parseInt(t)), parseInt(t / 1e3));
                d = parseInt(i / 60 / 60 / 24), h = parseInt(i / 60 / 60 - 24 * d), m = parseInt(i / 60 - 24 * d * 60 - 60 * h), s = i - 24 * d * 60 * 60 - 60 * h * 60 - 60 * m, e.timeBox.hour.F = parseInt(h / 10), e.timeBox.hour.S = h % 10, e.timeBox.min.F = parseInt(m / 10), e.timeBox.min.S = m % 10, e.timeBox.sec.F = parseInt(s / 10), e.timeBox.sec.S = s % 10, e.timeBox.day.F = parseInt(d / 10), e.timeBox.day.S = d % 10, e.timeBox.totalSec = i, e.callback && e.callback(e.timeBox)
            },
            number_pad: function(t, e) {
                return new Array(("" + t).length < e ? e - ("" + t).length + 1 : 0).join("0") + t
            },
            getDate: function(t) {
                var e = t;
                return t instanceof Date || (isNaN(t) || (t = parseInt(t)), e = new Date(t), isNaN(e.getTime()) && (e = new Date)), e
            },
            stopCountDown: function() {
                this.timer && (clearInterval(this.timer), this.timer = null)
            },
            setDelta: function(t) {
                this.serverClientDelta = t
            },
            getDelta: function(t) {
                return this.serverClientDelta
            },
            XMLHttpRequest2Delta: function(t, e, i) {
                var a = this,
                    n = t.getResponseHeader("Date");
                n = a.getDate(n);
                var s = +new Date;
                a.delta = n.getTime() - s - i, a.setDelta(a.delta), a.day = e.split("_")[0], a.hour = e.split("_")[1], a.min = e.split("_")[2], a.sec = e.split("_")[3];
                var o = 1e3 * (24 * a.day * 60 * 60 + 3600 * a.hour + 60 * a.min + 1 * a.sec);
                console.log("serverTime:", o / 1e3, "jsTime:", a.timeBox.totalSec), (a.timeBox.totalSec > o / 1e3 || o / 1e3 > a.timeBox.totalSec + 30) && (a.target = o + n.getTime(), console.log("check")), a.startCountDown()
            },
            getServerClientTime: function() {
                var r = this;
                if (r.flag) {
                    r.flag = !1;
                    var l = +new Date;
                    i.ajax({
                        url: "/activity/robpark/check_time.html?project_id=" + pageConfig.project_id + "&activity_id=" + pageConfig.activity_id + "&source=weixin",
                        type: "GET",
                        cache: !1,
                        dataType: "json",
                        success: function(t, e, i) {
                            var a = +new Date - l;
                            if ("succ" == t.status && "" != r.status) {
                                var n = "",
                                    s = t.info.status,
                                    o = "robpark_" + pageConfig.project_id + "_" + pageConfig.activity_id;
                                if ("hasStart" == sessionStorage[o]) console.log(sessionStorage[o]), n = r.day + "_" + r.hour + "_" + r.min + "_" + r.sec, sessionStorage[o] = "hasCheck";
                                else {
                                    if (3 == s || 2 == r.status && 2 == s) return r.timer && (clearInterval(r.timer), clearInterval(r.checkTimer)), r.timeBox = {
                                        day: {
                                            F: "0",
                                            S: "0"
                                        },
                                        hour: {
                                            F: "0",
                                            S: "0"
                                        },
                                        min: {
                                            F: "0",
                                            S: "0"
                                        },
                                        sec: {
                                            F: "0",
                                            S: "0"
                                        },
                                        totalSec: 0
                                    }, r.callback && r.callback(r.timeBox), !1;
                                    n = t.info.time, r.timeBox.objStatus = s
                                }
                            } else n = r.day + "_" + r.hour + "_" + r.min + "_" + r.sec;
                            r.XMLHttpRequest2Delta(i, n, a)
                        },
                        error: function(t, e, i) {
                            r.flag = !0
                        },
                        complete: function() {
                            r.flag = !0
                        },
                        timeout: 2e3
                    })
                }
            }
        }), t.exports = i.CountTime
    },
    function(t, e) {
        t.exports = function(t, e) {
            var i, a, n, s, o = {},
                r = [],
                l = this,
                c = {};
            switch (e) {
                case "SORT_STRING":
                    i = function(t, e) {
                        return l.strnatcmp(t, e)
                    };
                    break;
                case "SORT_LOCALE_STRING":
                    var d = this.i18n_loc_get_default();
                    i = this.php_js.i18nLocales[d].sorting;
                    break;
                case "SORT_NUMERIC":
                    i = function(t, e) {
                        return t + 0 - (e + 0)
                    };
                    break;
                default:
                    i = function(t, e) {
                        var i = parseFloat(t),
                            a = parseFloat(e),
                            n = i + "" === t,
                            s = a + "" === e;
                        return n && s ? a < i ? 1 : i < a ? -1 : 0 : n && !s ? 1 : !n && s ? -1 : e < t ? 1 : t < e ? -1 : 0
                    }
            }
            for (n in t) t.hasOwnProperty(n) && r.push(n);
            for (r.sort(i), this.php_js = this.php_js || {}, this.php_js.ini = this.php_js.ini || {}, c = (s = this.php_js.ini["phpjs.strictForIn"] && this.php_js.ini["phpjs.strictForIn"].local_value && "off" !== this.php_js.ini["phpjs.strictForIn"].local_value) ? t : c, a = 0; a < r.length; a++) o[n = r[a]] = t[n], s && delete t[n];
            for (a in o) o.hasOwnProperty(a) && (c[a] = o[a]);
            return s || c
        }
    },
    function(t, e) {
        t.exports = function(t, e) {
            for (var i = document.querySelectorAll(".simpleTips"), a = 0; a < i.length; a++) {
                var n = i[a];
                n.parentNode && n.parentNode.removeChild(n)
            }
            e = +e || 1500;
            var s = document.createElement("div");
            return s.className = "simpleTips", s.setAttribute("style", "width:200px;line-height:36px;padding:8px 0; font-size:14px; color:#fff; text-align:center; background:rgba(0,0,0,.5); position:fixed; left:50%; margin-left:-100px; top:50%; margin-top:-32px; z-index:1999; -webkit-border-radius:5px;-moz-border-radius:5px;-ms-border-radius:5px;border-radius:5px;"), s.innerHTML = t, document.body.appendChild(s), setTimeout(function() {
                s.parentNode && s.parentNode.removeChild(s)
            }, e), s
        }
    },
    function(t, e, i) {
        var s = window.jQuery || window.Zepto,
            a = i(5),
            n = /android/gi.test(navigator.appVersion),
            o = a.has3d(),
            r = (a.hasTransform(), o ? "translate3d(" : "translate("),
            l = o ? ",0)" : ")";
        s.touchSlider = function(t, e) {
            if (!t) return null;
            e ? e.container = t : e = "string" == typeof t ? {
                container: t
            } : t, s.extend(this, {
                container: ".slider",
                wrap: null,
                panel: null,
                trigger: null,
                activeTriggerCls: "sel",
                hasTrigger: !1,
                steps: 0,
                left: 0,
                visible: 1,
                margin: 0,
                curIndex: 0,
                duration: 300,
                loop: !1,
                play: !1,
                interval: 5e3,
                useTransform: !n,
                lazy: ".lazyimg",
                lazyIndex: 1,
                callback: null,
                prev: null,
                next: null,
                activePnCls: "none"
            }, e), this.findEl() && this.init() && this.increaseEvent()
        }, s.extend(s.touchSlider.prototype, {
            reset: function(t) {
                s.extend(this, t || {}), this.init()
            },
            findEl: function() {
                var t = this.container = s(this.container);
                return t.length ? (this.wrap = this.wrap && t.find(this.wrap) || t.children().first(), this.wrap.length ? (this.panel = this.panel && t.find(this.panel) || this.wrap.children().first(), this.panel.length ? (this.panels = this.panel.children(), this.panels.length ? (this.trigger = this.trigger && t.find(this.trigger), this.prev = this.prev && t.find(this.prev), this.next = this.next && t.find(this.next), this) : (this.container.hide(), null)) : null) : null) : null
            },
            init: function() {
                var t = this.wrap,
                    e = this.panel,
                    i = this.panels,
                    a = this.trigger,
                    n = this.len = i.length,
                    s = this.margin,
                    o = 0,
                    r = this.visible;
                this.useTransform = !0;
                this.steps = this.steps || t.width(), i.css("width", t.width() + "px"), i.each(function(t, e) {
                    o += e.offsetWidth
                }), s && "number" == typeof s && (o += (n - 1) * s, this.steps += s), 1 < r && (this.loop = !1);
                var l = this.left;
                l -= this.curIndex * this.steps, this.setCoord(e, l);
                var c = this._pages = Math.ceil(n / r);
                if (this._minpage = 0, this._maxpage = 1 == this._pages ? 1 : this._pages - 1, this.loadImg(this.curIndex), this.updateArrow(), c <= 1) return a && a.hide(), null;
                if (this.loop) {
                    e.append(i[0].cloneNode(!0));
                    var d = i[n - 1].cloneNode(!0);
                    e.append(d), this.getImg(d), d.style.cssText += "position:relative;left:" + -this.steps * (n + 2) + "px;", o += i[0].offsetWidth, o += i[n - 1].offsetWidth
                }
                if (e.css("width", o + "px"), a && a.length) {
                    var u = "";
                    if (!a.children().length) {
                        for (var h = 0; h < c; h++) u += "<span" + (h == this.curIndex ? " class=" + this.activeTriggerCls : "") + "></span>";
                        a.html(u)
                    }
                    this.triggers = a.children(), this.triggerSel = this.triggers[this.curIndex]
                } else this.hasTrigger = !1;
                return this
            },
            increaseEvent: function() {
                var i = this,
                    t = i.wrap[0],
                    e = i.prev,
                    a = i.next,
                    n = i.triggers;
                t.addEventListener && (t.addEventListener("touchstart", i, !1), t.addEventListener("touchmove", i, !1), t.addEventListener("touchend", i, !1), t.addEventListener("webkitTransitionEnd", i, !1), t.addEventListener("msTransitionEnd", i, !1), t.addEventListener("oTransitionEnd", i, !1), t.addEventListener("transitionend", i, !1)), i.play && i.begin(), e && e.length && e.on("click", function(t) {
                    i.backward.call(i, t)
                }), a && a.length && a.on("click", function(t) {
                    i.forward.call(i, t)
                }), i.hasTrigger && n && n.each(function(t, e) {
                    s(e).on("click", function() {
                        i.slideTo(t)
                    })
                })
            },
            handleEvent: function(t) {
                switch (t.type) {
                    case "touchstart":
                        this.start(t);
                        break;
                    case "touchmove":
                        this.move(t);
                        break;
                    case "touchend":
                    case "touchcancel":
                        this.end(t);
                        break;
                    case "webkitTransitionEnd":
                    case "msTransitionEnd":
                    case "oTransitionEnd":
                    case "transitionend":
                        this.transitionEnd(t)
                }
            },
            loadImg: function(t) {
                (t = t || 0) < this._minpage ? t = this._maxpage : t > this._maxpage && (t = this._minpage);
                var e = this.visible,
                    i = this.lazyIndex - 1,
                    a = i + t;
                if (!(a > this._maxpage)) {
                    var n = (t && i + t || t) * e,
                        s = (a += 1) * e,
                        o = this.panels;
                    s = Math.min(o.length, s);
                    for (var r = n; r < s; r++) this.getImg(o[r])
                }
            },
            getImg: function(t) {
                if (t && !(t = s(t)).attr("l")) {
                    var a = this.lazy,
                        e = "img" + a;
                    a = a.replace(/^\.|#/g, ""), t.find(e).each(function(t, e) {
                        var i = s(e);
                        src = i.attr("dataimg"), src && i.attr("src", src).removeAttr("dataimg").removeClass(a)
                    }), t.attr("l", "1")
                }
            },
            start: function(t) {
                var e = t.touches[0];
                this._movestart = void 0, this._disX = 0, this._coord = {
                    x: e.pageX,
                    y: e.pageY
                }
            },
            move: function(t) {
                if (!(1 < t.touches.length || t.scale && 1 !== t.scale)) {
                    var e, i = t.touches[0],
                        a = this._disX = i.pageX - this._coord.x,
                        n = this.left;
                    void 0 === this._movestart && (this._movestart = !!(this._movestart || Math.abs(a) < Math.abs(i.pageY - this._coord.y))), this._movestart || (t.preventDefault(), this.stop(), this.loop || (a /= !this.curIndex && 0 < a || this.curIndex == this._maxpage && a < 0 ? Math.abs(a) / this.steps + 1 : 1), e = n - this.curIndex * this.steps + a, this.setCoord(this.panel, e), this._disX = a)
                }
            },
            end: function(t) {
                if (!this._movestart) {
                    var e = this._disX;
                    e < -10 ? (t.preventDefault(), this.forward()) : 10 < e && (t.preventDefault(), this.backward()), e = null
                }
            },
            backward: function(t) {
                t && t.preventDefault && t.preventDefault();
                var e = this.curIndex,
                    i = this._minpage;
                (e -= 1) < i && (e = this.loop ? i - 1 : i), this.slideTo(e), this.callback && this.callback(Math.max(e, i), -1)
            },
            forward: function(t) {
                t && t.preventDefault && t.preventDefault();
                var e = this.curIndex,
                    i = this._maxpage;
                i < (e += 1) && (e = this.loop ? i + 1 : i), this.slideTo(e), this.callback && this.callback(Math.min(e, i), 1)
            },
            setCoord: function(t, e) {
                var i = r + e + "px,0" + l;
                this.useTransform && t.css({
                    "-webkit-transform": i,
                    "-moz-transform": i,
                    transform: i
                }) || t.css("left", e)
            },
            slideTo: function(t, e) {
                t = t || 0, this.curIndex = t;
                var i = this.panel,
                    a = i[0].style,
                    n = this.left - t * this.steps;
                a.webkitTransitionDuration = a.MozTransitionDuration = a.msTransitionDuration = a.OTransitionDuration = a.transitionDuration = (e || this.duration) + "ms", this.setCoord(i, n), this.loadImg(t)
            },
            transitionEnd: function() {
                var t = this.panel,
                    e = t[0].style,
                    i = this.loop,
                    a = this.curIndex;
                i && (a > this._maxpage ? this.curIndex = 0 : a < this._minpage && (this.curIndex = this._maxpage), this.setCoord(t, this.left - this.curIndex * this.steps)), i || a != this._maxpage ? this.begin() : (this.stop(), this.play = !1), this.update(), this.updateArrow(), e.webkitTransitionDuration = e.MozTransitionDuration = e.msTransitionDuration = e.OTransitionDuration = e.transitionDuration = "0ms"
            },
            update: function() {
                var t = this.triggers,
                    e = this.activeTriggerCls,
                    i = this.curIndex;
                t && t[i] && (this.triggerSel && (this.triggerSel.className = ""), t[i].className = e, this.triggerSel = t[i])
            },
            updateArrow: function() {
                var t = this.prev,
                    e = this.next;
                if (t && t.length && e && e.length && !this.loop) {
                    var i = this.curIndex,
                        a = this.activePnCls;
                    i <= 0 && t.addClass(a) || t.removeClass(a), i >= this._maxpage && e.addClass(a) || e.removeClass(a)
                }
            },
            begin: function() {
                var t = this;
                t.play && !t._playTimer && (t.stop(), t._playTimer = setInterval(function() {
                    t.forward()
                }, t.interval))
            },
            stop: function() {
                this.play && this._playTimer && (clearInterval(this._playTimer), this._playTimer = null)
            },
            destroy: function() {
                var t = this,
                    e = t.wrap[0],
                    i = t.prev,
                    a = t.next,
                    n = t.triggers;
                e.removeEventListener && (e.removeEventListener("touchstart", t, !1), e.removeEventListener("touchmove", t, !1), e.removeEventListener("touchend", t, !1), e.removeEventListener("webkitTransitionEnd", t, !1), e.removeEventListener("msTransitionEnd", t, !1), e.removeEventListener("oTransitionEnd", t, !1), e.removeEventListener("transitionend", t, !1)), i && i.length && i.off("click"), a && a.length && a.off("click"), t.hasTrigger && n && n.each(function(t, e) {
                    s(e).off("click")
                })
            }
        }), s.touchSlider.cache = [], s.fn.slider = function(i) {
            return this.each(function(t, e) {
                e.getAttribute("l") || (e.setAttribute("l", !0), s.touchSlider.cache.push(new s.touchSlider(e, i)))
            })
        }, s.touchSlider.destroy = function() {
            var t = s.touchSlider.cache,
                e = t.length;
            if (!(e < 1)) {
                for (var i = 0; i < e; i++) t[i].destroy();
                s.touchSlider.cache = []
            }
        }, t.exports = s.touchSlider
    },
    function(t, e) {
        function i(t) {
            return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                return typeof t
            } : function(t) {
                return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
            })(t)
        }
        var a = {},
            d = document.documentElement,
            u = "modernizr",
            n = "Webkit Moz O ms".split(" "),
            s = d.style;

        function o(t, e) {
            return i(t) === e
        }

        function r(t, e) {
            var i = t.charAt(0).toUpperCase() + t.substr(1),
                a = (t + " " + n.join(i + " ") + i).split(" ");
            if (o(e, "string") || o(e, "undefined")) return function(t, e) {
                for (var i in t)
                    if (void 0 !== s[t[i]]) return "pfx" != e || t[i];
                return !1
            }(a, e)
        }
        a.hasTransform = function() {
            return !!r("transform")
        }, a.has3d = function() {
            var i = !!r("perspective");
            return i && "webkitPerspective" in d.style && function(t, e, i, a) {
                var n, s, o, r = document.createElement("div"),
                    l = document.body,
                    c = l || document.createElement("body");
                if (parseInt(i, 10))
                    for (; i--;)(o = document.createElement("div")).id = a ? a[i] : u + (i + 1), r.appendChild(o);
                n = ["&#173;", '<style id="s', u, '">', t, "</style>"].join(""), r.id = u, (l ? r : c).innerHTML += n, c.appendChild(r), l || (c.style.background = "", d.appendChild(c)), s = e(r, t), l ? r.parentNode.removeChild(r) : c.parentNode.removeChild(c)
            }("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(t, e) {
                i = 9 === t.offsetLeft && 3 === t.offsetHeight
            }), i
        }, t.exports = a
    },
    function(t, e) {
        t.exports = new function() {
            _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", this.encode = function(t) {
                var e, i, a, n, s, o, r, l = "",
                    c = 0;
                for (t = _utf8_encode(t); c < t.length;) n = (e = t.charCodeAt(c++)) >> 2, s = (3 & e) << 4 | (i = t.charCodeAt(c++)) >> 4, o = (15 & i) << 2 | (a = t.charCodeAt(c++)) >> 6, r = 63 & a, isNaN(i) ? o = r = 64 : isNaN(a) && (r = 64), l = l + _keyStr.charAt(n) + _keyStr.charAt(s) + _keyStr.charAt(o) + _keyStr.charAt(r);
                return l
            }, this.decode = function(t) {
                var e, i, a, n, s, o, r = "",
                    l = 0;
                for (t = t.replace(/[^A-Za-z0-9\+\/\=]/g, ""); l < t.length;) e = _keyStr.indexOf(t.charAt(l++)) << 2 | (n = _keyStr.indexOf(t.charAt(l++))) >> 4, i = (15 & n) << 4 | (s = _keyStr.indexOf(t.charAt(l++))) >> 2, a = (3 & s) << 6 | (o = _keyStr.indexOf(t.charAt(l++))), r += String.fromCharCode(e), 64 != s && (r += String.fromCharCode(i)), 64 != o && (r += String.fromCharCode(a));
                return r = _utf8_decode(r)
            }, _utf8_encode = function(t) {
                t = t.replace(/\r\n/g, "\n");
                for (var e = "", i = 0; i < t.length; i++) {
                    var a = t.charCodeAt(i);
                    a < 128 ? e += String.fromCharCode(a) : (127 < a && a < 2048 ? e += String.fromCharCode(a >> 6 | 192) : (e += String.fromCharCode(a >> 12 | 224), e += String.fromCharCode(a >> 6 & 63 | 128)), e += String.fromCharCode(63 & a | 128))
                }
                return e
            }, _utf8_decode = function(t) {
                for (var e = "", i = 0, a = c1 = c2 = 0; i < t.length;)(a = t.charCodeAt(i)) < 128 ? (e += String.fromCharCode(a), i++) : 191 < a && a < 224 ? (c2 = t.charCodeAt(i + 1), e += String.fromCharCode((31 & a) << 6 | 63 & c2), i += 2) : (c2 = t.charCodeAt(i + 1), c3 = t.charCodeAt(i + 2), e += String.fromCharCode((15 & a) << 12 | (63 & c2) << 6 | 63 & c3), i += 3);
                return e
            }
        }
    },
    function(t, e) {
        $("#goTop").addClass("none"), t.exports = function(t) {
            try {
                var e = $(window).height();
                t.scrollTop();
                t.on("scroll", function() {
                    t.scrollTop() > e ? $("#goTop").removeClass("none") : $("#goTop").addClass("none")
                }), $("#goTop").on("click", function() {
                    t.scrollTop(0), $(this).addClass("none")
                })
            } catch (t) {}
        }
    }
]);
