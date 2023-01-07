import Link from "./Link";


const LinkList = (props) => {
    return (
        <ul>
            {props.links.map((link)=>(
                <Link 
                key={link.id}
                name={link.name}/>
            ))}
        </ul>
    )
}

export default LinkList;