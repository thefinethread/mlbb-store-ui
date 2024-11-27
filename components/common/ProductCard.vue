<template>
	<NuxtLink :to="cardInfo.slug">
		<div
			class="relative cursor-pointer group rounded-2xl overflow-hidden flex flex-col justify-end"
			style="aspect-ratio: 9 / 13; max-width: 11.25rem"
		>
			<NuxtImg
				:src="cardInfo.logo"
				class="absolute inset-0 h-full w-full object-cover group-hover:opacity-80 transition-opacity"
			/>

			<CommonProductDetailsCard
				class="absolute bottom-[6px] left-[6px] right-[6px]"
			>
				<h2 class="font-semibold text-white text-base mb-1">
					{{ cardInfo.displayName }}
				</h2>
				<CommonProductTag :tag-content="cardInfo.tag" />
			</CommonProductDetailsCard>
		</div>
	</NuxtLink>
</template>

<script setup>
defineProps({
	cardInfo: {
		type: Object,
		default: null,
	},
});
</script>
