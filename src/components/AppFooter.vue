<script>

export default{

  name : 'AppFooter',

  data(){
    return{

      contactInfo : [
    {
        section: "Get In Touch",
        details: [
            "Have a Question for us ?",
            "We’ll answer your problem here"
        ]
    },
    {
        section: "Support",
        details: [
            "Contact Us",
            "Online Chat",
            "Whatsapp",
            "Telegram",
            "Snapchat"
        ]
    },
    {
        section: "About",
        details: [
            "About Us",
            "Blog",
            "Career",
            "Job",
            "In Press"
        ]
    },
    {
        section: "Faq",
        details: [
            "Account",
            "Order",
            "Delivery",
            "Payments",
            "Returns"
        ]
    },
    {
        section: "Contact Me",
        details : [
          "4500 Mercantile plaza, Suite 300, Fort Worth, TX, 76137, USA",
          "+0 123-456-7890",
          "info@example.com"

        ]
    }
  ],
    }
  },

  

}

</script>

<template>
  <div class="background">
    <div class="container">

      <!-- list -->
      <ul v-for="info in contactInfo">
        <li class="title"><h4>{{ info.section }}</h4></li>
        <li v-for="element in info.details" class="element"><p class="small">{{element}}</p></li>
      </ul>

    </div>
    <section>
      <p class="copyright small">Copyright © 2024 dogmilo-wordpress | Powered by dogmilo-wordpress</p>
    </section>

    <div class="container orange">

      <div class="img-box">
        <img src="/public/img/footer_dogs.png" alt="">
      </div>

      <div class="input-box">
        <h2>Subscribe to our newsletter</h2>
        <div class="input-bar">
          <input type="email" placeholder="Email">
          <button>@</button>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

p.small {
    font-size: 15px;
    margin-top: 15px;
    color: lightgrey;
}

.background{
  background-color: black;
  min-height: 30px;
  color: white;
  padding: 50px 0;
  margin-top: 200px;
  position: relative;
  padding-top: 200px;


  .container{
    display: flex;
    padding-bottom: 70px;

    ul{
      width: calc(100% / 5);
      padding: 0 20px;
    .title{
      h4{
        color: $orange;

      }
    }

    }

  }
}

section{
  width: 80%;
  margin: 0 auto;
  text-align: center;
  border-top: 1px solid white;
  .copyright{
    margin: 0 auto;
    padding: 20px 0;
  }
}

.container.orange{
  background-color: $orange;
  min-height: 30px;
  max-height: 300px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
  border-radius: 25px;
  display: flex;
  justify-content: end;
  align-items: center;

  .img-box{
    width: calc((100% / 5) * 2 );
    

    img{
      display: block;
    }
  }
  .input-box{
    width: calc((100% / 5) * 3 );
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
    
    &.input-box>*{
      width: 100%;
    }

    .input-bar{
      display: flex;

      input{
      width: 80%;
      height: 3rem;
      padding: 1rem;
    }

      button{
        background-color: black;
        height: 3rem;
        padding: 1rem;
        color: white;
        width: 20%;
        line-height: 1rem;
        font-size: 2rem;
      }
    }
  }
}

</style>
