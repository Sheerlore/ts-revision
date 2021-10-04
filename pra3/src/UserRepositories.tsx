import React from "react";
import Fetch from "./Fetch";
import RepoMenu from "./RepoMenu";

export default function UserRepositories({
  login,
  onSelect = f => f
}: {
  login: string,
  onSelect(params: any): any
}) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}/repos`}
      renderSuccess={(data) => (
        <RepoMenu
          repositories={data}
          login={login}
          onSelect={onSelect}
        />
      )}
    />
  )
}