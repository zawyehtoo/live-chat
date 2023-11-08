<template>
<div class="chat-window" ref="messages">
    <div v-if="error">
        {{error}}
    </div>
    <div v-if="document" class="messages" >
        <div v-for="doc in formattedDate" :key="doc.id" class="single">
            <span class="created-at">{{doc.createdAt}}</span>
            <span class="name">{{doc.name}}</span>
            <span class="message">{{doc.message}}</span>
        </div>
    </div>
</div>
</template>

<script setup>
import getCollection from "@/composables/getCollection";
import { formatDistanceToNow } from 'date-fns'
import { computed, onUpdated, ref } from "vue";
const {document,error} = getCollection('messages')

const formattedDate = computed(()=>{
     if(document.value){
        return document.value.map((doc) =>{
            let time= formatDistanceToNow(doc.createdAt.toDate())
            return {...doc,createdAt:time}
        })
    }
}) 

const messages =ref(null)
onUpdated(()=>{
    messages.value.scrollTop=messages.value.scrollHeight
})
</script>

<style>
.chat-window{
    background: #fafafa;
    padding: 30px 20px;
    text-align: left;
    max-height: 300px;
    overflow-y: scroll;
}
.single{
    margin: 18px 0;
}
.created-at{
    display: block;
    color: #999;
    font-size: 12px;
    margin-bottom: 4px;
}
.name{
    font-weight: bold;
    margin-right: 6px;
}
.message{
    max-height: 400px;
    overflow: auto;
}
</style>