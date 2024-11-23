<template>
	<div class="w-full h-[400px] overflow-hidden rounded-xl">
		<ClientOnly>
			<swiper-container
				ref="containerRef"
				class="h-full"
				:autoplay="{
					reverseDirection: false,
					pauseOnMouseEnter: true,
					disableOnInteraction: true,
				}"
				:pagination="{
					clickable: true, bulletActiveClass: 'test'
				 }"
				:navigation="true"
			>
				<swiper-slide v-for="(slide, idx) in slideShowImages" :key="idx">
					<div>
						
					</div>
					<NuxtImg :src="slide" class="h-full w-full object-cover  rounded-xl" />
				</swiper-slide>
			</swiper-container>
		</ClientOnly>
	</div>
</template>

<script setup>
const slideShowImages = [
	'/images/mlbb-banner-nov.jpg',
	'/images/diwali-sale-mlbb.jpg',
	'/images/weekly-pass.jpg',
];

const containerRef = ref(null);
const slides = ref(Array.from({ length: 10 }));

const swiper = useSwiper(containerRef, 
{
  effect: 'creative',
  loop: true,
  autoplay: {
    delay: 5000,
  },
  creativeEffect: {
    prev: {
      shadow: true,
      translate: [0, 0, -400],
    },
    next: {
      shadow: true,
      translate: [0, 0, -400],
    },
  },
}
);
</script>

<style lang="css">
swiper-slide {
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 18px;
	height: full;
	font-size: 4rem;
	font-weight: bold;
	font-family: 'Roboto', sans-serif;
}


</style>
