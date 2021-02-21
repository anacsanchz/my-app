import React, { useState } from 'react';
import Modal from 'react-modal';
import {
    OpenModal,
    ModalTitle,
    CloseModal,
    PostContent,
    PostInputs,
    InputFile,
    PostButton
} from './styles'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        width: '80%',
        maxWidth: '600px'
    }
};

const NewPost = () => {
    let subtitle;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [errorTitle, setErrorTitle] = useState(false);
    const [errorBody, setErrorBody] = useState(false);

    const [formValues, setFormValues] = useState({ title: "", body: "", id: Math.random() });

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const onChangeText = (e) => {
        console.log(e.target.name)
        console.log(e.target.value)
        setFormValues({ ...formValues, [e.target.name]: e.target.value })
    }

    const savePost = () => {
        let array = []
        if (formValues.title.length < 3) {
            return setErrorTitle(true)

        }
        setErrorTitle(false)

        if (formValues.body.length < 10) {
            return setErrorBody(true)
        }
        setErrorBody(false)
        const postsRaw = localStorage.getItem('localPosts')

        if (postsRaw) {
            const localPosts = JSON.parse(postsRaw)
            array = [...localPosts]
        }

        array.push(formValues)

        const newPosts = JSON.stringify(array)

        localStorage.setItem('localPosts', newPosts)

        setFormValues({ title: "", body: "" })
    }



    return (

        <div>
            <OpenModal onClick={openModal}>+</OpenModal>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <ModalTitle ref={_subtitle => (subtitle = _subtitle)}>New Post</ModalTitle>
                <PostContent>
                    <PostInputs type="text" name="title" onChange={onChangeText} value={formValues.title} placeholder="Post Title" />
                    {errorTitle && <p>El titulo debe tener mas de 3 letras</p>}
                    <PostInputs type="text" name="body" onChange={onChangeText} value={formValues.body} placeholder="Post Description" />
                    {errorBody && <p>La descripcion debe tener mas de 10 letras</p>}

                    <InputFile type="file"
                        id="postImage" name="postImage "
                        accept="image/png, image/jpeg"></InputFile>
                    <PostButton onClick={savePost}>OK</PostButton>
                </PostContent>
                <CloseModal onClick={closeModal}>x</CloseModal>

            </Modal>
        </div>
    );
}

export default NewPost;

