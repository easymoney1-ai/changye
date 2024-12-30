const favoritesComponent = {
    props: ['cars'],
    data() {
        return {
            favorites: []
        }
    },
    created() {
        // Load favorites from localStorage when component is created
        const savedFavorites = localStorage.getItem('favorites');
        if (savedFavorites) {
            this.favorites = JSON.parse(savedFavorites);
        }
    },
    methods: {
        removeFavorite(carId) {
            this.favorites = this.favorites.filter(id => id !== carId);
            localStorage.setItem('favorites', JSON.stringify(this.favorites));
        },
        getFavoriteCars() {
            return this.cars.filter(car => this.favorites.includes(car.title));
        }
    },
    template: `
        <div>
            <h2>我的收藏</h2>
            <div v-if="getFavoriteCars().length === 0" class="empty-favorites">
                还没有收藏任何车辆
            </div>
            <div v-else>
                <div v-for="car in getFavoriteCars()" :key="car.title" class="favorite-item">
                    <img :src="car.imagePath" style="width: 100px; height: auto;">
                    <div class="car-info">
                        <h3>{{car.title}}</h3>
                        <p>价格: ¥{{car.price}}</p>
                        <p>卖家: {{car.owner}}</p>
                        <button @click="removeFavorite(car.title)">取消收藏</button>
                    </div>
                </div>
            </div>
        </div>
    `
};