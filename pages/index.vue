<template>
  <div>
    <!-- Slider Start -->
    <section class="banner">
      <img src="~/assets/images/slider.jpg" alt="">
    </section>
    <!-- Slider End -->
    <!-- Category Sec Start -->
    <section class="category-blk">
      <div class="container">
        <ul>
          <li><a href="">חגורות</a></li>
          <li><a href="">Oscar & Frank sunglasses</a></li>
          <li><a href="">Chimi sunglasses</a></li>
          <li><a href="">כל הפריטים</a></li>
          <li><a href="">תיקים</a></li>
          <li><a href="">תכשיטים</a></li>
          <li><a href="">כובעים</a></li>
        </ul>
      </div>
    </section>
    <!-- Category Sec End -->
    <!-- Filter Sec Start -->
    <section id="dynamic2" class="filter-sec" :class="(dynamicClass2===true?'newClass2':'')">
      <div class="container">

        <div class="bredcurm">
          <ul>
            <li><a href="">עמוד הבית</a>&/אביזרים</li>
          </ul>
        </div>

        <div class="filetr-serch">
          <select>
            <option>סידור ברירת מחדל</option>
            <option>למיין לפי פופולריות</option>
            <option>למיין לפי המעודכן ביותר</option>
            <option>למיין מהזול ליקר</option>
            <option>למיין מהיקר לזול</option>
            <option>מיון לפי שם (א-ת)</option>
            <option>מיון לפי שם (ת-א)</option>
          </select>
        </div>

      </div>
    </section>
    <!-- Filter Sec End -->
    <section class="product-sec">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-3" v-for="i in 8" :key="i">
            <div class="prod-blk">
              <span>
                <div class="tag">
                  SALE
                </div>
                <img class="image-f" src="~/assets/images/image-f.jpg" alt="">
                <img class="image-s" src="~/assets/images/image-s.jpg" alt="">
              </span>
              <div class="prod-disp">
                <a href="" class="name-link">תיק קש רייצ’ל</a>
                <span class="line"></span>
                <div class="price">
                  <div class="regular-price has-sale">
                    <span class="int">299</span> <span class="symbol">₪</span>
                  </div>

                  <div class="sale-price">
                    <span class="int">249</span> <span class="symbol">₪</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data: () => ({
    data: {
    },
  }),
  async asyncData({ route, $http }) {

  },
  computed:{
    dynamicClass2() {
      return this.$store.state.dynamicClass2
    },
  }
};
</script>