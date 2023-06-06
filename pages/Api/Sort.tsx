import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';

export interface Blog  {
  title: string;
  createdAt: string;
  content: string;
  watches: number;
  likes: number;
  image: string;
};

const sort = () => {
    const [blogs, setBlogs] = useState<Blog>(
        JSON.parse(localStorage.getItem("blogs") || "[]")
      );
  const [sortBy, setSortBy] = useState<'recent' | 'likes' | 'watches'>('recent');
    console.log(`${blogs}`)
  useEffect(() => {
    // Fetch the blogs from API or localStorage
    const fetchedBlogs: Blog[] = [];

    // Sort/filter the fetchedBlogs based on `sortBy`
    switch (sortBy) {
      case 'likes':
        fetchedBlogs.sort((a, b) => b.likes - a.likes);
        break;
      case 'watches':
        fetchedBlogs.sort((a, b) => b.watches - a.watches);
        break;
      default:
        fetchedBlogs.sort((a, b) => new Date(b.createdAt).valueOf() - new Date(a.createdAt).valueOf());
        break;
    }

    setBlogs(fetchedBlogs);
  }, [sortBy]);

  return (
    <>
      <Head>
        <title>sort</title>
      </Head>

      <div className="max-w-screen-lg mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4">sort</h1>

        <div className="mb-4 flex justify-end">
          <label htmlFor="sort-by" className="mr-2">
            Sort by:
          </label>
          <select
            id="sort-by"
            name="sort-by"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as 'recent' | 'likes' | 'watches')}
            className="border rounded px-3 py-2"
            >
            <option value="recent">Recent</option>
            <option value="likes">Likes</option>
            <option value="watches">Watches</option>
            </select>
            </div>
            
                {blogs.map((blog) => (
                  <Link href={`/blog/${encodeURIComponent(blog.title)}`} key={blog.title}>
                    <a className="block border rounded p-4 mb-4 hover:bg-blue-100">
                      <h2 className="text-xl font-bold mb-2">{blog.title}</h2>
                      <p className="text-gray-600 text-sm mb-2">{new Date(blog.createdAt).toLocaleDateString()}</p>
                      <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover mb-2" />
                      <p className="text-gray-700">{blog.content}</p>
                      <div className="flex justify-between mt-2">
                        <span>{blog.likes} likes</span>
                        <span>{blog.watches} watches</span>
                      </div>
                    </a>
                  </Link>
                ))}
              </div>
            </>
            );
            };
            
            export default sort;