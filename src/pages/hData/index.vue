<template>
	<div class="data-page">
		<!-- <topnav></topnav> -->
		<div class="data-content">
			<div class="data-time">
				 温馨提示: ...
			</div>
			<div class="data-main">
                <div class="main-left">
                <ve-bar :data="chartDataRight" 
                    :settings="chartSettingsRight"
                            :extend="chartSettingsRight"
                    :height="'1900px'"></ve-bar>
                </div>
                <div class="main-center">
                    <div class="title">
                        2018克拉玛依市检察办案统计
                    </div>
                    <div class="main-content-body">
                        <div class="body-left">
                             <ve-line :data="chartDataa" :extend="chartSettingsa" :height="'1900px'"></ve-line>
                        </div>
                        <div class="body-center">
                            <ve-map :data="chartData" 
                            :settings="chartSettings"  
                            :height="'1900px'" 
                            :extend="chartExtenda"></ve-map>
                        </div>
                        <div class="body-right">
                            <ve-histogram :data="chartDatab" 
                            :settings="chartSettingsb" 
                            :tooltip-visible="true"  
                            :height="'1900px'" 
                            :width="'90%'"  
                            :extend="chartSettingsb" 
                            :legend-visible="false"></ve-histogram>
                        </div>
                    </div>
                </div>
                <div class="main-right">
                    <div id="myChart" :style="{width: '100%', height: '1900px'}"></div>
                </div>
            </div>
		</div>
		<!-- <nouser :isShow="isShow"  v-if="isShow"></nouser> -->
		<!-- <loading v-if="pageShow"></loading> -->
	</div>
</template>

<script>
import icons from '../../../static/image/img'
export default {
  components:{
  },
  data(){
      this.chartSettings = {
        // positionJsonLink: 'https://unpkg.com/v-charts-custom-maps@0.2.1/hk-geo.json',
        // positionJsonLink: 'https://geo.datav.aliyun.com/areas/bound/650200.json',
        // positionJsonLink: kelamayi,
        positionJsonLink: 'http://localhost:8080/static/data/kelamayi.json',
        position: '克拉玛依区',
        beforeRegisterMap (json) {
          // edit data here such as:
          // json.features[0].properties.cp = [121.509062, 26.044332]
          return json
        },
        symbolSize: 200,
        roam:false, // 鼠标拖拽交互
        label: {
            normal: {
                formatter: '{b}:{c}',
                show: true,
                lineHeight: 80,
                fontSize: 40,
                color: '#ffffff',
                position: 'right'
            },
            emphasis: {
                show: false,
                areaColor: '#389BB7',
                borderWidth: 10
            },
        },
        zoom: 1,
        itemStyle: {
            normal: {
              color: '#F4E925',
              shadowBlur: 20,
              shadowColor: '#76c7ff',
              borderColor: '#006bfa',
              areaColor: '#0055aa',
              
            },
          }
      }
      this.chartSettingsa = {
        // yAxisType: 'value',
        tooltip:{
            textStyle:{
                fontSize:70,
                lineHeight:80
            }
        },
        yAxis: [{
            nameTextStyle: {
                color: "#ebf8ac"
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff", //X轴文字颜色
                    fontSize:20
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            }
        }],
        xAxis:{
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize:20
                }
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 80,
                fontSize: 40,
                position: 'right'
            }
        }
      }
      this.chartSettingsb = {
        // yAxisType: 'value',
        tooltip:{
            textStyle:{
                fontSize:70,
                lineHeight:80
            }
        },
        yAxis: [{
            nameTextStyle: {
                color: "#ebf8ac"
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff", //X轴文字颜色
                    fontSize:20
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            }
        }],
        xAxis:{
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize:20
                }
            }
        },
        label: {
            normal: {
                show: true,
                lineHeight: 80,
                fontSize: 40,
                position: 'right'
            }
        }
      }
      this.chartExtenda = {
        series: {
            tooltip:{
                textStyle:{
                    fontSize:70,
                    lineHeight:80
                }
            },
            nameMap: {
            }
        }
      }
      this.chartSettingsRight = {
        metrics: ['访问用户'],
        dataOrder: {
          label: '访问用户',
          order: 'desc'
        },
        "symbol": icons.man,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          13,
          42,
          67,
          81,
          86,
          94,
          166,
          220,
          249,
          262
        ],
        yAxis: [{
            nameTextStyle: {
                color: "#ebf8ac"
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#fff", //X轴文字颜色
                    fontSize:80
                }
            },
            axisLine: {
                lineStyle: {
                    color: '#FFFFFF'
                }
            }
        }],
        xAxis:{
            axisLabel: {
                show: true,
                textStyle: {
                    color: "#ffffff", //X轴文字颜色
                    fontSize:20
                }
            }
        },
      }
  	return{
        icons: icons,
        chartData: {
          columns: ['位置', ' 办案统计'],
          rows: [
            { '位置': '独山子区', ' 办案统计': 25 },
            { '位置': '克拉玛依区', ' 办案统计': 40 },
            { '位置': '白碱滩区', ' 办案统计': 123 },
            { '位置': '乌尔禾区', ' 办案统计': 12 },
            { '位置': '独山子区', ' 办案统计': 89 }
          ]
        },
        chartDataa: {
          columns: ['日期', '访问用户', '下单用户', '下单率'],
          rows: [
            { '日期': '2018-01-01', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
            { '日期': '2018-01-02', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
            { '日期': '2018-01-03', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
            { '日期': '2018-01-05', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
            { '日期': '2018-01-10', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
            { '日期': '2018-01-20', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
          ]
        },
        chartDatab: {
          columns: ['季度', '逮捕案件', '公诉案件', '民事案件', '行政案件', '公益案件', '执检案件'],
          rows: [
            { '季度': '第一季度', '逮捕案件': 120, '公诉案件': 80, '民事案件': 52 , '行政案件': 12 , '公益案件': 18 , '执检案件': 23 },
            { '季度': '第二季度', '逮捕案件': 12, '公诉案件': 56, '民事案件': 5 , '行政案件': 0 , '公益案件': 1 , '执检案件': 2 },
            { '季度': '第三季度', '逮捕案件': 56, '公诉案件': 23, '民事案件': 12 , '行政案件': 87 , '公益案件': 0 , '执检案件': 13 },
            { '季度': '第四季度', '逮捕案件': 12, '公诉案件': 46, '民事案件': 2 , '行政案件': 56 , '公益案件': 1 , '执检案件': 12 }
          ]
        },
        chartDataRight: {
          columns: ['督促封停私自打井', '督促诊所依规处理医疗污水', '督促整改网络餐饮平台', '督促关停和整治违法养殖场' ,'督促补种树木' ,'收缴林地恢复费、林地补偿费' ,'收回被破坏的公益林地'],
          rows: [
            { '督促封停私自打井': 16},
            { '督促诊所依规处理医疗污水': 166},
            { '督促整改网络餐饮平台': 23},
            { '督促关停和整治违法养殖场': 12},
            { '督促补种树木': 8},
            { '收缴林地恢复费、林地补偿费': 8},
            { '收回被破坏的公益林地': 12}
          ]
        }
  	}
  },
  created(){
    //  this.getIcon()
  },
  mounted(){
      this.drawLine()
  },
  methods:{
      drawLine(){
        // 基于准备好的dom，初始化echarts实例
        let myChart = this.$echarts.init(document.getElementById('myChart'))
        // 绘制图表
        myChart.setOption({
            "title": {
            "text": "公益诉讼情况统计",
            "left": "center",
            "y": "50",
            "textStyle": {
                "color": "#fff"
            }
            },
            "backgroundColor": "#101a3c",
            "grid": {
            "left": "20%",
            "top": "10%",
            "bottom": 10
            },
            "tooltip": {
            "trigger": "item",
            "textStyle": {
                "fontSize": 12
            },
            "formatter": "{b0}:{c0}"
            },
            "xAxis": {
            "max": 300,
            "splitLine": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            },
            "axisTick": {
                "show": false
            }
            },
            "yAxis": [
                {
                    "type": "category",
                    "inverse": false,
                    "data": [
                        "督促封停私自打井",
                        "督促诊所依规处理医疗污水",
                        "督促整改网络餐饮平台",
                        "督促关停和整治违法养殖场",
                        "督促补种树木",
                        "收缴林地恢复费、林地补偿费",
                        "收回被破坏的公益林地"
                    ],
                    "axisLine": {
                    "show": false
                    },
                    "axisTick": {
                    "show": false
                    },
                    "axisLabel": {
                    "margin": -40,
                    "textStyle": {
                        "color": "#fff",
                        "fontSize": 40
                    }
                    }
                },
            
            ],
            series: [{
                "type": "pictorialBar",
                "symbol": icons.man,
                "symbolRepeat": "fixed",
                "symbolMargin": "5%",
                "symbolClip": true,
                "symbolSize": 22.5,
                "symbolPosition": "start",
                "symbolOffset": [
                20,
                0
                ],
                "symbolBoundingData": 500,
                "data": [
                13,
                42,
                67,
                81,
                86,
                94,
                166
                ],
                "z": 10
            },]
        });
    },
    getIcon: function(){
        this.$axios.get('http://localhost:8080/static/image/img.js').then((res) => {      
            this.icons = res
            console.log(res)            
        })
    },
    afterConfig (options) {
        options.tooltip.textStyle.fontSize = 60
        options.xAxis.axisLabel.textStyle.color = '#ffffff'
        return options
    }
  }
}
</script>

<style lang="scss">
.data-page{
	background: url(../../assets/data/true.png) repeat;
	top: 0;
	right: 0;
	right: 0;
	bottom: 0;
	height: 2160px;
    min-width: 6100px;
    background-color: #2C58A6;
	.data-content {
	    padding-top: 20px;
	    padding-bottom: 20px;
	//    .data-time {
	// 	    width: 340px;
	// 	    height: 35px;
	// 	    background-color: #2C58A6;
	// 	    line-height: 35px;
	// 	    color: #fff;
	// 	    font-size: 12.8px;
	// 	    margin-bottom: 25px;
	// 	    margin-left: 20px;
	// 	    text-align: center;
	// 	}
		.data-main {
		    width: calc(100% - 40px);
		    margin-bottom: 40px;
		    margin-left: 20px;
		    height: 2000px;
            display: flex;
             flex-direction: row;
             .main-left,.main-center,.main-right{
                 background-color: rgba(12, 125, 190, 0.644);
                 height: 100%;
                 .title{
                     color:#ddf0ff;
                     font-size: 80px;
                     width: 100%;
                     text-align: center;
                 }
             }
		    .main-left{
		    	width: 24%;
		    }
		     .main-center{
                background-color: transparent;
		    	width: 52%;
		    	padding: 0 20px 0 20px;
		    	.main-content-body{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .body-left,.body-right{
                        // background-color: aqua;
                        width: 30%;
                    }
                    .body-center{
                        width: 30%;
                    }
                }
		    }
		     .main-right{
		    	width: 24%;
		    }
		}
	}		
}

</style>