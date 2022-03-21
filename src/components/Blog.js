import React from 'react';
import '../css/blog.css';
import { useParams } from 'react-router-dom';
import SanityClient from '../client';
import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';

const builder = imageUrlBuilder(SanityClient);

function urlFor(source) {
  return builder.image(source)
}

export default function Blog() {
  const slug = useParams();
  const [blog,setBlog] = React.useState(null);

  React.useEffect(()=>{
    SanityClient.fetch(`*[_type=="post" && slug.current=="${slug.slug}"]{
      slug,
      title,
      _id,
      mainImage{
        asset->{
          _id,
          url
        }
      },
      body,
      "name": author->name,
      "authorImage": author->image
    }`)
    .then((res)=>setBlog(res[0]))
    .catch((err)=>console.log(err))
  },[slug.slug]);

  if(typeof blog == 'undefined'){
    return <h1 className='err'>Invalid URL</h1>;
  }
  else if(blog==null){
    return <h1 className='err'>Loading...</h1>;
  }
  else{
    return(
      <div className='blog-container'>
        <h1 className='blog-title'>{blog.title}</h1>

        <img className='main-image' src={urlFor(blog.mainImage).url()} alt={blog.title} />

        <div className='blog-content'>
          <BlockContent blocks={blog.body} projectId='mvn8bctr' dataset='production' />
        </div>

        <h4>AUTHOR</h4>
        <div className='author'>
          <img src={urlFor(blog.authorImage).url()} alt='author' />
          <p>{blog.name}</p>
        </div>
      </div>
    )
  }
}

