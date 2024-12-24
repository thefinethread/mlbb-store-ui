<template>
	<div class="w-full px-4">
		<div class="w-full">
			<img :src="data.productCoverImage" class="w-full" />
		</div>
		<div class="mt-4 flex gap-4 items-end">
			<div>
				<img :src="data.productLogo" class="w-[67px] rounded-lg" />
			</div>
			<div>
				<div class="text-xl font-bold uppercase">{{ data.heading }}</div>
				<div class="text-xs text-neutral-300 mt-1 flex gap-4 justify-center">
					<div class="flex gap-2 items-center">
						<NuxtImg
							:src="regionFlags[data.region.regionCode]"
							class="h-6 w-6"
						/>

						<p class="">{{ data.region.regionName }}</p>
					</div>
					<div class="flex gap-2 items-center">
						<NuxtImg src="/svgs/energy.svg" class="w-5 rounded-full" />
						<p v-html="data.headingDescription"></p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { regionFlags } from '~/components/product/constant';
import type { ProductResponse } from '~/types/product/types';

defineProps<{
	data: ProductResponse;
}>();
</script>
