<template>
	<footer class="pb-20 pt-32 w-full max-w-7xl px-8 mx-auto text-sm">
		<div class="flex flex-col w-full sm:flex-row justify-between gap-16">
			<div>
				<div class="flex gap-4 items-center mb-6">
					<NuxtImg src="/svgs/store-logo.svg" class="h-10 w-10" />
					<p>Oreo Store</p>
				</div>
				<div class="flex gap-3 items-center mb-6">
					<NuxtLink
						v-for="icon in socialMediaIcons"
						:id="icon.name"
						:to="icon.link"
						class="h-6 w-6"
					>
						<NuxtImg
							:src="icon.image"
							:alt="icon.altText"
							class="h-full w-full"
						/>
					</NuxtLink>
				</div>
				<div class="text-xs text-neutral-300 font-normal">
					<h6 class="text-neutral-100 font-medium mb-1">Contact us</h6>
					<div class="flex gap-4 items-center">
						<div class="flex gap-2 items-center">
							<NuxtImg src="/svgs/gmail.svg" alt="gmail" class="h-3 w-3" />
							<span class="text-neutral-400 font-medium">oreo@gmail.com</span>
						</div>
						<div class="flex gap-2 items-center">
							<NuxtImg
								src="/svgs/whatsapp.svg"
								alt="whatsapp"
								class="h-3 w-3"
							/>
							<span class="text-neutral-400 font-medium">1234567890</span>
						</div>
					</div>
				</div>
			</div>

			<div class="h-10 flex gap-2 items-center overflow-y-hidden">
				<NuxtImg
					v-for="method in paymentMethods"
					:src="method.image"
					:alt="method.altText"
					:class="method.class"
				/>
			</div>
		</div>

		<hr class="border-neutral-700 border-[1.6px] my-9" />

		<QuickLinkFooter />
	</footer>
</template>

<script setup>
const socialMediaIcons = [
	{
		name: 'Facebook',
		altText: 'facebook',
		image: '/images/facebook.png',
		link: '#',
	},
	{
		name: 'Youtube',
		altText: 'youtube',
		image: '/images/youtube.png',
		link: '#',
	},
	{
		name: 'Instagram',
		altTex: 'instagram',
		image: '/images/instagram.png',
		link: '#',
	},
	{
		name: 'Twitter',
		altText: 'twitter',
		image: '/images/twitter.png',
		link: '#',
	},
	{
		name: 'TikTok',
		altText: 'tiktok',
		image: '/images/tiktok.png',
		link: '#',
	},
];

const paymentMethods = [
	{
		name: 'Google Pay',
		altText: 'google pay',
		image: '/svgs/google-pay.svg',
		class: 'h-10 w-10',
	},
	{
		name: 'PayTm',
		altText: 'paytm',
		image: '/svgs/paytm.svg',
		class: 'h-12 w-12',
	},
	{
		name: 'PhonePe',
		altText: 'phonepe',
		image: '/svgs/phonepe.svg',
		class: 'h-8 w-8',
	},
	{
		name: 'Visa',
		altText: 'visa',
		image: '/svgs/visa.svg',
		class: 'h-10 w-10',
	},
	{
		name: 'MasterCard',
		altText: 'MasterCard',
		image: '/svgs/mastercard.svg',
		class: 'h-10 w-10',
	},
];
</script>
