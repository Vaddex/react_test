import css from './ArticleList.module.css';

const ArticleList = ({ items }) => (
    <ul className={css.container}>
        {items.map(({ objectID, url, title }) => (
            <li key={objectID}>
                <a href={url} target="_blank" rel="noreferrer noopener">
                    {title}
                </a>
            </li>
        ))}
    </ul>
);

export default ArticleList;
