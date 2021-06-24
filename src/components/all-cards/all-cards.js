import React from 'react';
import InfiniteScroll from 'react-infinite-scroller';

import {CardList} from '../card-list/card-list';
import './all-cards.css'

export const AllCards = ({onLoadMore, contentLeft, characters}) => {
        return (
            <div className = 'all-cards'>
                <InfiniteScroll
                initialLoad = {false}
                loadMore = {onLoadMore}
                hasMore = {contentLeft}
                loader={<div className="loader" key={0}>Loading ...</div>}
                threshold = {150}
                useWindow={true}
                > 
                    <CardList characters= {characters}/>
                </InfiniteScroll>
            </div>
        )
    }
