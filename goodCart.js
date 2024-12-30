const goodCart = {
    props:['books'],
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
        <tr v-for="(book,index) in books" :class="{even:(index+1)%2==0}">
            <td>{{index+1}}</td>
            <td>{{book.title}}</td>
            <td>{{book.price}}</td>
            <td> <add-minus-component v-model="book.count"></add-minus-component></td>
            <td>{{itemPrice(book.price,book.count)}}</td>
            <td><button @click="books.splice(index,1)">删除</button></td>
        </tr>
    </table>
    `,
    methods:{
        itemPrice(price,count){
            return price*count;
        }
    }
}