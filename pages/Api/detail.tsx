import { useRouter } from 'next/router';
import { useState } from 'react';
import { Blog } from './BlogList';

const UpdateBlogPage = () => {
  const router = useRouter();

  const [blogs, setBlogs] = useState<Blog[]>(
    JSON.parse(localStorage.getItem("blogs") || "[]")
  );

  const id=Number(localStorage.getItem('detail'));
  const blogPost=blogs[id];

  const auth=localStorage.getItem('auth');
      console.log(auth);
  const token=JSON.parse(`${auth}`);
    
  const [formData, setFormData] = useState({
    title: blogPost.title,
    content: blogPost.content,
    imageUrl: blogPost.imageUrl,
    author: blogPost.author,
    watches: blogPost.watches,
    likes: blogPost.likes
  });
  console.log(formData);
  
   const back = () => {
    const updatedBlogPost = {
        ...blogs[id],
        title: formData.title,
        content: formData.content,
        imageUrl: formData.imageUrl,
        author: formData.author,
        watches: formData.watches + 1,
        likes: formData.likes
  
      };
      blogs[id]=updatedBlogPost;
      router.push('/Auth/dashboard');
      localStorage.setItem(`blogs`, JSON.stringify(blogs));
   }

   const like = () => {
    const updatedBlogPost = {
        ...blogs[id],
        title: formData.title,
        content: formData.content,
        imageUrl: formData.imageUrl,
        author: formData.author,
        watches: formData.watches + 1,
        likes: formData.likes + 1
  
      };
      blogs[id]=updatedBlogPost;
      router.push('/Auth/dashboard');
      localStorage.setItem(`blogs`, JSON.stringify(blogs));
   }
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  return (
      <div className="container  my-20">
        <form>
            <div className="my-5">
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-teal-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={formData.title} onChange={handleInputChange} disabled/>
            </div>
            <div className="my-5">
                <label htmlFor="title">Author</label>
                <input type="text" id="author" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-teal-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"value={formData.author} onChange={handleInputChange} disabled />
            </div>
            <div className="my-5">
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-teal-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={formData.content} onChange={handleInputChange} disabled />
            </div>
            <div className="my-5">
                <label htmlFor="imageUrl">Image URL</label>
                <input type="url" id="imageUrl" name="imageUrl" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-teal-200 text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" value={formData.imageUrl} onChange={handleInputChange} disabled />
            </div>

            {/* <button type="submit" className="w-50 py-2 px-4 mb-3 mx-5 bg-indigo-600 hover:bg-blue-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Save Changes</button> */}
            <button onClick={back} className="w-50 py-2 px-4 mb-3 mx-5 bg-indigo-600 hover:bg-red-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">Back To Blogs Home</button>
            <button onClick={like} className="w-50 py-2 px-4 mb-3 mx-5 bg-indigo-600 hover:bg-red-500 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">I like this article</button>
        </form>
      </div>
  );
};

export default UpdateBlogPage;

