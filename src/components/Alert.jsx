// import './Alert.css';
import clsx from 'clsx';
import css from './Allert.module.css';

// export const Alert = ({ variant, outlined, elevated, children }) => {
//     return (
//         <p
//             className={clsx('alert', variant, {
//                 'is-outlined': outlined,
//                 'is-elevated': elevated,
//             })}
//         >
//             {children}
//         </p>
//     );
// };

export const Alert = ({ variant, outlined, elevated, children }) => {
    return (
        <p
            className={clsx(css[variant], {
                [css.isOutlined]: outlined,
                [css.isElevated]: elevated,
            })}
        >
            {children}
        </p>
    );
};
