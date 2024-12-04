<template>
	<div
		class="h-96 aspect-square object-cover sm:h-60 w-full relative"
		id="Product_cover"
	>
		<div
			class="absolute left-0 top-0 w-full h-full"
			style="background: linear-gradient(to right, #00000099 0%, #ffffff30)"
		>
			<div
				class="max-w-7xl justify-center sm:justify-start h-full px-3 sm:px-8 flex flex-col sm:flex-row gap-8 sm:gap-20 items-center sm:items-end"
			>
				<NuxtImg
					:src="response.productLogo"
					class="w-48 sm:w-60 aspect-square rounded-2xl sm:translate-y-8"
				/>
				<div class="sm:pb-8">
					<h1 class="uppercase text-2xl sm:text-4xl font-semibold mb-4">
						{{ response.heading }}
					</h1>
					<div
						class="text-xs sm:text-sm text-neutral-300 flex gap-4 justify-center sm:justify-start"
					>
						<div class="flex gap-2 items-center">
							<NuxtImg
								:src="regionFlags[response.region.regionCode]"
								class="h-6 w-6"
							/>

							<p class="">{{ response.region.regionName }}</p>
						</div>
						<div class="flex gap-2 items-center">
							<NuxtImg src="/svgs/energy.svg" class="w-5 rounded-full" />
							<p v-html="response.headingDescription"></p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { regionFlags } from '~/components/product/constant';

defineProps({
	response: {
		type: Object,
	},
});
</script>
