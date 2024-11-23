<template>
	<div>
		<SlideShow />
		<div class=" flex flex-col gap-4 px-4 my-9">
			<HomePopularGamesContainer :data="response.popular"/>
		</div>
	</div>
</template>

<script setup>

const response = {
	'popular': {
		 data : [
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

		hasMore: true
	}
}
</script>
