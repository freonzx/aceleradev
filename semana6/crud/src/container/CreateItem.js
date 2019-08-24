import React, { useState } from 'react'
import MyForm from './../components/MyForm'
import { connect } from 'react-redux'
import { addCard } from './../store/actions/index'
import { Redirect } from 'react-router-dom'

const CreateItem = props => {
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [done, setDone] = useState(false)

    if (done) {
        return <Redirect to='/' />
    }
    return (
        <div className='container mt-3'>
            <h2>Create Item</h2>
            <hr />
            <form
                onSubmit={e => {
                    e.preventDefault()
                    props.addCard({ title, image, description })
                    setDone(true)
                }}
            >
                <MyForm
                    title={title}
                    image={image}
                    description={description}
                    setTitle={setTitle}
                    setImage={setImage}
                    setDescription={setDescription}
                />
                <button className='btn btn-primary'>Create</button>
            </form>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        addCard: newItem => dispatch(addCard(newItem))
    }
}

export default connect(
    null,
    mapDispatchToProps
)(CreateItem)
