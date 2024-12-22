<template>
	<header class="z-10">
		<div class="w-full flex justify-between items-center">
			<NuxtLink to="/">
				<NuxtImg src="/svgs/store-logo.svg" class="h-10 w-10" />
			</NuxtLink>

			<NuxtLink
				:to="authLinkData.path"
				class="cursor-pointer hover:text-neutral-300 transition-colors"
			>
				{{ authLinkData.text }}
			</NuxtLink>
		</div>
	</header>
</template>

<script setup lang="ts">
const route = useRoute();

const authLinkData = computed(() => {
	return route.name === 'sign-up'
		? { text: 'Login', path: '/login' }
		: { text: 'Sign Up', path: '/sign-up' };
});
</script>
