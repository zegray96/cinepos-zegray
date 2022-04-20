export default function ErrorPage({ errorMessage }) {
  return <>
  <p className="text-center text-6xl font-bold">Oops!</p>
  <p className="text-center text-lg">{errorMessage}</p>
  </>;
}
