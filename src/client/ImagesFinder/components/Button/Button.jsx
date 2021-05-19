import {memo} from 'react';

import PropTypes from 'prop-types';

import styles from './Button.module.css'

function Button({ onClick, children }) {
    return <button onClick={onClick} className={styles.button}>{children}</button>
};

export default memo(Button);

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
}

