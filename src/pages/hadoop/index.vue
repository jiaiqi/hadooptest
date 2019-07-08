<template>
  <div class="data-page">
    <div class="title">克拉玛依市智慧办案</div>
    <div class="data-content">
      <div class="data-time"></div>
      <div class="data-main">
        <div class="main-left">
          <!-- <div class="main-title">
            <h1>全领域智慧支撑</h1>
          </div>-->
          <h1 class="main-item-title">数据内外部整合情况</h1>
          <div class="left-item">
            <div class="main-left-item">
              <h1 class="title"></h1>
              <div class="content">
                <div id="data01" class="content-item"></div>
                <div id="data02" class="content-item"></div>
                <div id="data03" class="content-item"></div>
              </div>
            </div>
            <div class="main-left-item">
              <h1 class="title"></h1>
              <div class="content" id="data1"></div>
            </div>
          </div>
        </div>
        <div class="main-center">
          <h1 class="main-item-title">常见罪名可视化分析展示</h1>
          <div id="data2"></div>
        </div>
        <div class="main-right">
          <div class="right-item">
            <h1 class="main-item-title">涉罪人员可视化展示</h1>
            <div id="data3" class="main-right-item"></div>
          </div>
          <div class="right-item">
            <h1 class="main-item-title">犯罪风险点分布可视化展示</h1>
            <div id="data4" class="main-right-item"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import maps from "../../assets/data/kelamayi.json";
import echarts from "echarts";
let geoCoordMap = {
  克拉玛依区: [84.868918, 45.600477],
  白碱滩区: [85.129882, 45.689021],
  乌尔禾区: [85.697767, 46.08776],
  独山子区: [84.882267, 44.327207]
};
export default {
  components: {},
  data() {
    return {
      data1: {
        xData: [
          "芝罘区",
          "莱山区",
          "牟平区",
          "海阳市",
          "莱阳市",
          "蓬莱市",
          "栖霞市",
          "龙口市",
          "长岛县",
          "招远市"
        ],
        y1Data: [10758, 3975, 2980, 1831, 2122, 3018, 3525, 1729, 2764, 380],
        y2Data: [28, 4.4, 5.9, 0.9, 0.7, 1.1, 2.1, 0.4, 1.9, 2.1]
      }
    };
  },
  created() {},
  mounted() {
    this.setData0()
    this.setData1()
    this.setData2()
    this.setData3()
    this.setData4()
  },
  methods: {
    setData0() {
      let self = this
      let getData01 = function(){     
        let myChart01 = self.$echarts.init(document.getElementById("data01"));
        let color = [
          "#9BBBDF",
          "#78C2FF",
          "#3758CD",
          "#A3B6F9",
          "#3F8AEF",
          "#F6CAA3"
        ];
        let data = [
          // 圆环图各环节的名称和值(系列中各数据项的名称和值)
          {
            name: "业务工作",
            value: 75,
            per: 75
          },
          {
            name: "队伍建设",
            value: 15,
            per: 15
          },
          {
            name: "检查政务",
            value: 10,
            per: 10
          }
        ];
        let option01 = {
          // backgroundColor: "#081534",
          title: [
            {
              text: "工作考核权重",
              bottom: "2%",
              left: "center",
              textStyle: {
                color: "#ffffff",
                fontSize: 50
              }
            }
          ],
          center: ["55%", "60%"],
          series: [
            {
              name: "工作考核权重", // 系列名称
              type: "pie",
              center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
              radius: ["30%", "65%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
              hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
              color: color, // 圆环图的颜色
              label: {
                // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
                normal: {
                  show: true, // 是否显示标签[ default: false ]
                  color: "#fff",
                  fontSize: 25,
                  position: "outside", // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                  formatter: "{b}\n{c}%" // 标签内容
                }
              },
              labelLine: {
                // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
                normal: {
                  show: true, // 是否显示视觉引导线。
                  length: 30, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                  length2: 10 // 视觉引导项第二段的长度。
                }
              },
              data: data // 系列中的数据内容数组。
            }
          ]
        }
        myChart01.setOption(option01);
      }
      let getData02 = function(){
        let myChart02 = self.$echarts.init(document.getElementById("data02"));
        let color = [
          "#9BBBDF",
          "#78C2FF",
          "#3758CD",
          "#A3B6F9",
          "#3F8AEF",
          "#F6CAA3"
        ];
        let data = [
          // 圆环图各环节的名称和值(系列中各数据项的名称和值)
          {
            name: "政治工作",
            value: 65,
            per: 65
          },
          {
            name: "纪检检查工作",
            value: 20,
            per: 20
          },
          {
            name: "宣传工作",
            value: 15,
            per: 15
          }
        ];
        let option02 = {
          // backgroundColor: "#081534",
          title: [
            {
              text: "检查队伍建设中考核权重",
              bottom: "2%",
              left: "center",
              textStyle: {
                color: "#ffffff",
                fontSize: 50
              }
            }
          ],
          center: ["55%", "60%"],
          series: [
            {
              name: "检查队伍建设中考核权重", // 系列名称
              type: "pie",
              center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
              radius: ["30%", "65%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
              hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
              color: color, // 圆环图的颜色
              label: {
                // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
                normal: {
                  show: true, // 是否显示标签[ default: false ]
                  color: "#fff",
                  fontSize: 25,
                  position: "outside", // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                  formatter: "{b}\n{c}%" // 标签内容
                }
              },
              labelLine: {
                // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
                normal: {
                  show: true, // 是否显示视觉引导线。
                  length: 30, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                  length2: 10 // 视觉引导项第二段的长度。
                }
              },
              data: data // 系列中的数据内容数组。
            }
          ]
        }
        myChart02.setOption(option02);
      }
      let getData03 = function() {    
        let myChart03 = self.$echarts.init(document.getElementById("data03"));
        let color = [
          "#9BBBDF",
          "#78C2FF",
          "#3758CD",
          "#A3B6F9",
          "#3F8AEF",
          "#F6CAA3"
        ];
        let data = [
          // 圆环图各环节的名称和值(系列中各数据项的名称和值)
          {
            name: "综合政务工作",
            value: 50,
            per: 50
          },
          {
            name: "信息工作",
            value: 25,
            per: 25
          },
          {
            name: "调研工作",
            value: 25,
            per: 25
          }
        ];
        let option03 = {
          // backgroundColor: "#081534",
          title: [
            {
              text: "检查政务工作中考核权重",
              bottom: "2%",
              left: "center",
              textStyle: {
                color: "#ffffff",
                fontSize: 50
              }
            }
          ],
          center: ["55%", "60%"],
          series: [
            {
              name: "检查政务工作中考核权重", // 系列名称
              type: "pie",
              center: ["50%", "50%"], // 饼图的中心（圆心）坐标，数组的第一项是横坐标，第二项是纵坐标。[ default: ['50%', '50%'] ]
              radius: ["30%", "65%"], // 饼图的半径，数组的第一项是内半径，第二项是外半径。[ default: [0, '75%'] ]
              hoverAnimation: true, // 是否开启 hover 在扇区上的放大动画效果。[ default: true ]
              color: color, // 圆环图的颜色
              label: {
                // 饼图图形上的文本标签，可用于说明图形的一些数据信息，比如值，名称等.
                normal: {
                  show: true, // 是否显示标签[ default: false ]
                  color: "#fff",
                  fontSize: 25,
                  position: "outside", // 标签的位置。'outside'饼图扇区外侧，通过视觉引导线连到相应的扇区。'inside','inner' 同 'inside',饼图扇区内部。'center'在饼图中心位置。
                  formatter: "{b}\n{c}%" // 标签内容
                }
              },
              labelLine: {
                // 标签的视觉引导线样式,在 label 位置 设置为'outside'的时候会显示视觉引导线。
                normal: {
                  show: true, // 是否显示视觉引导线。
                  length: 30, // 在 label 位置 设置为'outside'的时候会显示视觉引导线。
                  length2: 10 // 视觉引导项第二段的长度。
                }
              },
              data: data // 系列中的数据内容数组。
            }
          ]
        }
        myChart03.setOption(option03);
      }
      getData01()
      getData02()
      getData03()
    },
    setData1() {
      let self = this;
      let myChart1 = this.$echarts.init(document.getElementById("data1"));
      let option1 = {
        grid: {
          left: "7%",
          right: "5%",
          top: "25%",
          bottom: "19%"
        },
        title: {
          show: false
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          data: ["监控数量", "监控密度"],
          right: "3%",
          top: "10%",
          itemWidth: 11,
          itemHeight: 11,
          textStyle: {
            color: "#ffffff",
            fontSize: 13
          }
        },
        toolbox: {
          show: false
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: true,
            show: true,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 15,
              color: "#d0d0d0",
              margin: 8,
              interval: 0,
              formatter: function(val) {
                return val.split("").join("\n");
              }
            },
            axisLine: {
              lineStyle: {
                type: "solid",
                color: "#4e608b", //左边线的颜色
                width: "1" //坐标线的宽度
              }
            },
            data: self.data1.xData
          }
        ],
        yAxis: [
          {
            type: "value",
            scale: true,
            name: "",
            axisLine: {
              show: false
            },
            splitNumber: 4,
            axisTick: {
              show: false
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: "#4e608b"
              }
            },
            axisLabel: {
              fontSize: 13,
              color: "#d0d0d0",
              margin: 12
            },
            max: 12000,
            min: 0,
            boundaryGap: [0.2, 0.2]
          },
          {
            type: "value",
            scale: true,
            axisLine: {
              show: false
            },
            splitNumber: 3,
            axisTick: {
              show: false
            },
            axisLabel: {
              fontSize: 13,
              color: "#d0d0d0",
              margin: 12
            },
            splitLine: {
              lineStyle: {
                // 使用深浅的间隔色
                color: "#4e608b"
              }
            },
            name: "",
            max: 30,
            min: 0,
            boundaryGap: [0.2, 0.2]
          }
        ],
        series: [
          {
            name: "监控数量",
            type: "bar",
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#1dacfe"
                }
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#4889fb" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#15b3ff" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            },
            barWidth: "40%",
            yAxisIndex: 0,
            data: self.data1.y1Data
          },
          {
            name: "监控密度",
            yAxisIndex: 1,
            color: "#ffd300",
            label: {
              normal: {
                show: true,
                position: "top",
                textStyle: {
                  color: "#ffd300"
                }
              }
            },
            lineStyle: {
              color: "#ffd300"
            },
            type: "line",
            data: self.data1.y2Data
          }
        ]
      };
      myChart1.setOption(option1);
    },
    setData2() {
      let self = this;
      let myChart2 = this.$echarts.init(document.getElementById("data2"));
      let plantCap = [
        {
          name: "常见罪名",
          value: ""
        },
        {
          name: "重要人事任免",
          value: "115"
        },
        {
          name: "大额度资金运作",
          value: "113"
        },
        {
          name: "重大事项安排",
          value: "95"
        },
        {
          name: "十九大",
          value: "92"
        },
        {
          name: "党建",
          value: "87"
        },
        {
          name: "贯彻落实",
          value: "87"
        },
        {
          name: "党廉",
          value: "60"
        }
      ];
      let datalist = [
        {
          offset: [56, 48],
          symbolSize: 120,
          opacity: 0.95,
          color: "#f467ce"
        },
        {
          offset: [35, 80],
          symbolSize: 95,
          opacity: 0.88,
          color: "#7aabe2"
        },
        {
          offset: [20, 43],
          symbolSize: 90,
          opacity: 0.84,
          color: "#ff7123"
        },
        {
          offset: [83, 30],
          symbolSize: 90,
          opacity: 0.8,
          color: "#ffc400"
        },
        {
          offset: [36, 20],
          symbolSize: 65,
          opacity: 0.75,
          color: "#5e333f"
        },
        {
          offset: [64, 10],
          symbolSize: 70,
          opacity: 0.7,
          color: "#6b3442"
        },
        {
          offset: [75, 75],
          symbolSize: 60,
          opacity: 0.68,
          color: "#8a3647"
        },
        {
          offset: [88, 62],
          symbolSize: 50,
          opacity: 0.6,
          color: "#68333f"
        }
      ];
      let datas = [];
      for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
          name: item.value + "\n" + item.name,
          value: itemToStyle.offset,
          symbolSize: itemToStyle.symbolSize,
          label: {
            normal: {
              textStyle: {
                fontSize: 11
              }
            }
          },
          itemStyle: {
            normal: {
              color: itemToStyle.color,
              opacity: itemToStyle.opacity
            }
          }
        });
      }
      let option2 = {
        grid: {
          show: false,
          top: 10,
          bottom: 10
        },
        xAxis: [
          {
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 100,
            nameLocation: "middle",
            nameGap: 5
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 100,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        series: [
          {
            type: "scatter",
            symbol: "circle",
            symbolSize: 120,
            label: {
              normal: {
                show: true,
                formatter: "{b}",
                color: "#fff",
                textStyle: {
                  fontSize: "20"
                }
              }
            },
            itemStyle: {
              normal: {
                color: "#00acea"
              }
            },
            data: datas
          }
        ]
      };
      myChart2.setOption(option2);
    },
    setData3() {
      let self = this;
      let myChart3 = this.$echarts.init(document.getElementById("data3"));
      let option3 = {
        // backgroundColor: '#1a4377',
        tooltip: {},
        animationDurationUpdate: 1500,
        animationEasingUpdate: "quinticInOut",
        color: ["#83e0ff", "#45f5ce", "#b158ff"],
        series: [
          {
            type: "graph",
            layout: "force",
            force: {
              repulsion: 1000,
              edgeLength: 50
            },
            roam: true,
            label: {
              normal: {
                show: true
              }
            },
            data: [
              {
                name: "校园大数据",
                symbolSize: 120,
                draggable: true,
                category: 0,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 6,
                    shadowBlur: 20,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                }
              },
              {
                name: "舆情大数据",
                symbolSize: 100,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                },
                category: 1
              },
              {
                name: "用户分析",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#04f2a7",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                }
              },
              {
                name: "话题分析",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                }
              },
              {
                name: "评论分析",
                symbolSize: 80,
                category: 1,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                }
              },
              {
                name: "图书馆分析",
                symbolSize: 100,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                }
              },
              {
                name: "借阅分析",
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#b457ff",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#b457ff",
                    color: "#001c43"
                  }
                }
              },
              {
                name: "借阅排行",
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                },
                category: 2
              },
              {
                name: "图书收录",
                symbolSize: 80,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                },
                category: 2
              },
              {
                name: "图书分析",
                symbolSize: 80,
                category: 2,
                itemStyle: {
                  normal: {
                    borderColor: "#82dffe",
                    borderWidth: 4,
                    shadowBlur: 10,
                    shadowColor: "#04f2a7",
                    color: "#001c43"
                  }
                }
              }
            ],
            links: [
              {
                source: "校园大数据",
                target: "舆情大数据"
              },
              {
                source: "校园大数据",
                target: "图书馆分析"
              },
              {
                source: "舆情大数据",
                target: "用户分析"
              },
              {
                source: "舆情大数据",
                target: "话题分析"
              },
              {
                source: "舆情大数据",
                target: "评论分析"
              },
              {
                source: "校园大数据",
                target: "图书馆分析"
              },
              {
                source: "图书馆分析",
                target: "图书分析"
              },
              {
                source: "图书馆分析",
                target: "借阅分析"
              },
              {
                source: "图书馆分析",
                target: "借阅排行",
                value: "DNA"
              },
              {
                source: "图书馆分析",
                target: "图书收录"
              }
            ],
            lineStyle: {
              normal: {
                opacity: 0.9,
                width: 5,
                curveness: 0
              }
            },
            categories: [{ name: "0" }, { name: "1" }, { name: "2" }]
          }
        ]
      };
      myChart3.setOption(option3);
    },
    setData4() {
      let self = this;
      let data = [
        {
          name: "独山子区",
          value: 85
        },
        {
          name: "克拉玛依区",
          value: 70
        },
        {
          name: "白碱滩区",
          value: 75
        },
        {
          name: "乌尔禾区",
          value: 120
        }
      ];
      let myChart4 = this.$echarts.init(document.getElementById("data4"));
      this.$echarts.registerMap("kelamayi", maps);
      let option4 = {
        position: "kelamayi",
        tooltip: {
          position: "right",
          borderColor: "#F4E925",
          enterable: true,
          textStyle: {
            fontSize: 50,
            lineHeight: 80
          }
        },
        visualMap: {
          //颜色的设置  dataRange
          show: false,
          x: "left",
          y: "center",
          seriesIndex: [1],
          min: 70,
          max: 90,
          text: ["高", "低"], // 文本，默认为数值文本
          textStyle: {
            color: "#fff"
          },
          inRange: {
            // color: ['#5cd2c3','#419bd3','#7a95d2','#5dcbdc','#838dcd','#5de9b1','#5dc6df','#5db8ea','#2bbc90','#5dc4e3']
          }
        },
        geo: {
          map: "kelamayi",
          itemStyle: {
            //地图区域的多边形 图形样式
            color: "#333",
            areaColor: "#F4E925",
            borderColor: "#fff",
            normal: {
              //是图形在默认状态下的样式
              label: {
                show: true, //是否显示标签
                textStyle: {
                  color: "#ff0",
                  fontSize: 40
                }
              },
              borderWidth: 1,
              borderColor: "F4E925"
            }
          }
        },
        series: [
          {
            name: "kelamayi",
            type: "effectScatter",
            coordinateSystem: "geo",
            data: this.convertData(data),
            symbolSize: function(val) {
              return val[2] * 0.8;
            },
            tooltip: {
              show: false
            },
            showEffectOn: "render",
            rippleEffect: {
              brushType: "stroke"
            },
            hoverAnimation: false,
            label: {
              normal: {
                formatter: "{b}",
                position: "bottom",
                color: "#fff",
                fontSize: 30,
                show: true
              }
            },
            itemStyle: {
              normal: {
                color: "#eed007",
                shadowBlur: 2,
                shadowColor: "#05C3F9"
              }
            },
            zlevel: 5
          },
          {
            name: "办案统计",
            type: "map",
            mapType: "kelamayi",
            // zoom: 1.2,
            roam: false, //是否开启鼠标缩放和平移漫游
            itemStyle: {
              //地图区域的多边形 图形样式
              // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
              normal: {
                //是图形在默认状态下的样式
                label: {
                  show: true, //是否显示标签
                  textStyle: {
                    color: "transparent"
                  }
                },
                borderWidth: 1,
                borderColor: "#cba4ff",
                areaColor: "#2727b3"
              },
              emphasis: {
                //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                label: {
                  show: true,
                  textStyle: {
                    color: "transparent"
                  }
                },
                borderColor: "#28729f",
                areaColor: "#6606e8"
              }
            },
            data: data
          }
        ]
      };
      myChart4.setOption(option4);
    },
    convertData: function(data) {
      var res = [];
      for (var i = 0; i < data.length; i++) {
        var geoCoord = geoCoordMap[data[i].name];
        if (geoCoord) {
          res.push({
            name: data[i].name,
            value: geoCoord.concat(data[i].value)
          });
        }
      }
      return res;
    }
  }
};
</script>

<style lang="scss">
.data-page {
  background: url(../../assets/data/truec.png) repeat;
  background-position: center center;
  background-size: 100%;
  top: 0;
  right: 0;
  right: 0;
  bottom: 0;
  height: 2160px;
  min-width: 6100px;
  background-color: #2c58a6;
  > .title {
    background: url(../../assets/data/title.png) no-repeat;
    background-position: center center;
    background-size: 80% 90%;
    color: #ddf0ff;
    font-size: 80px;
    width: 100%;
    text-align: center;
  }
  .data-content {
    padding-top: 20px;
    padding-bottom: 20px;
    .data-main {
      width: calc(100% - 40px);
      margin-bottom: 40px;
      margin-left: 20px;
      height: 2000px;
      display: flex;
      flex-direction: row;
      .main-item-title {
        margin-left: 10px;
        padding-left: 20px;
        font-size: 60px;
        line-height: 80px;
        text-indent: 30px;
        background: url(../../assets/data/menu_top.png) no-repeat;
        border-bottom: 2px solid #1059c79c;
        background-position: left center;
        background-size: 40% 100%;
        border-left: 10px solid #2c58a6;
        font-weight: 600;
        color: #fff;
      }
      .main-left,
      .main-center,
      .main-right {
        height: 100%;
      }

      .main-left {
        width: 25%;
        overflow: hidden;
        .left-item {
          height: calc(100% - 50px);
          .main-left-item {
            height: 45%;
            .content{
              width: 100%;
              height: 100%;
              display: flex;
              .content-item{
                flex:1
              }
            }
            #data1 {
              height: 100%;
              margin: 0 auto;
              width: 90%;
              display: flex;
            }
          }
        }
      }
      .main-center {
        box-sizing: border-box;
        background: url(../../assets/data/line1.png) no-repeat;
        background-size: 100% 100%;
        // background-color: transparent;
        width: 50%;
        padding: 0 20px 0 20px;
        display: flex;
        flex-direction: column;
        #data2 {
          height: 90%;
          display: flex;
        }
      }
      .main-right {
        box-sizing: border-box;
        width: 25%;
        .right-item {
          box-sizing: border-box;
          height: 45%;
          padding-left: 1rem;
          .main-right-item {
            display: flex;
            box-sizing: border-box;
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
}
</style>