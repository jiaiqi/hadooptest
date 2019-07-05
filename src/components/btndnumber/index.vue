<template>
	<div class="btn-number-box"  :style="{ 'height': dheight + 'px' }">
		<div class="icon-box" v-show="btnTypeShow">
			<icon :type="icon" :color="color"></icon>
		</div>
		<div class="btn-number-box" :style="!btnTypeShow ? {'width':100 + '%','align-items':'center','justify-content':'center'} :{}">
			<div class="title" :style="!btnTypeShow ? {'font-size':2.8 + 'rem','text-align':'center','padding-top':0} :{}">{{title}}</div>
			<div class="btn-number" v-show="btnTypeShow" :style="styles">{{dnumber}}</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'btndnumber',
  props: {
    size: [Number, String],
    title: String,
    color: String,
    dnumber:Number,
    icon: String,
		dheight: Number,
		type:String
  },
  computed: {
    styles() {
      const style = {}

      if (this.color) {
        style.color = this.color
      }
      if (this.size) {
        style.fontSize = this.size
      }

      return style
		},
		btnTypeShow(){
			if(this.type === "button"){
				return false
			}else{
				return true
			}
		}
  }
}
</script>

<style lang="scss">
	.btn-number-box{
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: row;
		padding: 0 5px;
		justify-content: flex-start;
		
		>.icon-box{
			min-width: 50px;
			height: 100%;
			float: left;
			display: flex;
		    justify-content:center;
		    align-items:Center;
		    i{
		    	font-size: 5rem;
		    	display: block;
		    }
		}
		>.btn-number-box{
			width: calc(100% - 50px);
			// float: left;
			padding-left: 10px;
			display: flex;
			flex-direction: column;
			justify-content: flex-start;
			.title{
				width: 100%;
				font-size: 1.4rem;
				color: #fff;
				padding-top: 10px;
				line-height: 3rem;
			}
			.btn-number{
				width: 100%;
				overflow: hidden;
				text-overflow: ellipsis;
                white-space: normal;
                font-weight: bold;
                font-size: 4.4rem;
			}
		}
	}
</style>