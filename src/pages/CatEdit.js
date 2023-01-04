import React from 'react'
import { useNavigate, useParams } from "react-router-dom"
import { Form, FormGroup, Label, Input, Button, Row, Col} from "reactstrap"
import { useState } from 'react'
import '../App.css'

const CatEdit = ({ cats, updateCat }) => {
  const { id } = useParams()
  let currentCat = cats?.find((cat) => cat.id === +id)

  const [editCat, setEditCat] = useState({
    name: currentCat.name,
    age: currentCat.age,
    enjoys: currentCat.enjoys,
    image: currentCat.image
  })
  const [previewImage, setPreviewImage] = useState("")
  const handleChange = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
  }

  const handleImage = (e) => {
    setEditCat({ ...editCat, [e.target.name]: e.target.value })
    if (e.target.files && e.target.files.length > 0) {
      setPreviewImage(e.target.files[0]);
    }
  }

const navigate = useNavigate()
const handleSubmit = () => {
  updateCat(editCat, currentCat.id)
  navigate(`/catshow/${id}`)
}

  return (
    <div className='cat-form'>
      <Form >
         <Row>
            <Col>
            <FormGroup >
              <Label for="name">Name</Label>
              <Input  type="text" name="name" onChange={handleChange} value={editCat.name} />
            </FormGroup>
            </Col>
            <Col>
            <FormGroup>
              <Label for="age">Age</Label>
              <Input type="number" name="age" min="0" onChange={handleChange} value={editCat.age} />
            </FormGroup>
            </Col>
         </Row>
          
        <FormGroup>
          <Label for="enjoys">Enjoys</Label>
          <Input type="text" name="enjoys" onChange={handleChange} value={editCat.enjoys} />
        </FormGroup>
        <Row>
        <Col>
        <FormGroup>
          <Label for="image">Image</Label>
          <Input type="url" name="image"  onChange={handleImage} value={editCat.image} />
        </FormGroup>
        </Col>
        <Col>
        <div>
      {editCat.image &&
          <img
          height={300}
          width={300}
          src={editCat.image}
          alt="Thumb"
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

export default CatEdit