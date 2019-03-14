import React from 'react';
import Header from '../shared/Header';
import Head from 'next/head';

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'Igor Tosic Portfolio';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <meta name="description" content="My name is igor Tosic and I am an experienced JavaScript and React/Redux developer. I have a bachelor degree in E-business and several years of experience working on a wide range of technologies and projects. As the web developer, my focus is on developing web applications, UX, working with APIs, data analyst, converting, marketing automation, authentication and authorization. " />
        <meta name="keywords" content="igor tosic portfolio, igor tosic developer, javascript, react"/>
        <meta property="og:title" content="Igor Tosic - Full Stack JavaScript Developer" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is Igor Tosic and I am an experienced JavaScript and React/Redux developer."/>
        <link href="https://fonts.googleapis.com/css?family=Nunito:400,700" rel="stylesheet" />
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
      </Head>
      <div className="layout-container" >
        <Header className={`port-nav-${headerType}`}
                isAuthenticated={isAuthenticated}
                user={user}
                isSiteOwner={isSiteOwner}/>
        <main className={`cover ${className}`}>
          <div className="wrapper">
            {children}
          </div>
        </main>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;
