<script>

export default{
  name : 'AppHeader',
  data() {
    return {
      openDropdown: null,
    }
  },

  methods: {
    openMenu(index) {
      this.openDropdown = index;
    },

    closeMenu() {
      this.openDropdown = null;
    },

    isOpen(index) {
      return this.openDropdown === index;
    }
  }

}

</script>

<template>
  <header>
    <!-- parte superiore header -->
    <div class="upper">
      <div class="container">
        <!-- contatti -->
        <div class="contacts">
          <div>
            <i class="fa-solid fa-envelope"></i>
            <span>info@example.com</span>
          </div>
          <div>
            <i class="fa-solid fa-phone"></i>
            <span>+0 123-456-7890</span>
          </div>
        </div>
        <!-- indirizzi social -->
        <div class="socials">
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-twitter"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-pinterest"></i>
        </div>
      </div>
    </div>
    <!-- parte inferiore header -->
    <div class="lower">
      <div class="container">
        <div class="logo">
          <img src="/public/img/logo.png" alt="logo">
        </div>
        <nav>
          <ul>
            <li @mouseover="openMenu(0)">
              <router-link :to="{name: 'home'}" class="route main-nav">
                <span>Home</span>
                <i class="fa-solid fa-chevron-down"></i>
              </router-link>
              <ul class="dropdown" v-if="isOpen(0)" @mouseover="openMenu(0)" @mouseleave="closeMenu">
                <li><router-link :to="{name: 'home'}" class="route drop-menu">Home 1</router-link></li>
                <li><router-link :to="{name: 'home'}" class="route drop-menu">Home 2</router-link></li>
                <li><router-link :to="{name: 'home'}" class="route drop-menu">Home 2</router-link></li>
              </ul>
            </li>
            <li>
              <router-link :to="{name: 'about'}" class="route">
                <span>About</span>
                <i class="fa-solid fa-chevron-down"></i>
              </router-link>
            </li>
            <li>
              <router-link :to="{name: 'services'}" class="route">
                <span>Services</span>
                <i class="fa-solid fa-chevron-down"></i>
              </router-link>
            </li>
            <li>
              <a href="#" class="route">Training</a>
            </li>
            <li>
              <a href="#" class="route">Blogs</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;
@use '../styles/partials/variables' as *;

.upper {
  height: 50px;
  background-color: $brown;

  .container,
  .contacts,
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
      padding: 8px;
      border-radius: 3px;
      margin-left: 5px;
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
}

.lower {
  height: 100px;
  background-color: $white;

  .container,
  nav>ul {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li:hover .main-nav {
      color: $orange;
    }

    li {
      list-style-type: none;
      margin-left: 40px;
      position: relative;

      .route {
        text-decoration: none;
        color: gray;
        font-size: 25px;
        font-weight: 500;

        .fa-chevron-down {
          margin-left: 10px;
          font-size: 15px;
        }
      }

      .dropdown {
        // display: none;
        width: 220px;
        position: absolute;
        top: 180%;
        left: -30px;
        background-color: $white;
        
        li {
          margin: 0;
          padding: 20px 0 20px 20px;
          border-bottom: 1px solid $light_grey;

          .drop-menu:hover {
            color: $orange;
          }
        }
      }
    }
  }
}

</style>
