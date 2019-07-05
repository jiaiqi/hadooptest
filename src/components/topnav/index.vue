<template>
	<div :class="showMenuPanel ? 'navbar navbar-show':'navbar navbar-hide'">
		<ul class="quick-btns">
			<li @click="fullBox">
				<icon 
					:type="'quanping'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'yuyanqiehuan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li>
				<icon 
					:type="'ziyuan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
			<li @click="showMenu">
				<icon 
					:type="showMenuPanel ? 'fenyezuo':'caidan'" 
					:size="'2.2rem'" 
					:color="'#fff'">
				</icon>
			</li>
		</ul>
		<transition name="left">
			<ul class="menu-list" v-show="showMenuPanel">
				<li>
					<span>菜单1</span>
				</li>
				<li>
					<span>菜单2</span>
				</li>
				<li>
					<span>菜单3</span>
				</li>
				<li>
					<span>菜单3</span>
				</li>
				<li>
					<span>菜单3</span>
				</li>
				<li>
					<span>菜单3</span>
				</li>
				<li>
					<span>菜单3</span>
				</li>
				<li>
					<span>菜单4</span>
				</li>
			</ul>
		</transition>
	</div>
</template>

<script>
export default {
	name: 'topnav',
	data(){
		return {
			showMenuPanel:false
		}
	},
  methods:{
  	fullBox(){
  		console.log("点击")
  		if ((document.fullScreenElement && document.fullScreenElement !== null) || (!document.mozFullScreen && !document.webkitIsFullScreen)) { 
                if (document.documentElement.requestFullScreen) {
                  document.documentElement.requestFullScreen();
                } else if (document.documentElement.mozRequestFullScreen) {
                  document.documentElement.mozRequestFullScreen();
                } else if (document.documentElement.webkitRequestFullScreen) {
                  document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
                }
            } else {
                if (document.cancelFullScreen) {
                  document.cancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                  document.mozCancelFullScreen();
                } else if (document.webkitCancelFullScreen) {
                  document.webkitCancelFullScreen();
                }
            }
		},
		showMenu(){
			if(this.showMenuPanel){
				this.showMenuPanel = false
			}else{
				this.showMenuPanel = true
			}
		}
  }
}
</script>

<style lang="scss">
	.navbar{
		top: -80px;
		width: 250px;
		height: 50px;
	    margin-bottom: 0;
	    background: rgba(216, 191, 216, 0.2);
	    border-radius: 0;
	    border: none;
	    z-index: 999999;
	    // padding-left: 50px;
	    // margin-left: -200px;
	    transition: margin-left 0.2s;
	    ul.quick-btns{
	    	width: 100%;
	    	height: 100%;
				padding-left: 50px;
	    	li{
	    		float: left;
	    		width:50px;
	    		height: 100%;
	    		display: flex;
	    		justify-content: center;
	    		align-items: center;
	    		padding: 5px;
	    		&:focus{
	    			background:#3498da;
	    		}
	    		&:hover{
	    			background:#3498da;
	    		}
	    	}
	    }
	    // &:hover{
	    // 	margin-left:0px;
	    // }
			ul.menu-list{
				display: flex;
				flex-direction: column;
				justify-content: flex-start;
				align-items: center;
				width: 100%;
				margin-top: 20px;
				transition: display 0.2s  ease-in-out;
				// -webkit-box-shadow: 0 0 10px #2C58A6;
    		// box-shadow: 0 0 10px #2C58A6;
				li{
					height: 50px;
					width: 250px;
					display: flex;
					flex-direction: column;
					justify-content: space-around;
					align-items: center;
					background-image: url("../../assets/data/menu_center.png");
					background-position: center;
					background-repeat: no-repeat;
					// background-color: transparent;
					background-color: #191e2bec;
					&:focus{
	    			// background:#3498da;
	    		}
	    		&:hover{
	    			// background:#3498da;
						span{
							color:#81dffc;
							font-weight: blod;
						}
	    		}
					&:before{
					// &:after{
						content:"";
						width: 200px;
						height: 2px;
						bottom:0px;
						position: relative;
						margin: 0 auto;
						background: -webkit-linear-gradient(left, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Safari 5.1 - 6.0 */
						background: -o-linear-gradient(right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Opera 11.1 - 12.0 */
						background: -moz-linear-gradient(right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Firefox 3.6 - 15 */
						background: linear-gradient(to right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* 标准的语法 */
					}
					span{
						height:48px;
						color:#06aaeb;
						font-size:16px;
						font-weight: bold;
						line-height: 48px;
					}
					&:first-child{
						// height: 19px;
						background-image: url("../../assets/data/menu_top.png");
    				background-repeat: no-repeat;
						background-color: transparent;
						
						background-position: top;
					}
					&:last-child{
						// height: 28px;
						background-image: url("../../assets/data/menu_bottom.png");
						background-position: bottom;
    				background-repeat: no-repeat;
						background-color: transparent;
						&:before{
						// &:after{
							content:"";
							width: 200px;
							height: 0;
							bottom:-48px;
							position: relative;
							margin: 0 auto;
							background: transparent;
						}
					}
				}
			}
			&.navbar-show{
	    	margin-left: 0px;
			}
			&.navbar-hide{
	    	margin-left: -200px;
			}
	}
</style>