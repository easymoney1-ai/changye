const goodCart = {
    props:['cars'],
    components:{
        addMinusComponent
    },
    template:`
    <table>
        <tr>
            <th>序号</th>
            <th>商品名称</th>
            <th>单价</th>
            <th>数量</th>
            <th>金额</th>
            <th>操作</th>
        </tr>
        <tr v-for="(car,index) in cars" :class="{even:(index+1)%2==0}">
            <td>{{index+1}}</td>
            <td>{{car.title}}</td>
            <td>{{car.price}}</td>
            <td> <add-minus-component v-model="car.count"></add-minus-component></td>
            <td>{{itemPrice(car.price,car.count)}}</td>
            <td><button @click="car.splice(index,1)">删除</button></td>
        </tr>
    </table>
    `,
    methods:{
        itemPrice(price,count){
            return price*count;
        }
    }
}