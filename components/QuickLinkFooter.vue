<template>
	<div class="flex items-center text-xs gap-4 z-0">
		<p class="font-medium text-neutral-400">COPYRIGHT @ 2024 OREO STORE</p>
		<span class="h-5 w-[1px] bg-white"></span>
		<ul class="flex gap-8">
			<li
				v-for="(link, index) in webLinks"
				:id="link.id"
				class="hover:text-primary transition-colors"
				:class="{ 'list-disc': index !== 0 }"
			>
				<NuxtLink :to="link.link">
					{{ link.name }}
				</NuxtLink>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
const webLinks = [
	{
		id: 'rules',
		link: '/rules',
		name: 'Rules',
	},
	{
		id: 'terms',
		link: '/terms',
		name: 'Terms',
	},
	{
		id: 'privacy',
		link: '/privacy',
		name: 'Privacy',
	},
];
</script>
