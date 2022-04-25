import ListItem from "./ListItem";

interface IProps {
    items: any[];
}

const List: React.FC<IProps> = (props: IProps) => {
    const items = props.items;

    return (<>
    <div>
        { items.map((item, index) => <ListItem key={index} item={item} index={index}></ListItem> ) }
    </div>
    </>)
}

export default List;