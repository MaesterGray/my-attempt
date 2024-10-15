// place files you want to import through the `$lib` alias in this folder.

export type CommandPalleteConfig={
    id:string
    title?: string; // Optional string
    content: []; // Required string
    footer?: string; // Optional string
    searchFn:()=>void

}