
import type { NextPage } from 'next'


import Footer from '../components/nav/Footer';
import Hero from '../components/pageSections/Hero'



const Home: NextPage = () => {
  const origin = "localhost:3000"
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Hero />
        <div className="flex-1">
          <Intro />
          <GettingStarted origin={origin} />
          
        </div>
        <Footer />
      </div>

    </>
  )
}


function Intro() {
  const title = "py-4 text-4xl text-gray-900 text-center sm:tracking-tight font-extrabold";

  return (
    <section
      className="max-w-screen-sm mx-auto my-16 px-4 sm:px-6 md:px-8 space-y-4"
    >
      <picture>
        <img
          src="/laptop-graphic.png"
          className="w-64 mx-auto"
          width={800}
          height={678}
          alt="deno is drinking fresh lemon squash"
        />
      </picture>

      <h2 className={title}>
        The next-gen web framework.
      </h2>

      <p className="text-gray-600">
        Fresh is a next generation web framework, built for speed, reliability,
        and simplicity. Some stand out features:
      </p>

      <div>
        <div>
          <b>Just-in-time rendering</b> on the edge.
        </div>
        <div>
          <b>Island based client hydration</b> for maximum interactivity.
        </div>
        <div>
          <b>Zero runtime overhead</b>: no JS is shipped to the client by
          default.
        </div>
        <div>
          <b>No build step</b>.
        </div>
        <div>
          <b>No configuration</b> necessary.
        </div>
        <div>
          <b>TypeScript support</b> out of the box.
        </div>
      </div>

      <p className="text-gray-600">
        Fresh embraces the tried and true design of server side rendering and
        progressive enhancement on the client side.
      </p>
    </section>
  );
}

function GettingStarted(props: { origin: string }) {
  return (
    <section
      className="max-w-screen-sm mx-auto my-16 px-4 sm:px-6 md:px-8 space-y-4"
    >
      <h2 id="getting-started" className="text-xl text-gray-600 font-bold">
        <a href="#getting-started" className="hover:underline">
          Getting started
        </a>
      </h2>
      <p className="text-gray-600">
        To get started, make sure you have the{" "}
        <a href="https://deno.land" className="text-blue-600 hover:underline">
          Deno CLI
        </a>{" "}
        version 1.23.0 or higher installed.
      </p>
      <p className="text-gray-600">
        Then you can use the Fresh init script to bootstrap a new project:
      </p>
      <pre className="overflow-x-auto py-2 px-4 bg-gray-100">
        {`deno run -A -r ${props.origin} my-app`}
      </pre>
      <p className="text-gray-600">
        Enter the newly created project directory and run the following command
        to start the development server:
      </p>
      <pre className="overflow-x-auto py-2 px-4 bg-gray-100">
        deno task start
      </pre>
      <p className="text-gray-600">
        You can now open{" "}
        <a
          href="http://localhost:8000"
          className="text-blue-600 hover:underline"
        >
          http://localhost:8000
        </a>{" "}
        in your browser to view the page.
      </p>
      <p className="text-gray-600">
        A more in-depth getting started guide is available in{" "}
        <a href="/docs" className="text-blue-600 hover:underline">the docs</a>.
      </p>
    </section>
  );
}





export default Home