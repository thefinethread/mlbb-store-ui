<template>
	<div>
		<!-- <SlideShow /> -->
		<div class="flex flex-col gap-16 px-4 my-9">
			<component
				v-for="section in response.sections"
				:is="getSectionComponent(section.type)"
				:section="section"
			/>
		</div>
	</div>
</template>

<script setup>
import PopularProductsSection from '~/components/home/PopularProductsSection.vue';
import CommonProductsSection from '~/components/home/CommonProductsSection.vue';

const sectionComponents = {
	popular: PopularProductsSection,
	common: CommonProductsSection,
};

const getSectionComponent = (type) => sectionComponents[type];

const response = {
	sections: [
		{
			id: 'popular',
			title: 'Popular',
			type: 'common',
			data: [
				{
					id: '1',
					productType: 'game',
					slug: '/product/mobile-legends',
					logo: 'https://img.smile.one/media/catalog/product/u/im/uims7flr7aguvft1715239027.webp',
					displayName: 'Mobile Legends: Bang Bang',
					tag: '50% OFF',
					isAvailable: true,
				},
				{
					id: '2',
					productType: 'game',
					slug: '/product/honkai-star-rail',
					logo: 'https://img.smile.one/media/catalog/product/c/qd/cqdg6tomzxs0x6z1729757248.webp',
					displayName: 'Honkai: Star Rail',
					tag: 'Extra Bonus',
					isAvailable: true,
				},
				{
					id: '3',
					productType: 'game_pass',
					slug: '/product/xbox-pass',
					logo: 'https://img.smile.one/media/catalog/product/p/dk/pdk35h55f2cpmur1715239929.webp',
					displayName: 'Xbox Game Pass Core',
					tag: 'Buy 1 Get 1',
					isAvailable: true,
				},
				{
					id: '4',
					productType: 'game',
					slug: '/product/mobile-legends',
					logo: 'https://img.smile.one/media/catalog/product/u/im/uims7flr7aguvft1715239027.webp',
					displayName: 'Mobile Legends: Bang Bang',
					tag: '50% OFF',
					isAvailable: true,
				},
				{
					id: '5',
					productType: 'game',
					slug: '/product/honkai-star-rail',
					logo: 'https://img.smile.one/media/catalog/product/c/qd/cqdg6tomzxs0x6z1729757248.webp',
					displayName: 'Honkai: Star Rail',
					tag: 'Extra Bonus',
					isAvailable: true,
				},
				{
					id: '6',
					productType: 'game_pass',
					slug: '/product/xbox-pass',
					logo: 'https://img.smile.one/media/catalog/product/p/dk/pdk35h55f2cpmur1715239929.webp',
					displayName: 'Xbox Game Pass Core',
					tag: 'Buy 1 Get 1',
					isAvailable: true,
				},
			],
			hasMore: true,
		},
		{
			id: 'mobile-games',
			title: 'Mobile Games',
			type: 'common',
			data: [
				{
					id: '1',
					productType: 'game',
					slug: '/games/mobile-legends',
					logo: 'https://img.smile.one/media/catalog/product/u/im/uims7flr7aguvft1715239027.webp',
					displayName: 'Mobile Legends: Bang Bang',
					tag: '50% OFF',
					isAvailable: true,
				},
				{
					id: '2',
					productType: 'game',
					slug: '/games/honkai-star-rail',
					logo: 'https://img.smile.one/media/catalog/product/c/qd/cqdg6tomzxs0x6z1729757248.webp',
					displayName: 'Honkai: Star Rail',
					tag: 'Extra Bonus',
					isAvailable: true,
				},
				{
					id: '3',
					productType: 'game_pass',
					slug: '/services/xbox-pass',
					logo: 'https://img.smile.one/media/catalog/product/p/dk/pdk35h55f2cpmur1715239929.webp',
					displayName: 'Xbox Game Pass Core',
					tag: 'Buy 1 Get 1',
					isAvailable: true,
				},
				{
					id: '4',
					productType: 'game',
					slug: '/games/mobile-legends',
					logo: 'https://img.smile.one/media/catalog/product/u/im/uims7flr7aguvft1715239027.webp',
					displayName: 'Mobile Legends: Bang Bang',
					tag: '50% OFF',
					isAvailable: true,
				},
				{
					id: '5',
					productType: 'game',
					slug: '/games/honkai-star-rail',
					logo: 'https://img.smile.one/media/catalog/product/c/qd/cqdg6tomzxs0x6z1729757248.webp',
					displayName: 'Honkai: Star Rail',
					tag: 'Extra Bonus',
					isAvailable: true,
				},
				{
					id: '6',
					productType: 'game_pass',
					slug: '/services/xbox-pass',
					logo: 'https://img.smile.one/media/catalog/product/p/dk/pdk35h55f2cpmur1715239929.webp',
					displayName: 'Xbox Game Pass Core',
					tag: 'Buy 1 Get 1',
					isAvailable: true,
				},
			],
			hasMore: true,
		},
	],
};
</script>
