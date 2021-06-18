import Image from 'next/image'

import Header from '../templates/header'
import TopNavbar from '../templates/topNav'

import { Row, Col } from 'react-bootstrap'

const prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

export default function Home() {
  return (
    <>
      <Header />

      <div className="wrapper">
        <TopNavbar />

        <div className="container py-5">
          <h1 className="title">Finally using the Github Action</h1>

          <p className="description">
            Get started by editing <code>pages/index.js</code>
          </p>

          <Row>
            <Col md={6}>
              <a href="https://nextjs.org/docs" className="card mb-4">
                <div className="card-body">
                  <h3>Documentation &rarr;</h3>
                  <p>
                    Find in-depth information about Next.js features and API.
                  </p>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a href="https://nextjs.org/learn" className="card mb-4">
                <div className="card-body">
                  <h3>Learn &rarr;</h3>
                  <p>
                    Learn about Next.js in an interactive course with quizzes!
                  </p>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="card mb-4"
              >
                <div className="card-body">
                  <h3>Examples &rarr;</h3>
                  <p>
                    Discover and deploy boilerplate example Next.js projects.
                  </p>
                </div>
              </a>
            </Col>
            <Col md={6}>
              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="card mb-4"
              >
                <div className="card-body">
                  <h3>Deploy &rarr;</h3>
                  <p>
                    Instantly deploy your Next.js site to a public URL with
                    Vercel.
                  </p>
                </div>
              </a>
            </Col>
          </Row>
        </div>
      </div>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
        </a>
      </footer>
          {/* <Image
            src={prefix + "/vercel.svg"}
            alt="Vercel"
            className="logo"
            width={100}
            height={100}
            layout="fill"
          /> */}
    </>
  );
}
