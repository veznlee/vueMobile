//把有用的数据提取出来，写入到一个新的数组中
const fs = require('fs')
fs.readFile('.goods.json', 'utf8', function(err, data){
    let newData= JSON.parse(data)
    let i=0
    let pushData=[]
    newData.RECORDS.map(function(value,index){
        if(value.IMAGE1!=null){
            i++
            console.log(value.NAME)
            pushData.push(value)
        }  
    })
    console.log(i)
    console.log(pushData)
});

//写入到新的文件
fs.writeFile('./newGoods.json',JSON.stringify(pushData),function(err){
    if(err) console.log('写文件操作失败');
    else console.log('写文件操作成功');
})