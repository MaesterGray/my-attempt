import { getContext,  setContext } from 'svelte';
import type { CommandPalleteConfig } from '$lib';


export class commandPalleteManager{
    openInstance = $state<commandPalleteInstance>()

    

    open(config:CommandPalleteConfig){
        const id:string = crypto.randomUUID()
        const newOpenInstance =  new commandPalleteInstance(id,config.content,config.searchFn,config.title)
        this.openInstance= newOpenInstance
        return newOpenInstance
        }
    }


export class commandPalleteConfig{
    title?: string; // Optional string
    content: any[]; // Required string,
    footer?: string; // Optional string
    searchFn:(terms:string)=>void
    constructor(content:any[],searchFn:(terms:string)=>void,title?:string,footer?:string){
        this.content = content;
        this.title=title;
        this.footer = footer
        this.searchFn = searchFn
    }
}

export class commandPalleteInstance{
    id:string;
    title?: string; // Optional string
    content: any[]; // Required string
    footer?: string; // Optional string
    searchFn:(terms:string)=>void

    constructor(id:string,content:[],searchFn:(terms:string)=>void,title?:string,footer?:string){
        this.id=id
        this.content = content;
        this.title=title;
        this.footer = footer
        this.searchFn = searchFn
    }
    close(context:commandPalleteManager){
        context.openInstance = undefined
    //   const context =  getPalleteContext()
    //   context.openInstance=undefined
    }
}

const PALLETE_KEY = Symbol('command')

export function createPalleteManager(){
    return setContext(PALLETE_KEY,new commandPalleteManager())
}

export function getPalleteContext(){
    return getContext<ReturnType<typeof createPalleteManager>>(PALLETE_KEY);
}