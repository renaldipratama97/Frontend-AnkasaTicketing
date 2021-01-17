<template>
  <div class="home">
    <Header />
    <main>
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6 col-md-6 col-8 mb-5">
            <div class="text-main">
              <h1>Find your <span class="flight">Flight</span></h1>
              <h1 class="explore">and explore the world with us</h1>
            </div>
            <div class="half-image mt-5">
              <img src="../assets/half-image.png" alt="" />
              <img src="../assets/vector-6.png" class="oval" alt="" />
            </div>
          </div>
          <div class="col-lg-6 col-md-6 col-4 text-right">
            <img src="../assets/half-the-picture.png" alt="" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4 col-md-5 col-10 box-search">
            <div class="question">
              <h6>Hey,</h6>
              <h6>Where you want to go?</h6>
            </div>
            <div class="recently-search">
              <h6>Recently Searched</h6>
              <img src="../assets/btnback.png" alt="" />
            </div>
            <div class="destination-country">
              <div class="from">
                <h6>From</h6>
                <h3 class="city">Medan</h3>
                <h6 class="country">Indonesia</h6>
              </div>
              <img src="../assets/transfer.png" alt="" />
              <div class="to">
                <h6>To</h6>
                <h3 class="city">Tokyo</h3>
                <h6 class="country">Japan</h6>
              </div>
            </div>
            <div class="button-function">
              <button type="submit" class="btn-one-way">
                <img src="../assets/icon-airline.png" alt="icon airline" /> One
                way
              </button>
              <button type="submit" class="btn-round-trip">
                <img src="../assets/round-trip.png" alt="round trip" /> Round
                trip
              </button>
            </div>
            <div class="departure">
              <h6>Departure</h6>
              <div class="box-date">
                <h6>Monday, 20 July 2020</h6>
                <img src="../assets/btnback.png" alt="" />
              </div>
            </div>
            <div class="how-many">
              <h6>How Many Person</h6>
              <div class="box-person">
                <div class="child">
                  <h6>2 Child</h6>
                  <img src="../assets/btnback.png" alt="" />
                </div>
                <div class="adult">
                  <h6>4 Adult</h6>
                  <img src="../assets/btnback.png" alt="" />
                </div>
              </div>
            </div>
            <div class="class-airline">
              <h6>Which class do you want?</h6>
              <form>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="inlineRadio1"
                  />
                  <label class="form-check-label" for="inlineRadio1"
                    >Economy</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="inlineRadio2"
                  />
                  <label class="form-check-label" for="inlineRadio2"
                    >Business</label
                  >
                </div>
                <div class="form-check form-check-inline">
                  <input
                    class="form-check-input"
                    type="radio"
                    id="inlineRadio3"
                  />
                  <label class="form-check-label" for="inlineRadio3"
                    >First Class</label
                  >
                </div>
              </form>
            </div>
            <button type="submit" class="search">
              SEARCH FLIGHT <img src="../assets/arrow-right.png" alt="" />
            </button>
          </div>
        </div>
      </div>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-lg-12 col-md-12">
              <h6>Treding</h6>
            </div>
            <div class="col-lg-12 col-md-12">
              <div class="trending-destination">
                <h4>Trending Destination</h4>
                <h5>View all</h5>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-2 col-md-3 col-sm-6 col-5">
              <div class="box-photo">
                <div class="number-plane">
                  <h6 class="airlines"><span>15</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Tokyo,</h6>
                  <div class="click-more">
                    <h4>Japan</h4>
                    <img src="../assets/more.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 col-5 box-card">
              <div class="box-photo-barcelona">
                <div class="number-plane">
                  <h6 class="airlines"><span>22</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Barcelona,</h6>
                  <div class="click-more">
                    <h4>Spain</h4>
                    <img src="../assets/more.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 col-5 box-card">
              <div class="box-photo">
                <div class="number-plane">
                  <h6 class="airlines"><span>15</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Tokyo,</h6>
                  <div class="click-more">
                    <h4>Japan</h4>
                    <img src="../assets/more.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 col-5 box-ops">
              <div class="box-photo-barcelona">
                <div class="number-plane">
                  <h6 class="airlines"><span>22</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Barcelona,</h6>
                  <div class="click-more">
                    <h4>Spain</h4>
                    <img src="../assets/more.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-2 col-md-3 col-sm-6 col-5 box-card">
              <div class="box-photo">
                <div class="number-plane">
                  <h6 class="airlines"><span>15</span> Airlines</h6>
                </div>
                <div class="country">
                  <h6>Tokyo,</h6>
                  <div class="click-more">
                    <h4>Japan</h4>
                    <img src="../assets/more.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-12 col-sm-12">
            <section class="top-destination">
              <h6 class="top-ten">Top 10</h6>
              <p>Top 10 destinations</p>
              <div class="container">
                <div class="row">
                  <vueper-slides
                    class="no-shadow thumbnails"
                    fixed-height="250px"
                    :visible-slides="3"
                    slide-multiple
                    :gap="3"
                    :slide-ratio="1 / 4"
                    :dragging-distance="200"
                    :breakpoints="{
                      800: { visibleSlides: 2, slideMultiple: 2 },
                    }"
                  >
                    <vueper-slide
                      v-for="(slide, i) in slides"
                      :key="i"
                      :content="slide.content"
                      :image="slide.image"
                      class="image content box-top-destination"
                    />
                  </vueper-slides>
                </div>
              </div>
              <img src="../assets/img-top-destination.png" alt="plane">
            </section>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
</template>

<script>
import Footer from '../components/module/Footer'
import Header from '../components/module/Header'
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'
export default {
  name: 'LandingPage',
  components: {
    Footer,
    Header,
    VueperSlides,
    VueperSlide
  },
  data () {
    return {
      slides: [
        {
          content: 'Paris',
          image: require('../assets/paris.png')
        },
        {
          content: 'Bali',
          image: require('../assets/bali.png')
        },
        {
          content: 'Singapore',
          image: require('../assets/singapore.png')
        },
        {
          content: 'Agra',
          image: require('../assets/agra.png')
        },
        {
          content: 'Sydney',
          image: require('../assets/sydney.png')
        }
      ]
    }
  }
}
</script>

<style scoped>
.thumbnails {
  margin: 50px auto;
  width: 600px;
  color: #ffffff;
  font-size: 28px;
}

.image {
  margin-top: 10px;
}

.content {
  padding-top: 70px;
  font-weight: bold;
}

.col-lg-6 {
  padding: 0;
}

.container {
  position: relative;
}

main {
  background: #ffffff;
  height: fit-content;
}

main .text-main {
  margin-top: 80px;
}

main .text-main h1 {
  font-weight: 600;
  font-size: 54px;
  color: #414141;
  margin-left: 100px;
}

main .text-main .flight {
  color: #2395ff;
}

main .text-main .explore {
  font-weight: 400;
  font-size: 18px;
}

main .half-image {
  display: flex;
}

main .half-image img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 40px;
}

main .half-image .oval {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-top: 280px;
  margin-left: 200px;
}

main img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
}

main .box-search {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 400px;
  height: 750px;
  position: absolute;
  top: 200px;
  left: 600px;
}

main .box-search .question {
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .recently-search {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .recently-search h6 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #2395ff;
}

main .box-search .recently-search img {
  margin-left: 180px;
}

main .box-search .destination-country {
  background: #ffffff;
  box-shadow: 0px 8px 27px rgba(14, 63, 108, 0.19);
  border-radius: 12px;
  width: 319px;
  height: 97px;
  margin: 30px auto;
  display: flex;
}

main .box-search .destination-country img {
  margin-left: 80px;
}

main .box-search .destination-country .from,
main .box-search .destination-country .to {
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-left: 10px;
}

main .box-search .destination-country .from h6,
main .box-search .destination-country .to h6 {
  font-size: 12px;
  line-height: 14px;
  color: #979797;
  font-family: "Lato", sans-serif;
}

main .box-search .destination-country .from h3,
main .box-search .destination-country .to h3 {
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000000;
}

main .box-search .destination-country .to {
  margin-left: 80px;
}

main .box-search .button-function,
main .box-search .departure {
  display: flex;
  flex-direction: row;
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .button-function .btn-one-way img {
  margin-left: -10px;
}

main .box-search .button-function .btn-round-trip img {
  margin-left: -10px;
}

main .box-search .button-function .btn-one-way,
main .box-search .button-function .btn-round-trip {
  background: #2395ff;
  border-radius: 6px;
  width: 143.82px;
  height: 44px;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #ffffff;
  border: none;
  margin-left: 10px;
}

main .box-search .button-function .btn-round-trip {
  background: #f0f0f0;
  color: #595959;
  margin-left: 20px;
}

main .box-search .departure,
main .box-search .how-many {
  display: flex;
  flex-direction: column;
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .departure h6,
main .box-search .how-many h6,
main .box-search .class-airline h6 {
  font-weight: 500;
  font-size: 14px;
  line-height: 22px;
  color: #6b6b6b;
}

main .box-search .departure .box-date {
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 6px;
  width: 319px;
  height: 55px;
  display: flex;
  flex-direction: row;
}

main .box-search .departure .box-date h6,
main .box-search .how-many .box-person .child h6,
main .box-search .how-many .box-person .adult h6 {
  font-weight: bold;
  font-size: 14px;
  line-height: 22px;
  color: #000000;
  font-family: "Lato", sans-serif;
  margin-top: 15px;
  margin-left: 20px;
}

main .box-search .departure .box-date img {
  margin-left: 120px;
}

main .box-search .how-many .box-person {
  display: flex;
  flex-direction: row;
}

main .box-search .how-many .box-person .child,
main .box-search .how-many .box-person .adult {
  border: 1px solid #dddddd;
  box-sizing: border-box;
  border-radius: 6px;
  width: 149px;
  height: 55px;
  display: flex;
}

main .box-search .how-many .box-person .adult {
  margin-left: 20px;
}

main .box-search .how-many .box-person .child img,
main .box-search .how-many .box-person .adult img {
  margin-left: 50px;
}

main .box-search .class-airline {
  margin-top: 30px;
  margin-left: 20px;
}

main .box-search .class-airline form {
  margin-top: 10px;
  margin-left: 0px;
}

main .box-search button {
  background: #2395ff;
  box-shadow: 0px 8px 10px rgba(35, 149, 255, 0.3);
  border-radius: 10px;
  width: 100%;
  height: 57px;
  font-weight: bold;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border: none;
  margin-top: 10px;
}

main .box-search img {
  margin-left: 50px;
}

main section {
  background: #ffffff;
  height: fit-content;
}

main section h6 {
  font-weight: 500;
  font-size: 14px;
  color: #2395ff;
  margin-top: 50px;
  letter-spacing: 0.3em;
}

main section .trending-destination {
  display: flex;
  margin-bottom: 50px;
}

main section .trending-destination h4 {
  font-weight: 600;
  font-size: 24px;
  color: #000000;
}

main section .trending-destination h5 {
  font-weight: 600;
  font-size: 16px;
  color: #2395ff;
  margin-left: 70%;
}

main section .box-card {
  margin-left: 30px;
}

main section .box-ops {
  margin-left: 30px;
}

main section .box-photo {
  background: url("../assets/japan.png");
  border-radius: 20px;
  width: 206px;
  height: 262px;
  object-fit: contain;
  padding-top: 20px;
  margin-bottom: 70px;
}

main section .box-photo-barcelona {
  background: url("../assets/barcelona.png");
  border-radius: 20px;
  width: 206px;
  height: 262px;
  object-fit: contain;
  padding-top: 20px;
}

main section .number-plane {
  background: rgba(255, 255, 255, 0.41);
  border-radius: 33px;
  width: 88px;
  height: 28px;
  margin-left: 20px;
}

main section .number-plane span {
  font-weight: bold;
}

main section .number-plane h6.airlines {
  font-size: 12px;
  color: #ffffff;
  margin: 10px 10px;
  padding-top: 5px;
  letter-spacing: 0;
}

main section .country {
  margin-left: 20px;
  margin-top: 140px;
}

main section .country h6 {
  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  line-height: 0;
  letter-spacing: 0;
}

main section .country .click-more {
  display: flex;
}

main section .country .click-more h4 {
  font-weight: 600;
  font-size: 24px;
  color: #ffffff;
}

main section .country .click-more img {
  margin-left: 70px;
}

main section.top-destination {
  background: #2395FF;
  border-radius: 60px;
  height: 550px;
  max-width: 100%;
}

main section.top-destination img {
  position: absolute;
  top: 258px;
}

main section.top-destination .top-ten {
  font-weight: 500;
  font-size: 14px;
  letter-spacing: 0.3em;
  color: #ffffff;
  text-align: center;
  padding-top: 50px;
}

main section.top-destination p {
  font-weight: 600;
  font-size: 24px;
  line-height: 36px;
  color: #ffffff;
  text-align: center;
}

main section.top-destination .box-top-destination {
  width: 185px;
  height: 185px;
  border: 5px solid #ffffff;
  border-radius: 100%;
  object-fit: contain;
}

@media (max-width: 1192px) {
  main .box-search {
    left: 500px;
    height: 800px;
  }
}

@media (max-width: 1196px) {
  main section .box-card {
    margin-left: 80px;
  }
}

@media (max-width: 1096px) {
  main .box-search .button-function {
    margin-left: 10px;
  }

  main .box-search .departure,
  main .box-search .how-many {
    margin-left: 10px;
  }
}

@media (max-width: 1070px) {
  main .box-search {
    left: 400px;
  }
}

@media (max-width: 1024px) {
  main section .box-ops {
    margin-left: 80px;
  }
}

@media (max-width: 988px) {
  main .box-search {
    width: 500px;
  }
}

@media (max-width: 943px) {
  main .half-image .oval {
    margin-left: 150px;
  }
}

@media (max-width: 848px) {
  main .half-image .oval {
    margin-left: 100px;
  }
}

@media (max-width: 790px) {
  main .half-image .oval {
    margin-left: 80px;
  }

  main .box-search {
    left: 300px;
    width: 400px;
  }
}

@media (max-width: 768px) {
  main .box-search {
    left: 350px;
  }

  main .box-search .button-function,
  main .box-search .departure {
    margin-top: 30px;
    margin-left: -10px;
  }

  main .box-search .departure,
  main .box-search .how-many {
    margin-top: 30px;
    margin-left: 0px;
  }

  main .box-search .destination-country {
    width: 250px;
  }

  main .box-search .destination-country img {
    margin-left: 50px;
  }

  main .box-search .destination-country .to {
    margin-left: 50px;
  }

  main .box-search .departure .box-date {
    width: 280px;
    height: 63px;
  }

  main section .box-card {
    margin-left: 35px;
  }

  .thumbnails {
    width: 300px;
  }

  main section.top-destination {
    margin-top: 10px;
  }

  main section.top-destination .box-top-destination {
    width: 150px;
    height: 150px;
  }
}

@media (max-width: 640px) {
  main .box-search {
    left: 50px;
    top: 400px;
  }

  main .box-search .button-function,
  main .box-search .departure {
    margin-left: 20px;
  }

  main .box-search .departure,
  main .box-search .how-many {
    margin-left: 20px;
  }

  main .box-search .destination-country {
    width: 250px;
  }

  main .box-search .destination-country img {
    margin-left: 50px;
  }

  main .box-search .destination-country .to {
    margin-left: 50px;
  }

  main .box-search .departure .box-date {
    width: 320px;
    height: 60px;
  }

  main section {
    margin-top: 180px;
  }

  main section .trending-destination h5 {
    margin-left: 30%;
  }

  main .text-main h1 {
    margin-left: 60px;
  }

  main .half-image .oval {
    margin-left: -100px;
  }

  main section .box-card {
    margin-left: 0px;
  }

  main section .box-ops {
    margin-left: 0px;
  }
}

@media (max-width: 540px) {
  main .box-search {
    left: 50px;
    top: 400px;
  }

  main .box-search .button-function,
  main .box-search .departure {
    margin-left: 20px;
  }

  main .box-search .departure,
  main .box-search .how-many {
    margin-left: 20px;
  }

  main .box-search .destination-country {
    width: 250px;
  }

  main .box-search .destination-country img {
    margin-left: 50px;
  }

  main .box-search .destination-country .to {
    margin-left: 50px;
  }

  main .box-search .departure .box-date {
    width: 320px;
    height: 60px;
  }

  main section {
    margin-top: 180px;
  }

  main section .trending-destination h5 {
    margin-left: 30%;
  }

  main .text-main h1 {
    margin-left: 60px;
  }

  main .half-image .oval {
    margin-left: -100px;
  }

  main section .box-card {
    margin-left: 10px;
  }

  main section .box-ops {
    margin-left: 10px;
  }
}

@media (max-width: 414px) {
  main .box-search {
    left: 30px;
    top: 500px;
  }

  main .box-search .button-function,
  main .box-search .departure {
    display: flex;
    flex-direction: row;
    margin-top: 30px;
    margin-left: -10px;
  }

  main .box-search .departure,
  main .box-search .how-many {
    display: flex;
    flex-direction: column;
    margin-top: 30px;
    margin-left: 0px;
  }

  main section {
    margin-top: 180px;
  }

  main .text-main h1 {
    margin-left: 60px;
  }

  main .half-image .oval {
    margin-left: -150px;
  }

  main section .box-card {
    margin-left: 5px;
  }

  .thumbnails {
    width: 240px;
    font-size: 20px;
  }

  main section .box-photo {
    width: 160px;
    height: 200px;
  }

  main section .box-photo-barcelona {
    width: 160px;
    height: 200px;
  }

  main section .number-plane h6.airlines {
    margin: 0px 10px;
  }

  main section .country {
    margin-top: 100px;
  }

  main section .country .click-more img {
    margin-left: 30px;
  }

  main section.top-destination {
    margin-top: 10px;
  }

  main section.top-destination img {
    top: 347px;
    width: 300px;
    height: 300px;
  }

  main section.top-destination .box-top-destination {
    width: 120px;
    height: 120px;
  }
}

@media (max-width: 380px) {
  main .box-search {
    height: 820px;
  }

  main .box-search .destination-country {
    width: 250px;
  }

  main .box-search .destination-country img {
    margin-left: 50px;
  }

  main .box-search .destination-country .to {
    margin-left: 50px;
  }

  main .box-search .departure .box-date {
    width: 260px;
    height: 63px;
  }

  main .box-search .how-many .box-person .child,
  main .box-search .how-many .box-person .adult {
    height: 60px;
  }

  main section {
    margin-top: 280px;
  }

  main section .box-card {
    margin-left: 13px;
  }
}

@media (max-width: 360px) {
  main .box-search .recently-search img {
    margin-left: 80px;
  }

  main .box-search .destination-country {
    width: 230px;
  }

  main .box-search .destination-country img {
    margin-left: 30px;
  }

  main .box-search .departure .box-date {
    width: 230px;
    height: 70px;
  }

  main .box-search .departure .box-date h6 {
    margin-left: 10px;
  }

  main .box-search .departure .box-date img {
    margin-left: 90px;
  }

  main .box-search .how-many .box-person .child img,
  main .box-search .how-many .box-person .adult img {
    margin-left: 10px;
  }

  main section {
    margin-top: 280px;
  }

  main section .trending-destination h5 {
    margin-left: 30%;
  }

  main .half-image .oval {
    margin-left: -120px;
  }

  main section .box-card {
    margin-left: 5px;
  }

  main section .box-photo {
    width: 120px;
    height: 200px;
  }

  main section .box-photo-barcelona {
    width: 120px;
    height: 200px;
  }

  main section .country .click-more img {
    margin-left: 10px;
  }

  .thumbnails {
    width: 200px;
    font-size: 10px;
  }

  main section.top-destination img {
    top: 429px;
    left: 32px;
    width: 200px;
    height: 200px;
  }

  main section.top-destination .box-top-destination {
    width: 100px;
    height: 100px;
  }
}
</style>
