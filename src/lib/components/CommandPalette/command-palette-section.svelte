<script lang="ts">
  import type { Snippet } from 'svelte';

  interface Props {
    title?: string;
    children?: Snippet;
  }

  let { children, title }: Props = $props();
</script>

<ul class="max-h-80 scroll-py-2 divide-y divide-gray-500 divide-opacity-30 overflow-y-auto">
  <li class="p-2">
    {#if title}
      <h2 class="mb-2 mt-4 px-3 text-xs font-semibold text-slate-500">{title}</h2>
    {/if}
    <ul class="text-sm text-slate-500">
      <!-- Active: "bg-gray-800 text-white" -->
      <li class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
        <!-- Active: "text-white", Not Active: "text-gray-500" -->
        <svg class="h-6 w-6 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
        </svg>
        <span class="ml-3 flex-auto truncate">Workflow Inc. / Website Redesign</span>
        <!-- Not Active: "hidden" -->
        <span class="ml-3 hidden flex-none text-gray-400">Jump to...</span>
      </li>
    </ul>
  </li>
  <li class="p-2">
    {@render children()}
  </li>
</ul>
