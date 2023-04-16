import shortid from 'shortid';


export const ContactList = ({ getFilteredContacts,  handleDeleteClick}) => {
    return (
        <ul>
            {getFilteredContacts().map(contact => {
                const { name, number } = contact;
                return (
                    <li key={shortid.generate()}>
                        {name}: {number}
                        <button
                            type="button"
                            name={name}
                            onClick={handleDeleteClick}
                        >
                            Delete
                        </button>
                    </li>
                );
            })}
        </ul>
    );
};