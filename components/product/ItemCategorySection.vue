<template>
	<div v-if="itemCategories.length" class="mb-8">
		<ul class="flex sm:justify-end gap-2">
			<li
				v-for="category in sortedItemCategories"
				:key="category.id"
				class="text-xs rounded-xl sm:rounded-full text-wrap py-2 flex-col sm:flex-row text-center w-[90px] h-[90px] sm:h-auto sm:w-auto flex items-center gap-2 px-6 cursor-pointer"
				:class="
					selectedCategoryId === category.id
						? 'bg-green-400 bg-opacity-20 text-green-500'
						: 'bg-opacity-10 bg-neutral-50 text-neutral-400'
				"
				@click="filterItems(category.id)"
			>
				<NuxtImg :src="category.image" class="w-8" />
				<p>
					{{ category.name }}
				</p>
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
