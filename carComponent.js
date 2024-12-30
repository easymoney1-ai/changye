const carComponent = {
    props:["carInfo","imageStyle","carStyle"],
    components:{
        addMinusComponent
    },
    template: `
        <div :class="carStyle">
            <img :src="carInfo.imagePath" :class="imageStyle" ><br>
            书名：{{carInfo.title}}<br>
            作者：{{carInfo.author}}<br>
            单价：{{carInfo.price}}
            <add-minus-component v-model="carInfo.count" style="float:right"></add-minus-component>
        </div>
        `
}