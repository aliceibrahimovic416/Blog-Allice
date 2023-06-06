import React, { FC } from "react";
import { useRouter } from "next/router";
import { RouteComponentProps } from "react-router-dom";

import LinkTo from "../../src/components/LinkTo";
import FeaturedArticleSection from "../../src/components/Misc/FeaturedArticleSection";
import HomeNonFeatureArticles from "../../src/components/Misc/HomeNonFeatureAricles";
import BlogList from '../Api/BlogList';
import Blog from "../Api/sort";
import bg2 from "../../public/images/bg2.jpg";

type SomeComponentProps = RouteComponentProps;

const Dashboard: FC<SomeComponentProps> = () => {
  const router = useRouter();
  const data=localStorage.getItem('blogs');
  const blogs=JSON.parse(`${data}`);
  
  const logout = () => {
    localStorage.clear();
    router.push("/Auth/Login");
  };

 
  return (
    <div style={{
      backgroundImage: `url(${bg2.src})`,
      backgroundSize:'cover',
      // width: '100%'
    }}>
        <div className="bg-sky-900"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:'center',
            paddingLeft: 50,
            paddingRight: 50,
            backgroundColor:""
          }}
        >
          <div>
            <h3 className="m-3">Home</h3>
          </div>
          <div>
            <button type="submit" 
              className="mx-5 hover:text-sky-700"
              onClick={logout}
            >
              Logout
            </button>
          <span className="muted display-6">Welcome👋</span>
          </div>
        </div>
        <div className="container">
          <div
            className="row d-flex justify-content-center align-items-center text-center"
          >
          </div>
        </div>
        <section className='w-full md:pt-[100px] md:pb-[70px] pt-[130px] pb-20 mb-10 dark:bg-slate-800 bg-slate-200' >
          <div className="container text-center px-3">
            <h1 className='text-3xl'>
              Mobile and iPhone Blog
            </h1>

            <h2 className="mt-3 text-xl">
              Alice Ibrahimovic
            </h2>

            <div className='flex justify-center mt-5 flex-wrap '>
              <LinkTo href="/pages/Api/CreateBlogPage.tsx" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
                <span className='text-xl pt-2 block '>Create your blog</span>
              </LinkTo>
              <LinkTo href="/pages/tutorial/all-components.tsx" className='flex items-center justify-center rounded-md bg-blue-600 px-4 pb-2 text-white hover:text-white shadow-lg hover:shadow-none transition-all mb-3 md:mx-5 mx-2'>
                <span className='text-xl pt-2 block'>How to</span>
              </LinkTo>
            </div>
          </div>
        </section>
        <div className="container mx-auto lg:px-[15px] px-0">
          <div className={'flex flex-wrap'}>
            <FeaturedArticleSection />
            <h1 className='px-3 w-full mb-5 text-xl md:text-3xl font-medium text-white'>Checkout the below articles on how to use different layouts and components</h1>
            <hr className='border-1 mb-10 w-[98%] mx-auto' />
            <HomeNonFeatureArticles />
          </div>
        </div>
        <div className="container mx-auto lg:px-[15px] px-0 flex flex-wrap">
          <h1 className='px-3 w-full mb-10 text-xl md:text-3xl font-medium text-white text-center'>MY blogs</h1>
          <hr className='border-1 mb-5 w-[98%] mx-auto' />
          <BlogList />    
          <Blog />  
        </div>
    </div>
  )
};
export default Dashboard;