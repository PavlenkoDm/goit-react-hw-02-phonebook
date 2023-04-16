import shortid from 'shortid';


export const ContactList = ({ getFilteredContacts,  handleDeleteClick}) => {
    return (
        <ul>
            {getFilteredContacts().map(contact => {
                const { name, number } = contact;
                return (
                    <li key={shortid.generate()} style={{fontSize: "20px"}}>
                        {name}: {number}
                        <button
                            type="button"
                            name={name}
                            onClick={handleDeleteClick}
                            style={{marginLeft: "12px"}}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};