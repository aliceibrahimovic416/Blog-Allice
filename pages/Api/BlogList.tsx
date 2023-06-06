import { useState } from "react";
import { useRouter } from "next/router";

export interface Blog {
  title: string;
  createdAt: Date;
  content: string;
  watches: number;
  likes: number;
  imageUrl: string;
  author:string;
  id:number;
}

const BlogList = () => {
  const router=useRouter();
  const [blogs, setBlogs] = useState<Blog[]>(
    JSON.parse(localStorage.getItem("blogs") || "[]")
  );
  
  const detail=(id:number)=>{
  // console.log(blogs);
  if(localStorage.detail){
    localStorage.removeItem('detail');
  }
  console.log(id);
  
  localStorage.setItem('detail',id.toString());
  router.push('/Api/detail');
}

const edit=(id:number)=>{
  // console.log(blogs);
  if(localStorage.detail){
    localStorage.removeItem('detail');
  }
  console.log(id);
  
  localStorage.setItem('detail',id.toString());
  router.push('/Api/update');
}
  return (
    <div className="container my-auto">
      {blogs.map((blog) => (
        <div
          key={blog.title}
          style={{height:"400px"}}
          className="mb-10 grid grid-rows-4 grid-flow-col gap-4  bg-sky-900 "
        >
              <div className="row-span-4 relative">
                <img src={blog.imageUrl} alt={blog.title} style={{width:"600px",  height:"400px"}}/>
                <span className="text-lg  flex justify-end absolute bottom-1 right-20">{blog.createdAt}</span>
              </div>
              <div className="col-span-3 my-10 ">
                <h2 className=" font-semibold  font-['Open_Sans'] text-2xl underline">
                  TITLE
      
                </h2>
                {blog.title}
              </div>
              <div className="row-span-1 col-span-2 ">
                <p className=" font-semibold   font-['Open_Sans'] text-2xl underline">
                  AUTHOR
                </p>
                {blog.author}
              </div>
              <div className="row-span-1 col-span-2 ">
                <p className=" font-semibold   font-['Open_Sans'] text-2xl underline">
                  CONTENT
                </p>
                {blog.content}
              </div>
              <div className="row-span-1 col-span-2 flex justify-between">
                <div>
                  <span className="inline">  
                    <button className="mx-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
                        />
                      </svg>:{blog.likes}
                    </button>
                    
                  </span>
                  <span>
                    <button className="mx-2">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">                     
                       <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                       <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>:{blog.watches}
                    </button>
                  </span>
                </div>
                  <div className="text-xl h-10 pt-2 block flex items-center cursor-pointer justify-center bg-indigo-600 hover:bg-green-300 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-lg  transition ease-in duration-200 px-4 pb-2 shadow-lg hover:shadow-none transition-all mb-3 mx-2" onClick={(e)=>detail(blog.id)}>Detail </div>
                  <div className="text-xl h-10 pt-2 block flex items-center cursor-pointer justify-center bg-indigo-600 hover:bg-green-300 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white rounded-lg  transition ease-in duration-200 px-4 pb-2 shadow-lg hover:shadow-none transition-all mb-3 mx-2" onClick={(e)=>edit(blog.id)}>Edit </div>
              </div>
        </div>
      ))}
    </div>
  );
};

export default BlogList;

