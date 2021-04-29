<template>
<ul class="cbp_tmtimeline">
    <timeline v-for="message in messages" :date="message.date" :time="message.time" :dayOfMonth="message.dayOfMonth" :text="message.text" :name="message.name" :src="message.src" :urls="message.urls" />
</ul>
</template>

<script>
import Timeline from './Timeline';
import http from '../utility/http';
import { baseUrl } from '../config';

export default {
    name: "Timelines",
    components: {
        Timeline
    },
    data(){
        return {
            messages: []
        };
    },
    async mounted(){

        const MAX_SHOW_NUM = 100;
        const response = await http.get('/start');
        this.messages = response.data;

        const source = new EventSource(`${baseUrl}/streams`,{withCredentials: true});
        source.onmessage = (e)=>{
            this.messages.unshift(JSON.parse(e.data));
            if(this.messages.length >= MAX_SHOW_NUM){
                this.messages.pop();
            }
        };

        source.onerror = (e) => {
            console.log(`error:`,e);
        }
        
    }
}
</script>