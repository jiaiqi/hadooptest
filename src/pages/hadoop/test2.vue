<template>
  <div class="data-page">
    <div class="header">
      <h1 class="header-title">克拉玛依市智慧办案</h1>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="col col-l">
          <div class="xpanel-wrapper xpanel-wrapper-40">
            <div class="xpanel xpanel-l-t">
              <div class="title">数据内外部整合情况</div>
              <div class="pie-box">
                <div id="data01" class="pie-item"></div>
                <div id="data02" class="pie-item"></div>
                <!-- <div id="data03" class="pie-item"></div> -->
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-60">
            <div class="xpanel xpanel-l-b">
              <div class="title">公益诉讼情况统计</div>
              <div class="pie-box" id="data1"></div>
            </div>
          </div>
        </div>
        <div class="col col-c">
          <div class="xpanel-wrapper xpanel-wrapper">
            <div class="xpanel xpanel-c-b">
              <div class="title title-long">案件处理相关数据统计</div>
              <div class="pie-box" id="data2"></div>
            </div>
          </div>
        </div>
        <div class="col col-r">
          <div class="xpanel-wrapper xpanel-wrapper-55">
            <div class="xpanel xpanel-r-m">
              <div class="title">常见罪名可视化分析展示</div>
              <div class="pie-box" id="data4"></div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-45">
            <div class="xpanel xpanel-r-b">
              <div class="title">个人工作各项平均得分</div>
              <div class="pie-box" id="data5"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maps from "../../assets/data/kelamayi.json";
import echarts from "echarts";
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {
    this.setData0();
    this.setData1();
    this.setData2();
    this.setData3();
    this.setData4();
    // this.setData5();
  },
  methods: {
    setData0() {
      let self = this;
      let getData01 = function() {
        let myChart = self.$echarts.init(document.getElementById("data01"));
        var giftImageUrl =
          "data:image/png;base64,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";
        let option = {
          backgroundColor: "#031845",
          tooltip: {
            trigger: "item",
            formatter: "{a} <br/>{b}: {c} ({d}%)"
          },
          graphic: {
            elements: [
              {
                type: "image",
                style: {
                  image: giftImageUrl,
                  width: 100,
                  height: 100
                },
                left: "center",
                top: "center"
              }
            ]
          },
          title: {
            text: "类型分析",
            left: "center",
            top: "55%",
            padding: [24, 0],
            textStyle: {
              color: "#fff",
              fontSize: 30,
              align: "center"
            }
          },
          legend: {
            orient: "horizontal",
            icon: "circle",
            left: 10,
            x: "left",
            data: [
              "社工",
              "养老护理员",
              "康复师",
              "心理咨询师",
              "医生",
              "护士",
              "管理人员",
              "后勤人员",
              "其他人员"
            ],
            textStyle: {
              color: "#fff",
              lineHeight:40,
              fontSize:30
            }
          },
          series: [
            {
              name: "人员类型",
              type: "pie",
              hoverAnimation: false,
              legendHoverLink: false,
              radius: ["38%", "45%"],
              color: [
                "#006495",
                "#1D5F84",
                "#255C6D",
                "#3C5C67",
                "#40486C",
                "#3F3C73",
                "#403D84",
                "#1F3A8D",
                "#0B3B77"
              ],
              label: {
                normal: {
                  position: "inner"
                }
              },
              labelLine: {
                normal: {
                  show: false
                }
              },
              tooltip: {
                show: false
              },

              data: [
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                },
                {
                  value: 100,
                  name: ""
                }
              ]
            },
            {
              name: "人员类型",
              type: "pie",
              radius: ["43%", "55%"],
              color: [
                "#00FFFF",
                "#44EAB1",
                "#7BDD43",
                "#FEBE12",
                "#EBEC2F",
                "#FF7C44",
                "#FA3E5F",
                "#6635EF",
                "#FFAFDA"
              ],
              labelLine: {
                normal: {
                  show: true,
                  length: 20,
                  length2: 20,
                  lineStyle: {
                    width: 2
                  }
                }
              },
              label: {
                normal: {
                  formatter: "{c|{c}}\n{hr|}\n{d|{d}%}",
                  rich: {
                    b: {
                      fontSize: 30,
                      color: "#12EABE",
                      align: "left",
                      padding: 4
                    },
                    hr: {
                      borderColor: "#12EABE",
                      width: "100%",
                      borderWidth: 2,
                      height: 0
                    },
                    d: {
                      fontSize: 30,
                      color: "#fff",
                      align: "left",
                      padding: 4
                    },
                    c: {
                      fontSize: 30,
                      color: "#fff",
                      align: "left",
                      padding: 4
                    }
                  }
                }
              },
              data: [
                {
                  value: 100,
                  name: "社工"
                },
                {
                  value: 100,
                  name: "养老护理员"
                },
                {
                  value: 100,
                  name: "康复师"
                },
                {
                  value: 100,
                  name: "心理咨询师"
                },
                {
                  value: 100,
                  name: "医生"
                },
                {
                  value: 100,
                  name: "护士"
                },
                {
                  value: 100,
                  name: "管理人员"
                },
                {
                  value: 100,
                  name: "后勤人员"
                },
                {
                  value: 100,
                  name: "其他人员"
                }
              ]
            }
          ]
        };
        myChart.setOption(option);
      };
      let getData02 = function() {
        let myChart = self.$echarts.init(document.getElementById("data02"));
        var scaleData = [
          {
            name: "2018年男生",
            value: 38
          },
          {
            name: "2017年男生",
            value: 31
          },
          {
            name: "2016年男生",
            value: 29
          },
          {
            name: "2016年女生",
            value: 12
          },
          {
            name: "2017年女生",
            value: 34
          },
          {
            name: "2018年女生",
            value: 39
          }
        ];
        var rich = {
          white: {
            color: "#ddd",
            align: "center",
            padding: [3, 0]
          }
        };
        var placeHolderStyle = {
          normal: {
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            color: "rgba(0, 0, 0, 0)",
            borderColor: "rgba(0, 0, 0, 0)",
            borderWidth: 0
          }
        };
        var data = [];
        var color2 = [
          "#8d7fec",
          "#5085f2",
          "#e75fc3",
          "#f87be2",
          "#f2719a",
          "#fca4bb",
          "#f59a8f"
        ];
        let color = [
          "#0E7CE2",
          "#FF8352",
          "#E271DE",
          "#F8456B",
          "#00FFFF",
          "#4AEAB0",
          "#f87be2"
        ];
        for (var i = 0; i < scaleData.length; i++) {
          data.push(
            {
              value: scaleData[i].value,
              name: scaleData[i].name,
              itemStyle: {
                normal: {
                  borderWidth: 5,
                  shadowBlur: 500,
                  borderColor: color2[i],
                  shadowColor: color[i]
                }
              }
            },
            {
              value: 2,
              name: "",
              itemStyle: placeHolderStyle
            }
          );
        }
        var seriesObj = [
          {
            name: "",
            type: "pie",
            clockWise: false,
            radius: [100, 200],
            hoverAnimation: false,
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "outside",
                  color: color,
                  formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < scaleData.length; i++) {
                      total += scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if (params.name !== "") {
                      return (
                        params.name +
                        params.value +
                        "人" +
                        "\n{white|" +
                        "占比" +
                        percent +
                        "%}"
                      );
                    } else {
                      return "";
                    }
                  },
                  rich: rich
                },
                labelLine: {
                  length: 30,
                  length2: 100,
                  show: true,
                  color: "#fff"
                }
              }
            },
            data: data
          }
        ];
        let option = {
          // backgroundColor: "#04243E",
          color: color,
          tooltip: {
            show: false
          },
          legend: {
            show: false
          },
          toolbox: {
            show: false
          },
          series: seriesObj
        };
        myChart.setOption(option);
      };
      getData01();
      getData02();
    },
    setData1() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data1"));
      // Generate data
      var category = [
        "市区",
        "万州",
        "江北",
        "南岸",
        "北碚",
        "綦南",
        "长寿",
        "永川",
        "璧山",
        "江津",
        "城口",
        "大足",
        "垫江",
        "丰都",
        "奉节",
        "合川",
        "江津区",
        "开州",
        "南川",
        "彭水",
        "黔江",
        "石柱",
        "铜梁",
        "潼南",
        "巫山",
        "巫溪",
        "武隆",
        "秀山",
        "酉阳",
        "云阳",
        "忠县",
        "川东",
        "检修"
      ];
      var dottedBase = [];
      var lineData = [
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        56061,
        62677,
        59521,
        67560,
        18092,
        20728,
        24045,
        28348,
        32808,
        36097,
        39867,
        44715,
        48444,
        50415,
        36097,
        39867,
        44715,
        48444,
        50415,
        50061,
        32677,
        49521,
        32808
      ];
      var barData = [
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        33300,
        4600,
        5000,
        5500,
        6500,
        7500,
        8500,
        9900,
        22500,
        14000,
        21500,
        8500,
        9900,
        12500,
        14000,
        21500,
        23200,
        24450,
        25250,
        7500
      ];
      var rateData = [];
      32808;
      for (var i = 0; i < 33; i++) {
        // var date = i+2001;
        // category.push(date)
        var rate = barData[i] / lineData[i];
        rateData[i] = rate.toFixed(2);
      }

      // option
      let option = {
        title: {
          text: "增量设备贯通情况-单位",
          x: "center",
          y: 0,
          textStyle: {
            color: "#fff",
            fontSize: 45,
            fontWeight: "normal"
          }
        },
        // backgroundColor: "#191E40",
        tooltip: {
          trigger: "axis",
          backgroundColor: "rgba(255,255,255,0.1)",
          axisPointer: {
            type: "shadow",
            label: {
              show: true,
              backgroundColor: "#7B7DDC"
            }
          }
        },
        legend: {
          data: ["已贯通", "计划贯通", "贯通率"],
          textStyle: {
            color: "#B4B4B4",
            fontSize: 35
          },
          top: "7%"
        },
        grid: {
          x: "12%",
          width: "82%",
          y: "12%"
        },
        xAxis: {
          data: category,
          axisLine: {
            lineStyle: {
              color: "#B4B4B4"
            }
          },
          axisTick: {
            show: false
          },
          axisLabel: {
            fontSize: 40
          }
        },
        yAxis: [
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
                fontSize: 30
              }
            },

            axisLabel: {
              formatter: "{value} ",
              fontSize: 40
            }
          },
          {
            splitLine: { show: false },
            axisLine: {
              lineStyle: {
                color: "#B4B4B4",
                fontSize: 30
              }
            },
            axisLabel: {
              formatter: "{value} ",
              fontSize: 40
            }
          }
        ],

        series: [
          {
            name: "贯通率",
            type: "line",
            smooth: true,
            showAllSymbol: true,
            symbol: "emptyCircle",
            symbolSize: 8,
            yAxisIndex: 1,
            itemStyle: {
              normal: {
                color: "#F02FC2",
                fontSize: 30
              }
            },
            data: rateData
          },

          {
            name: "已贯通",
            type: "bar",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "#956FD4" },
                  { offset: 1, color: "#3EACE5" }
                ]),
                fontSize: 30
              }
            },
            data: barData
          },

          {
            name: "计划贯通",
            type: "bar",
            barGap: "-100%",
            barWidth: 10,
            itemStyle: {
              normal: {
                barBorderRadius: 5,
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  { offset: 0, color: "rgba(156,107,211,0.5)" },
                  { offset: 0.2, color: "rgba(156,107,211,0.3)" },
                  { offset: 1, color: "rgba(156,107,211,0)" }
                ])
              }
            },
            z: -12,

            data: lineData
          }
        ]
      };
      myChart.setOption(option);
    },
    setData2() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data2"));
      var dataAll = [389, 259, 262, 324, 232, 176, 196, 214, 133, 370];
      var yAxisData = [
        "原因1",
        "原因2",
        "原因3",
        "原因4",
        "原因5",
        "原因6",
        "原因7",
        "原因8",
        "原因9",
        "原因10"
      ];
      let mycolor = [
        "#1089E7",
        "#F57474",
        "#56D0E3",
        "#F8B448",
        "#8B78F6",
        "#1089E7",
        "#56D0E3",
        "#8B78F6",
        "#F57474",
        "#8B78F6"
      ];
      let option = {
        // backgroundColor: "#0f375f",
        title: [
          {
            text: "各渠道投诉占比",
            x: "2%",
            y: "1%",
            textStyle: { color: "#fff", fontSize: "40" }
          },
          {
            text: "投诉原因TOP10",
            x: "40%",
            y: "1%",
            textStyle: { color: "#fff", fontSize: "40" }
          },
          {
            text: "各级别投诉占比",
            x: "2%",
            y: "50%",
            textStyle: { color: "#fff", fontSize: "40" }
          }
        ],
        grid: [{ x: "50%", y: "7%", width: "45%", height: "90%" }],
        tooltip: {
          formatter: "{b} ({c})"
        },
        xAxis: [
          {
            gridIndex: 0,
            axisTick: { show: false },
            axisLabel: { show: false },
            splitLine: { show: false },
            axisLine: { show: false }
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            interval: 0,
            data: yAxisData.reverse(),
            axisTick: { show: false },
            axisLabel: {
              show: true,
              fontSize: 40,
              color: function(value, index) {
                var num = mycolor.length;
                return mycolor[index % num];
              }
            },
            splitLine: { show: false }
            // axisLine: { show: true, lineStyle: { color: "#fff" } }
          }
        ],
        series: [
          {
            name: "各渠道投诉占比",
            type: "pie",
            radius: "30%",
            center: ["22%", "25%"],
            color: ["#0E7CE2", "#FF8352", "#E271DE", "#F8456B", "#00FFFF"],
            data: [
              { value: 335, name: "客服电话" },
              { value: 310, name: "奥迪官网" },
              { value: 234, name: "媒体曝光" },
              { value: 135, name: "质检总局" },
              { value: 105, name: "其他" }
            ],
            labelLine: { normal: { show: false } },
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} \n ({d}%)",
                  textStyle: { color: "#B1B9D3", fontSize: 40 }
                }
              }
            }
          },
          {
            name: "各级别投诉占比",
            type: "pie",
            radius: "30%",
            center: ["22%", "75%"],
            color: ["#f54d4d", "#f87544", "#ffae00", "#dcff00", "#25d053"],
            labelLine: { normal: { show: false } },
            data: [
              { value: 335, name: "A级" },
              { value: 310, name: "B级" },
              { value: 234, name: "C级" },
              { value: 135, name: "D级" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  formatter: "{b} \n ({d}%)",
                  textStyle: { color: "#B1B9D3", fontSize: 40 }
                }
              }
            }
          },
          {
            name: "投诉原因TOP10",
            type: "bar",
            xAxisIndex: 0,
            yAxisIndex: 0,
            barWidth: "45%",
            itemStyle: {
              normal: {
                barBorderRadius: 30,

                color: function(params) {
                  var num = mycolor.length;
                  return mycolor[params.dataIndex % num];
                },
                fontSize: 40
              }
            },
            label: {
              normal: {
                show: true,
                position: "right",
                textStyle: {
                  color: function(params) {
                    var num = mycolor.length;
                    return mycolor[params.dataIndex % num];
                  },
                  fontSize: 40
                }
              }
            },
            data: dataAll.sort()
          }
        ]
      };
      myChart.setOption(option);
    },
    setData3() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data5"));
      var colors = ["#66CDAA", "#B8860B", "#FF9080"];

      var xData = (function() {
        var data = [];
        for (var i = 1; i < 13; i++) {
          data.push("地区" + i);
        }
        return data;
      })();
      let option = {
        title: {
          text: "地区办理情况",
          left: "35%",
          top: "10%",
          textStyle: {
            fontSize: "45",
            color: "#fff"
          }
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "shadow",
            textStyle: {
              color: "#fff"
            }
          }
        },
        grid: {
          top: "10%",
          bottom: "10%",
          left: "10%",
          right: "10%"
        },
        legend: {
          data: ["受理数", "办结数", "办理率"],
          align: "right",
          top: "14%",
          right: "20%",
          textStyle: {
            color: "#FFFFFF",
            fontSize: 40
          }
        },
        calculable: true,
        xAxis: [
          {
            type: "category",
            axisLine: {
              lineStyle: {
                color: "#000"
              }
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            splitArea: {
              show: false
            },
            axisLabel: {
              interval: 0,
              textStyle: {
                fontSize: 30,
                color: "#ffffff"
              }
            },
            data: xData
          }
        ],
        yAxis: [
          {
            type: "value",
            name: "",
            min: 0,
            max: 2000,
            position: "left",
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                fontSize: 40
              }
            },
            axisLabel: {
              formatter: "{value} ",
              textStyle: {
                fontSize: 30
              }
            }
          },
          {
            type: "value",
            name: "",
            position: "right",
            axisLine: {
              lineStyle: {
                color: "#ffffff",
                fontSize: 40
              }
            },
            axisLabel: {
              formatter: "{value} %",
              textStyle: {
                fontSize: 30
              }
            }
          }
        ],
        series: [
          {
            name: "受理数",
            type: "bar",
            stack: "总量",
            barMaxWidth: 15,
            barGap: "10%",
            itemStyle: {
              normal: {
                color: "#06a7ef",
                label: {
                  show: true,
                  textStyle: {
                    color: "#fff",
                    fontSize: 30
                  },
                  position: "insideTop",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [421, 356, 719, 658, 458, 443, 620, 416, 551, 721, 466, 632]
          },
          {
            name: "办结数",
            type: "bar",
            stack: "总量",
            itemStyle: {
              normal: {
                color: "#d872f3",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }

                /*normal:{
                color:new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#00b0ff'
                }, {
                    offset: 0.8,
                    color: '#7052f4'
                }], false)}*/
              }
            },
            data: [121, 256, 119, 258, 358, 343, 220, 216, 151, 221, 266, 532]
          },
          {
            name: "办理率",
            yAxisIndex: 1,
            symbolSize: 10,
            symbol: "circle",
            type: "line",
            itemStyle: {
              normal: {
                color: "rgba(252,230,48,1)",
                barBorderRadius: 0,
                label: {
                  show: true,
                  position: "top",
                  formatter: function(p) {
                    return p.value > 0 ? p.value : "";
                  }
                }
              }
            },
            data: [11, 4, 7, 8, 6, 2, 10, 8, 10, 5, 5, 4]
          }
        ]
      };

      myChart.setOption(option);
    },
    setData4() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data4"));
      let option = {
        tooltip: {},
        animationDurationUpdate: function(idx) {
          // 越往后的数据延迟越大
          return idx * 100;
        },
        animationEasingUpdate: "bounceIn",
        color: ["#fff", "#fff", "#fff"],
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 1000,
              edgeLength: 100
            },
            roam: true,
            label: {
              normal: {
                show: true,
                fontSize: 40
              }
            },
            data: [
              {
                name: "强奸罪",
                value: 10000,
                symbolSize: 250,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(27, 94, 93)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(27, 94, 93)",
                    color: "rgb(27, 94, 93)"
                  }
                }
              },
              {
                name: "绑架罪",
                value: 6181,
                symbolSize: 180,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(206, 188, 11)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(206, 188, 11)",
                    color: "rgb(206, 188, 11)"
                  }
                }
              },
              {
                name: "抢劫罪",
                value: 4386,
                symbolSize: 190,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(165, 190, 198)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(165, 190, 198)",
                    color: "rgb(165, 190, 198)"
                  }
                }
              },
              {
                name: "抢夺罪",
                value: 4055,
                symbolSize: 220,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(98, 41, 72)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(98, 41, 72)",
                    color: "rgb(98, 41, 72)"
                  }
                }
              },
              {
                name: "盗窃罪",
                value: 2467,
                symbolSize: 210,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(175, 20, 143)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(175, 20, 143)",
                    color: "rgb(175, 20, 143)"
                  }
                }
              },
              {
                name: "敲诈勒索罪",
                value: 2244,
                symbolSize: 170,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(77, 231, 55)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(77, 231, 55)",
                    color: "rgb(77, 231, 55)"
                  }
                }
              },
              {
                name: "诈骗罪",
                value: 1898,
                symbolSize: 260,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(26, 83, 246)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(26, 83, 246)",
                    color: "rgb(26, 83, 246)"
                  }
                }
              },
              {
                name: "侵占罪",
                value: 1484,
                symbolSize: 180,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(155, 118, 127)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(155, 118, 127)",
                    color: "rgb(155, 118, 127)"
                  }
                }
              },
              {
                name: "贪污罪",
                value: 1112,
                symbolSize: 200,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(116, 207, 18)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(116, 207, 18)",
                    color: "rgb(116, 207, 18)"
                  }
                }
              },
              {
                name: "受贿罪",
                value: 965,
                symbolSize: 180,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(98, 224, 224)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(98, 224, 224)",
                    color: "rgb(98, 224, 224)"
                  }
                }
              },
              {
                name: "挪用公款罪",
                value: 847,
                symbolSize: 210,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(137, 37, 21)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(137, 37, 21)",
                    color: "rgb(137, 37, 21)"
                  }
                }
              },
              {
                name: "行贿罪",
                value: 582,
                symbolSize: 200,
                draggable: true,
                itemStyle: {
                  normal: {
                    borderColor: "rgb(81, 27, 15)",
                    borderWidth: 4,
                    shadowBlur: 100,
                    shadowColor: "rgb(81, 27, 15)",
                    color: "rgb(81, 27, 15)"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style scoped lang="scss">
.data-page {
  height: 2160px;
  min-width: 6100px;
  background-color: #0b0f34;
  position: relative;
  .header {
    position: relative;
    height: 120px;
    box-sizing: border-box;
    .header-title {
      margin: 0;
      padding: 0;
      height: 120px;
      line-height: 120px;
      text-align: center;
      font-size: 100px;
      font-weight: 400;
      color: #e9c29d;
    }
  }
  .wrapper {
    position: absolute;
    top: 60px;
    bottom: 10px;
    left: 10px;
    right: 10px;
    padding: 10px 10px 0 10px;
    min-height: 500px;
    background: url("../../assets/img/wrapper-bg.png") no-repeat;
    background-size: 100% 100%;
    box-sizing: border-box;
    .content {
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      padding: 70px;
      height: 100%;
      min-height: 100%;
      box-sizing: border-box;
      .col {
        margin: 0 10px;
        height: 100%;
        .xpanel-wrapper {
          padding-bottom: 20px;
          box-sizing: border-box;
          .xpanel {
            height: 100%;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            box-sizing: border-box;
            .title {
              padding-left: 120px;
              height: 100px;
              line-height: 100px;
              font-size: 60px;
              font-weight: normal;
              color: #fff;
              background-image: url("../../assets/img/title-bg.png");
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            .title-long {
              background-image: url("../../assets/img/title-bg-long.png");
            }
            .pie-box {
              width: 100%;
              height: calc(100% - 100px);
              display: flex;
              .pie-item {
                flex: 1;
              }
            }
          }
        }
      }
    }
  }
}

.col-l {
  flex: 2;
}
.col-c {
  flex: 3;
}
.col-r {
  flex: 2;
}

.xpanel-wrapper {
  height: 100%;
}
.xpanel-wrapper-25 {
  height: 25%;
}
.xpanel-wrapper-30 {
  height: 30%;
}
.xpanel-wrapper-40 {
  height: 40%;
}
.xpanel-wrapper-45 {
  height: 45%;
}
.xpanel-wrapper-55 {
  height: 55%;
}
.xpanel-wrapper-60 {
  height: 60%;
}
.xpanel-wrapper-75 {
  height: 75%;
}

.xpanel-l-t {
  background-image: url("../../assets/img/panel-l-t.png");
}
.xpanel-l-b {
  background-image: url("../../assets/img/panel-l-b.png");
}
.xpanel-c-b {
  background-image: url("../../assets/img/panel-c-b.png");
}
.xpanel-r-t {
  background-image: url("../../assets/img/panel-r-t.png");
}
.xpanel-r-m {
  background-image: url("../../assets/img/panel-r-m.png");
}
.xpanel-r-b {
  background-image: url("../../assets/img/panel-r-b.png");
}
</style>