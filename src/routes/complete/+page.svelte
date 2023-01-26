<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

  let nickname = "";
  let emissions = 0;

  $: {
    const params = Object.fromEntries(new URLSearchParams($page.url.searchParams).entries());
    if (!params.emissions && isNaN(Number(params.emissions)) && Number(params.emissions)) {
      goto("/");
    } else {
      nickname = params.nickname;
      emissions = Number(params.emissions);
    }
  }
</script>

<svelte:head>
  <title>支払い完了</title>
</svelte:head>

<main>
  {#if nickname}
    <p>{nickname}様</p>
  {/if}
  <p>支払いが完了しました！</p>
  <p>{emissions}kg-CO<sub>2</sub></p>
  <a href={`/users?nickname=${nickname}&emissions=${emissions}`}>応援者リストを見る</a>
</main>
