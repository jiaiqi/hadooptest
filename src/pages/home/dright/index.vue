<template>
	<div class="right-content">
		<div class="top-box">
			<databox :title="''" :dheight="720">
				<btndnumber 
				:dheight="143"
				:title="'监控中心'" 
				:size="'4rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
				</btndnumber>
					<btndnumber 
				:dheight="143"
				:title="'开发中心'" 
				:size="'4rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
				</btndnumber>
					<btndnumber 
				:dheight="143"
				:title="'测试中心'" 
				:size="'4rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
				</btndnumber>
					<btndnumber 
				:dheight="143"
				:title="'上线管理'" 
				:size="'4rem'" 
				:dnumber="numberData.pubRepos"
				:icon="'kucunguanli'"
				:color="'#ffff43'"
				:type="'button'"
				>
				</btndnumber>
	     	    <!-- <databox :title="'新增'" :dheight="210" :boxb="false">
	     	    	<follower :data="followers"></follower>
	     	    	<nodata :nodata="'一个'" v-if="noFollowing"></nodata>
	     	     </databox>
	     	     <databox :title="'最近'" :dheight="210" :boxb="false">
	     	     	<follower :data="following"></follower>
	     	     	<nodata :nodata="'一个'" v-if="noFollowing"></nodata>
	     	     </databox> -->
			</databox>
			 <!-- <div class="messege">
			 	<databox :title="'最新消息'" :dheight="260" :icon="'account'">
			 		<message :data="messege"></message>
			 		<nodata :nodata="'最新消息'" v-if="noMessege"></nodata>
			   </databox>
			 </div> -->
		</div>
	</div>
</template>

<script>
import btndnumber from '../../../components/btndnumber'
import follower from './follower'
import message from './message'
export default {
  components:{
  	follower,
		message,
		btndnumber
  },
  props: {
    username:String,
		numberData:Object
  },
  data(){
  	return{
  		followers:[],
  		noFollowers:false,
  		following:[],
  		noFollowing:false,
  		messege:[],
  		noMessege:false
  	}
  },
  created(){
  // this.getData(this.username)
  },
  methods:{
  	getData(username){
	    	let comUrl = "/api/users/"
	    	let url1 = comUrl + username + "/followers"
	    	let url2 = comUrl + username + "/following"
	    	let url3 = comUrl + username + "/received_events"
	    	this.$axios.all([
	    		this.$axios.get(url1),
	    		this.$axios.get(url2),
	    		this.$axios.get(url3)
	    	]).then(this.$axios.spread((res1,res2,res3)=>{
	    		//粉丝情况
	    		let data1 = JSON.parse(JSON.stringify(res1.data))
	    		if(data1.length<1){
	    			this.noFollowers = true
	    		}else{
	    			this.followers = data1.reverse()
	    		}
	    		//跟随情况
	    		let data2 = JSON.parse(JSON.stringify(res2))
	    		if(data2.data.length<1){
	    			this.noFollowing = true
	    		}else{
	    			this.following = data2.data.reverse()
	    		}
	    		
	    		//最新消息
	    		let data3 = JSON.parse(JSON.stringify(res3))
	    		if(data3.data.length<1){
	    			this.noMessege = true
	    		}else{
	    			this.messege = data3.data
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
	.right-content{
		width: 100%;
		height: 100%;
		.top-box{
			padding-bottom: 40px;
			.messege{
				padding-top:20px ;
			}
			.chart{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			align-items: center;
			padding: 2rem;
			height: calc(100% - 0px);
			>.btn-number-box{
				border-radius: 2px;
				// background: #f78d1d;
				background: linear-gradient(to bottom,#1abafa,#124a77);
				background: -webkit-gradient(linear, left top, left bottom, from(#1abafa), to(#124a77));
				background: -moz-linear-gradient(top,  #1abafa,  #124a77);
				filter:  progid:DXImageTransform.Microsoft.gradient(startColorstr='#1abafa', endColorstr='#124a77');
					// background-color: #2287e6;
					box-shadow: 0 1px 2px rgba(0,0,0,.2);
			}
		}
		}
	}
</style>