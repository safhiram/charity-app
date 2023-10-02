import {writable} from 'svelte/store';

export const charities = writable([]);
export const charity = writable({});

export async function getCharities() {
    let res = await fetch('https://real-pear-barnacle-vest.cyclic.cloud/charities',{
        method: 'GET'
    })
    const data = await res.json()
    
    if(res.ok){
        charities.set(data.charities)
        return data
    } else {
        throw new Error(data.charities);
    }
}

export function getCharity(id) {

    let data;

    charities.subscribe(function(value) {
        data = value[id-1]
        charity.set(data)
    })
    return data
    
   
  }

getCharities();