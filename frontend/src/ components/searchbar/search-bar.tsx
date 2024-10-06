import ReactSearchBox from "react-search-box";

function SearchBar() {
  const data = [
    {
      key: "john",
      value: "John Doe",
    },
    {
      key: "jane",
      value: "Jane Doe",
    },
    {
      key: "mary",
      value: "Mary Phillips",
    },
    {
      key: "robert",
      value: "Robert",
    },
    {
      key: "karius",
      value: "Karius",
    },
  ];

  return (
    <>
      <ReactSearchBox
        placeholder="Dummy Text"
        value="Doe"
        data={data}
        callback={() => console.log("triggered")}
      />
    </>
  );
}

export default SearchBar;
