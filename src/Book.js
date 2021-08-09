import React from "react";

const Book = ({ img, title, author }) => {

    const clickHandler = () => {
        alert(title);
    };

    /*const hoverMenu = () => {
        console.log(title);
    };*/

    return (
        <article className='book' onMouseOver={() => { console.log(title); }}>
            <img src={img} alt='' />
            <h1>{title}</h1>
            <h4>{author}</h4>
            <button type="button" onClick={clickHandler}>Reference Example</button>
        </article>
    );
};

export default Book
