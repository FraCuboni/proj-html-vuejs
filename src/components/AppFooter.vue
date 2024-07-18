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
        address: "4500 Mercantile plaza, Suite 300, Fort Worth, TX, 76137, USA",
        phone: "+0 123-456-7890",
        email: "info@example.com"
    }
  ],
    }
  },

  

}

</script>

<template>
  <div class="background">
    <div class="container">
      <ul v-for="info in contactInfo">
        <li class="title">{{ info.section }}</li>
        <li v-for="element in info.details" class="element">{{element}}</li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.background{
  background-color: $grey;
  min-height: 30px;
  color: white;


  .container{

    .title{
      color: $orange;
    }
  }
}

</style>
