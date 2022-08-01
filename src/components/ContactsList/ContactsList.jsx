import { List } from './ContactsList.styled';
import { Button } from './ContactsList.styled';
import { ListItem } from './ContactsList.styled';

export default function ContactsList({ contacts, filter, deleteHandler }) {
    const filteredList = contacts.filter(contact => contact.name.toLowerCase().includes(filter));
    return (
        <List>
            {filteredList.map(({ name, id, number }) => {
                return (
                    <ListItem key={id}>{name}: {number}
                    <Button onClick={() => {deleteHandler(id)}}>Delete</Button>
                    </ListItem>
                )
            })}
        </List>
    )
}