<script>
import { store } from '../../store';
import AppJumbo from '../AppJumbo.vue';

export default{
  name : 'AppHome',
  components :{
    AppJumbo
  },
  data(){
    return{
      store,
      cardList: [
        {
          img: "../../../public/img/AppHome/d-1.png",
          title: "Coat Handler Pets",
          text: "The standard chunk of Lorem Ipsum used since."
        },
        {
          img: "../../../public/img/AppHome/d-2.png",
          title: "Pet Security",
          text: "The standard chunk of Lorem Ipsum used since."
        },
        {
          img: "../../../public/img/AppHome/d-3.png",
          title: "Night Care",
          text: "The standard chunk of Lorem Ipsum used since."
        },
        {
          img: "../../../public/img/AppHome/d-4.png",
          title: "Dog Walking",
          text: "The standard chunk of Lorem Ipsum used since."
        },
        {
          img: "../../../public/img/AppHome/d-5.png",
          title: "Puppy Sitting",
          text: "The standard chunk of Lorem Ipsum used since."
        },
      ]
    }
  },
  
}

</script>

<template>
    <AppJumbo backgroundImage="/public/img/AppHome/b.png" title="Services" :subtitle="store.lorem"/>
    <section class="about-us">
      <div class="container container-flex">
        <div class="card-about-us">
          <img src="../../../public/img/AppHome/about.png" alt="">
        </div>
        <div class="card-about-us">
          <div class="img-container">
            <img class="paw" src="../../../public/img/dog-icon.png" alt="">
            <span>About Us</span>
          </div>
          <h2>Welcome DogMilo Pets</h2>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae et quas ea magnam voluptates aliquid quis perspiciatis ipsum fugiat laboriosam! Perspiciatis temporibus iusto accusantium modi vel repudiandae cum sequi velit?</p>
        </div>
      </div>
    </section>
    <section class="service">
      <div class="container">
        <div class="text">
          <h6>Service</h6>
          <h2>Dog Milo Pet Care Services For Your Best Friends.</h2>
        </div>
        <div class="cards-container">
          <div class="card" v-for=" (card, i) in this.cardList " :key="i">
            <img :src="card.img" alt="">
            <h3>{{card.title}}</h3>
            <p>{{card.text}}</p>
            <div class="button">
              <img src="../../../public/img/right.png" alt="">
            </div>

          </div>
        </div>
      </div>
      
    </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.container-flex{
  display: flex;

  .card-about-us{
    width: 40%;
      
    .paw{
      width: 50px;
      height: 50px;
      vertical-align: middle;
    }  
  }    
}

.service{
  background-color: $light_grey;

  .text{
    text-align: center;
  }

  .cards-container{
    display: flex;
    gap: 20px;

    .card{
      display: flex;
      flex-direction: column;
      align-items: center;
      background-color: $orange;
      width: calc(100% / 5 - 20px);
      border-radius: 100px;
      text-align: center;

      &:hover{
        background-color: #7f7045;
      }

      .button{
        width: 50px;
        height: 50px;
        background-color: $yellow
      }
    }
  }
  
}


</style>
