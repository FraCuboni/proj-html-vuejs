<script>
  import { Swiper, SwiperSlide } from 'swiper/vue';
  import 'swiper/swiper-bundle.css';
  
  export default {
    name: 'CardSlider',
    components: {
      Swiper,
      SwiperSlide,
    },
    props: {
      cardRating: {
        type: Array,
        required: true,
      },
    },
  };
  </script>

<template>
    <swiper :slides-per-view="2" space-between="20" loop="true">
      <swiper-slide v-for="(card, i) in cardRating" :key="i">
        <div class="card">
            <span>{{ card.vote }}</span>
            <h3>{{ card.title }}</h3>
            <p>{{card.text}}</p>
            <div class="img-circle">
                <img :src="card.img" alt="">
            </div>
            <h5>{{ card.name }}</h5>
        </div>
      </swiper-slide>
    </swiper>
  </template>
  
  
  <style lang="scss" scoped>
  .card {
    background-color: #eeeeee;
    padding: 20px;

    .img-circle{
        width: 50px;
        height: 50px;

        img{
            border-radius: 50%;
        }
    }
  }
  </style>
  