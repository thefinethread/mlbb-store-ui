<template>
	<div
		v-if="itemCategories.length"
		class="mb-8 border-0 border-neutral-700 bg-neutral-800 p-4 rounded-xl"
	>
		<h2 class="text-xl font-medium mb-6">Choose Category</h2>
		<ul class="flex gap-3 overflow-x-auto no-scrollbar">
			<li
				v-for="category in sortedItemCategories"
				:key="category.id"
				class="text-xs flex-shrink-0 ring-inset rounded-2xl ring-2 text-wrap p-2.5 flex-col justify-center items-center text-center w-[112px] h-[138px] flex gap-2 cursor-pointer"
				:class="
					selectedCategoryId === category.id
						? 'bg-[#0b2f3c]  ring-custom-blue text-custom-blue'
						: 'bg-neutral-900 ring-neutral-700 text-neutral-300'
				"
				@click="filterItems(category.id)"
			>
				<NuxtImg :src="category.image" class="w-12 flex-1" />
				<div class="flex-1 flex justify-center items-center">
					<p class="text-sm font-medium">
						{{ category.name }}
					</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script setup lang="ts">
import type { ItemCategory } from '~/types/product/types';

const props = withDefaults(
	defineProps<{
		itemCategories: ItemCategory[];
	}>(),
	{
		itemCategories: () => [],
	}
);

const route = useRoute();
const router = useRouter();

const selectedCategoryId = ref('event-packs');

const sortedItemCategories = computed<ItemCategory[]>(() => {
	return props.itemCategories.sort((a, b) => a.order - b.order);
});

const filterItems = (id: string) => {
	selectedCategoryId.value = id;

	router.push({
		query: {
			...route.query,
			category: id,
		},
	});
};
</script>

<style>
.no-scrollbar::-webkit-scrollbar {
	display: none;
}
</style>
