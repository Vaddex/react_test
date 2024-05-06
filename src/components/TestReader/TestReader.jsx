import { useState, useEffect } from 'react';

const getInatialIndex = () => {
    const saveIndex = localStorage.getItem('reader-index');
    if (saveIndex !== null) {
        return JSON.parse(saveIndex);
    }
    return 0;
};

export default function TestReader({ articles }) {
    const [articleIdx, setArticleIdx] = useState(getInatialIndex);

    const handlePrev = () => {
        setArticleIdx(articleIdx - 1);
    };

    const handleNext = () => {
        setArticleIdx(articleIdx + 1);
    };

    useEffect(() => {
        localStorage.setItem('reader-index', articleIdx);
    }, [articleIdx]);

    const currentArticle = articles[articleIdx];
    const isFirst = articleIdx === 0;
    const isLast = articleIdx === articles.length - 1;

    return (
        <div>
            <div>
                <div>
                    <button onClick={handlePrev} disabled={isFirst}>
                        Prev
                    </button>
                    <button onClick={handleNext} disabled={isLast}>
                        Next
                    </button>
                </div>
                <p>
                    {articleIdx + 1}/{articles.length}
                </p>
            </div>
            <article>
                <h2>{currentArticle.topic}</h2>
                <p>{currentArticle.text}</p>
            </article>
            <br />
            <br />
            <br />
        </div>
    );
}
