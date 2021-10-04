import { useFetch } from './hook';

export default function GitHubUser({ login }: {login: string}) {
  const {loading, data, error } = useFetch(
    `https://api.github.com/users/${login}`
  );

  if (error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>
  }

  if (loading) {
    return <h1>loading...</h1>
  }

  return (
    <div className="githubUser">
      <img
        src={data.avatar_url}
        alt={data.login}
        style={{width: 200}}
      />
      <div>
        <h1>{data.login}</h1>

      </div>
    </div>
  );
}