<script>
	import CharityList from "../components/CharityList.svelte";
	import Welcome from "../components/Welcome.svelte";
	import Header from "../components/Header.svelte";
	import Promo from "../components/Promo.svelte";
	import Footer from "../components/Footer.svelte";
	let title = 'Charity';
	import charities from "../data/charities";

</script>

<Header/>
<Welcome />
<CharityList charities={charities.charities} />
<Promo />
<Footer/>