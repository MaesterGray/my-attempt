<script>
    import { getPalleteContext } from "$lib/components/CommandPalette/commandpallete.svelte";

    const palleteManager = getPalleteContext()
    
    import * as CommandPalette from '$lib/components/CommandPalette'
</script>

<main class=" w-screen h-screen bg-black flex items-center justify-center flex-col">
    <button class=" text-white p-1 border border-white rounded-sm" onclick={()=>{palleteManager.open(
        {
            content:['Just another one','Dj Khaled'],
            searchFn:()=>console.log('searchran'),
            title:'Test',
            footer:'Test',
            id:''
        }
    )}}>Open command pallete</button>
    {#if palleteManager.openInstance}
        <CommandPalette.Root  class=' w-[600px] flex-col' onclose={()=>palleteManager.openInstance?.close(palleteManager)}>
        <CommandPalette.Input   onsearch={palleteManager.openInstance.searchFn} />
        <CommandPalette.Section title={palleteManager.openInstance.title}>
                {#each palleteManager.openInstance.content as rowValue}
                <CommandPalette.Item>
                    <div class="text-sm text-slate-400">
                      <div class="group flex cursor-default select-none items-center rounded-md px-3 py-2">
                        <svg class="h-6 w-6 flex-none text-gray-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 10.5v6m3-3H9m4.06-7.19-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                        </svg>
                        <span class="ml-3 flex-auto truncate">{rowValue}</span>
                        <span class="ml-3 flex-none text-xs font-semibold text-gray-400"><kbd class="font-sans">⌘</kbd><kbd class="font-sans">F</kbd></span>
                      </div>
                    </div>
                  </CommandPalette.Item>
                {/each}
        </CommandPalette.Section>
                
        </CommandPalette.Root>
    {/if}
</main>


<!-- <palletopener>button</palletopener>

<pallet.content>
    <button>x icon</button>
    <div>uiioheigtuire</div>
</pallet.content> -->

