import React from 'react'

const ModalPrime = ({btn_text,Heading, text, close_btn}) => {
    return (
        <div>
            <label for="my-modal" class="btn modal-button">{btn_text}</label>


            <input type="checkbox" id="my-modal" class="modal-toggle" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">{Heading}</h3>
                    <p class="py-4">{text}</p>
                    <div class="modal-action">
                        <label for="my-modal" class="btn">{close_btn}</label>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalPrime