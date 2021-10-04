import React from "react";
import { useFetch } from "./hook";

interface FetchProps {
  uri: string,
  renderSuccess: (data: Object) => JSX.Element,
  loadingFallback?: JSX.Element
  renderError?: (params: string) => JSX.Element
}

export default function Fetch({
  uri,
  renderSuccess,
  loadingFallback = <p>loading...</p>,
  renderError = (error: string) => (
    <pre>{JSON.stringify(error, null, 2)}</pre>
  )
}: FetchProps) {
  const { loading, data, error } = useFetch(uri);
  if (error) return renderError(error);
  if (loading) return loadingFallback;
  if (data) return renderSuccess(data);
  return <></>;
}