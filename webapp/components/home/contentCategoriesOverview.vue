<template>
  <ul id="landing-page-site-categories-overiew" class="disabler">
    <li class="site-category-overview-fragment">
      <div class="category-information">
        <svg class="category-information-icon">
          <use xlink:href="#heart" />
        </svg>
        <div class="navigation-text">
          Self Love
        </div>
      </div>
    </li>
    <li class="site-category-overview-fragment">
      <div class="category-information">
        <i class="navigation-sign glyphicon glyphicon-random" aria-hidden="true" />
        <div class="navigation-text">
          Twisted POV
        </div>
      </div>
    </li>

    <li id="my-december" class="site-category-overview-fragment">
      <div class="category-information">
        <i class="navigation-sign glyphicon glyphicon-bed" aria-hidden="true" />
        <div class="navigation-text">
          My December
        </div>
      </div>
    </li>

    <li class="site-category-overview-fragment">
      <div class="category-information">
        <i class="navigation-sign glyphicon glyphicon-eye-close" aria-hidden="true" />
        <div class="navigation-text">
          CSA
        </div>
      </div>
    </li>

    <li id="back" class="site-category-overview-fragment">
      <div class="category-information">
        <svg class="category-information-icon">
          <use xlink:href="#lamp" />
        </svg>
        <div class="navigation-text">
          Story Hour
        </div>
      </div>
    </li>
    <li class="site-category-overview-fragment">
      <div class="category-information">
        <i class="navigation-sign glyphicon glyphicon-arrow-left" aria-hidden="true" />
      </div>
    </li>
    <li class="site-category-overview-fragment">
      <div class="category-information">
        <i class="navigation-sign glyphicon glyphicon-arrow-left" aria-hidden="true" />
      </div>
    </li>
  </ul>
</template>
<script>

export default {

}
</script>

<style lang="scss" scoped>
.disabler{
  display: none;
}
.site-categories-overview {
position: absolute;
list-style-type: none;
padding: 0 !important;
margin: 0 !important;
width: 100%;
height: 80vh;

z-index:997;
  $element-square-side-smallest: 10vmin;
  $element-square-side-normal: 18vmin;
  $element-square-side-large: 24vmin;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24vmin, 1fr));
  grid-auto-rows: 24vmin;
  grid-gap: 2vmin;
  grid-auto-flow: dense;
  justify-items: center;
  align-content: center;
  align-items: center;
.site-category-overview-fragment {
width: $element-square-side-normal;
height: $element-square-side-normal;
//background-color: mix(rgb(255,139,69), rgba(249,244,242,0.8), 70%);
color: rgb(245, 245, 245);
background: rgb(255,139,69);
background: linear-gradient(45deg, rgba(255,139,69,1) 0%, rgba(255,97,97,1) 100%);
      display: block;
      border-radius: 50%;

.category-information {
  height: 100%;
    @include flexbox();
@include flex-direction(column);
@include justify-content(center);
@include align-items(center);

   font-family: 'Alegreya Sans SC', sans-serif;
  .navigation-sign {
     font-size: 3vmin;
     z-index:1;
  }
  .category-information-icon {
   height: 4vmin;
   width: 4vmin;
     z-index:1;
     fill: rgb(255, 88, 58);
  }
  .navigation-text {
  font-size:2vmin;
  z-index:1;
 a {
    text-decoration: none;
  }
  a:link, a:visited, a:hover {
text-decoration: none;
color: inherit;
  }
  }

}
&:nth-child(4){
  width: $element-square-side-large;
height: $element-square-side-large;
}

}

}
@media(min-width: $screen-sm-min ) {
}
@media(min-width: $screen-md-min ) {
  $element-square-side-smallest: 10vmin;
  $element-square-side-normal: 15vmin;
  $element-square-side-large: 24vmin;
  .site-categories-overview {

    .site-category-overview-fragment {

    }

}
}
@media(min-width: $screen-lg-min ) {

}
</style>
