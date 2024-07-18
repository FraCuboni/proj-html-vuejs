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
        <li class="title">{{ info.section }}</li>
        <li v-for="element in info.details" class="element">{{element}}</li>
      </ul>

    </div>
    <section>
      <p class="copyright">Copyright © 2024 dogmilo-wordpress | Powered by dogmilo-wordpress</p>
    </section>

    <!-- sezione in absolute -->
    <div class="container orange">

      <div class="img-box">
        <img src="/public/img/footer_dogs.png" alt="">
      </div>

      <div class="input-box">
        <h2>Subscribe to our newsletter</h2>
        <input type="email">
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

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

    ul{
      width: calc(100% / 5);
    .title{
      color: $orange;
    }

    }

  }
}

section{
  width: 70%;
  margin: 0 auto;
  text-align: center;
  border-top: 2px solid $grey;
  .copyright{
    color: $grey;
    margin: 0 auto;
  }
}

// sezione in absolute
.container.orange{
  background-color: $orange;
  min-height: 30px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 0;
  left: 50%;
  border-radius: 25px;
  display: flex;
  justify-content: end;
  align-items: center;

  .img-box{
    width: calc(100% / 3);
  }
  .input-box{
    width: calc((100% / 3) * 2 );
    display: flex;
    flex-direction: column;
    padding: 30px;
  }
}

</style>
