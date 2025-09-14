import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  <>
     <main>
         <div className="container">
            <h1 className="font-bold text-4xl text-red-600 text-center">Quiz App</h1>
            <Link href='/quiz'>
                <button>Start Quiz</button>
            </Link>
         </div>
     </main>
  </>
  );
}
