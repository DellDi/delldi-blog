/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';
// import ReactClock from './components/ReactClock/ReactClock';
import Snow from './components/Snow';
import ShineButton from './components/ShineButton';

// const features = [
//   {
//     title: <>Easy to Use</>,
//     imageUrl: 'img/undraw_docusaurus_mountain.svg',
//     description: (
//       <>
//         Docusaurus was designed from the ground up to be easily installed and
//         used to get your website up and running quickly.
//       </>
//     ),
//   },
//   {
//     title: <>Focus on What Matters</>,
//     imageUrl: 'img/undraw_docusaurus_tree.svg',
//     description: (
//       <>
//         Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
//         ahead and move your docs into the <code>docs</code> directory.
//       </>
//     ),
//   },
//   {
//     title: <>Powered by React</>,
//     imageUrl: 'img/undraw_docusaurus_react.svg',
//     description: (
//       <>
//         Extend or customize your website layout by reusing React. Docusaurus can
//         be extended while reusing the same header and footer.
//       </>
//     ),
//   },
// ];

// function Feature({imageUrl, title, description}) {
//   const imgUrl = useBaseUrl(imageUrl);
//   return (
//     <div className={classnames('col col--4', styles.feature)}>
//       {imgUrl && (
//         <div className="text--center">
//           <img className={styles.featureImage} src={imgUrl} alt={title} />
//         </div>
//       )}
//       <h3>{title}</h3>
//       <p>{description}</p>
//     </div>
//   );
// }

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`迪 ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      {/* <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('/blog')}>
              我的博客
            </Link>
          </div>
        </div>
      </header> */}
      <main className={styles.main}>
        <div className={styles.center}>
          <Link to={useBaseUrl('/blog')}>
            <ShineButton
              text={'blog'}
            />
          </Link>
        </div>
        <Snow snow={styles.snow} />
        {/* {
          <div className={styles.center}>
            <ReactClock />
          </div>
        } */}
        {/* {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map(({title, imageUrl, description}) => (
                  <Feature
                    key={title}
                    title={title}
                    imageUrl={imageUrl}
                    description={description}
                  />
                ))}
              </div>
            </div>
          </section>
        )} */}
      </main>
    </Layout>
  );
}

// (function () {
//   //Converted Time in Degrees
//   //Rotate From
//   const d = new Date();
//   const convertedSeconds =
//     ((d.getSeconds() + d.getMilliseconds() / 1000) / 60) * 360;
//   const convertedMinutes = (d.getMinutes() / 60) * 360;
//   const convertedHours = ((d.getHours() + d.getMinutes() / 60) / 12) * 360;

//   //Rotate To
//   const rotateSecondsTo = convertedSeconds + 360;
//   const rotateMinutesTo = convertedMinutes + 360;
//   const rotateHoursTo = convertedHours + 360;

//   //Update Css
//   const root = document.documentElement;
//   root.style.setProperty('--s-rotate-from', convertedSeconds + 'deg');
//   root.style.setProperty('--m-rotate-from', convertedMinutes + 'deg');
//   root.style.setProperty('--h-rotate-from', convertedHours + 'deg');
//   root.style.setProperty('--s-rotate-to', rotateSecondsTo + 'deg');
//   root.style.setProperty('--m-rotate-to', rotateMinutesTo + 'deg');
//   root.style.setProperty('--h-rotate-to', rotateHoursTo + 'deg');
// })();

export default Home;
