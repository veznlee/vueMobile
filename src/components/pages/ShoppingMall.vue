<template>
  <div>
    <div class="search-bar">
        <van-row>
            <van-col span="3">
                <img :src="locationIcon" width="80%" class="location-icon"/>
            </van-col>
            <van-col span="16">
                <input type="text" class="search-input" />
            </van-col>
            <van-col span="5">
                <van-button size="mini">查找</van-button>
            </van-col>
        </van-row>
    </div>
    <!--swiper area-->
    <div class="swiper-area">
        <van-swipe :autoplay="1000">
            <van-swipe-item v-for="( banner ,index) in bannerPicArray" :key="index" >
                <img v-lazy="banner.image" width="100%"/>
            </van-swipe-item>
        </van-swipe>
    </div>  
    <!--type bar-->
    <div class="type-bar">
        <div v-for="(cate,index) in category" :key="index">
            <img v-lazy="cate.image" width="90%">
            <span>{{cate.mallCategoryName}}</span>
        </div>
    </div>
    <!--adbanner area-->
    <div>
        <img v-lazy="adBanner" width="100%" />
    </div>
    <!--Recommend goods area-->
    <div class="recommend-area">
        <div class="recommend-title">商品推荐</div>
        <div class="recommend-body">
            <!--swiper-->
            <swiper :options="swiperOption">
                <swiper-slide v-for=" (item ,index) in recommendGoods" :key="index">
                    <div class="recommend-item">
                        <img :src="item.image" width="80%"/>
                        <div>{{item.goodsName}}</div>
                        <div>￥{{item.price | moneyFilter}} (￥{{item.mallPrice | moneyFilter}})</div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
    <floorComponent :floorData="floor1" :floorTitle="floorName.floor1"></floorComponent>
    <floorComponent :floorData="floor2" :floorTitle="floorName.floor2"></floorComponent>
    <floorComponent :floorData="floor3" :floorTitle="floorName.floor3"></floorComponent>
    <van-row gutter="20">
        <van-col span="12" v-for="(item,index) in hotGoods" :key="index">
            <goods-info :goodsImage="item.image" :goodsName="item.name" :goodsPrice="item.price"></goods-info>
        </van-col>
    </van-row>
  </div>
</template>
<script>
    import axios from 'axios'
    import url from '@/serviceAPI.config.js'
    import dataJson from '../data/dataIndex'

    import 'swiper/dist/css/swiper.css'
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    import swiperDefault from '../swiper/swiperDefault'
    
    import floorComponent from '../component/FloorComponent'
    import goodsInfo from '../component/GoodsInfoComponent'
    import {toMoney} from '@/filter/moneyFilter.js'
    export default {
        data () {
            return {
                locationIcon: require('../../assets/images/location.png'),
                bannerPicArray:[
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic001.jpg'},
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic002.jpg'},
                    {imageUrl:'http://7xjyw1.com1.z0.glb.clouddn.com/simleVueDemoPic003.jpg'},
                ],
                bannerPicArray:[],
                category:[],
                adBanner:'',
                swiperOption:{
                    slidesPerView:3
                },
                recommendGoods:[],
                floor1:[],
                floor2:[],
                floor3:[],
                floorName:{},
                hotGoods:[]
            }
        },
        filters:{
            moneyFilter(money){
                return toMoney(money)
            }  
        },
        components: {
            swiper,
            swiperSlide,
            swiperDefault,
            floorComponent,
            goodsInfo
        },
        created(){
        //   axios({
        //     url: url.getShoppingMallInfo,
        //     method: 'get',
        //   })
        //   .then(response => {
        //       console.log(response);
        //       if(response.status==200){
        //         this.category=response.data.data.category;
        //         this.adBanner = response.data.data.advertesPicture;
        //         this.bannerPicArray = response.data.data.slides;
        //       }
        //   })
        //   .catch((error) => {     
        //   })

            setTimeout(() => {
                this.category=dataJson.data.category;
                this.adBanner = dataJson.data.advertesPicture.PICTURE_ADDRESS;
                this.bannerPicArray = dataJson.data.slides;
                this.recommendGoods = dataJson.data.recommend;
                //楼层数据
                this.floor1 = dataJson.data.floor1;              //楼层1数据
                this.floor2 = dataJson.data.floor2;              //楼层2数据
                this.floor3 = dataJson.data.floor3;              //楼层3数据
                this.floorName = dataJson.data.floorName;
                //热卖商品
                this.hotGoods = dataJson.data.hotGoods;
            }, 1);
        }
    }
</script>
<style scoped>
    .search-bar{
        height:2.2rem;
        background-color: #e5017d;
        line-height: 2.2rem;
        overflow: hidden;
    }
    .search-input{
        width:100%;
        height: 1.3rem;
        border-top:0px;
        border-left:0px;
        border-right:0px;
        border-bottom:1px solid #fff !important;
        background-color: #e5017d;
        color:#fff;
    }
    .location-icon{
        padding-top:.2rem;
        padding-left:.3rem;
    }
    .swiper-area{
        width:20rem;
        clear:both;
        max-height:15rem;
        overflow: hidden;
    }

    .type-bar{
        background-color: #fff;
        margin:0 .3rem .3rem .3rem;
        border-radius: .3rem;
        font-size:14px;
        display:flex;
        flex-direction:row;
        flex-wrap:nowrap;
    }
    .type-bar div{
        padding:.3rem;
        font-size:12px;
        text-align: center;
        flex:1;
    }
    .recommend-area{
        background-color: #fff;
        margin-top:.3rem;
    }
    .recommend-title{
        border-bottom:1px solid #eee;
        font-size:14px;
        padding:.2rem;
        color:#e5017d;
    }
    .recommend-body{
        border-bottom:1px solid #eee;
    }
    .recommend-item{
        width:99%;
        border-right:1px solid #eee;
        font-size:12px;
        text-align: center;
    }
    .hot-area{
        text-align: center;
        font-size:14px;
        height: 1.8rem;
        line-height:1.8rem;
    }
    .hot-goods{
        height: 130rem;
        overflow: hidden;
        background-color: #fff;
    }
</style>
