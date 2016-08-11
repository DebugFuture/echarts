(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        // AMD. Register as an anonymous module.
        define(['exports', 'echarts'], factory);
    } else if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
        // CommonJS
        factory(exports, require('echarts'));
    } else {
        // Browser globals
        factory({}, root.echarts);
    }
}(this, function (exports, echarts) {
    var log = function (msg) {
        if (typeof console !== 'undefined') {
            console && console.error && console.error(msg);
        }
    };
    if (!echarts) {
        log('ECharts is not Loaded');
        return;
    }
    echarts.registerTheme('mmtrix', {
        "color": [
            "#1a8fff",
            "#31ce71",
            "#ff9b4b",
            "#cfd3da",
            "#7fc0ff",
            "#99e2b9",
            "#ffcda5",
            "#e6e9ee",
            "#0072df",
            "#19a254",
            "#f66d00",
            "#acb3be"
        ],
        "backgroundColor": "rgba(0, 0, 0, 0)",
        "textStyle": {},
        "title": {
            "textStyle": {
                "color": "#555555"
            },
            "subtextStyle": {
                "color": "#555555"
            }
        },
        "grid": {
            "borderWidth": "0",
            "left": "0",
            "right": "0",
            "top": "35",
            "bottom": "35"
        },
        "line": {
            "animation": false,
            "itemStyle": {
                "normal": {
                    "borderWidth": "1.5"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "4",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "radar": {
            "animation": false,
            "itemStyle": {
                "normal": {
                    "borderWidth": "1.5"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": "2"
                }
            },
            "symbolSize": "4",
            "symbol": "emptyCircle",
            "smooth": false
        },
        "bar": {
            "animation": false,
            "itemStyle": {
                "normal": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                },
                "emphasis": {
                    "barBorderWidth": "0",
                    "barBorderColor": "#ccc"
                }
            }
        },
        "pie": {
            "animation": false,
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "scatter": {
            "animation": false,
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "boxplot": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "parallel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "sankey": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "funnel": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "gauge": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                },
                "emphasis": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            }
        },
        "candlestick": {
            "itemStyle": {
                "normal": {
                    "color": "#c23531",
                    "color0": "#314656",
                    "borderColor": "#c23531",
                    "borderColor0": "#314656",
                    "borderWidth": 1
                }
            }
        },
        "graph": {
            "itemStyle": {
                "normal": {
                    "borderWidth": "0",
                    "borderColor": "#ccc"
                }
            },
            "lineStyle": {
                "normal": {
                    "width": 1,
                    "color": "#aaa"
                }
            },
            "symbolSize": "4",
            "symbol": "emptyCircle",
            "smooth": false,
            "color": [
                "#1a8fff",
                "#31ce71",
                "#ff9b4b",
                "#cfd3da",
                "#7fc0ff",
                "#99e2b9",
                "#ffcda5",
                "#e6e9ee",
                "#0072df",
                "#19a254",
                "#f66d00",
                "#acb3be"
            ],
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                }
            }
        },
        "map": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#cfd3da",
                    "borderColor": "#ffffff",
                    "borderWidth": "0.3"
                },
                "emphasis": {
                    "areaColor": "rgba(26,143,255,1)",
                    "borderColor": "#ffffff",
                    "borderWidth": "0.3"
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(0,0,0)"
                    }
                }
            }
        },
        "geo": {
            "itemStyle": {
                "normal": {
                    "areaColor": "#cfd3da",
                    "borderColor": "#ffffff",
                    "borderWidth": "0.3"
                },
                "emphasis": {
                    "areaColor": "rgba(26,143,255,1)",
                    "borderColor": "#ffffff",
                    "borderWidth": "0.3"
                }
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "rgb(0,0,0)"
                    }
                }
            }
        },
        "categoryAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#555555"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "valueAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "inside": true,
                "margin": "0",
                "textStyle": {
                    "color": "#555555"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "type": "dashed",
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "logAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#555555"
                }
            },
            "splitLine": {
                "show": true,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "timeAxis": {
            "axisLine": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisTick": {
                "show": false,
                "lineStyle": {
                    "color": "#333"
                }
            },
            "axisLabel": {
                "show": true,
                "textStyle": {
                    "color": "#555555",
                    "align": "right"
                }
            },
            "splitLine": {
                "show": false,
                "lineStyle": {
                    "color": [
                        "#eeeeee"
                    ]
                }
            },
            "splitArea": {
                "show": false,
                "areaStyle": {
                    "color": [
                        "rgba(250,250,250,0.3)",
                        "rgba(200,200,200,0.3)"
                    ]
                }
            }
        },
        "toolbox": {
            "iconStyle": {
                "normal": {
                    "borderColor": "#999"
                },
                "emphasis": {
                    "borderColor": "#666"
                }
            }
        },
        "legend": {
            "textStyle": {
                "color": "#555555"
            }
        },
        "tooltip": {
            "axisPointer": {
                "lineStyle": {
                    "color": "#ccc",
                    "width": 1
                },
                "crossStyle": {
                    "color": "#ccc",
                    "width": 1
                }
            }
        },
        "timeline": {
            "lineStyle": {
                "color": "#293c55",
                "width": 1
            },
            "itemStyle": {
                "normal": {
                    "color": "#293c55",
                    "borderWidth": 1
                },
                "emphasis": {
                    "color": "#a9334c"
                }
            },
            "controlStyle": {
                "normal": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                },
                "emphasis": {
                    "color": "#293c55",
                    "borderColor": "#293c55",
                    "borderWidth": 0.5
                }
            },
            "checkpointStyle": {
                "color": "#e43c59",
                "borderColor": "rgba(194,53,49, 0.5)"
            },
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#293c55"
                    }
                }
            }
        },
        "visualMap": {
            "color": [
                "#0072df",
                "#7fc0ff"
            ]
        },
        "dataZoom": {
            "backgroundColor": "rgba(47,69,84,0)",
            "dataBackgroundColor": "rgba(47,69,84,0.3)",
            "fillerColor": "rgba(167,183,204,0.4)",
            "handleColor": "#a7b7cc",
            "handleSize": "100%",
            "textStyle": {
                "color": "#333"
            }
        },
        "markPoint": {
            "label": {
                "normal": {
                    "textStyle": {
                        "color": "#000000"
                    }
                },
                "emphasis": {
                    "textStyle": {
                        "color": "#000000"
                    }
                }
            }
        }
    });
}));
