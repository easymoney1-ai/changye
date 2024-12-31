const carComponent = {
    props:["carInfo","imageStyle","carStyle"],
    components:{
        addMinusComponent
    },
    data() {
        return {
            isFavorite: false
        }
    },
    created() {
        // Check if this car is in favorites
        const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
        this.isFavorite = favorites.includes(this.carInfo.title);
    },
    methods: {
        toggleFavorite() {
            let favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
            if (this.isFavorite) {
                favorites = favorites.filter(id => id !== this.carInfo.title);
            } else {
                favorites.push(this.carInfo.title);
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
            this.isFavorite = !this.isFavorite;
        }
    },
    template: `
        <div :class="carStyle">
            <img :src="carInfo.imagePath" :class="imageStyle" ><br>
            书名：{{carInfo.title}}<br>
            拥有者：{{carInfo.owner}}<br>
            电话：{{carInfo.phone}}<br>
            出场年份：{{carInfo.year}}<br>
            里程数:{{carInfo.mileage}}<br>
            单价：{{carInfo.price}}

            <add-minus-component v-model="carInfo.count" style="float:right"></add-minus-component>
                        <button @click="toggleFavorite" 
                    :style="{ color: isFavorite ? 'red' : 'gray' }"
                    style="float: right; margin-right: 10px;">
                ♥
            </button>
        </div>
        `
}