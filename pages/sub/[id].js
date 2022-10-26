import { useRouter } from "next/router";
export default function About() {
  const router = useRouter();
  const id = Number(router.query.id);
  return (
    <>
      <h1>/pages/sub/about.js</h1>
      <p>param id : {id}</p>
      <Link to="/">/pages/index.js</Link>
    </>
  );
}
