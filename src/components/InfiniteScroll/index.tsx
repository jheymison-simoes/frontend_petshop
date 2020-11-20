import React, { Component } from 'react';
import render from 'react-dom';
import InfiniteScroll from 'react-infinite-scroll-component';
import Products from '../Products';

class InfinitePaginate extends Component{
    state = {
        items: Array.from({ length: 5 })
    };
    
    fetchMoreData = () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        setTimeout(() => {
            this.setState({
                items: this.state.items.concat(Array.from({ length: 5 }))
            });
        }, 1500);
    };
    render(){
        return (
            <InfiniteScroll
                dataLength={4} //This is important field to render the next data
                next={this.fetchMoreData}
                hasMore={true}
                loader={<h4>Loading...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>
                }
                // below props only if you need pull down functionality

                >
                    
            </InfiniteScroll>
        );
    }
}

export default InfinitePaginate;