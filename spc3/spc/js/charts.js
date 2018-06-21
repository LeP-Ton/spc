/* --------------------------------------------------------
 Flot Charts
 -----------------------------------------------------------*/

//Line Chart
var theme = {
    // 鍏ㄥ浘榛樿鑳屾櫙

    // 榛樿鑹叉澘
    color: [
        '#FE8463','#9BCA63','#FAD860','#60C0DD','#0084C6',
        '#D7504B','#C6E579','#26C0C0','#F0805A','#F4E001',
        '#B5C334'
    ],

    // 鍥捐〃鏍囬
    title: {
        textStyle: {
            fontWeight: 'normal',
            color: '#fff'          // 涓绘爣棰樻枃瀛楅鑹�
        }
    },

    // 鍥句緥
    legend: {
        textStyle: {
            color: '#ccc'          // 鍥句緥鏂囧瓧棰滆壊
        }
    },

    // 鍊煎煙
    dataRange: {
        itemWidth: 15,
        color: ['#FFF808','#21BCF9'],
        textStyle: {
            color: '#ccc'          // 鍊煎煙鏂囧瓧棰滆壊
        }
    },

    toolbox: {
        color : ['#fff', '#fff', '#fff', '#fff'],
        effectiveColor : '#FE8463',
        disableColor: '#666'
    },

    // 鎻愮ず妗�
    tooltip: {
        backgroundColor: 'rgba(250,250,250,0.8)',     // 鎻愮ず鑳屾櫙棰滆壊锛岄粯璁や负閫忔槑搴︿负0.7鐨勯粦鑹�
        axisPointer : {            // 鍧愭爣杞存寚绀哄櫒锛屽潗鏍囪酱瑙﹀彂鏈夋晥
            type : 'line',         // 榛樿涓虹洿绾匡紝鍙€変负锛�'line' | 'shadow'
            lineStyle : {          // 鐩寸嚎鎸囩ず鍣ㄦ牱寮忚缃�
                color: '#aaa'
            },
            crossStyle: {
                color: '#aaa'
            },
            shadowStyle : {                     // 闃村奖鎸囩ず鍣ㄦ牱寮忚缃�
                color: 'rgba(200,200,200,0.2)'
            }
        },
        textStyle: {
            color: '#333'
        }
    },

    // 鍖哄煙缂╂斁鎺у埗鍣�
    dataZoom: {
        dataBackgroundColor: '#555',            // 鏁版嵁鑳屾櫙棰滆壊
        fillerColor: 'rgba(200,200,200,0.2)',   // 濉厖棰滆壊
        handleColor: '#eee'     // 鎵嬫焺棰滆壊
    },

    // 缃戞牸
    grid: {
        borderWidth: 0
    },

    // 绫荤洰杞�
    categoryAxis: {
        axisLine: {            // 鍧愭爣杞寸嚎
            show: true,
            lineStyle:{
                color:['#ccc']
            }
        },
        axisTick: {            // 鍧愭爣杞村皬鏍囪
            show: true,
            lineStyle:{
                color:['#ccc']
            }
        },
        axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 鍒嗛殧绾�
            show: false
        }
    },

    // 鏁板€煎瀷鍧愭爣杞撮粯璁ゅ弬鏁�
    valueAxis: {
        axisLine: {            // 鍧愭爣杞寸嚎
            show: true,
            lineStyle:{
                color:['#ccc']
            }
        },
        axisTick: {            // 鍧愭爣杞村皬鏍囪
            show: true,
            lineStyle:{
                color:['#ccc']
            }
        },
        axisLabel: {           // 鍧愭爣杞存枃鏈爣绛撅紝璇﹁axis.axisLabel
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                color: '#ccc'
            }
        },
        splitLine: {           // 鍒嗛殧绾�
            lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                color: ['#aaa'],
                type: 'dashed'
            }
        },
        splitArea: {           // 鍒嗛殧鍖哄煙
            show: false
        }
    },

    polar : {
        name : {
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                color: '#ccc'
            }
        },
        axisLine: {            // 鍧愭爣杞寸嚎
            lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                color: '#ddd'
            }
        },
        splitArea : {
            show : true,
            areaStyle : {
                color: ['rgba(250,250,250,0.2)','rgba(200,200,200,0.2)']
            }
        },
        splitLine : {
            lineStyle : {
                color : '#ddd'
            }
        }
    },

    timeline : {
        label: {
            textStyle:{
                color: '#ccc'
            }
        },
        lineStyle : {
            color : '#aaa'
        },
        controlStyle : {
            normal : { color : '#fff'},
            emphasis : { color : '#FE8463'}
        },
        symbolSize : 3
    },

    // 鎶樼嚎鍥鹃粯璁ゅ弬鏁�
    line: {
        smooth : true
    },

    // K绾垮浘榛樿鍙傛暟
    k: {
        itemStyle: {
            normal: {
                color: '#FE8463',       // 闃崇嚎濉厖棰滆壊
                color0: '#9BCA63',      // 闃寸嚎濉厖棰滆壊
                lineStyle: {
                    width: 1,
                    color: '#FE8463',   // 闃崇嚎杈规棰滆壊
                    color0: '#9BCA63'   // 闃寸嚎杈规棰滆壊
                }
            }
        }
    },

    // 闆疯揪鍥鹃粯璁ゅ弬鏁�
    radar : {
        symbol: 'emptyCircle',    // 鍥惧舰绫诲瀷
        symbolSize:3
        //symbol: null,         // 鎷愮偣鍥惧舰绫诲瀷
        //symbolRotate : null,  // 鍥惧舰鏃嬭浆鎺у埗
    },

    pie: {
        itemStyle: {
            normal: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 0.5)'
            },
            emphasis: {
                borderWidth: 1,
                borderColor : 'rgba(255, 255, 255, 1)'
            }
        }
    },

    map: {
        itemStyle: {
            normal: {
                borderColor:'rgba(255, 255, 255, 0.5)',
                areaStyle: {
                    color: '#ddd'
                },
                label: {
                    textStyle: {
                        // color: '#ccc'
                    }
                }
            },
            emphasis: {                 // 涔熸槸閫変腑鏍峰紡
                areaStyle: {
                    color: '#FE8463'
                },
                label: {
                    textStyle: {
                        // color: 'ccc'
                    }
                }
            }
        }
    },

    force : {
        itemStyle: {
            normal: {
                linkStyle : {
                    color : '#fff'
                }
            }
        }
    },

    chord : {
        itemStyle : {
            normal : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.2)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.2)'
                    }
                }
            },
            emphasis : {
                borderWidth: 1,
                borderColor: 'rgba(228, 228, 228, 0.9)',
                chordStyle : {
                    lineStyle : {
                        color : 'rgba(228, 228, 228, 0.9)'
                    }
                }
            }
        }
    },

    gauge : {
        axisLine: {            // 鍧愭爣杞寸嚎
            show: true,        // 榛樿鏄剧ず锛屽睘鎬how鎺у埗鏄剧ず涓庡惁
            lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                color: [[0.2, '#9BCA63'],[0.8, '#60C0DD'],[1, '#D7504B']],
                width: 3,
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 10
            }
        },
        axisTick: {            // 鍧愭爣杞村皬鏍囪
            length :15,        // 灞炴€ength鎺у埗绾块暱
            lineStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                color: 'auto',
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 10
            }
        },
        axisLabel: {            // 鍧愭爣杞村皬鏍囪
            textStyle: {       // 灞炴€ineStyle鎺у埗绾挎潯鏍峰紡
                fontWeight: 'bolder',
                color: '#fff',
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 10
            }
        },
        splitLine: {           // 鍒嗛殧绾�
            length :25,         // 灞炴€ength鎺у埗绾块暱
            lineStyle: {       // 灞炴€ineStyle锛堣瑙乴ineStyle锛夋帶鍒剁嚎鏉℃牱寮�
                width:3,
                color: '#fff',
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 10
            }
        },
        pointer: {           // 鍒嗛殧绾�
            shadowColor : '#fff', //榛樿閫忔槑
            shadowBlur: 5
        },
        title : {
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                fontWeight: 'bolder',
                fontSize: 20,
                fontStyle: 'italic',
                color: '#fff',
                shadowColor : '#fff', //榛樿閫忔槑
                shadowBlur: 10
            }
        },
        detail : {
            shadowColor : '#fff', //榛樿閫忔槑
            shadowBlur: 5,
            offsetCenter: [0, '50%'],       // x, y锛屽崟浣峱x
            textStyle: {       // 鍏朵綑灞炴€ч粯璁や娇鐢ㄥ叏灞€鏂囨湰鏍峰紡锛岃瑙乀EXTSTYLE
                fontWeight: 'bolder',
                color: '#fff'
            }
        }
    },

    funnel : {
        itemStyle: {
            normal: {
                borderColor : 'rgba(255, 255, 255, 0.5)',
                borderWidth: 1
            },
            emphasis: {
                borderColor : 'rgba(255, 255, 255, 1)',
                borderWidth: 1
            }
        }
    },

    textStyle: {
        fontFamily: '寰蒋闆呴粦, Arial, Verdana, sans-serif'
    }
};

//Xbar均值图
$(function () {
    if ($('#Xbar')[0]) {
        var myChart = echarts.init(document.getElementById('Xbar'), theme);

// 指定图表的配置项和数据
        option = {
            /*title: {
                text: 'SPC控制图',
                //            subtext: '纯属虚构'
            },*/
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['均值']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            },
            yAxis: {
                type: 'value',
                max: 'dataMax',
                min: 'dataMin',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '均值',
                    type: 'line',
                    data: [14.8, 14.5, 15.0, 15.1, 15.3, 15.1, 15.0, 15.0, 15.1, 15.1, 14.7, 15.1, 14.9, 14.9, 15.1],
                    itemStyle: {normal: {color: '#ffe100'}},
                    //                markPoint: {
                    //                    itemStyle:{  normal:{color:'#c70237'}},
                    //                    data: [
                    //                        {type: 'max', name: '最大值'}
                    ////                        {type: 'min', name: '最小值'}
                    //                    ]
                    //                },
                    markLine: {
                        data: [
                            {yAxis: 14.9, name: 'cl', itemStyle: {normal: {color: '#36ff2f'}}},
                            {yAxis: 15.1, name: 'ucl', itemStyle: {normal: {color: '#ff0248'}}},
                            {yAxis: 14.7, name: 'lcl', itemStyle: {normal: {color: '#ff0247'}}},
                        ]
                    }
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }


// 极差R图
    if ($('#R')[0]) {
        var myChart = echarts.init(document.getElementById('R'), theme);

// 指定图表的配置项和数据
        option = {
            /*title: {
                text: 'SPC控制图',
                //            subtext: '纯属虚构'
            },*/
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['极差']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            },
            yAxis: {
                type: 'value',
                max: 'dataMax',
                min: 'dataMin',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '极差',
                    type: 'line',
                    data: [1.8, 0.6, 0.4, 1.0, 1.1, 0.9, 1.6, 1.2, 0.8 , 0.4, 0.7, 0.9, 1.1, 1.1, 0.5],
                    itemStyle: {normal: {color: '#ffe100'}},
                    //                markPoint: {
                    //                    itemStyle:{  normal:{color:'#c70237'}},
                    //                    data: [
                    //                        {type: 'max', name: '最大值'}
                    ////                        {type: 'min', name: '最小值'}
                    //                    ]
                    //                },
                    markLine: {
                        data: [
                            {yAxis: 1.1, name: 'cl', itemStyle: {normal: {color: '#36ff2f'}}},
                            {yAxis: 1.5, name: 'ucl', itemStyle: {normal: {color: '#ff0248'}}},
                            {yAxis: 0.7, name: 'lcl', itemStyle: {normal: {color: '#ff0247'}}},
                        ]
                    }
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

// 标准差S图
    if ($('#S')[0]) {
        var myChart = echarts.init(document.getElementById('S'), theme);

// 指定图表的配置项和数据
        option = {
            /*title: {
                text: 'SPC控制图',
                //            subtext: '纯属虚构'
            },*/
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['标准差']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            },
            yAxis: {
                type: 'value',
                max: 'dataMax',
                min: 'dataMin',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name: '标准差',
                    type: 'line',
                    data: [1.5, 3.6,2.3, 4.1, 3.1, 1.9, 3.3, 1.4, 1.8 , 2.4, 1.7, 3.9, 2.3, 1.5, 1.8],
                    itemStyle: {normal: {color: '#ffe100'}},
                    //                markPoint: {
                    //                    itemStyle:{  normal:{color:'#c70237'}},
                    //                    data: [
                    //                        {type: 'max', name: '最大值'}
                    ////                        {type: 'min', name: '最小值'}
                    //                    ]
                    //                },
                    markLine: {
                        data: [
                            {yAxis: 2.7, name: 'cl', itemStyle: {normal: {color: '#36ff2f'}}},
                            {yAxis: 3.5, name: 'ucl', itemStyle: {normal: {color: '#ff0248'}}},
                            {yAxis: 1.7, name: 'lcl', itemStyle: {normal: {color: '#ff0247'}}},
                        ]
                    }
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

// 不合格品率P图
    if ($('#P')[0]) {
        var myChart = echarts.init(document.getElementById('P'), theme);

// 指定图表的配置项和数据
        option = {
            /*title: {
                text: 'SPC控制图',
                //            subtext: '纯属虚构'
            },*/
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['不合格品率']
            },
            toolbox: {
                show: true,
                feature: {
                    dataZoom: {
                        yAxisIndex: 'none'
                    },
                    dataView: {readOnly: false},
                    magicType: {type: ['line', 'bar']},
                    restore: {},
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
            },
            yAxis: {
                type: 'value',
                max: 'dataMax',
                min: 'dataMin',
                axisLabel: {
                    formatter: '{value}'
                }
            },
            series: [
                {
                    name:'控制上限',
                    type:'line',
                    lineStyle:{
                        normal:{
                            color:'#ff0247',
                            width:1.5,
                            type:'dashed'
                        }
                    },
                    step: 'start',
                    data:[0.32, 0.35, 0.38, 0.32, 0.34, 0.42, 0.37,0.32, 0.35,0.28,0.35,0.36,0.33,0.31,0.36]
                },
                {
                    name:'控制下限',
                    type:'line',
                    lineStyle:{
                        normal:{
                            color:'#ff0247',
                            width:1.5,
                            type:'dashed'
                        }
                    },
                    step: 'middle',
                    data:[0.13,0.15,0.11,0.16,0.08,0.15,0.15,0.13,0.18,0.09,0.12,0.14,0.15,0.11,0.16]
                },
                {
                    name: '不合格品率',
                    type: 'line',
                    data: [0.15, 0.26, 0.18, 0.32, 0.31, 0.21, 0.15, 0.12, 0.19 , 0.23, 0.28, 0.09, 0.17, 0.21, 0.33],
                    itemStyle: {normal: {color: '#ffe100'}},
                    //                markPoint: {
                    //                    itemStyle:{  normal:{color:'#c70237'}},
                    //                    data: [
                    //                        {type: 'max', name: '最大值'}
                    ////                        {type: 'min', name: '最小值'}
                    //                    ]
                    //                },
                    markLine: {
                        data: [
                            {yAxis:0.24, name: 'cl', itemStyle: {normal: {color: '#36ff2f'}}}
                            // {yAxis: 1.5, name: 'ucl', itemStyle: {normal: {color: '#ff0248'}}},
                            // {yAxis: 0.7, name: 'lcl', itemStyle: {normal: {color: '#ff0247'}}},
                        ]
                    }
                }
            ]
        };
// 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
    }

        /**
         *
         *
         *
         */

       /* $("#line-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#linechart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#linechart-tooltip").hide();
            }
        });

        $("<div id='linechart-tooltip' class='chart-tooltip'></div>").appendTo("body");*/

});


//Dynamic Chart
$(function() {
    if ($('#dynamic-chart')[0]) {
        var data = [],
            totalPoints = 300;

        function getRandomData() {
            if (data.length > 0)
                data = data.slice(1);

            while (data.length < totalPoints) {
                var prev = data.length > 0 ? data[data.length - 1] : 50,
                    y = prev + Math.random() * 10 - 5;
                if (y < 0) {
                    y = 0;
                } else if (y > 90) {
                    y = 90;
                }

                data.push(y);
            }

            var res = [];
            for (var i = 0; i < data.length; ++i) {
                res.push([i, data[i]])
            }

            return res;
        }


        var updateInterval = 30;
        var plot = $.plot("#dynamic-chart", [ getRandomData() ], {
            series: {
                label: "Data",
                lines: {
                    show: true,
                    lineWidth: 1,
                    fill: 0.25,
                },

                color: 'rgba(255,255,255,0.2)',
                shadowSize: 0,
            },
            yaxis: {
                min: 0,
                max: 100,
                tickColor: 'rgba(255,255,255,0.15)',
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "rgba(255,255,255,0.8)",
                },
                shadowSize: 0,

            },
            xaxis: {
                tickColor: 'rgba(255,255,255,0.15)',
                show: true,
                font :{
                    lineHeight: 13,
                    style: "normal",
                    color: "rgba(255,255,255,0.8)",
                },
                shadowSize: 0,
                min: 0,
                max: 250
            },
            grid: {
                borderWidth: 1,
                borderColor: 'rgba(255,255,255,0.25)',
                labelMargin:10,
                hoverable: true,
                clickable: true,
                mouseActiveRadius:6,
            },
            legend: {
                show: false
            }
        });

        function update() {
            plot.setData([getRandomData()]);
            // Since the axes don't change, we don't need to call plot.setupGrid()

            plot.draw();
            setTimeout(update, updateInterval);
        }

        update();

        $("#dynamic-chart").bind("plothover", function (event, pos, item) {
            if (item) {
                var x = item.datapoint[0].toFixed(2),
                    y = item.datapoint[1].toFixed(2);
                $("#dynamic-chart-tooltip").html(item.series.label + " of " + x + " = " + y).css({top: item.pageY+5, left: item.pageX+5}).fadeIn(200);
            }
            else {
                $("#dynamic-chart-tooltip").hide();
            }
        });

        $("<div id='dynamic-chart-tooltip' class='chart-tooltip'></div>").appendTo("body");
    }
});




