<template>
	<div class="data-page">
		<div class="data-content">
			<div class="data-time">
				 温馨提示: ...
			</div>
			<div class="data-main">
        <div class="main-left">
          <div class="main-title">
            <h1>全领域智慧支撑</h1>
          </div>
          <div class="main-left-content">
            <div class="main-left-content-top">
              <h1 class="main-item-title">数据内外部整合情况</h1>
              <div class="left-top-items">
                <div class="left-top-item">
                  <div class="title">

                  </div>
                  <div class="content">
                    <div class="content-items">
                      <div class="label"></div><div class="text"></div>
                    </div>
                    <div class="content-items">
                      <div class="label"></div><div class="text"></div>
                    </div>
                  </div>
                </div>
                <div class="left-top-item">
                  <div class="title">

                  </div>
                  <div class="content">
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="main-center">
          <h1 class="main-item-title">常见罪名可视化分析展示</h1>
        </div>
        <div class="main-right">
          <div class="right-item">
            <h1 class="main-item-title">涉罪人员可视化展示</h1>
          </div>
          <div class="right-item">
            <h1 class="main-item-title">犯罪风险点分布可视化展示</h1>
          </div>
        </div>
      </div>
		</div>
	</div>
</template>

<script>
import data from '../../assets/data/kelamayi.json'
export default {
  components:{
  },
  data(){
  	return{
    
  	}
  },
  created(){
     
  },
  methods:{
  	//计算年月
//	joindate(sinceDate){
//      var since = sinceDate.getFullYear();
//      var sinceMonth = sinceDate.getMonth();
//      return since + "-" + sinceMonth
//	}
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
		.data-main {
		    width: calc(100% - 40px);
		    margin-bottom: 40px;
		    margin-left: 20px;
		    height: 2000px;
        display: flex;
        flex-direction: row;

        .main-item-title{
          font-size:50px;
          line-height: 50px;
          margin: 50px 0;
          text-indent: 30px;
          border-left: 10px solid #2C58A6;
          font-weight: 600;
          color: #fff;
        }
        .main-left,.main-center,.main-right{
          border: 1px solid #fff;
          //  background-color: #fff;
            height: 100%;
        }
		    .main-left{
		    	width: 24%;
          padding-left: 3%;
          .main-title{
            width: 80%;
            text-indent: 15%;
            height: 200px;
            border: 1px dashed #fff;
            h1{
              font-size: 80px;
              line-height: 200px;
              color: #fff;
              letter-spacing: 20px;
            }
          }
          .main-left-content{
            padding-top: 100px;
            width: 100%;
            display: flex;
            flex-direction: column;
            height: 30%;
            .main-left-content-top{
              width: 100%;
              .left-top-items{
                padding-top: 50px;
                  width: 100%;
                  display: flex;
                  justify-content: space-around;
                  .content-item{
                    width: 6.25rem /* 100/16 */;
                    height: 6.25rem /* 100/16 */;
                    border-radius: 50%;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    color: #fff;
                    border: 1px solid #ffffff;
                  }
              }
             
            }
          }
		    }
		     .main-center{
                background-color: transparent;
		    	width: 52%;
		    	padding: 0 20px 0 20px;
		    	
		    }
		     .main-right{
		    	width: 24%;
		    }
		}
	}		
}

</style>