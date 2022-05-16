import React from "react"
import { Card } from "react-bootstrap"
import { Link } from "react-router-dom"
import BlogAuthor from "../blog-author/BlogAuthor"
import "./styles.css"
const BlogItem = ({ posts }) => {
  // const { title, cover, author, _id } = props;
  return (
    <Card className="blog-card">
      <Card.Img variant="top" src={posts.cover} className="blog-cover" />
      <Card.Body>
        <Card.Title>{posts.title}</Card.Title>
      </Card.Body>
      <Card.Footer>{posts.author.name}</Card.Footer>
    </Card>
  )
}

export default BlogItem
