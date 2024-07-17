<script>
import { store } from '../../store';
import AppJumbo from '../AppJumbo.vue';
import CardSlider from '../CardSlider.vue';

export default{
  name : 'AppHome',
  components :{
    AppJumbo,
    CardSlider
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
      ],
      chooseUsList: [
        {
          img: "../../../public/img/AppHome/w-3.png",
          title: "Safty First",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
          img: "../../../public/img/AppHome/w-2.png",
          title: "Play Yards",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
          img: "../../../public/img/AppHome/w-1.png",
          title: "Monitor Your Pet",
          text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
      ],
      cardRating: [
        {
          vote: 3,
          title: "Grate Place",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
          img: "../../public/img/t1.png",
          name: "Tobias May",
          job: "UI/UX Designer"
        },
        {
          vote: 4,
          title: "Grate Place",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
          img: "../../public/img/t1.png",
          name: "Tobias May",
          job: "UI/UX Designer"
        },
        {
          vote: 1,
          title: "Grate Place",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
          img: "../../public/img/t1.png",
          name: "Tobias May",
          job: "UI/UX Designer"
        },
        {
          vote: 2,
          title: "Grate Place",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
          img: "../../public/img/t1.png",
          name: "Tobias May",
          job: "UI/UX Designer"
        },
        {
          vote: 5,
          title: "Grate Place",
          text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer ",
          img: "../../public/img/t1.png",
          name: "Tobias May",
          job: "UI/UX Designer"
        },
      ]
    }
  },
  
}

</script>

<template>
    <AppJumbo backgroundImage="/public/img/AppHome/b.png" title="Services" :subtitle="store.lorem"/>
    <!-- Section About Us -->
    <section class="about-us">
      <!-- Container Principale -->
      <div class="container container-flex">
        <!-- Colonna di sinistra -->
        <div class="col-about-us">
          <img src="../../../public/img/AppHome/about.png" alt="Dog">
        </div>
        <!-- Colonna di destra -->
        <div class="col-about-us">
          <div class="cont-about-us">
            <img src="../../../public/img/dog-icon.png" alt="Paw">
            <h4>About Us</h4>
          </div>
          <h2>Welcome DogMilo Pets</h2>
          <p>{{store.lorem}}</p>
          <p>{{store.lorem}}</p>
        </div>
      </div>
    </section>

    <!-- Section Service -->
    <section class="service">
      <!-- Container Principale -->
      <div class="container">
        <!-- Testo Section -->
        <div class="text">
          <h4>Service</h4>
          <h2>Dog Milo Pet Care Services For Your Best Friends.</h2>
        </div>
        <!-- Card della section -->
        <div class="cards-container">
          <div class="card" v-for=" (info, i) in cardList " :key="i">
            <div class="img-container">
              <img :src="info.img" :alt="info.title">
            </div>
            <h3>{{info.title}}</h3>
            <p>{{info.text}}</p>
            <div class="button">
              <img src="../../../public/img/right.png" alt="">
            </div>

          </div>
        </div>
      </div>
    </section>

    <!-- Section Choose Us -->
    <section class=choose-us>
      <!-- Container principale -->
      <div class="container-flex">
        <div>
          <img src="../../../public/img/AppHome/why.png" alt="">
        </div>
        <!-- Colonna di destra -->
        <div class="col-choose-us">
          <div class="cont-choose-us">
              <img src="../../../public/img/dog-icon.png" alt="Paw">
              <h4>Choose us</h4>
          </div>
          <h2>Why Choose Us ?</h2>
          <!-- Lista con V-for -->
          <ul>
            <li v-for=" (label, i) in this.chooseUsList" :key="i">
              <img :src="label.img" alt="">
              <div class="text">
                <h5>{{ label.title }}</h5>
                <p>{{ label.text }}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Section Review & Rating -->
    <section class="review-rating">
      <div class="container container-flex">
        <div class="col-review-rating">
          <h4>Review e Rating</h4>
          <h2>Over 800 Customers with 5-star Reviews</h2>
          <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using</p>
        </div>
        <CardSlider :cardRating="cardRating" />
      </div>
    </section>




</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;


// Scss Prima Section
.about-us{
  padding: 80px 0;

  .container-flex{
    display: flex;
    justify-content: space-between;

    .col-about-us{
      width: 45%;

      .cont-about-us{
        display: flex;
        align-items: center;
        gap: 20px;
        color: $light_grey;

        img{
          width: 40px;
        }
      }  
    }  
  }
}


// Scss Seconda Section
.service{
  background-color: $light_grey;
  padding: 80px 0;

  .text{
    text-align: center;
    margin-bottom: 20px;
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
      color: #fff;
      padding: 20px;

      &:hover{
        background-color: #7f7045;
      }

      p{
        font-size: 18px;
      }
      .img-container{
        width: 80px;
      }

      .button{
        cursor: pointer;
        width: 50px;
        height: 50px;
        background-color: $yellow;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;

        img{
          width: 10px;
          text-align: center;
        }
      }


    }
  }
}

.choose-us{

  .container-flex{
    display: flex;
    justify-content: space-between;

    .col-choose-us{
      width: 50%;
      margin-top: 80px;
      margin-right: 20px;
  

      .cont-choose-us{
        display: flex;
        align-items: center;
        gap: 20px;
        margin-bottom: 20px;
        color: $light_grey;

        img{
          width: 40px;
        }
      }  

      ul{
        list-style-type: none;
        margin-top: 20px;

        li{
          display: flex;
          align-items: center;
          margin-top: 30px;

          img{
            width: 120px;
            height: 120px;
          }

          .text{
            margin-left: 20px;
            line-height: 20px;

            h5{
              font-size: 20px;
            }

            p{
              font-size: 18px;
            }
          }
        }
      }
    }
  }
}

.review-rating{
  padding: 80px 0;

  h4{
    margin-left: 40px;
  }

  .container-flex{
    display: flex;
    justify-content: space-between;

    .col-review-rating{
      width: 40%;
    }    
  }
}


</style>
