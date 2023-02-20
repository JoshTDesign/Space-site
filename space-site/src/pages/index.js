import Head from 'next/head'
import Link from 'next/link'

// export default function Home(props) {
//   const posts = props.posts;
//   return (
//     <div style={{ padding: 30 }}>
//       <Head>
//         <title>Sling Academy</title>
//       </Head>
//       <div>
//        <p>hello {props.destinations[1].name}</p>
//       </div>
//     </div>
//   )
// }

// // Fetching data from the JSON file
// import fsPromises from 'fs/promises';
// import path from 'path'
// export async function getStaticProps() {
//   const filePath = path.join(process.cwd(), '/src/pages/api/data.json');
//   const jsonData = await fsPromises.readFile(filePath);
//   const objectData = JSON.parse(jsonData);
//   console.log(objectData.destinations[1].name)

//   return {
//     props: objectData
//   
// }



function Home() {
  return (
    // <HeadNav />
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/Destination">Destination</Link>
      </li>
      <li>
        <Link href="/Crew">Crew</Link>
      </li>
      <li>
        <Link href="/Technology">Technology</Link>
      </li>
    </ul>
  )
}

export default Home