import React from 'react';
import '../styles/StoryPanel.css';

interface StoryPanelProps {
    title: string;
    descrip: string;
    list?: string[];
    imgSrc?: string;
    imgAlt?: string;
    imgLeft?: boolean;
}


const StoryPanel: React.FC<StoryPanelProps> = ({
    title,
    descrip,
    list=[],
    imgSrc,
    imgAlt = "",
    imgLeft = true
}) => {


    const imgElement = <img src={imgSrc} alt={imgAlt} />;
    const textElement =
        <div className='story-descrip flex flex-column'>
            <div className='title-border'><h1 dangerouslySetInnerHTML={{ __html: title }} ></h1></div>
            <p className='justify-text'>{descrip}</p>
            
            {list && (
                <ul className='story-items'>
                    {list.map((item, index) => (
                        <li key={index} className='item'><span>{item}</span></li>
                    ))}
                </ul>
            )}
        </div>

    return (
        <div className={`panel grid content margin-bottom  ${imgLeft?'flex-column':'flex-column-reverse'} gap-3rem`} >
            {imgLeft ? (
                <>
                    {imgElement}
                    {textElement}
                </>
            ) : (
                <>
                    {textElement}
                    {imgElement}
                </>
            )}
        </div>


    )



}

export default StoryPanel;