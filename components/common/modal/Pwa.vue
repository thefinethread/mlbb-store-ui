<template>
	<Transition name="slide-up">
		<div
			v-if="isModalOpen"
			class="fixed z-50 bottom-0 w-full top-0 flex items-end backdrop-blur-sm"
			@click.self="$emit('closeModal')"
		>
			<div
				class="bg-neutral-950 relative w-full rounded-t-2xl py-6 pt-10 px-6 modal-content"
			>
				<div
					class="absolute top-2 left-0 right-0 w-20 m-auto h-1 bg-neutral-400"
				/>
				<slot />
			</div>
		</div>
	</Transition>
</template>

<script setup lang="ts">
withDefaults(
	defineProps<{
		isModalOpen: boolean;
	}>(),
	{
		isModalOpen: false,
	}
);
</script>

<style scoped>
/* Transition animations */
.slide-up-enter-active,
.slide-up-leave-active {
	transition: transform 0.3s ease-out, opacity 0.3s ease-out;
}

.slide-up-enter-from,
.slide-up-leave-to {
	transform: translateY(100%);
	opacity: 0;
}

.slide-up-enter-to,
.slide-up-leave-from {
	transform: translateY(0);
	opacity: 1;
}
</style>
