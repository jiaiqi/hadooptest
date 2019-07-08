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
                <div id="data03" class="pie-item"></div>
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
          <div class="xpanel-wrapper xpanel-wrapper-25">
            <div class="xpanel xpanel-r-t">
              <div class="title">2018年犯罪人员年龄性别比例分析</div>
              <div class="pie-box">
                <div id="data31" class="pie-item"></div>
                <div id="data32" class="pie-item"></div>
              </div>
            </div>
          </div>
          <div class="xpanel-wrapper xpanel-wrapper-30">
            <div class="xpanel xpanel-r-m">
              <div class="title">案件处理相关数据统计</div>
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
    this.setData5();
  },
  methods: {
    setData0() {
      let self = this;
      let getData01 = function() {
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
        };
        myChart01.setOption(option01);
      };
      let getData02 = function() {
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
        };
        myChart02.setOption(option02);
      };
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
        };
        myChart03.setOption(option03);
      };
      getData01();
      getData02();
      getData03();
    },
    setData1() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data1"));
      let plantCap = [
        {
          name: "督促封停私自打井",
          value: "5眼"
        },
        {
          name: "督促诊所依规处理医疗污水",
          value: "15家"
        },
        {
          name: "督促整改网络餐饮平台",
          value: "10家"
        },
        {
          name: "督促关停和整治违法养殖场",
          value: "15个"
        },
        {
          name: "督促补种树木",
          value: "10395株"
        },
        {
          name: "收缴林地恢复费、林地补偿费",
          value: "50余万元"
        },
        {
          name: "收回被破坏的公益林地",
          value: "670余亩"
        }
      ];
      let datalist = [
        {
          offset: [360, 350],
          symbolSize: 250,
          opacity: 0.95,
          fontSize: "30"
        },
        {
          offset: [455, 142],
          symbolSize: 280,
          opacity: 0.88,
          fontSize: "30"
        },
        {
          offset: [265, 343],
          symbolSize: 260,
          opacity: 0.84,
          fontSize: "30"
        },
        {
          offset: [156, 157],
          symbolSize: 260,
          opacity: 0.8,
          fontSize: "26"
        },
        {
          offset: [300, 557],
          symbolSize: 230,
          opacity: 0.75,
          fontSize: "28"
        },
        {
          offset: [284, 150],
          symbolSize: 280,
          opacity: 0.7,
          fontSize: "23"
        },
        {
          offset: [166, 450.5],
          symbolSize: 250,
          opacity: 0.68,
          fontSize: "28"
        }
      ];
      let datas = [];
      for (var i = 0; i < plantCap.length; i++) {
        var item = plantCap[i];
        var itemToStyle = datalist[i];
        datas.push({
          name: item.name + "\n" + item.value,
          value: itemToStyle.offset,
          symbolSize: itemToStyle.symbolSize,
          label: {
            normal: {
              textStyle: {
                fontSize: itemToStyle.fontSize
              }
            }
          },
          itemStyle: {
            normal: {
              opacity: itemToStyle.opacity
            }
          }
        });
      }
      let option = {
        tooltip: {
          trigger: "item",
          backgroundColor: "#fff",
          textStyle: {
            color: "#999"
          },
          formatter: item => {
            if (item.data[2]) {
              return `${item.data[2]}<br/>  坐标: x ${item.data[0]}  y ${
                item.data[1]
              }`;
            }
          }
        },
        xAxis: [
          {
            gridIndex: 0,
            type: "value",
            show: false,
            min: 0,
            max: 600,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        yAxis: [
          {
            gridIndex: 0,
            min: 0,
            show: false,
            max: 600,
            nameLocation: "middle",
            nameGap: 30
          }
        ],
        series: [
          {
            type: "scatter",
            symbol: "circle",
            symbolSize: 520,
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
              },
              emphasis: {
                color: "#eea631",
                opacity: 1
              }
            },
            data: datas
          }
        ]
      };
      myChart.setOption(option);
    },
    setData2() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data2"));
      let option = {
        legend: {},
        tooltip: {
          trigger: "axis",
          showContent: false
        },
        textStyle: {
          fontSize: 50,
          color: "#fff"
        },
        dataset: {
          source: [
            ["product", "2012", "2013", "2014", "2015", "2016", "2017"],
            ["危害公共安全案（人次）", 175, 30.4, 65.1, 53.3, 83.8, 98.7],
            ["妨碍社会管理秩序案（人次）", 117, 92.1, 85.7, 83.1, 73.4, 55.1],
            ["侵犯财产案（人次）", 83, 67.2, 79.5, 86.4, 65.2, 82.5],
            ["侵犯公民人身权利案（人次）", 30, 67.1, 69.2, 72.4, 53.9, 39.1]
          ]
        },
        xAxis: {
          type: "category"
        },
        yAxis: { gridIndex: 0 },
        grid: { top: "55%" },
        series: [
          {
            type: "line",
            smooth: true,
            seriesLayoutBy: "row",
            itemStyle: { color: "#fff", fontSize: 30 }
          },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          { type: "line", smooth: true, seriesLayoutBy: "row" },
          {
            type: "pie",
            id: "pie",
            radius: "30%",
            center: ["50%", "25%"],
            label: {
              formatter: "{b}: {@2012} ({d}%)"
            },
            encode: {
              itemName: "product",
              value: "2012",
              tooltip: "2012"
            }
          }
        ]
      };
      myChart.on("updateAxisPointer", function(event) {
        var xAxisInfo = event.axesInfo[0];
        if (xAxisInfo) {
          var dimension = xAxisInfo.value + 1;
          myChart.setOption({
            series: {
              id: "pie",
              label: {
                formatter: "{b}: {@[" + dimension + "]} ({d}%)"
              },
              encode: {
                value: dimension,
                tooltip: dimension
              }
            }
          });
        }
      });
      myChart.setOption(option);
    },
    setData3() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data31"));
      let myChart2 = this.$echarts.init(document.getElementById("data32"));
      let option = {
        title: {
          //text: '直销有效客户分布'
        },
        backgroundColor: "#00265f",
        tooltip: {
          //trigger: 'item',
          //formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          bottom: "100",
          left: "100",
          orient: "vertical",
          // x: "center",
          data: [
            "18-24岁",
            "25-29岁",
            "30-39岁",
            "40-49岁",
            "50-59岁",
            "60岁+",
            "男性",
            "女性"
          ],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: ["20%", "35%"],

            label: {
              normal: {
                position: "inner",
                formatter: "{b}\n {d}%",
                fontSize: 14
              }
            },
            tooltip: {
              trigger: "item"
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 222,
                name: "男性",
                itemStyle: {
                  normal: {
                    color: "#5045f6"
                  }
                }
              },
              {
                value: 328,
                name: "女性",
                itemStyle: {
                  normal: {
                    color: "#ff4343"
                  }
                }
              }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            data: [
              {
                value: 9,
                name: "18-24岁",
                itemStyle: {
                  normal: {
                    color: "#ffed25"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 73,
                name: "25-29岁",
                itemStyle: {
                  normal: {
                    color: "#45dbf7"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 290,
                name: "30-39岁",
                itemStyle: {
                  normal: {
                    color: "#0089fa"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 134,
                name: "40-49岁",
                itemStyle: {
                  normal: {
                    color: "#ba58ff"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 39,
                name: "50-59岁",
                itemStyle: {
                  normal: {
                    color: "#fe9336"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 5,
                name: "60岁+",
                itemStyle: {
                  normal: {
                    color: "#3eff74"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              }
            ]
          }
        ]
      };
      let option2 = {
        title: {
          //text: '直销有效客户分布'
        },
        backgroundColor: "#00265f",
        tooltip: {
          //trigger: 'item',
          //formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          bottom: "100",
          right: "100",
          orient: "vertical",
          // x: "center",
          data: [
            "18-24岁",
            "25-29岁",
            "30-39岁",
            "40-49岁",
            "50-59岁",
            "60岁+",
            "男性",
            "女性"
          ],
          textStyle: {
            color: "#fff"
          }
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            selectedMode: "single",
            radius: ["20%", "35%"],

            label: {
              normal: {
                position: "inner",
                formatter: "{b}\n {d}%",
                fontSize: 14
              }
            },
            tooltip: {
              trigger: "item"
            },
            labelLine: {
              normal: {
                show: false
              }
            },
            data: [
              {
                value: 222,
                name: "男性",
                itemStyle: {
                  normal: {
                    color: "#5045f6"
                  }
                }
              },
              {
                value: 328,
                name: "女性",
                itemStyle: {
                  normal: {
                    color: "#ff4343"
                  }
                }
              }
            ]
          },
          {
            name: "访问来源",
            type: "pie",
            radius: ["40%", "55%"],
            data: [
              {
                value: 9,
                name: "18-24岁",
                itemStyle: {
                  normal: {
                    color: "#ffed25"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 73,
                name: "25-29岁",
                itemStyle: {
                  normal: {
                    color: "#45dbf7"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 290,
                name: "30-39岁",
                itemStyle: {
                  normal: {
                    color: "#0089fa"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 134,
                name: "40-49岁",
                itemStyle: {
                  normal: {
                    color: "#ba58ff"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 39,
                name: "50-59岁",
                itemStyle: {
                  normal: {
                    color: "#fe9336"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              },
              {
                value: 5,
                name: "60岁+",
                itemStyle: {
                  normal: {
                    color: "#3eff74"
                  }
                },
                label: {
                  normal: {
                    fontSize: 14,
                    formatter: "{d}%"
                  }
                }
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
      myChart2.setOption(option2);
    },
    setData4() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data4"));
      let option = {
        color: ["#e5cd00", "#0ff"],
        // backgroundColor: "#04243E",
        legend: {
          orient: "vertical",
          animation: true,
          // right: 100,
          data: [
            {
              name: "批捕案件",
              textStyle: {
                color: "#fff"
              }
            },
            {
              name: "起诉案件",
              textStyle: {
                color: "#fff"
              }
            }
          ],
          top: "10%",
          right: 50,
          textStyle: {
            color: "#253A77"
          }
        },
        xAxis: {
          type: "category",
          data: [
            "危害公共安全案",
            "妨碍社会管理秩序案",
            "侵犯财产案",
            "侵犯公民人身权利案",
            "破坏社会主义市场经济秩序案",
            "其他案件"
          ],
          axisLabel: {
            color: "white"
          },
          axisLine: {
            lineStyle: {
              color: "rgba(200,200,200,0.2)"
            }
          }
        },
        yAxis: {
          type: "value",
          axisLine: {
            show: false,
            lineStyle: {
              color: "rgba(200,200,200,0.2)"
            }
          },
          axisLabel: {
            color: "#4397d2"
          },
          splitLine: {
            lineStyle: {
              color: "rgba(200,200,200,0.2)"
            }
          }
        },
        grid: {
          top: "12%",
          bottom: "15%"
        },
        series: [
          {
            name: "批捕案件",
            data: [11, 124, 46, 28, 24, 13],
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: [10, 10, 0, 0], //圆角
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#ff0"
                  },
                  {
                    offset: 1,
                    color: "#f00"
                  }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                color: "white"
              }
            }
          },
          {
            name: "起诉案件",
            data: [175, 117, 83, 30, 25, 20],
            type: "bar",
            barWidth: 20,
            itemStyle: {
              normal: {
                barBorderRadius: [10, 10, 0, 0], //圆角
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#0ff"
                  },
                  {
                    offset: 1,
                    color: "#00f"
                  }
                ])
              }
            },
            label: {
              normal: {
                show: true,
                position: "top",
                color: "white"
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    setData5() {
      let self = this;
      let myChart = this.$echarts.init(document.getElementById("data5"));
      var data = [78, 60, 60, 70, 69,66,50,45];
      var titlename = [
        "侦查监督工作",
        "公诉工作",
        "反贪污贿赂工作",
        "反渎职侵权",
        "监督检查工作",
        '行政检查工作',
        '控告申诉检查工作',
        '职务犯罪预防工作'
      ];
      var valdata = [160, 200, 200, 120, 75,75,120,50];
      var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6","#1089E7","#56D0E3", "#8B78F6"];
      let option = {
        // backgroundColor: "#0e2147",
        xAxis: {
          show: false
        },
        yAxis: [
          {
            show: true,
            data: titlename,
            inverse: true,
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              textStyle: {
                color: function(value, index) {
                  var num = myColor.length;
                  return myColor[index % num];
                }
              },
              formatter: function(value, index) {
                return ["{title|" + value + "} "].join("\n");
              },
              rich: {}
            }
          },
          {
            show: true,
            inverse: true,
            data: valdata,
            axisLabel: {
              textStyle: {
                color: function(value, index) {
                  var num = myColor.length;
                  return myColor[index % num];
                }
              }
            },
            axisLine: {
              show: false
            },
            splitLine: {
              show: false
            },
            axisTick: {
              show: false
            }
          }
        ],
        series: [
          {
            name: "条",
            type: "bar",
            yAxisIndex: 0,
            data: data,
            barWidth: 30,
            itemStyle: {
              normal: {
                barBorderRadius: 30,
                color: function(params) {
                  var num = myColor.length;
                  return myColor[params.dataIndex % num];
                }
              }
            },
            label: {
              normal: {
                show: true,
                position: "inside",
                formatter: "{c}"
              }
            }
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