import { useState, memo } from 'react';


import useForm from '../../../../shared/hooks/useForm'
import {initialState} from './initialState'


import styles from './Searchbar.module.css'


const Searchbar = ({onSubmit}) => {

    const [data, , handleChange, handleSubmit] = useForm({ initialState, onSubmit });
    
    return (
            <header className={styles.searchbar}>
                <form className={styles.searchForm} onSubmit={handleSubmit}>
                    <button type="submit" className={styles.searchFormButton}>
                        <span className={styles.searchFormButtonLabel}>Search</span>
                    </button>
                    <input
                        className={styles.searchFormInput}
                        type="text"
                        name="query"
                        value={data.query}
                        onChange={handleChange}
                        placeholder="Search images and photos"
                        autoComplete="off"
                    />
                </form>
            </header>
        )

}

export default memo(Searchbar)

