import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import posts from "../../../data/posts.json"
import BlogItem from "../blog-item/BlogItem"
import { useEffect } from "react"

const BlogList = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = async () => {
    let response = await fetch("https://strive-blog-s.herokuapp.com/blogPosts")
    console.log(response)
    console.log(response)
    if (response.ok) {
      let data = await response.json()
      console.log(data)
      setPosts(data)
    }
  }

  return (
    <Row>
      {posts.map((post) => (
        <Col
          md={4}
          style={{
            marginBottom: 50,
          }}
          key={post.id}
        >
          <BlogItem posts={post} />
        </Col>
      ))}
    </Row>
  )
}

//  const response = await fetch("http://localhost:3001/products");

//   const products = await response.json();

//   return (
//     <Row>
//       {products.map((product) => (
//         <Col
//           md={4}
//           style={{
//             marginBottom: 50,
//           }}
//           key={product.id}
//         >
//           <BlogItem key={product.title} {...product} />
//         </Col>
//       ))}
//     </Row>

export default BlogList
