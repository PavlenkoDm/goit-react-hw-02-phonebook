export const Filter = ({ value, handleFilterChange }) => {
    return (
        <label>
            Find contacts by name
            <input
                type="text"
                value={value}
                style={{ display: 'block' }}
                onChange={handleFilterChange}
            />
        </label>
    );
};
