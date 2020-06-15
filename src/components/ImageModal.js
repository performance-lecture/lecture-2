import React from 'react'
import styled from 'styled-components'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import btnClose from '../assets/btn-close.png'

const ImageModal = (props) => {
    const images = [
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-01.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-03.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-03.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-02.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-2/20-08-2016-Golf-Women-02.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/14/part-1/14-08-2016-Golf-Individual-Stroke-Play-Men-05.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-02.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/12/12-08-2016-archery-individual-men-01.jpg?interpolation=lanczos-none&resize=*:150',
        },
        {
            original: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:800',
            thumbnail: 'https://stillmed.olympic.org/media/Photos/2016/08/20/part-1/20-08-2016-Football-Men-03.jpg?interpolation=lanczos-none&resize=*:150',
        },
    ]

    return (
        <ImageModalWrapper>
            <ImageModalContainer>
                <BtnClose src={btnClose} onClick={props.closeModal} />
                <ModalHeader>올림픽 사진</ModalHeader>
                <Modalbody>
                    <ImageGallery items={images} />
                </Modalbody>
            </ImageModalContainer>
        </ImageModalWrapper>
    )
}

const ImageModalWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0,0,0,0.5);
    z-index: 200;
`
const ImageModalContainer = styled.div`
    width: 100%;
    max-width: 700px;
    margin: auto;
    overflow: auto;
    background: #fff;
    border-radius: 8px;
    box-sizing: border-box;
    position: relative;
`
const BtnClose = styled.img`
    cursor: pointer;
    position: absolute;
    z-index: 250;
    width: 25px;
    top: 18px;
    right: 15px;
`
const ModalHeader = styled.div`
    width: 100%;
    padding: 20px 10px;
    border-bottom: 1px solid #dddddd;
    color: #333;
    font-size: 1.05em;
    font-weight: 500;
    box-sizing: border-box;
`
const Modalbody = styled.div`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
`

export default ImageModal