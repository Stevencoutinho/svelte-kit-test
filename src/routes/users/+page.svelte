<script lang="ts">
  import { page } from "$app/stores";
  import { users } from "../../stores/store";

  $: {
    const params = Object.fromEntries(new URLSearchParams($page.url.searchParams).entries());
    if (params.nickname && params.emissions && !isNaN(Number(params.emissions))) {
      const date = new Date();
      $users = [
        {
          date: `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`,
          nickname: params.nickname,
          emissions: Number(params.emissions),
        },
        ...$users,
      ];
    }
  }
</script>

<svelte:head>
  <title>応援者一覧</title>
</svelte:head>

<main>
  {#if $users.length}
    <table>
      <thead>
        <tr>
          <th>日付</th>
          <th>ニックネーム</th>
          <th>オフセット量</th>
        </tr>
      </thead>
      <tbody>
        {#each $users as user, i (i)}
          <tr>
            <td>{user.date}</td>
            <td>{user.nickname}さん</td>
            <td>{user.emissions}kg-CO<sub>2</sub></td>
          </tr>
        {/each}
      </tbody>
    </table>
  {:else}
    <p>応援者はまだいません。</p>
  {/if}
  <a href="/">TOPへ戻る</a>
</main>
