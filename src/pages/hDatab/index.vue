<template>
	<div class="data-page">
		<div class="title">
            克拉玛依市智慧办案
        </div>
		<div class="data-content">
			<!-- <div class="data-time">
				 温馨提示: ...
			</div> -->
			<div class="data-main">
                <div class="main-left">
                    <div class="sub-title">
                            2018办案统计
                    </div>
                    
                    <!-- <div  class="data-view"  id="myChartTop" :style="{width: '98%', height: '900px'}"></div> -->
                    <div id="myChartCBottom" :style="{width: '98%', height: '800px'}"></div>
                    <div class="sub-title">
                        公益诉讼情况
                    </div>
                    <div class="data-view" id="myChartLeftTop" :style="{width: '99%', height: '800px'}"></div>
                    <!-- <div id="myChartLeftBottom" :style="{width: '99%', height: '1000px'}"></div> -->
                </div>
                <div class="main-center">
                    <div class="main-content-body">
                        <div class="body-left">
                            <div class="sub-title">
                                检查办案统计
                            </div>
                            <div id="myMap" :style="{width: '100%', height: '1800px'}"></div>
                        </div>
                        <div class="body-center" :style="{width: '65%'}">
                            <div  :style="{width: '99%', height: '120px'}">
                        
                            </div>
                            <div class="text-list" :style="{width: '99%', height: '800px'}">
                                <div class="text-title">全市2018年共办案: <span>680起</span></div>
                                <div>
                                    
                                    <div class="text-view">
                                        <div>117起<span>逮捕案件</span></div>
                                        <div>168起<span>公诉案件</span></div>
                                        <div>197起<span>民事案件</span></div>
                                        <div>68起<span>行政案件</span></div>
                                    </div>
                                    <div class="text-view">
                                        <div>79起<span>公益案件</span></div>
                                        <div>36起<span>执检案件</span></div>
                                        <div>56起<span>其他案件</span></div>
                                    </div>
                                </div>
                            </div>
                            <!-- <div  id="myChartCBottom" :style="{width: '98%', height: '800px'}"></div> -->
                             <!-- <div class="sub-title">
                                案件处理
                            </div> -->
                            <div id="myChartLeftBottomb" :style="{width: '99%', height: '900px'}"></div>
                        </div>
                    </div>
                </div>
                <div class="main-right">
                    <div class="sub-title">
                                办案工作统计
                            </div>
                    <div class="data-view" id="myChartRight" :style="{width: '100%', height: '900px'}"></div>
                    <div class="sub-title">
                                依法打击刑事
                            </div>
                    <div class="data-view" id="myChartRightBottom" :style="{width: '100%', height: '800px'}"></div>
                    <!-- <div id="myChartBottom" :style="{width: '98%', height: '1900px'}"></div> -->
                </div>
            </div>
		</div>
		<!-- <nouser :isShow="isShow"  v-if="isShow"></nouser> -->
		<!-- <loading v-if="pageShow"></loading> -->
	</div>
</template>

<script>
import icons from '../../../static/image/img'
import maps from '../../assets/data/kelamayi.json'
let geoCoordMap = {
    '克拉玛依区': [84.868918,45.600477],
    '白碱滩区': [85.129882,45.689021],
    '乌尔禾区': [85.697767,46.08776],
    '独山子区': [84.882267,44.327207]
}
export default {
  components:{
  },
  data(){
  	return{
        icons: icons,
        mySelected: 0,
        mapLocation: [
            {
                name: '独山子区',
                value: 85,
                selected: false,
                infoData:[{
                    'name': '逮捕案件',
                    'value': 1
                }, {
                    'name': '公诉案件',
                    'value': 26
                }, {
                    'name': '民事案件',
                    'value': 1
                }, {
                    'name': '行政案件',
                    'value': 32
                }, {
                    'name': '公益案件',
                    'value': 5
                }, {
                    'name': '执检案件',
                    'value': 9
                }, {
                    'name': '其他案件',
                    'value': 11
                }]
            },
            {
                name: '克拉玛依区',
                value: 70,
                infoData:[{
                    'name': '逮捕案件',
                    'value': 1
                }, {
                    'name': '公诉案件',
                    'value': 26
                }, {
                    'name': '民事案件',
                    'value': 1
                }, {
                    'name': '行政案件',
                    'value': 22
                }, {
                    'name': '公益案件',
                    'value': 5
                }, {
                    'name': '执检案件',
                    'value': 8
                }, {
                    'name': '其他案件',
                    'value': 7
                }]
            }, {
                name: '白碱滩区',
                value: 75,
                selected: false,
                infoData:[{
                    'name': '逮捕案件',
                    'value': 9
                }, {
                    'name': '公诉案件',
                    'value': 16
                }, {
                    'name': '民事案件',
                    'value': 1
                }, {
                    'name': '行政案件',
                    'value': 32
                }, {
                    'name': '公益案件',
                    'value': 2
                }, {
                    'name': '执检案件',
                    'value': 8
                }, {
                    'name': '其他案件',
                    'value': 7
                }]
            }, {
                name: '乌尔禾区',
                value: 120,
                selected: false,
                infoData:[{
                    'name': '逮捕案件',
                    'value': 20
                }, {
                    'name': '公诉案件',
                    'value': 21
                }, {
                    'name': '民事案件',
                    'value': 11
                }, {
                    'name': '行政案件',
                    'value': 32
                }, {
                    'name': '公益案件',
                    'value': 3
                }, {
                    'name': '执检案件',
                    'value': 17
                }, {
                    'name': '其他案件',
                    'value': 16
                }]
        }]
  	}
  },
  created(){
    //  this.getIcon()
  },
  mounted(){
      
      this.myChartLeftTop()
      this.myChartLeftBottomb(this.mapLocation[this.mySelected])
      this.getMyMap(this.mySelected)
    //   this.myChartTop()
      this.myChartCBottom()
      this.myChartRight()
      this.myChartRightBottom()
      this.myChartLeftBottom()

  },
  methods:{
      myChartRightBottom(){
          let giftImageUrl = icons.dataIcon
        let chartName= ['审查逮捕案', '审查起诉案', '不批准逮捕'];
        let chartData= ['537','698','321']
        let data=[]
        let legendName=[]
            for (let i=0;i<chartData.length;i++){
                let c={
                    value:chartData[i],
                    name:chartName[i]+chartData[i]
                }
                data[i]=c;
                legendName[i]=chartName[i]+chartData[i];
            }
          let myChartRightBottom = this.$echarts.init(document.getElementById('myChartRightBottom'))
            myChartRightBottom.setOption({
                // backgroundColor: '#fff',
                tooltip: {
                    trigger: 'item',
                    formatter: "{b} : {d}% <br/> {c}"
                },
                graphic: {
                    elements: [{
                        type: 'image',
                        style: {
                            image: giftImageUrl,
                            width: 150,
                            height: 150,
                            color:'#fff'
                        },
                        left: '25%',
                        top: 'center'
                    }]
                },
                legend: {
                    orient: 'vertical',
                    x: '50%',
                    y:'center',
                    itemWidth: 120,
                    itemHeight: 60,
                    align: 'left',
                    textStyle: {
                        fontSize:48,
                        color: '#fff'
                    },
                    data: legendName
                },
                series: [{
                    type: 'pie',
                    radius: ['38%', '65%'],
                    center: ['30%', '50%'],
                    color: ['#0E7CE2', '#FF8352', '#E271DE', '#F8456B', '#00FFFF', '#4AEAB0'],
                    data: data,
                    labelLine: {
                        normal: {
                            show: false,
                            length: 20,
                            length2: 20,
                            lineStyle: {
                                color: '#12EABE',
                                width: 2
                            }
                        }
                    },
                    label: {
                        normal: {
                            show:false,
                            formatter: '{c|{c}}\n{hr|}\n{d|{d}%}',
                            rich: {
                                b: {
                                    fontSize: 20,
                                    color: '#12EABE',
                                    align: 'left',
                                    padding: 4
                                },
                                hr: {
                                    borderColor: '#12EABE',
                                    width: '100%',
                                    borderWidth: 2,
                                    height: 0
                                },
                                d: {
                                    fontSize: 20,
                                    color: '#fff',
                                    align: 'left',
                                    padding: 4
                                },
                                c: {
                                    fontSize: 20,
                                    color: '#fff',
                                    align: 'left',
                                    padding: 4
                                }
                            }
                        }
                    }
                }]
            })
        },
      myChartLeftBottomb(e){
          let datas = e.infoData
            let total_datas = 0;
            for (let i = 0; i < datas.length; i++) {
                total_datas += datas[i].value
            }
          let myChartLeftBottomb = this.$echarts.init(document.getElementById('myChartLeftBottomb'))
          myChartLeftBottomb.setOption({
            color: ['#fb4cdc', '#a64cfb', '#4c86fb', '#4ce4fb', '#4cfbc3', '#a6fb4c', '#fbcc4c'],
            // backgroundColor: '#012A5C',
            title: {
                text: e.name,
                subtext: '总数' + total_datas,
                textStyle: {
                    color: '#f2f2f2',
                    fontSize: 55,
                    align: 'center'
                },
                subtextStyle: {
                    fontSize: 50,
                    color: ['#ff9d19']
                },
                x: 'center',
                y: 'center',
            },
            grid: {
                bottom: 150,
                left: 100,
                right: '10%'
            },
            legend: {
                bottom: "5%",
                textStyle: {
                    color: '#f2f2f2',
                    fontSize: 60,

                },
                // itemWidth: 120,
                itemHeight: 60,
                icon: 'roundRect',
                data: datas,
            },
            tooltip: {
                formatter: "{a}：<br/>{b}: {c}人",
                textStyle:{
                    fontSize:50,
                    lineHeight:80
                }
            },
            series: [
                // 主要展示层的
                {
                    radius: ['30%', '55%'],
                    center: ['50%', '50%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: true,
                            formatter: "{c}次",
                            textStyle: {
                                fontSize: 60,

                            },
                            position: 'outside'
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    labelLine: {
                        normal: {
                            show: true,
                            length: 30,
                            length2: 55
                        },
                        emphasis: {
                            show: true
                        }
                    },
                    name: "信息统计",
                    data: datas,

                },
                // 边框的设置
                {
                    radius: ['30%', '34%'],
                    center: ['50%', '50%'],
                    type: 'pie',
                    label: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    labelLine: {
                        normal: {
                            show: false
                        },
                        emphasis: {
                            show: false
                        }
                    },
                    animation: false,
                    tooltip: {
                        show: false
                    },
                    data: [{
                        value: 1,
                        itemStyle: {
                            color: "rgba(250,250,250,0.3)",
                        },
                    }],
                }, {
                    name: '外边框',
                    type: 'pie',
                    clockWise: false, //顺时加载
                    hoverAnimation: false, //鼠标移入变大
                    center: ['50%', '50%'],
                    radius: ['59%', '60%'],
                    label: {
                        normal: {
                            show: false
                        }
                    },
                    data: [{
                        value: 9,
                        name: '',
                        itemStyle: {
                            normal: {
                                borderWidth: 2,
                                borderColor: '#0b5263'
                            }
                        }
                    }]
                },
            ]
        })
    },
      myChartCBottom(){
          let xData = ['危害公共安全案（人次）','妨碍社会管理秩序案（人次）','侵犯财产案','侵犯公民人身权利案','破坏社会主义市场经济秩序案','其他案件'];
let y1Data = [11,124,46,28,24,13];
let y2Data = [175,117,83,30,25,20]; 
          let myChartCBottom = this.$echarts.init(document.getElementById('myChartCBottom'))
          myChartCBottom.setOption({
            grid: {
                left: '7%',
                right: '5%',
                top: '10%',
                bottom: '30%',
            },
            title: {
                show: false
            },
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                },
                textStyle:{
                    fontSize:50,
                    lineHeight:80
                }
            },
            legend: {
                data:['监控数量', '监督情况'],
                right: '3%',
                top: '10%',
                itemWidth: 11,
                itemHeight: 11,
                textStyle: {
                    color: '#ffffff',
                    fontSize: 13
                },
                show:true
            },
            toolbox: {
                show: false,
            },
            xAxis: [
                {
                    type: 'category',
                    boundaryGap: true,
                    show: true,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 40,
                        rotate: -20,
                        color: '#d0d0d0',
                        margin: 8,
                        interval:0 ,
                        formatter:function(val){
                            // return val.split("").join("\n");
                            return val;
                        }
                    },
                    axisLine: {
                        lineStyle: {
                            type: 'solid',
                            color: '#5e8eff',//左边线的颜色
                            width:'4'//坐标线的宽度
                        }
                    },
                    data: xData
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    scale: true,
                    name: '',
                    axisLine: {
                        show: false
                    },
                    splitNumber : 4,
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: '#4e608b'
                        }
                    },
                    axisLabel: {
                        fontSize: 40,
                        color: '#d0d0d0',
                        margin: 12,
                    },
                    max: 200,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },
                {
                    type: 'value',
                    scale: true,
                    axisLine: {
                        show: false
                    },
                    splitNumber : 1,
                    axisTick: {
                        show: false
                    },
                    axisLabel: {
                        fontSize: 36,
                        color: '#d0d0d0',
                        margin: 12,
                    },
                    splitLine: {
                        lineStyle: {
                            // 使用深浅的间隔色
                            color: '#4e608b'
                        }
                    },
                    name: '',
                    max: 200,
                    min: 0,
                    boundaryGap: [0.2, 0.2]
                },

            ],
            series: [
                {
                    name:'批捕案件',
                    color: '#1594ff',
                    type:'bar',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#1dacfe',
                                fontSize:60
                            }
                        }
                    },
                    itemStyle: {
                        normal: {
                            color: this.$echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                                offset: 0,
                                color: "#4889fb" // 0% 处的颜色
                            }, {
                                offset: 1,
                                color: "#15b3ff" // 100% 处的颜色
                            }], false)
                        }
                    },
                    barWidth: '40%',
                    yAxisIndex: 0,
                    data: y1Data
                },
                {
                    name:'起诉案件',
                    yAxisIndex: 1,
                    color: '#ffd300',
                    label: {
                        normal: {
                            show: true,
                            position: 'top',
                            textStyle: {
                                color: '#ffd300',
                                fontSize:46
                            }
                        }
                    },
                    lineStyle: {
                        color: '#ffd300'
                    },
                    type:'line',
                    data: y2Data
                }
            ]
        })
      },
      myChartRight(){
        let value = 1; // >0
        let myChartRight = this.$echarts.init(document.getElementById('myChartRight'))
          myChartRight.setOption({
            // backgroundColor: "#2c343c",
            grid: {
                left: "5%",
                top: "5%",
                bottom: "5%",
                right: "10%",
                containLabel: true
            },
            tooltip: {
                trigger: "item",
            },
            xAxis: {
                splitLine: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: false
                },
                axisTick: {
                    show: false
                }
            },
            yAxis: [{
                    type: "category",
                    inverse: false,
                    data: ["受案审查", "送案管理", "流程监控", "涉案财物管理", "案件信息公开" ,"律师接待" ,"案件信息查询"],
                    axisLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    splitLine: {
                        show: false,
                        lineStyle: {
                            type: "dashed",
                            color: "#3e86dd"
                        }
                    },
                    axisLabel: {
                        margin: 35,
                        rotate: 30,
                        textStyle: {
                            color: "#fff",
                            fontSize: 40,
                        }

                    }
                }

            ],
            series: [
                {
                    tooltip: {
                        show: false
                    },
                    z: 4,
                    color:'#0c6645',
                    type: "pictorialBar",
                    symbolSize: ['30', '60'],
                    symbolRepeat: "fixed",
                    data: [{
                            value: value,
                            symbol: icons.listImg.img1.b,
                        },
                        {
                            value: value,
                            symbol: icons.listImg.img2.b,
                        },
                        {
                            value: value,
                            symbol: icons.listImg.img3.b,
                        },
                        {
                            value: value,
                            symbol: icons.listImg.img4.b,
                        },
                        {
                            value: value,
                            symbol: icons.listImg.img5.b,
                        },
                        {
                            value: value,
                            symbol: icons.listImg.img6.b,
                        },
                        {
                            value: value,
                            symbol: icons.listImg.img6.b,
                        }
                    ]
                },
                {
                    z: 6,
                    type: "pictorialBar",
                    symbolSize: ['30', '60'],
                    animation: true,
                    color:'#37e5a5',
                    symbolRepeat: "fixed",
                    symbolClip: true,
                    symbolPosition: "start",
                    symbolOffset: [0, 0],
                    data: [{
                            value: 91,
                            symbol: icons.listImg.img1.a,
                        },
                        {
                            value: 85,
                            symbol: icons.listImg.img2.a,
                        },
                        {
                            value: 105,
                            symbol: icons.listImg.img3.a,
                        },
                        {
                            value: 130,
                            symbol: icons.listImg.img4.a,
                        },
                        {
                            value: 45,
                            symbol: icons.listImg.img5.a,
                        },
                        {
                            value: 128,
                            symbol: icons.listImg.img6.a
                        },
                        {
                            value: 23,
                            symbol: icons.listImg.img6.a
                        }
                    ],
                    label: {
                        normal: {
                            show: true,
                            textStyle: {
                                color: '#18fcff',
                                fontSize: 60,

                            },
                            position: "right",
                            offset: [-18, 0]

                        }
                    },
                },
                {
                    type: "bar"
                },

            ]
        })
      },   
      myChartLeftBottom(){
        let symbols = icons.symbols
        let markLineSetting = {
            normal: {
                show: true,
                position: 'bottom',
                fontSize: 36,
                    rotate: -20,
                formatter:  function(param) {
                    // return val.split("").join("\n");
                        if(param.dataIndex=='0'){
                            console.log(param)
                            return param.name + ':' + "\n" + param.data.value + '眼';
                        }
                        if(param.dataIndex=='1'){
                            return param.name + ':' + "\n" + param.data.value + '家';
                        }
                        if(param.dataIndex=='2'){
                            return param.name + ':' + "\n" + param.data.value + '家';
                        }
                        if(param.dataIndex=='3'){
                           return param.name + ':' + "\n" + param.data.value + '个';
                        }
                        if(param.dataIndex=='4'){
                           return param.name + ':' + "\n" + param.data.value + '株';
                        }
                        if(param.dataIndex=='5'){
                           return param.name + ':' + "\n" + param.data.value + '余万元';
                        }
                        if(param.dataIndex=='6'){
                            return param.name + ':' + "\n" + param.data.value + '余亩';
                        }
                    },
                            // '{b}：{c}',
                textStyle: {
                    color: '#fff',
                    fontSize: 48,
                    textAlign: 'center'
                }
            }
        };
        let myChartLeftBottom = this.$echarts.init(document.getElementById('myChartLeftBottom'))
          myChartLeftBottom.setOption({
            // backgroundColor: '#fff',
            tooltip: {},
            grid: {
                left: "5%",
                top: "5%",
                bottom: "15%",
                right: "5%",
                containLabel: true
            },
            xAxis: {
                data: ['私自打井', '督促诊所依规处理医疗污水', '督促整改网络餐饮平台', '督促关停和整治违法养殖场', '督促补种树木', '收缴林地恢复费、林地补偿费', '收回被破坏的公益林地'],
                splitLine: {
                    show: false
                },
                offset: 0,
                show: false,
                
            },
            yAxis: [{
                // data: ['整体分布'],
                show: false,
                position: 'left',
            
            }, ],
            series: [{
                    type: 'bar',
                    name: '',
                    symbolSize: ['60', '60'],
                    symbolPosition: 'center',
                    symbolOffset: [0, '-50%'],
                    z: 10,
                    max:5,
                    data: [{
                        value: 8,
                        symbol: symbols[0],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#e529f1",
                                "fontSize":40
                            }
                        },
                    }, {
                        value: 10,
                        symbol: symbols[1],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#861cfd",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 60,
                        symbol: symbols[2],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#226bff",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 15,
                        symbol: symbols[3],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#18fcff",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 103,
                        symbol: symbols[4],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#18ffa5",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 60,
                        symbol: symbols[5],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#17da2e",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 100,
                        symbol: symbols[6],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#eee613",
                                "fontSize":40
                            }
                        }
                    }]
                },
                {
                    type: 'pictorialBar',
                    name: '',
                    symbolSize: ['60', '60'],
                    symbolPosition: 'center',
                    symbolOffset: [0, '-50%'],
                    z: 10,
                    max:5,
                    data: [{
                        value: 8,
                        symbol: symbols[0],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#e529f1",
                                "fontSize":40
                            }
                        },
                    }, {
                        value: 10,
                        symbol: symbols[1],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#861cfd",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 60,
                        symbol: symbols[2],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#226bff",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 15,
                        symbol: symbols[3],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#18fcff",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 103,
                        symbol: symbols[4],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#18ffa5",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 60,
                        symbol: symbols[5],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#17da2e",
                                "fontSize":40
                            }
                        }
                    }, {
                        value: 100,
                        symbol: symbols[6],
                        label: markLineSetting,
                        "itemStyle": {
                            "normal": {
                                "color": "#eee613",
                                "fontSize":40
                            }
                        }
                    }]
                }

            ]
        })
      },
      myChartTop(){
          let cost = [0.2, 0.201, 1,0.2,1]//本期比上期（大于1按1处理）
            let dataCost = [24,26,36,8,27]//数量
            let totalCost = [1, 1, 1, 1, 1]//比例综合
            let visits = [92, 102, 89, 6, 21]//本期占总的百分比*100
            let grade = ['不批捕', '不起诉', '退回补充侦查', '追诉犯罪嫌疑人', '诉遗漏犯罪事实']
            let data = {
                title: "**省",
                grade: grade,
                cost: cost,
                totalCost: totalCost,
                visits: visits,
                dataCost:dataCost
            };
          let myChartTop = this.$echarts.init(document.getElementById('myChartTop'))
          myChartTop.setOption({
            // backgroundColor: '#05274C',
            title: {
                show:false
            },
            grid: {
                left: '400',
                right: '150',
                bottom:"5%"
            },
            xAxis: {
                show: false,
            },
            yAxis: {
                type: 'category',
                axisLabel: {
                    margin: 20,
                    show: true,
                    color: '#ffffff',
                    fontSize: 50
                },
                axisTick: {
                    show: false,
                },
                axisLine: {
                    show: false,
                },
                data: data.grade
            },
            series: [{
                type: 'bar',
                barGap: '-100%',
                label: {
                    normal: {
                        show: false,
                        position: 'right',
                        color: '#fff',
                        fontSize: 40,
                        formatter: 
                        function(param) {
                            return '同比：'+data.visits[param.dataIndex] +'%';
                        },
                    }
                },
                barWidth: '35%',
                itemStyle: {
                    normal: {
                        borderColor: '#3368ff',
                        borderWidth: 2,
                        barBorderRadius: 15,
                        // color: 'rgba(102, 102, 102,0)'
                        color: 'rgba(102, 102, 102,0)'
                    },
                },
                z: 1,
                data: data.totalCost,
                // data: da
            }, {
                type: 'bar',
                barGap: '-98%',
                barWidth: '33%',
                itemStyle: {
                    normal: {
                        barBorderRadius: 16,
                        color: {
                            type: 'linear',
                            x: 0,
                            x1: 1,
                            colorStops: [{
                                offset: 0,
                                color: '#08a6f0'
                            }, {
                                offset: 1,
                                color: '#08f0c1'
                            }]
                        }
                    },
                },
                max: 200,
                label: {
                    normal: {
                        show: true,
                        position: 'right',
                        color: '#fff',
                        fontSize: 35,
                        formatter: function(param) {
                            if(param.dataIndex=='0'){
                                return data.dataCost[param.dataIndex] + '人';
                            }
                            if(param.dataIndex=='1'){
                                return data.dataCost[param.dataIndex] + '人'; 
                            }
                            if(param.dataIndex=='2'){
                                return data.dataCost[param.dataIndex] + '件';  
                            }
                            if(param.dataIndex=='3'){
                                return data.dataCost[param.dataIndex] + '人';  
                            }
                            if(param.dataIndex=='4'){
                                return data.dataCost[param.dataIndex] + '起';  
                            }
                            
                        },
                    }
                },
                labelLine: {
                    show: true,
                },
                z: 2,
                data: data.cost,
            }]
        })
      },
      getMyMap(n){
        //   let myJson ='../../../static/data/kelamayi.json'+
          let self = this
          console.log('n:' + n)
          for(let i = 0;i<self.mapLocation.length;i++){
                if (n === i){
                    self.mapLocation[i].selected = true
                }else{
                    self.mapLocation[i].selected = false
                }
            }
        let getMyMap = this.$echarts.init(document.getElementById('myMap'))
        this.$echarts.registerMap('kelamayi', maps)
        getMyMap.setOption({
            position: 'kelamayi',
            tooltip: {
                position:'right',
                borderColor: '#F4E925',
                enterable: true,
                textStyle:{
                    fontSize:50,
                    lineHeight:80
                }
            },
            grid:{
                left:'20%',
                right:0
            },
            zoom: 1.2,
            visualMap: { //颜色的设置  dataRange
                show: false,
                x: 'left',
                y: 'center',
                seriesIndex: [1],
                min: 70,
                max: 90,
                text: ['高', '低'], // 文本，默认为数值文本
                textStyle: {
                    color: '#fff'
                },
                inRange: {
                    // color: ['#5cd2c3','#419bd3','#7a95d2','#5dcbdc','#838dcd','#5de9b1','#5dc6df','#5db8ea','#2bbc90','#5dc4e3']

                }
            },
            geo: {
                map: 'kelamayi',
                zoom: 1.2,
                itemStyle: { //地图区域的多边形 图形样式
                    color: '#333',
                    areaColor: '#F4E925',
                    borderColor: '#fff',
                    normal: { //是图形在默认状态下的样式
                        label: {
                            show: true, //是否显示标签
                            textStyle: {
                                color: '#ff0',
                                fontSize:80
                            },
                        },
                        borderWidth: 8,
                        borderColor: '#d4e8ff',
                    },

                },
            },
            series: [{
                name: 'kelamayi',
                type: 'effectScatter',
                coordinateSystem: 'geo',
                data: this.convertData(this.mapLocation),
                symbolSize: function(val) {
                    return val[2] * 0.8;
                },
                zoom: 1.2,
                tooltip:{
                    show:false
                },
                showEffectOn: 'render',
                rippleEffect: {
                    brushType: 'stroke'
                },
                hoverAnimation: false,
                label: {
                    normal: {
                        formatter: '{b}',
                        position: 'bottom',
                        color:'#fff',
                        fontSize:60,
                        show: true
                    }
                },
                itemStyle: {
                    normal: {
                        color: '#eed007',
                        shadowBlur: 5,
                        shadowColor: '#05C3F9'
                    }
                },
                zlevel: 5
            }, {
                name:'办案统计',
                type: 'map',
                mapType: 'kelamayi',
                zoom: 1.2,
                selectedMode : 'multiple',
                roam: false, //是否开启鼠标缩放和平移漫游
                itemStyle: { //地图区域的多边形 图形样式
                    // color: ['rgb(11,85,142)', 'rgb(13,106,177)'],
                    normal: { //是图形在默认状态下的样式
                        label: {
                            show: true, //是否显示标签
                            textStyle: {
                                color: 'transparent'
                            },
                        },
                        borderWidth: 8,
                        borderColor: '#a4dcff',
                        areaColor: '#47abff',
                    },
                    emphasis: { //是图形在高亮状态下的样式,比如在鼠标悬浮或者图例联动高亮时
                        label: {
                            show: true,
                            textStyle: {
                                color: 'transparent'
                            },
                        },
                        borderColor: '#ccffff',
                        areaColor: '#2727b3',
                    }
                },
                data: self.mapLocation
            }]
        })
        
            
            
            getMyMap.dispatchAction({
                type: 'showTip',
                seriesIndex:1 ,//第几条series
                dataIndex: n,//第几个tooltip
            })
            console.log("a: "+ n ,self.mapLocation.length);
        // self.mapLocation.forEach((item,index)=>{
        //     if (index === n ){
        //         getMyMap.dispatchAction({
        //             type: 'showTip',
        //             seriesIndex:1 ,//第几条series
        //             dataIndex:n,//第几个tooltip
        //         })
        //         item.selected = true
        //     }else{
        //         item.selected = false
        //     }
            
        // })
             self.myChartLeftBottomb(self.mapLocation[n])
             if(n === 0){
                //  self.getMyMap(n)
                setTimeout(()=>{
                    if(n <  self.mapLocation.length - 1){
                        this.mySelected++
                    } else {
                        this.mySelected = 0
                    }
                },2000)
             }else {
                 setTimeout(()=>{
                    if(n <  self.mapLocation.length - 1){
                        this.mySelected++
                    } else {
                        this.mySelected = 0
                    }
                },2000)
             }
      },
      convertData:function(data) {
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
      },
      myChartLeftTop(){
        // 基于准备好的dom，初始化echarts实例
        let myChartLeftTop = this.$echarts.init(document.getElementById('myChartLeftTop'))
        // 绘制图表
        myChartLeftTop.setOption({
            "title": {
                "show": false,
                "text": "公益诉讼情况统计",
                "left": "center",
                "y": "50",
                "textStyle": {
                    "color": "#fff"
                }
            },
            // "backgroundColor": "#101a3c",
            "grid": {
                "left": "0%",
                // "top": "10%",
                "right":"20%",
                "bottom": '10%',
                "containLabel":true
            },
            "tooltip": {
            "trigger": "item",
            "textStyle": {
                "fontSize": 25
            },
            "formatter": "{b0}:{c0}"
            },
            "xAxis": {
                "max": 300,
                "splitLine": {
                    "show": false
                },
                "axisLine": {
                    "show": true,
                    "lineStyle": {
                            type: 'solid',
                            color: '#5e8eff',//左边线的颜色
                            width:'4'//坐标线的宽度
                        }
                },
                "axisLabel": {
                    "textStyle": {
                        "color": "#82b0ec",
                        "fontSize":48
                    },
                    // "nameRotate":45, 
                    // "formatter": "{c}%"
                },
                "axisTick": {
                    "show": true
                },
                "rotate":'45'
            },
            "yAxis": [
                {
                    "rotate":45, 
                    "type": "category",
                    "inverse": false,
                    "data": [
                        "不批捕",
                        "处理医疗污水",
                        "整改餐饮平台",
                        "整治违法养殖场",
                        "督促补种树木",
                        "收缴林地恢复费",
                        "被破坏的公益林地"
                    ],
                    "axisLine": {
                        "show": false
                    },
                    "axisTick": {
                    "show": false
                    },
                    "axisLabel": {
                        "margin": 60,
                        "rotate": 60,
                        "textStyle": {
                            "color": "#d1e8ff",
                            "fontSize": 48
                        },
                        // "formatter": '{value}:{d}%'
                    }
                },
            
            ],
            series: [{
                "type": "pictorialBar",
                "symbol": icons.man,
                "symbolRepeat": "fixed",
                "symbolMargin": "5%",
                "symbolClip": true,
                "symbolSize": 70,
                "symbolPosition": "start",
                "symbolOffset": [-800,0],
                "symbolBoundingData": 500,
                "data": [99,242,67,81,86, 194,166],
                "z": 3,
                "label": {
                    normal: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#ffff66',
                            fontSize: 60
                        }
                    }
                }
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
  },
  watch: {
      mySelected(val, oldVal){//普通的watch监听+
        let self = this
        setTimeout(function(){
            self.getMyMap(val)
        },2000)
        console.log('b:' + val)
     },
  },
}
</script>

<style lang="scss">
.data-page{
	background: url(../../assets/img/wrapper-bg.png) no-repeat;
    background-position:center bottom;
    background-size: 100% 98%;
    padding:0 1rem;
	top: 0;
	right: 0;
	right: 0;
	bottom: 0;
	height: 2160px;
    min-width: 6100px;
    background-color: rgb(0, 47, 129);
    
    .text-list{
        .text-title{
            width: 100%;
            text-align: center;
            color: #d5edff;
            font-size:80px;
            >span{
                font-size:120px;
            }
        }
        >div{
            padding:10px 350px;
        }
        .text-view{
            height: 350px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            align-items: center;
            >div{
                height: 340px;
                width: 340px;
                padding: 10px;
                background: url(../../assets/data/hunzhang.png) no-repeat;
                background-position:center center;
                background-size: 100% 100%;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-content: center;
                text-align: center;
                font-size:70px;
                color: #e0f1ff;
                >span{
                color: #70c1ff;
                    font-size:50px;
                }
            }
        }
    }
    >.title{
        // background: url(../../assets/data/title.png) no-repeat;
        background-position:center bottom;
        background-size: 100% 90%;
        color:#ddf0ff;
        font-size: 100px;
        height: 120px;
        line-height: 100px;
        width: 100%;
        text-align: center;
    }
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
             #myMap{
                // background: url(../../assets/data/left_one2.png) no-repeat;
                border-bottom: 2px solid #1059c79c;
                background-position:left center;
                background-size: 100% 100%;
                margin-left:10px;
            }             
                .main-left,.main-center,.main-right{
                //  background-color: rgba(12, 125, 190, 0.644);
                 height: 100%;
                 .sub-title{
                    background: url(../../assets/img/title-bg.png) no-repeat;
                    border-bottom: 2px solid #1059c79c;
                    background-position:left center;
                    background-size: 40% 100%;
                     color:#ddf0ff;
                     margin-left: 10px;
                     padding-left: 1rem;
                     font-size: 64px;
                     line-height: 120px;
                     width: 100%;
                     text-align: left;
                 }
             }
             .data-view{
                 background: url(../../assets/data/line.png) no-repeat;
                background-position:left center;
                background-size: 100% 100%;
                margin: 10px;
                background-color: #1399ff15;
             }
		    .main-left{
		    	width: 35%;
		    }
		     .main-center{
                // background: url(../../assets/data/line1.png) no-repeat;
                // background-position:left center;
                // background-size: 100% 100%;
                background-color: transparent;
		    	width: 52%;
		    	padding: 0 20px 0 20px;
		    	.main-content-body{
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    .body-left,.body-right{
                        // background-color: aqua;
                        width: 34%;
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