const SearchForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    console.log(searchValue);
  };

  return (
    <section>
      <h1 className="title">Unsplashed Images</h1>
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          placeholder="Elephant"
          className="form-input search-input"
        />
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
