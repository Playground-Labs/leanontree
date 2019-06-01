<template>
  <main id="overview">
    <content-categories-overview />
    <section id="site-description-and-navigation">
      <div id="landing-page-brief-introduction" class="brief-introduction">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.  Donec in ante id lectus consequat eleifend vitae sit amet nunc. Vestibulum ante ipsum primis in <span>faucibus orci luctus et</span> ultrices posuere cubilia Curae; Mauris feugiat condimentum sem, eget cursus odio placerat ut. Praesent porta elit libero, fermentum convallis massa euismod at. Proin a diam sagittis mi lobortis rhoncus. Praesent varius nisl sit amet lorem auctor tempus. In <span>feugiat</span> dignissim ultricies.</p>

        <p>Sed imperdiet laoreet sapien. Quisque dictum mi porta augue luctus dignissim. Vestibulum accumsan sollicitudin enim. Ut in pellentesque nisi. <span>In vulputate ornare</span> auctor. Integer id vehicula felis. Aliquam sed leo malesuada elit pellentesque tincidunt. Quisque fringilla non odio et aliquet.  <span>Vivamus</span> in fringilla mi. Donec efficitur nibh ac neque convallis, id sodales turpis faucibus. Duis convallis urna est, ut posuere ex venenatis eget. Sed dapibus justo ipsum, vel viverra odio mattis in. Nulla luctus ultrices posuere.</p>
      </div>
      <div class="navigation">
        <span id="helper-circle-for-categories-overview" class="lot-helper-circles">
          <i class="navigation-sign glyphicon glyphicon-tree-deciduous" aria-hidden="true" />
          <div class="navigation-text">Overview</div>

        </span>
        <span id="helper-circle-for-events-overview" class="lot-helper-circles">
          <i class="navigation-sign glyphicon glyphicon-flash" aria-hidden="true" />
          <div class="navigation-text">Events </div>

        </span>
        <span id="helper-circle-to-navigate-to-next-page-overview" class="lot-helper-circles">

          <i class="navigation-sign glyphicon glyphicon glyphicon-road" aria-hidden="true" />
          <div class="navigation-text">Explore</div>

        </span>
      </div>
    </section>
  </main>
</template>
<script>
import contentCategoriesOverview from '~/components/home/contentCategoriesOverview.vue'
const categoryOverviewNavigator = document.getElementById('helper-circle-for-categories-overview')
const helperCircleForCategoriesOverview = document.getElementById('helper-circle-for-categories-overview')
const helperCircleForEventsOverview = document.getElementById('helper-circle-for-events-overview')
const helperCircleToNavigateToNextPageOverview = document.getElementById('helper-circle-to-navigate-to-next-page-overview')
const briefIntroduction = document.getElementById('landing-page-brief-introduction')
const landingPageSiteCategoriesOveriew = document.getElementById('landing-page-site-categories-overiew')

if (categoryOverviewNavigator) {
  categoryOverviewNavigator.addEventListener('click', function () {
    helperCircleForCategoriesOverview.classList.add('disappear-navigation')
    helperCircleToNavigateToNextPageOverview.classList.add('disappear-navigation')
    helperCircleForEventsOverview.classList.add('disappear-navigation')
    briefIntroduction.classList.add('disappear-description')
    landingPageSiteCategoriesOveriew.classList.add('site-categories-overview')
  })
}

export default {
  components: {
    contentCategoriesOverview
  }
}
</script>
<style lang="scss" scoped>
#overview {
  height: 100vh;
  background: url('../../assets/img/lot/main-bg-8-opt.jpg');
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  @include flexbox();
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);
  #site-description-and-navigation {
    margin-top: 10vh;
    height: 90vh;
    @include flexbox();
    @include flex-direction(column);
    @include justify-content(space-evenly);
    @include align-items(center);
  }
}

.brief-introduction {
  max-width: 80vw;
  margin: 0 5vw 0 5vw;
  padding: 4vmin;
  background-color: mix(rgba(186, 187, 188, 0.4), rgba(124, 125, 126, 0.8), 50%);
  font-size: 2.8vmin;
  color: #F7F7F4;
  h1 {
    font-family: 'Oswald', sans-serif;
  }
  p {
    font-family: 'Crete Round', serif;
    span {
      font-size: 3vmin !important;
    }
    filter: blur(4px);
    @include animation(text_blur 1s cubic-bezier(.93, .26, .54, .74) 0.5ms 1 normal forwards running);
  }
  @include transition(all 500ms ease-out);
}

.disappear-description {
  @include transform(translateX(-50%));
  opacity: 0;
}

@include keyframes(text_blur) {
  0% {
    filter: blur(4px);
  }
  25% {
    filter: blur(3px);
  }
  50% {
    filter: blur(2px);
  }
  75% {
    filter: blur(1px);
  }
  100% {
    filter: blur(0px);
  }
}

.navigation {
  width: 100%;
  margin: 0 5vw 0 5vw;
  padding: 2.2vmin;
  z-index: 996;
  @include flexbox();
  @include flex-direction(row);
  @include justify-content(space-around);
  @include align-items(center);
  @include flex-wrap(wrap);
  span {
    cursor: pointer;
    margin: 0 2vw 0 2vw;
    width: 15vmin;
    height: 15vmin;
    border-radius: 50%;
    background: rgb(255,139,69);
background: linear-gradient(45deg, rgba(255,139,69,1) 0%, rgba(255,97,97,1) 100%);
    font-family: 'Alegreya Sans SC', sans-serif;
    @include flexbox();
    @include flex-direction(column);
    @include justify-content(center);
    @include align-items(center);
    .navigation-sign {
      font-size: 4vmin;
    }
    .navigation-text {
      font-size: 2vmin;

      a {
        text-decoration: none;
      }
      a:link,
      a:visited,
      a:hover {
        text-decoration: none;
        color: inherit;
      }
    }
    @include transition(all 300ms ease-out);
  }
}

.disappear-navigation {
  @include transform(scale(0));
}
@media(min-width: $screen-sm-min ) {

}
@media(min-width: $screen-md-min ) {
  #overview {
    @include flex-direction(row);
    #site-description-and-navigation {

      @include flex-direction(row);
      @include justify-content(center);
    }
  }
  .brief-introduction {
    max-width: 35vw;
      font-size: 1.8vmin;
      }
  .navigation {
    width: 35vw;

  }
}
@media(min-width: $screen-lg-min ) {

}
</style>
