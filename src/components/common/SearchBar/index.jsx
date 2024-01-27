import { SearchOutlined } from '@ant-design/icons';
import { Close } from '@mui/icons-material';
import { Box, Typography} from '@mui/material';
import React, { useRef, useState, Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearRecentSearch, removeSelectedRecent } from '../../../Redux/actions/filter_actions';
import { setTextFilter } from '../../../Redux/actions/filter_actions';

 
const SearchBar = () => {
    const [searchInput, setSearchInput] = useState('')
    const { filter, isLoading} = useSelector((state) => ({
        filter: state.filter,
        isLoading: state.app.loading
    }));
    const searchbarRef = useRef(null)
    const navigate = useNavigate();

    const dispatch = useDispatch()
    const isMobile = window.screen.width <= 800;

    const onSearchChange = (event) => {
        const val = event.target.value.trimStart();
        setSearchInput(val);
    }

    const onKeyUp = event => {
        if(event.keyCode === 13) {
            dispatch(setTextFilter(searchInput));
            event.target.blur();
            // searchbarRef.current.classList.remove()

            if(isMobile){
                navigate('/');
            }

            navigate(`/search/${searchInput.trim().toLowerCase()}`);
        }
    }

    const recentSearchClickHandler = (event) => {
        const searchBar = event.target.closest('.searchbar')

        if(!searchBar){
            searchbarRef.current.classList.remove('');
            document.removeEventListener('click', recentSearchClickHandler)
        }
    }

    const onFocusInput = event => {
        event.target.select();

        if(filter.recent.length !== 0){
            searchbarRef.current.classList.add('')
            document.removeEventListener('click', recentSearchClickHandler)
        }
    }

    const onClickRecentSearch = keyword => {
        dispatch(setTextFilter(keyword));
        searchbarRef.current.classList.remove('')
        navigate(`/search/${keyword.trim().toLowerCase()}`)
    }

    const onClearRecent = () => {
        dispatch(clearRecentSearch());
    }

    return(
        <Fragment>
            <div ref={searchbarRef}>
                <SearchOutlined/>
                <input
                    // className="search-input searchbar-input"
                    onChange={onSearchChange}
                    onKeyUp={onKeyUp}
                    onFocus={onFocusInput}
                    placeholder="E.g Iphone 12 Pro Max"
                    readOnly={isLoading}
                    type="text"
                    value={searchInput}
                />

                {filter.recent.length !== 0 && (
                    <Box>
                        <Box>
                            <Typography variant='h6'>Recent Search</Typography>
                            <Typography variant='h6' onClick={onClearRecent}>Clear</Typography>
                        </Box>

                        {filter.recent.map((item, index) => (
                            <Box key={`search-${item}-${index}`}>
                                <Typography variant='h6' onClick={() => onClickRecentSearch(item)}>
                                    {item}
                                </Typography>

                                <span onClick={() => dispatch(removeSelectedRecent(item))}>
                                    <Close/>
                                </span>
                            </Box>
                        ))}
                    </Box>
                )}
            </div>
        </Fragment>
    )
}

export default SearchBar;