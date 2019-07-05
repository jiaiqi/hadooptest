<template>
	<div class="content-cont">
		<div class="top-box">
			
				<btndnumber 
				:dheight="110"
				:title="'一卡通'" 
				:size="'1.5rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="110"
				:title="'电子病历'" 
				:size="'1.5rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="110"
				:title="'电子病历2'" 
				:size="'1.5rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="110"
				:title="'电子病历3'" 
				:size="'1.5rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="110"
				:title="'电子病历3'" 
				:size="'1.5rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				>
			    </btndnumber>
		</div>
		<div class="content-box">
			<!-- <databox :title="'数据'" :dheight="350" :icon="'account'" :boxb="false">
	     	    <div class="content-wapper">
	     	       <ve-bar :data="repoData" :extend="extend" :height="'350px'"></ve-bar>
	     	       <nodata :nodata="'仓库'" v-if="noRepoSize"></nodata>
	     	    </div>
			</databox> -->
			<databox :title="''" :dheight="220" :icon="'account'">
			    <btndnumber 
				:dheight="160"
				:title="'任务管理'" 
				:size="'2rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="160"
				:title="'事件管理'" 
				:size="'2rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="160"
				:title="'日志管理'" 
				:size="'2rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
			    </btndnumber>
					<btndnumber 
				:dheight="160"
				:title="'缓存管理'" 
				:size="'2rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
			    </btndnumber>
			</databox>

		</div>
	</div>
</template>

<script>
import btndnumber from './btndnumber'
import myevent from './myevent'
import { LINE_DATA } from '../test/data'
export default {
  components:{
  	btndnumber,
  	myevent
  },
  props: {
    numberData:Object,
    username:String
  },
  data () {
  	 this.extend = {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        },
        legend:{
        	 textStyle: {color: '#fff'},
             right: '6%'
        },
        yAxis:
        {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                   }
             }
        },
        xAxis:
        {
            axisLabel: {
                textStyle: {
                    color: '#fff'
                   }
             }
        }
    }
  	 
    return {
      chartData: LINE_DATA,
      myevent:[],
  	  noMyevent:false,
  	  repoData:{
		  columns: ['reposName', 'size', 'forks'],
		  rows: [
		  ]
		},
      noRepoSize:false
    }
  },
  methods:{
  	getData(username){
	    	let comUrl = "/api/users/"
	    	let url1 = comUrl + username + "/events"
	    	let url2 = comUrl + username + "/repos"
	    	this.$axios.all([
	    		this.$axios.get(url1),
	    		this.$axios.get(url2)
	    	]).then(this.$axios.spread((res1,res2)=>{
	    		//我最近操作
	    		let data1 = JSON.parse(JSON.stringify(res1.data))
	    		if(data1.length<1){
	    			this.noMyevent = true
	    		}else{
	    			this.myevent = data1
	    			//console.log(this.myevent)
	    		}
	    		
	    		//每个仓库的大小
	    		let data2 = JSON.parse(JSON.stringify(res2.data))
	    		if(data2.length<1){
	    			this.noRepoSize = true
	    		}else{
	    			let dataR = []
	    			for(var i=0;i<data2.length;i++){	
	    				let reposName = data2[i].name
	    				let size = data2[i].size
	        		    let forks = data2[i].forks
	        		    let objR = {
                            reposName:reposName,
                            size:size,
                            forks:forks
                        }
                        dataR.push(objR)
	    			}
	    			//console.log(dataR);
	    			this.repoData.rows = dataR
	    			//console.log(this.repoData.rows)
	    		}
	    		
	    		return
	    	}))
	    	.catch(err =>{
			    console.log(err.message);
			})
  	   }
    },
  watch:{
  	 username(username){
  	 	if(username){
  	 		 this.getData(username)
  	 	}
  	 }
  }
}
</script>

<style lang="scss">
.content-cont{
	width: 100%;
	height: 100%;
	.top-box{
		display: flex;
		width: 100%;
		height: 470px;
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		flex-direction: row;
		align-content: flex-start;
		>.btn-number-box{
				width: calc((100% - 25px)/4);
				background-color: rgb(77, 99, 128);
				margin-left: 5px;
				margin-bottom: 10px;
				-webkit-box-shadow: 0 0 5px #2C58A6;
    		box-shadow: 0 0 5px #2C58A6;
				border-radius: 5px;
			 }
			 >.btn-number-box:first-child{
				//  margin-left: 0px;
				 
			 }
   }
   .content-box{
		//  height: 100%;
		 padding-top: 30px;
		 
		 .chart{
			padding: 2rem;
			display: flex;
    	height: calc(100% - 0px);
			align-items: flex-end;
		 >.btn-number-box{
					width: 1/4 * 100%;
					background-color: rgb(60, 133, 230);
					margin-left: 2rem;
					-webkit-box-shadow: 0 0 5px #2C58A6;
					box-shadow: 0 0 5px #2C58A6;
					border-radius: 5px;
			 }
			 >.btn-number-box:first-child{
				 margin-left: 0px;
				 
			 }
		 }
   }
}	
</style>