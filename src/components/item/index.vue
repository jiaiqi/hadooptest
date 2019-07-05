<template>
	<div :class="itemData.selected ? 'item-view active' : 'item-view'">
        <div class="item-content" @click="onItem">
            <div class="item-left">
                <img :src="itemData.image !== '' ? itemData.image : '../../../../assets/data/av.png'" />
            </div>
            <div  class="item-right">
                <div class="title">{{itemData.title}}</div>
                <div class="content">
                    <div class="text-col" v-if="itemData.columns.length !== 0" v-for="(item,index) in itemData.columns" :key="index">
                        <div class="text-label">{{item.label}}:</div>
                        <div class="text-value">{{item.value}}</div>
                    </div>
                </div>
            </div>
        </div>
		
	</div>
</template>

<script>
// import image from '../../assets/data/av.png'
export default {
    name: 'itemView',
    props: {
        itemData:Object,
        Selected:false
    },
    data(){
        return {
            selected:false
        }
    },
    methods:{
        onItem:function(){

        }
    }
}
</script>

<style lang="scss">
	.item-view{
        width: 100%;
            display: flex;
            height: 70px;
            flex-direction: column;
            &:before{
            // &:after{
                content:"";
                width: 100%;
                height: 2px;
                bottom:0px;
                position: relative;
                margin: 0 auto;
                background: -webkit-linear-gradient(left, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* 标准的语法 */
            }
            &:last-child:after{
                content:"";
                width: 100%;
                height: 2px;
                bottom:0px;
                position: relative;
                margin: 0 auto;
                background: -webkit-linear-gradient(left, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right, rgba(51, 62, 75, 0.089) , rgba(37, 147, 250, 0.795), rgba(51, 62, 75, 0.089) ); /* 标准的语法 */
            }
        .item-content{
            padding: 10px;
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            font-size: 1.8rem;
            color: #888;
            
            .item-left{
                img{
                    width: 60px;
                    height: 60px;
                }
            }
            .item-right{
                display: flex;
                width: calc(100% - 70px);
                flex-direction: column;
                justify-content: center;
                align-content: flex-start;
                .title{
                    color: #888;
                }
                .content{
                    font-size: 1.6rem;
                display: flex;
                flex-direction: column;
                justify-content: space-around;
                align-content: flex-start;
                    .text-col{
                        display: flex;
                        flex-direction: row;
                        justify-content: flex-start;
                        .text-label{
                            color: rgb(3, 240, 240);
                        }
                        .text-value{
                            color: rgb(133, 143, 143);
                        }
                    }
                }
            }
            
        }
        &.active{
            .item-content{

                background: rgb(1, 127, 211);
                .title{
                    color: #323232;
                }
                .content{
                    .text-col{
                        .text-label{
                            color: rgb(125, 231, 231);
                        }
                        .text-value{
                            color: rgb(211, 255, 255);
                        }
                    }
                }
            }
            &:before{
                background: -webkit-linear-gradient(left, rgba(111, 179, 241, 0.795) , rgba(18, 48, 77, 0.795), rgba(111, 179, 241, 0.795) ); /* Safari 5.1 - 6.0 */
                background: -o-linear-gradient(right, rgba(111, 179, 241, 0.795) , rgba(18, 48, 77, 0.795), rgba(111, 179, 241, 0.795) ); /* Opera 11.1 - 12.0 */
                background: -moz-linear-gradient(right, rgba(111, 179, 241, 0.795) , rgba(18, 48, 77, 0.795), rgba(111, 179, 241, 0.795) ); /* Firefox 3.6 - 15 */
                background: linear-gradient(to right, rgba(111, 179, 241, 0.795) , rgba(18, 48, 77, 0.795), rgba(111, 179, 241, 0.795) ); /* 标准的语法 */
            }
        }
	}
</style>