<template>
  <header id="dynamic" :class="(dynamicClass===true?'newClass':'')">
    <div class="container-fluid">

      <div class="flex-header">

        <div class="logo">
          <a href=""><img src="~/assets/images/logo.png"></a>
        </div>

        <nav id='cssmenu'>
          <div id="head-mobile"></div>
          <div class="button"></div>
          <ul class="hdr-menu">
            <li><a href='#'>כרטיס מתנה</a></li>
            <li><a href='#'>אביזרים</a></li>
            <li><a href='#'>נעליים</a></li>
            <li><a href='#'>ביגוד</a></li>
            <li class="red-tag"><a href='#'>SALE</a></li>
          </ul>
        </nav>

        <div class='cart-blk'>
          <ul>
            <li><a href=""><img src="~/assets/images/search-black-30.png"></a></li>
            <li><a href=""><img src="~/assets/images/user-21.png"></a></li>
            <li><a href=""><img src="~/assets/images/cart-25.png"></a></li>
          </ul>
        </div>

      </div>
    </div>

    <div class="sub-div">
      <ul>
        <li><a href="">כל הנעליים</a></li>
        <li><a href="">VAGABOND</a></li>
        <li><a href="">ANGEL ALARCON</a></li>
      </ul>
    </div>

    <div class="sub-divs">
      <ul>
        <li><a href="">OUTLET</a></li>
      </ul>
      <ul>
        <li><a href="">מכנסיים וחצאיות</a></li>
        <li><a href="">אוברולים</a></li>
        <li><a href="">ז’קטים</a></li>
      </ul>
      <ul>
        <li><a href="">חולצות</a></li>
        <li><a href="">שמלות</a></li>
        <li><a href="">ג’ינסים</a></li>
      </ul>
      <ul>
        <li><a href="">קולקציה חדשה</a></li>
        <li><a href="">SALE</a></li>
        <li><a href="">BEST SELLERS</a></li>
      </ul>
    </div>
  </header>
</template>
<script>
export default {
  data: () => ({
  }),
  computed:{
    dynamicClass() {
      return this.$store.state.dynamicClass
    },
  }
};
</script>
