<script>
import { store } from '../../store';
import AppJumbo from '../AppJumbo.vue';

export default{

  name : 'AppServices',
  components: {
    AppJumbo,
  },
  
  data(){
    return{
      store,
      services: [
        {
          url: '/public/img/AppServices/ser-1.png',
          title: 'Coat Handler Pets',
          text: 'The standard chunk of Lorem Ipsum used since.',
        },
        {
          url: '/public/img/AppServices/ser-2.png',
          title: 'Pet Security',
          text: 'The standard chunk of Lorem Ipsum used since.',
        },
        {
          url: '/public/img/AppServices/ser-3.png',
          title: 'Night Care',
          text: 'The standard chunk of Lorem Ipsum used since.',
        },
        {
          url: '/public/img/AppServices/ser-4.png',
          title: 'Dog Walking',
          text: 'The standard chunk of Lorem Ipsum used since.',
        },
        {
          url: '/public/img/AppServices/ser-5.png',
          title: 'Puppy Sitting',
          text: 'The standard chunk of Lorem Ipsum used since.',
        },
        {
          url: '/public/img/AppServices/ser-6.png',
          title: 'Pet Sitting',
          text: 'The standard chunk of Lorem Ipsum used since.',
        },
      ]
    }
  },
  
}

</script>

<template>
  <AppJumbo backgroundImage="/public/img/AppServices/banner3.png" title="Services" :subtitle="store.lorem" blueButtonMd="/public/img/up-a.png" />
  <!-- prima parte -->
  <section>
    <div class="container upper">
      <!-- immagine sinistra -->
      <div class="cont-img">
        <img src="/public/img/AppServices/service-ab.png" alt="dogs">
      </div>
      <!-- contenuto destra -->
      <div class="content">
        <!-- titoletto -->
        <div class="service">
          <img src="/public/img/dog-icon.png" alt="dog-paw">
          <h4>Service</h4>
        </div>
        <!-- titolo principale -->
        <h2>Your Pet Our Passion</h2>
         <!-- paragrafi -->
        <p>{{ store.lorem }}</p>
        <p>{{ store.lorem }}</p>
      </div>
    </div>
  </section>

  <!-- seconda parte -->
   <section class="bg">
    <div class="container lower">
      <h4>Service</h4>
      <h2>
        DogMilo Pet Care Services
        <br>
        For Your Best Friends.
      </h2>
      <!-- parte cards -->
      <div class="card-container">
        <div v-for="(service, index) in services" :key="index" class="card">
          <div class="cont-img">
            <img :src="service.url" :alt="service.title">
          </div>
          <h4>{{ service.title }}</h4>
          <p>{{ service.text }}</p>
          <div class="triangle"></div>
          <img class="arrow" src="/public/img/AppServices/uparrow.png" alt="">
        </div>
      </div>
    </div>
   </section>

</template>

<style lang="scss" scoped>
@use '../../styles/partials/mixins' as *;
@use '../../styles/partials/variables' as *;

.upper,
.lower {
  padding: 80px 0;
}

.upper {
  display: flex;
  justify-content: space-between;
  align-items: center;

  .cont-img {
    width: 45%;
    margin-right: 30px;
  }

  .content {
    width: 45%;

    .service {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 30px;

      img {
        width: 40px;
      } 
    }
  }
}

.bg {
  background-color: $light_grey;

  .lower {
    text-align: center;

    h4 {
      margin-bottom: 30px;
    }

    h2 {
      margin-bottom: 20px;
    }

    .card-container {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      flex-wrap: wrap;

      .card:hover {
        background-color: $brown;
        transition: background-color linear 0.2s;
        cursor: pointer;
      }

      .card {
        width: calc((100% / 3) - 20px);
        text-align: center;
        background-color: $white;
        padding: 30px 40px;
        position: relative;

        .cont-img {
          padding: 10px;
          width: 180px;
          height: 180px;
          display: inline-block;
          margin-bottom: 30px;
          
          img {
            border-radius: 50%;
            border: 3px solid $white;
            box-shadow: 0px 4px 8px #a2a1a1;
          }
        }

        h4 {
          color: black;
        }

        p {
          margin-bottom: 40px;
        }

        .triangle,
        .arrow {
          position: absolute;
          bottom: 0;
          left: 0;
        }

        .triangle {
            border-right: 90px solid transparent;
            border-bottom: 90px solid $brown;
        }

        .arrow {
          color: $white;
          width: 50px;
        }
        
      }
    }
  }
}

// tablet version
@media (max-width: 1030px) {
  .upper { 
    align-items: flex-end;

    .cont-img {
      width: 60%;
    }
  }

  .bg {
    .lower {
      .card-container {
        .card {
          width: calc((100% / 2) - 20px);
        }
      }
    }
  }
}

// mobile version
@media (max-width: 770px) {
  .upper {
    flex-direction: column-reverse;
    width: 100%;
    gap: 30px;
    
    .cont-img,
    .content {
      width: 80%;
      margin: 0 auto;
    }
  }

  .bg {
    .lower {
      .card-container {
        .card {
          width: 100%;
        }
      }
    }
  }
}

</style>
