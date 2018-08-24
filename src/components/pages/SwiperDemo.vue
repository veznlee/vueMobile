<template>
  <div >
      <swiper class="swiper swiper-article" :options="swiperOption">
        <swiper-slide class="text">
            <div class="centent">
                <p>　　窗外，月亮渐渐升了起来，明亮而皎洁，就像几年前，何莲向我诉说的那个夜晚。原来，当爱情和友谊擦身而过，何莲付出的不止是失恋的痛……<br>
                <br>
                　　一<br>
                <br>
                　　2007年，我正在南京师范大学中文系念大三。当时，寝室6个女生有5个都在谈恋爱，大家整天描眉画眼，涂脂抹粉，交流恋爱心得，忙得不亦乐乎。唯有何莲总是捧着一本《新概念英语》，口中念念有词。<br>
                <br>
                　　她长得不算美，但也不至于说没有男生喜欢。然而，她却从不恋爱，从大一到大三，一直一心向学。背地里，我们称她为居里二世。想当年，名噪八方的居里夫人就是以这种姿态遗世独立的吧！<br>
                <br>
                　　然而，令人意想不到的是，冷若冰霜如居里的何莲也有为爱痴狂的时候。<br>
                <br>
                　　这是何莲收到的第11封匿名情书，她坐在书桌前，埋头看着，睫毛轻颤，笑意盈盈，那些让人脸红心跳的句子，犹如晴空里的惊雷，准确地击中了她。<br>
                <br>
                　　晚上熄灯后，室友们都进入了梦乡。寂静的春夜，蟋蟀温柔地鸣叫着，睡我上铺的何莲躺在床上辗转反侧。后来，她索性下了床，伫立窗前，凝视着窗外婆娑的树影。<br>
                <br>
                　　我翻了个身，床吱吱作响，何莲扭过头，轻身问：“小米，你还没睡着？”我应了一声，对她说：“快进来，小心着凉。”于是，她钻进了我的被窝。<br>
                <br>
                　　我们小声耳语，她向我诉说起那份匿名的爱恋，一遍遍地回味着信中的话语：“旁人或许不理解，但我却从你纤秀的身影中感受到火山般的热情，你不恋爱，仅仅因为身边不过一群俗物而已……”<br>
                <br>
                　　“小米，从前我真傻，把自己埋在书本里。现在，我终于明白爱情是这样美好！”她尽量压抑着的说话声里有难以掩饰的兴奋。<br>
                <br>
                　　那一夜，何莲与我睡一张床，她呼吸不平静地起伏着，想翻身但又怕吵醒我。我们许久都没有睡着，沉浸在各自的心事中……<br>
                <br>
                　　其实，何莲收到的11封情书，每一封都出自于我男朋友吴磊之手。当初，舍友们为了试试清高的吴莲到底会不会做爱情的俘虏，于是，一致推举吴磊给何莲写情书。她们说吴磊文笔好，人又浪漫，写出的情书一定惊天地泣鬼神，况乎小女子何莲？眼见舍友盛情难却，我只得用分手威逼吴磊就范，于是有了这场好戏。<br>
                <br>
                　　那夜之后，我想了很多，既然目的已经达到，我也想趁何莲还没陷得太深时，让情书戛然而止。但这几乎是全体舍友的计划，我怎能半途而废呢？于是，我咬牙逼吴磊写最后一封，而且故意让情书间隔的时间更长。<br>
                <br>
                　　仅仅4天，何莲就像没了魂似的，常常在信箱前发呆，那本从不离身的《新概念英语》也被她丢在一旁，她开始向舍友请教化妆技巧。她瘦了，小圆脸有了尖尖的下颌，甚至有一次，课上到一半，她突然起身就往外走，教授望着她直瞪眼……我知道，何莲要去的地方是收发室。每天上午10点，是收发室分信的时间。<br>
                <br>
                　　我成了何莲的倾诉对象。每天晚上，她坐在我的床前，将患得患失的心情向我诉说：“那个人就在身边，是谁呢？为什么还不现身？他长得怎么样呢？”我被这许多问题包围着，看到何莲的眼睛因为这莫须有的爱情点亮，内疚之情日益吞噬着我的心……<br>
                <br>
                　　第6天，将吴磊的信塞进信箱后，我告诉自己，这真的是最后一封了。<br>
                <span style="color: rgb(255, 0, 0); font-family: 宋体;"></span></p>
            </div>
        </swiper-slide>
      </swiper>
      <swiper class="swiper" :options="swiperOption2">
        <swiper-slide class="swiper-slide" v-for="(item, index) in slide" :key="index">
            <div class="demo">
                Slide {{item}} 
            </div>
        </swiper-slide>
        <!-- 分页div -->
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
  </div>
</template>
 
<script>
    import 'swiper/dist/css/swiper.css' 
    import { swiper, swiperSlide } from 'vue-awesome-swiper'
    export default {
        data() {
            return {
                swiperOption:{
                    direction:'vertical',
                    slidesPerView: 'auto',
                    freeMode:true,
                    mousewheel:true
                },
                slide: [1,2,3,4,5,6],
                swiperOption2:{
                    direction:'horizontal',
                    loop:true,
                    pagination:{
                        el:'.swiper-pagination',
                        clickable:true
                    }
                }
            }
        },
        components:{swiper,swiperSlide}
    }
</script>
 
<style scoped>
  .swiper-article{
      height: 300px;
      overflow: hidden;
  }
  .text{
      font-size: 18px !important;
      text-align: left;
      padding:30px;
      height: auto;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
  }
  .demo{
    height: 100px;
    text-align: center;
    line-height: 100px;
    background: #d2d2d2;
  }
</style>