import React, { useState } from "react"
import { Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap"
import { useNavigate } from "react-router-dom"
import '../App.css'


const CatNew = ({ createCat }) => {
  const navigate = useNavigate()
  const [newCat, setNewCat] = useState({
    name: "",
    age: "",
    enjoys: "",
    image: ""
  })

  const handleChange = (e) => {
    setNewCat({ ...newCat, [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    createCat(newCat)
    navigate("/catindex")
  }

  return (
    <div className="cat-form">
        <Form >
            <h2 className="form-title">Create a new cat</h2>
         <Row>
            <Col>
            <FormGroup >
              <Label for="name">Name</Label>
              <Input  type="text" name="name" onChange={handleChange} value={newCat.name} placeholder="What's your name?"/>
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number" name="age" min="0" onChange={handleChange} value={newCat.age} placeholder="How old are you?" />
            </FormGroup>
            </Col>
         </Row>
          
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input type="text" name="enjoys" onChange={handleChange} value={newCat.enjoys} placeholder="What kind of things do you like?"/>
        </FormGroup>
        <Row>
        <Col>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="url" name="image"  onChange={handleChange} value={newCat.image} placeholder="URL only"/>
        </FormGroup>
        </Col>
        <Col>
        <div>
      {newCat.image &&
        <img
          height={300}
          width={300}
          src={newCat.image}
          alt="Thumb"
          style={{borderRadius: "10%"}}
        />
      }
      </div>
        </Col>
        </Row>
        <Button onClick={handleSubmit} name="submit">
          Submit Cat
        </Button>
        
      </Form>
      
      
     
    </div>
  )
}

export default CatNew