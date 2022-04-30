import { useEffect, useRef, useState } from "react";
import ListItem from "./ListItem";

interface IProps {
    items: any[];
}

const List: React.FC<IProps> = (props: IProps) => {
    const items = props.items;
    const itemCount = props.items.length;
    const listRef = useRef(null);

    const [scrollTop, setScrollTop] = useState(0);
    const [listHeight, setListHeight] = useState(0);

    useEffect(() => {
        if (!listRef.current) { return; } 
        setListHeight((listRef.current as HTMLElement).clientHeight);
    },[listRef]);

    const handleScroll = (e: any) => {
        setScrollTop((e.target as HTMLElement).scrollTop);
    }
    
    return (<>
            <div style={{ position:'absolute', background:'gray', color:'white', right:0, bottom:0, width:'180px' }}>
                <p>Items: {itemCount}</p>
                <p>Item Height: </p>
                <p>List Height: {listHeight}</p>
                <p>Scroll Pos: {scrollTop}</p> 
            </div>

            <div onScroll={handleScroll} style={ {display:'block', height:'500px', width:'100%', overflowY:'scroll', background:'red'} }>
                <div ref={listRef}>
                    { items.map((item, index) => <ListItem key={index} item={item} index={index}></ListItem> ) }
                </div>
            </div>
    </>)
}

export default List;