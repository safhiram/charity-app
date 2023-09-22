<script>
	import { onMount, onDestroy, beforeUpdate, afterUpdate } from 'svelte';
	import CharityList from "../components/CharityList.svelte";
	import Welcome from "../components/Welcome.svelte";
	import Header from "../components/Header.svelte";
	import Promo from "../components/Promo.svelte";
	import Footer from "../components/Footer.svelte";
    import Loader from '../components/Loader.svelte';

	let charities = getData();

	async function getData() {
		let res = await fetch('http://localhost:3000/charities')
		const data = await res.json()

		if(res.ok){
			return data
		} else {
			throw new Error(data);
		}
	}

	onDestroy(function() {
		console.log('onDestroy')
	});

	//muncul sebelum unMount
	beforeUpdate(function(){
		console.log('beforeUpdate')
	});

	//muncul sesudah unMount
	afterUpdate(function() {
		console.log('afterUpdate')
	});
	
</script>

<Header/>
<Welcome />
{#await charities}
<Loader/>

{:then charities}
<CharityList charities={charities} />
{/await}
<Promo />
<Footer/>