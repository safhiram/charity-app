import {writable} from 'svelte/store';

export const charities = writable([]);
export const charity = writable({});

export async function getCharities() {
    let res = await fetch('http://localhost:3000/charities')
    const data = await res.json()
    
    if(res.ok){
        charities.set(data)
        return data
    } else {
        throw new Error(data);
    }
}

export async function getCharity(id) {
    let res = await fetch(`http://localhost:3000/charities/${id}`)
    const data = await res.json()
    if(res.ok){
        charity.set(data)
        return data
    } else {
        throw new Error(data);
    }
  }

getCharities();