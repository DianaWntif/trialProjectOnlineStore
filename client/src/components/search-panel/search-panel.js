import '../search-panel/search-panel.css';

function SearchPanel () {
    return (
        <input
        type="text"
        className = "form-control search-input"
        placeholder = "Поиск в Каталоге. Например, 'мобильный телефон'"
        style= {{height: 50, fontSize: 20}}
        />
    )
}

export default SearchPanel;