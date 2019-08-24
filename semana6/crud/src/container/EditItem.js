import React, { useState } from 'react'
import MyForm from '../components/MyForm'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { editCard } from '../store/actions/index'

const EditItem = props => {
    const [title, setTitle] = useState(props.selected.title)
    const [image, setImage] = useState(props.selected.image)
    const [description, setDescription] = useState(props.selected.desc)
    const { id } = props.selected
    const [done, setDone] = useState(false)

    if (props.selected === null || done) {
        return <Redirect to='/' />
    }
    return (
        <div className='container mt-3'>
            <form
                onSubmit={e => {
                    e.preventDefault()
                    props.editCard({ title, image, description, id })
                    setDone(true)
                }}
            >
                <h2>Edit Item</h2>
                <hr />
                <MyForm
                    title={title}
                    image={image}
                    description={description}
                    setTitle={setTitle}
                    setImage={setImage}
                    setDescription={setDescription}
                />
                <button className='btn btn-primary' onClick=''>
                    Edit
                </button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        selected: state.items.selected
    }
}

const mapDispatchToProps = dispatch => {
    return {
        editCard: newItem => dispatch(editCard(newItem))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EditItem)
