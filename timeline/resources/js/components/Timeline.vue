<template>
<li>
    <time class="cbp_tmtime" :datetime="date+time"><span>{{dayOfMonth}}</span> <span>{{time}}</span></time>
    <div class="cbp_tmicon cbp_tmicon-phone">
        <img v-if="src" height=40 width=40 style="border-radius:20px;" :src="src"/>
    </div>
    <div class="cbp_tmlabel">
        <h2>{{name}}</h2>
        <p class="text">{{text}}</p>
        <template v-if="urls.length > 0">
            <a v-for="url in urls" :href="url.url" class="text-link">{{url.display_url}}</a>
        </template>
    </div>
</li>
</template>

<script>
export default {
    name: 'Timeline',
    props: {
        date: {
            required: true, type: String
        },
        time: {
            required: true, type: String
        },
        dayOfMonth: {
            required: true, type: String
        },
        text: {
            required: true, type: String
        },
        name: {
            required: true, type: String
        },
        src: {
            type: String
        },
        urls: {
            type: Array
        }
    }
}
</script>

<style>
.text-link{
    color: #1623d2;
}
.text{
    word-break: break-word;
    white-space: pre;
}
</style>
