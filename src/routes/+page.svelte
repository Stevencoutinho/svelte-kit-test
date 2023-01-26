<script lang="ts">
  import { goto } from "$app/navigation";

  let emissions = 7;
  let nickname = "";

  const handleSubmit = () => {
    const params = new URLSearchParams({
      nickname: nickname,
      emissions: emissions.toString(),
    });
    goto(`/complete?${params}`);
    return;
  };
</script>

<svelte:head>
  <title>プロジェクト選択</title>
</svelte:head>

<!-- <ul>
  <li aria-current={$page.url.pathname === "/" ? "page" : undefined}>
    <a href="/">Home</a>
  </li>
  <li aria-current={$page.url.pathname === "/about" ? "page" : undefined}>
    <a href="/about">About</a>
  </li>
  <li aria-current={$page.url.pathname.startsWith("/sverdle") ? "page" : undefined}>
    <a href="/sverdle">Sverdle</a>
  </li>
</ul> -->

<main>
  <form on:submit|preventDefault={handleSubmit}>
    <div class="price-select-container">
      <p>金額を選択</p>
      <dl class="price-select">
        <div>
          <dt>7kg-CO<sub>2</sub></dt>
          <dd>
            <label>
              <input type="radio" bind:group={emissions} name="emissions" value={7} />¥100</label
            >
          </dd>
        </div>
        <div>
          <dt>35kg-CO<sub>2</sub></dt>
          <dd>
            <label
              ><input type="radio" bind:group={emissions} name="emissions" value={35} />¥500</label
            >
          </dd>
        </div>
        <div>
          <dt>70kg-CO<sub>2</sub></dt>
          <dd>
            <label
              ><input type="radio" bind:group={emissions} name="emissions" value={70} />¥700</label
            >
          </dd>
        </div>
      </dl>
    </div>
    <div>
      <p>ニックネームを入力: <input type="text" bind:value={nickname} /></p>
    </div>
    <p><button type="submit">オフセットする</button></p>
  </form>
</main>

<style>
  main {
    padding: 10px;
  }

  .price-select-container {
    width: 100%;
  }

  .price-select div {
    display: flex;
  }
</style>
