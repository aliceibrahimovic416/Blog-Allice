import React, { useState } from 'react';
import Router, { useRouter } from 'next/router';

interface Blog {
  title: string;
  createdAt: Date;
  content: string;
  watches: number;
  likes: number;
  imageUrl: string;
  id:number;
  author:string;
}

const auth=localStorage.getItem('auth');
console.log(auth);
// const token=JSON.parse(`${auth}`);

const CreateBlog = () => {
  const [blog, setBlog] = useState<Blog>({
    title: '',
    id:0,
    createdAt: new Date(),
    content: '',
    watches: 0,
    likes: 0,
    imageUrl: '',
    author:''
  });

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, title: event.target.value });
  };

  const handleContentChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBlog({ ...blog, content: event.target.value });
  };

  const handleImageUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, imageUrl: event.target.value });
  };
  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBlog({ ...blog, author: event.target.value });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Save the new blog to localStorage
    const blogs = JSON.parse(localStorage.getItem('blogs') || '[]');
    if (blogs === null) {
      blog.id=0;}
      else{
        blog.id=blogs.length;
      }
    blogs.push(blog);
    localStorage.setItem('blogs', JSON.stringify(blogs));
    Router.push('/Auth/dashboard');
    // Reset the form
    setBlog({
      title: '',
      id:0,
      createdAt: new Date(),
      content: '',
      watches: 0,
      likes: 0,
      imageUrl: '',
      author: ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="container my-20">
      <div className="my-5">
        <label htmlFor="title">Title</label>
        <input type="text" id="title" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"value={blog.title} onChange={handleTitleChange} />
      </div>
      <div className="my-5">
        <label htmlFor="title">Author</label>
        <input type="text" id="author" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"value={blog.author} onChange={handleAuthorChange} />
      </div>
      <div className="my-5">
        <label htmlFor="content">Content</label>
        <textarea id="content" value={blog.content} className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={handleContentChange} />
      </div>
      <div className="my-5">
        <label htmlFor="imageUrl" >Image URL</label>
        <input type="text" id="imageUrl" value={blog.imageUrl}  className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" onChange={handleImageUrlChange} />
      </div>
      <div className="my-5">
        <button type="submit" className="w-50 py-2 px-4 mb-3 bg-indigo-600 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Create blog</button>
      </div>
    </form>
  );
};

export default CreateBlog;