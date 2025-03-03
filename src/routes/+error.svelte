<script>
	import { page } from '$app/stores';
</script>

<svelte:head>
	<title>Page Non Trouvée</title>
</svelte:head>

<div class="error-page">
	<h1>Erreur 404 : Page Non Trouvée</h1>
	<p>
		Désolé, la page que vous avez demandée n'existe pas. Veuillez vérifier l'URL ou retourner à la <a
			href="/">page d'accueil</a
		>.
	</p>
	<p>Code d'erreur: {$page.status || 'N/A'}</p>
	<p>Message: {$page.error?.message || 'N/A'}</p>
</div>

<style>
	.error-page {
		text-align: center;
		padding: 50px;
		font-family: sans-serif;
	}

	.error-page h1 {
		font-size: 2.5em;
		margin-bottom: 20px;
		color: #dc3545; /* Rouge d'erreur Bootstrap */
	}

	.error-page p {
		font-size: 1.1em;
		margin-bottom: 10px;
	}

	.error-page a {
		color: #007bff; /* Bleu Bootstrap */
		text-decoration: none;
	}

	.error-page a:hover {
		text-decoration: underline;
	}
</style>
