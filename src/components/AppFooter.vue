<script>

export default{

  name : 'AppFooter',

  data(){
    return{

      contactInfo : [
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
  ],
    }
  },

  

}

</script>

<template>
  <div class="background">
    <div class="container">

      <!-- list -->
      <ul>
        <li class="title"><h4>Get In Touch</h4></li>
        <li class="element"><p class="small">Have a Question for us ?</p></li>
        <li class="element"><p class="small">We’ll answer your problem here</p></li>
        <li>
          <div class="socials">
            <i class="fa-brands fa-facebook"></i>
            <i class="fa-brands fa-twitter"></i>
            <i class="fa-brands fa-instagram"></i>
            <i class="fa-brands fa-linkedin"></i>
            <i class="fa-brands fa-pinterest"></i>
          </div>
        </li>
      </ul>

      

      <!-- list -->
      <ul v-for="info in contactInfo">
        <li class="title"><h4>{{ info.section }}</h4></li>
        <li v-for="element in info.details" class="element"><a href="#"><p class="small">{{element}}</p></a></li>
      </ul>

      <!-- list -->
      <ul class="icons">
        <li class="title"><h4>Contact Me</h4></li>
        <li class="element"><p class="small"><i class="fa-solid fa-location-arrow"></i> 4500 Mercantile plaza, Suite 300, Fort Worth, TX, 76137, USA</p></li>
        <li class="element"><p class="small">+0 123-456-7890</p></li>
        <li class="element"><p class="small"><i class="fa-solid fa-envelope"></i>info@example.com</p></li>
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

a{
  text-decoration: none;

  &:hover{
    text-decoration: underline;
    color: white;
  }
}

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
  border-top: 1px solid $light_grey;
  .copyright{
    margin: 0 auto;
    padding: 20px 0;
    color: $light_grey;
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
    width: 40%;
    

    img{
      display: block;
    }
  }
  .input-box{
    width: 60%;
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

.socials {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: $white;

  .contacts>div {
    margin-right: 80px;
  }

  .fa-solid {
    margin-right: 8px;
    color: $orange;
  }

  .fa-brands {
    padding: 6px;
    border-radius: 3px;
    margin-left: 2px;
  }

  .fa-facebook {
    background-color: #303fc0;
  }

  .fa-twitter {
    background-color: #7bd1d2;
  }

  .fa-instagram {
    background-color: #ab27b8;
  }

  .fa-linkedin {
    background-color: #045fd2;
  }

  .fa-pinterest {
    background-color: #bd081b;
  }
}

ul.icons{

  li.element{
    position: relative;
    padding-left: 30px;
    margin-bottom: 10px;

    i{
      position: absolute;
      left: 0;
      top: 0;
      color: $orange;
      font-size: 1.5rem;
        
    }
  }

}

</style>
