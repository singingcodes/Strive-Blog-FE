import React, { useCallback, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./styles.css";
const NewBlogPost = (props) => {
  // const handleChange = useCallback((value) => {
  //   setText(value);
  // });
  const [addProduct, setAddProduct] = useState({
    name: "",
    brand: "",
    price: "",
    category: "",
    description: "",
    imageUrl: "",
  });

  const postProduct = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch("http://localhost:3001/products/", {
        method: "POST",
        body: JSON.stringify(addProduct),
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log(response);
      if (response.ok) {
        console.log(response);
        alert("ok");
        setAddProduct({
          name: "",
          brand: "",
          price: "",
          category: "",
          description: "",
          imageUrl: "",
        });
      } else {
        console.log("error");
      }
    } catch (error) {
      alert("error", error);
    }
  };

  return (
    <Container className="new-blog-container">
      <Form className="mt-5" onSubmit={postProduct}>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={addProduct.name}
            onChange={(e) =>
              setAddProduct({ ...addProduct, name: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Brand</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={addProduct.brand}
            onChange={(e) =>
              setAddProduct({ ...addProduct, brand: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            size="lg"
            value={addProduct.price}
            onChange={(e) =>
              setAddProduct({ ...addProduct, price: parseInt(e.target.value) })
            }
          />
        </Form.Group>

        {/* <Form.Group controlId="blog-category" className="mt-3">
          <Form.Label>Category</Form.Label>
          <Form.Control size="lg" as="select">
            <option>Phones</option>
            <option>Shoes</option>
            <option>Drinks</option>
            <option>Accessories</option>
          </Form.Control>
        </Form.Group> */}
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>category</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={addProduct.category}
            onChange={(e) =>
              setAddProduct({ ...addProduct, category: e.target.value })
            }
          />
        </Form.Group>

        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="text"
            size="lg"
            value={addProduct.description}
            onChange={(e) =>
              setAddProduct({ ...addProduct, description: e.target.value })
            }
          />
        </Form.Group>
        <Form.Group controlId="blog-form" className="mt-3">
          <Form.Control type="file" size="lg" />
        </Form.Group>
        <Form.Group className="d-flex mt-3 justify-content-end">
          <Button type="reset" size="lg" variant="outline-dark">
            Reset
          </Button>
          <Button
            type="submit"
            size="lg"
            variant="dark"
            style={{
              marginLeft: "1em",
            }}
          >
            Submit
          </Button>
        </Form.Group>
      </Form>
    </Container>
  );
};

export default NewBlogPost;
