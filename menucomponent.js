const menuComponent = {
       props:["menus","modelValue"],
       emits:["update:modelValue"],
    template:`
                <ul v-bind="$attrs" >
                    <li v-for="menu in menus">
                        <font @click="menu.show=true" style="cursor:hand;" v-if="!menu.show">+</font>
                        <font @click="menu.show=false" style="cursor:hand;" v-if="menu.show">-</font>
                        <a :href="menu.url" @click.prevent="$emit('update:modelValue',menu.name);">{{menu.name}}</a>
                        <ul v-show="menu.show" v-bind="$attrs">
                            <li v-for="subMenu in menu.subMenus">
                                <a :href="subMenu.url" @click.prevent="$emit('update:modelValue',subMenu.name);">{{subMenu.name}}</a>
                            </li>
                        </ul>
                    </li>
                </ul>
               ` ,
               inheriteAttrs: false
   
    }
