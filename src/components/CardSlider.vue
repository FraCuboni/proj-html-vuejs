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
            <span
            v-for="star in 5"
            :key="star"
            class="star"
            :class="{ selected: star <= card.vote }"
            >&#9733;</span
            >
            <h3>{{ card.title }}</h3>
            <p>{{card.text}}</p>
            <div class="cont-img-text">
                <div class="img-circle">
                    <img :src="card.img" alt="">
                </div>
                <div class="text">
                    <h5>{{ card.name }}</h5>
                    <span>{{ card.job }}</span>
                </div>
            
            </div>
            
        </div>
      </swiper-slide>
    </swiper>
</template>
  
  
<style lang="scss" scoped>
@use '../styles/partials/variables' as *;

    .swiper{
        width: 50%;
    }    

    .card {
        background-color: #eeeeee;
        border-radius: 20px;
        padding: 20px;
        border-left: 2px solid $yellow;

        .star {
            font-size: 20px;
            color: gray;
        }

        .star.selected {
            color: gold;
        }

        p{
            font-size: 12px;
            margin-top: 0;
        }

        .cont-img-text{
            display: flex;
            align-items: center;

            .img-circle{
                margin-top: 20px;
                margin-right: 20px;
                width: 70px;
                height: 70px;

                img{
                    border-radius: 50%;
                }
            }
        }
    }
  </style>
  