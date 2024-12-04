<template>
	<div>
		<ProductHeader :response="response" />

		<ProductDetails :response="response" />
	</div>
</template>

<script setup>
const route = useRoute();

console.log(route.params);

const response = {
	id: '1',
	heading: 'Mobile Legends',
	region: {
		regionCode: 'in',
		regionName: 'India',
	},
	orderFields: [
		{
			id: 'user-id',
			name: 'User ID'
		},
		{
			id: 'server-id',
			name: 'Server ID'
		},
	],
	headingDescription: 'Instant Delivery',
	slug: 'mobile-legends',
	productLogo:
		'https://cdn.moogold.com/2019/11/mobile-legends-bang-bang-445x445.jpg',
	productCategory: 'mobile-games',
	itemCategories: [
		{
			id: 'diamond-packs',
			name: 'Diamond Packs',
			order: 1,
		},
		{
			id: 'special-bundles',
			name: 'Special Bundles',
			order: 3,
		},
		{
			id: 'event-packs',
			name: 'Event Packs',
			order: 2,
		},
	],
	itemsList: [
		{
			id: '13',
			amount: '86 Diamonds',
			isAvailable: true,
			profit: '91',
			price: '104',
			discountedPrice: '98',
			itemCategory: 'diamond-packs',
			tag: 'On Sale',
			discount: '7',
			itemImage:
				'https://akmweb.youngjoygame.com/web/mobapay/image/cdf34b92f30321cfe991cc2c2bf50178.png',
		},
		{
			id: '23',
			amount: '172 Diamonds',
			isAvailable: true,
			profit: '182',
			price: '196',
			discountedPrice: '192',
			itemCategory: 'diamond-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604743151--sale-diamonds.png',
		},
		{
			id: '25',
			amount: '257 Diamonds',
			isAvailable: true,
			profit: '272',
			price: '296',
			discountedPrice: '282',
			itemCategory: 'diamond-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604743151--sale-diamonds.png',
		},
		{
			id: '13 25',
			amount: '343 Diamonds',
			isAvailable: true,
			profit: '363',
			price: '388',
			discountedPrice: '382',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604743151--sale-diamonds.png',
		},
		{
			id: '23 23',
			amount: '344 Diamonds',
			isAvailable: true,
			profit: '364',
			price: '392',
			discountedPrice: '384',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604743151--sale-diamonds.png',
		},
		{
			id: '23 25',
			amount: '429 Diamonds',
			isAvailable: true,
			profit: '454',
			price: '484',
			discountedPrice: '472',
			itemCategory: 'diamond-packs',
			tag: 'On Sale',
			discount: '5',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '25 25',
			amount: '514 Diamonds',
			isAvailable: true,
			profit: '544',
			price: '584',
			discountedPrice: '564',
			itemCategory: 'diamond-packs',
			tag: 'On Sale',
			discount: '5',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '13 25 25',
			amount: '600 Diamonds',
			isAvailable: true,
			profit: '635',
			price: '674',
			discountedPrice: '654',
			itemCategory: 'diamond-packs',
			tag: 'On Sale',
			discount: '5',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '26',
			amount: '706 Diamonds',
			isAvailable: true,
			profit: '726',
			price: '784',
			discountedPrice: '752',
			itemCategory: 'diamond-packs',
			tag: 'On Sale',
			discount: '5',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '13 26',
			amount: '792 Diamonds',
			isAvailable: true,
			profit: '817',
			price: '894',
			discountedPrice: '848',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '23 26',
			amount: '878 Diamonds',
			isAvailable: true,
			profit: '908',
			price: '1010',
			discountedPrice: '944',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '25 26',
			amount: '963 Diamonds',
			isAvailable: true,
			profit: '998',
			price: '1110',
			discountedPrice: '1034',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '13 25 26',
			amount: '1049 Diamonds',
			isAvailable: true,
			profit: '1089',
			price: '1215',
			discountedPrice: '1132',
			itemCategory: 'diamond-packs',
			tag: 'Top Rated',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '13 13 25 26',
			amount: '1135 Diamonds',
			isAvailable: true,
			profit: '1180',
			price: '1320',
			discountedPrice: '1230',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '13 13 13 25 26',
			amount: '1220 Diamonds',
			isAvailable: true,
			profit: '1271',
			price: '1425',
			discountedPrice: '1324',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '26 26',
			amount: '1412 Diamonds',
			isAvailable: true,
			profit: '1452',
			price: '1624',
			discountedPrice: '1514',
			itemCategory: 'diamond-packs',
			tag: 'Popular',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '27',
			amount: '2195 Diamonds',
			isAvailable: true,
			profit: '2179',
			price: '2394',
			discountedPrice: '2344',
			itemCategory: 'diamond-packs',
			tag: 'Top Rated',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '26 27',
			amount: '2901 Diamonds',
			isAvailable: true,
			profit: '2905',
			price: '3208',
			discountedPrice: '3094',
			itemCategory: 'diamond-packs',
			tag: 'Premium',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604733606--big-pack-diamonds2.png',
		},
		{
			id: '28',
			amount: '3688 Diamonds',
			isAvailable: true,
			profit: '3632',
			price: '4074',
			discountedPrice: '3874',
			itemCategory: 'diamond-packs',
			tag: 'Premium',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604733606--big-pack-diamonds2.png',
		},
		{
			id: '29',
			amount: '5532 Diamonds',
			isAvailable: true,
			profit: '5448',
			price: '5994',
			discountedPrice: '5744',
			itemCategory: 'diamond-packs',
			tag: 'Premium',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604733606--big-pack-diamonds2.png',
		},
		{
			id: '27 29',
			amount: '7727 Diamonds',
			isAvailable: true,
			profit: '7667',
			price: '8244',
			discountedPrice: '8084',
			itemCategory: 'diamond-packs',
			tag: 'Premium',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604733606--big-pack-diamonds2.png',
		},
		{
			id: '30',
			amount: '9288 Diamonds',
			isAvailable: true,
			profit: '9081',
			price: '9594',
			discountedPrice: '9494',
			itemCategory: 'diamond-packs',
			tag: 'Premium',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604733606--big-pack-diamonds2.png',
		},
		{
			id: '16642',
			amount: 'Weekly Pass',
			isAvailable: true,
			profit: '116',
			price: '124',
			discountedPrice: '120',
			itemCategory: 'special-bundles',
			tag: 'On Sale',
			discount: '7',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '16642 16642',
			amount: '2 Weekly Pass',
			isAvailable: true,
			profit: '232',
			price: '248',
			discountedPrice: '240',
			itemCategory: 'special-bundles',
			tag: 'Best Seller',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '16642 16642 16642',
			amount: '3 Weekly Pass',
			isAvailable: true,
			profit: '348',
			price: '372',
			discountedPrice: '360',
			itemCategory: 'special-bundles',
			tag: 'Best Seller',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '16642 16642 16642 16642',
			amount: '4 Weekly Pass',
			isAvailable: true,
			profit: '464',
			price: '488',
			discountedPrice: '476',
			itemCategory: 'special-bundles',
			tag: 'Limited Edition',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '16642 13',
			amount: 'Weekly Pass and 86 Diamonds',
			isAvailable: true,
			profit: '207',
			price: '228',
			discountedPrice: '216',
			itemCategory: 'special-bundles',
			tag: 'Popular',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '16642 23',
			amount: 'Weekly Pass and 172 Diamonds',
			isAvailable: true,
			profit: '298',
			price: '318',
			discountedPrice: '312',
			itemCategory: 'special-bundles',
			tag: 'Popular',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '33',
			amount: 'Twilight Pass',
			isAvailable: true,
			profit: '650',
			price: '678',
			discountedPrice: '668',
			itemCategory: 'special-bundles',
			tag: 'Hot Deal',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1722536018216--images-(3).jpeg',
		},
		{
			id: '13',
			amount: '86 Diamonds',
			isAvailable: true,
			profit: '91',
			price: '104',
			discountedPrice: '98',
			itemCategory: 'event-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery\\1721320248686--diaspot.png',
		},
		{
			id: '23',
			amount: '172 Diamonds',
			isAvailable: true,
			profit: '182',
			price: '196',
			discountedPrice: '194',
			itemCategory: 'event-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604743151--sale-diamonds.png',
		},
		{
			id: '23 23',
			amount: '344 Diamonds',
			isAvailable: true,
			profit: '372',
			price: '392',
			discountedPrice: '386',
			itemCategory: 'event-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery\\1721320248686--diaspot.png',
		},
		{
			id: '23 25',
			amount: '429 Diamonds',
			isAvailable: true,
			profit: '454',
			price: '484',
			discountedPrice: '472',
			itemCategory: 'event-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '13 25 25',
			amount: '600 Diamonds',
			isAvailable: true,
			profit: '635',
			price: '674',
			discountedPrice: '654',
			itemCategory: 'event-packs',
			tag: 'On Sale',
			discount: '5',
			itemImage:
				'https://topupplayground.com/gallery\\1721320248686--diaspot.png',
		},
		{
			id: '26',
			amount: '706 Diamonds',
			isAvailable: true,
			profit: '726',
			price: '784',
			discountedPrice: '752',
			itemCategory: 'event-packs',
			tag: 'Best Seller',
			discount: '',
			itemImage:
				'https://topupplayground.com/gallery/1731604739017--big-pack-diamonds.png',
		},
		{
			id: '16642 13',
			amount: 'Weekly Pass and 86 Diamonds',
			isAvailable: true,
			profit: '207',
			price: '228',
			discountedPrice: '216',
			itemCategory: 'event-packs',
			tag: 'Popular',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
		{
			id: '16642 23',
			amount: 'Weekly Pass and 172 Diamonds',
			isAvailable: true,
			profit: '298',
			price: '318',
			discountedPrice: '312',
			itemCategory: 'event-packs',
			tag: 'Popular',
			discount: '',
			itemImage: 'https://topupplayground.com/gallery/1721331418526--wppp.webp',
		},
	],
};

definePageMeta({
	layout: 'product-page',
});
</script>

<style>
#Product_cover {
	background-color: rgba(70, 76, 100, 1);

	background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgMTkyMCAxMDAwIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPnBhdGh7b3BhY2l0eTouMTtjbGlwLXBhdGg6dXJsKCNjbGlwUGF0aCk7ZmlsbDp1cmwoI2xpbmVhckdyYWRpZW50KTt9PC9zdHlsZT48Y2xpcFBhdGggaWQ9ImNsaXBQYXRoIj48cmVjdCB3aWR0aD0iMTkyMCIgaGVpZ2h0PSIxMDAwIi8+PC9jbGlwUGF0aD48bGluZWFyR3JhZGllbnQgaWQ9ImxpbmVhckdyYWRpZW50IiB4MT0iMCUiIHkxPSIwJSIgeDI9IjkwJSIgeTI9IjAlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3AtY29sb3I9ImhzbCgwIDAlIDEwMCUvMSkiLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9ImhzbCgwIDAlIDEwMCUvMCkiLz48L2xpbmVhckdyYWRpZW50PjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDE5MjAsMTAwMClzY2FsZSgtMSwtMSkiPjxwYXRoIGQ9Ik0xMzg0LjUgMzQzLjJMMTkyLjcgMTUzNWwtMjEzLjUtM0wxMzgzIDEyOC4ybDEuNSAyMTV6Ii8+PHBhdGggZD0iTTE5MTkuNyA0NDguM0wxMzU5IDEwMDlsLTEwMC40LTEuNEwxOTE5IDM0Ny4xbC43IDEwMS4yeiIvPjxwYXRoIGQ9Ik0xMTc2LjcgNTE0LjNMNjE2IDEwNzVsLTEwMC40LTEuNEwxMTc2IDQxMy4xbC43IDEwMS4yeiIvPjxwYXRoIGQ9Ik02NDQuNyA0NTcuM0w4NCAxMDE4bC0xMDAuNC0xLjRMNjQ0IDM1Ni4xbC43IDEwMS4yeiIvPjxwYXRoIGQ9Ik0xMzg3LjcgNDQ4LjNMODI3IDEwMDlsLTEwMC40LTEuNEwxMzg3IDM0Ny4xbC43IDEwMS4yeiIvPjxwYXRoIGQ9Ik0xMjUwLjEgNDkzLjhsLTU0NSA1NDUtNTIuNyA0My42IDY0MS45LTY0MS45LTQ0LjIgNTMuM3oiLz48cGF0aCBkPSJNODkxLjEgNjM5LjFMLTc3OCAyMzA4LjNsLTI5OC45LTQuMkw4ODkgMzM4LjFsMi4xIDMwMXoiLz48cGF0aCBkPSJNMTg3MC40IDQxOS44TC0yOC44IDIzMTlsLTM0MC4xLTQuOEwxODY4IDc3LjNsMi40IDM0Mi41eiIvPjxwYXRoIGQ9Ik05MDguNCA0MzYuOEwtOTkwLjggMjMzNmwtMzQwLjEtNC44TDkwNiA5NC4zbDIuNCAzNDIuNXoiLz48cGF0aCBkPSJNMTYzMi40IDUxNS44TC0yNjYuOCAyNDE1bC0zNDAuMS00LjhMMTYzMCAxNzMuM2wyLjQgMzQyLjV6Ii8+PHBhdGggZD0iTTExNzYuMyA1NjcuMUwtMTQ0NS42IDMxODlsLTQ2OS41LTYuNkwxMTczIDk0LjNsMy4zIDQ3Mi44eiIvPjxwYXRoIGQ9Ik0xNDI3LjMgNTgwLjFMLTExOTQuNiAzMjAybC00NjkuNS02LjZMMTQyNCAxMDcuM2wzLjMgNDcyLjh6Ii8+PHBhdGggZD0iTTE2NDkuNSA4ODAuMkw0NTcuNyAyMDcybC0yMTMuNS0zTDE2NDggNjY1LjJsMS41IDIxNXoiLz48cGF0aCBkPSJNNjc1LjggNTIyLjJsLTI2MjEuOSAyNjIxLjktNDY5LjQtNi42TDY3Mi41IDQ5LjRsMy4zIDQ3Mi44eiIvPjxwYXRoIGQ9Ik0yNTk1LjkgNTIyLjJMLTI2IDMxNDQuMWwtNDY5LjUtNi42TDI1OTIuNiA0OS40bDMuMyA0NzIuOHoiLz48L2c+PC9zdmc+);

	background-repeat: repeat-x;
	background-position: top center;
	background-size: clamp(60em, min(100dvw, 926px), 100em), cover;
}
</style>
