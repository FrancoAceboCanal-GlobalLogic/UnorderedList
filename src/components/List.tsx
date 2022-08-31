const UnorderedList = ({ list }: { list: any[] }) => {
  return (
    <>
      <h2>Exercise 1: Unordered List</h2>
      <ul>
        {list.map((value, index) => (
          <li>{`List Item ${index + 1}`}</li>
        ))}
      </ul>
    </>
  );
};

export default UnorderedList;
