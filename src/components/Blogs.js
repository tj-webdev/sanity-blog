import '../css/blogs.css';
import SanityClient from '../client';
import React from 'react';
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [blogs,setBlogs] = React.useState(null);

  React.useEffect(()=>{
    SanityClient.fetch(`*[_type == "post"]{
      title,
      slug,
      mainImage{
        asset->{
          _id,
          url
        },
        alt
      }
    }`)
    .then((res)=>setBlogs(res))
    .catch((err)=>console.log(err))
  },[])

  return (
    <div className='blogs'>

      {
        blogs && blogs.map((blog,index)=>{
          return (
            <Link to={'/blogs/'+blog.slug.current} key={blog.slug.current}>
              <img src={blog.mainImage.asset.url} alt={blog.mainImage.alt} />
              <h3>{blog.title}</h3>
            </Link>
          )
        })
      }

    </div>
  )
}
