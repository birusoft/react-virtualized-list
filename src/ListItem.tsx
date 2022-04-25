interface IProps {
  item: any;
  index: number;
}

const ListItem:React.FC<IProps> = (props: IProps) => {
    const item = props.item;
    return (
        <div>
            <img src={ item.thumbnailUrl } />
            <div>{ item.id }</div>
            <div>{ item.title }</div>
            <div>{ item.url }</div>
        </div>
    );
}

export default ListItem;