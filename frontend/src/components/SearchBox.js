import { useState } from "react"
import { Form, Button } from "react-bootstrap"

export default function SearchBox({ history }) {
  const [keyword, setKeyword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push("/search/" + keyword)
    } else {
      history.push("/")
    }
  }

  return (
    <Form className="b" onSubmit={submitHandler}>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className="mr-sm-2 ml-sm-5"
      ></Form.Control>
      <Button type="submit" variant="outline-success" className="c p-2">
        Search
      </Button>
    </Form>
  )
}
