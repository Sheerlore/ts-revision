import React, { useEffect } from 'react';
import { useIterator } from './hook';
import RepositoryReadme from './RepositoryReadme';

export default function RepoMenu({
  repositories,
  login,
  onSelect = f => f
}: {
  repositories: any,
  login: string,
  onSelect(params: any): any
}) {
  const [{ name }, previous, next] = useIterator(
    repositories
  );

  useEffect(() => {
    if (!name) return;
    onSelect(name)
  }, [name]);

  return (
    <>
    <div style={{display: "flex"}}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
    <RepositoryReadme login={login} repo={name} />
    </>
  );
}
