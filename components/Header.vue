<template>
	<header class="bg-neutral-950 h-20 w-full fixed top-0 left-0">
		<div class="w-full h-full flex justify-between items-center px-8">
			<NuxtImg src="/svgs/store-logo.svg" class="h-10 w-10" />

			<div class="flex gap-6 items-center justify-between">
				<ul>
					<li class="cursor-pointer">
						<NuxtImg src="/svgs/search-icon.svg" class="h-6 w-6" />
					</li>
				</ul>
				<div class="cursor-pointer hover:text-neutral-300 transition-colors">
					Login
				</div>
			</div>
		</div>
	</header>
</template>

<script setup></script>
