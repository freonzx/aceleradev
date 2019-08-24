import React from 'react'

const MyForm = ({
    title,
    image,
    description,
    setTitle,
    setImage,
    setDescription
}) => {
    return (
        <>
            <div class='form-group'>
                <label for='exampleFormControlInput1'>Title</label>
                <input
                    type='text'
                    required
                    class='form-control'
                    id='title'
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    placeholder='Title'
                />
            </div>
            <div class='form-group'>
                <label for='exampleFormControlInput1'>Image</label>
                <input
                    type='text'
                    required
                    class='form-control'
                    id='title'
                    value={image}
                    onChange={e => setImage(e.target.value)}
                    placeholder='Image URL'
                />
            </div>
            <div class='form-group'>
                <label for='exampleFormControlTextarea1'>Description</label>
                <textarea
                    class='form-control'
                    required
                    value={description}
                    id='description'
                    onChange={e => setDescription(e.target.value)}
                    rows='3'
                />
            </div>
        </>
    )
}

export default MyForm
