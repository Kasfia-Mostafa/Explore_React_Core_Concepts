
const Bookmarks = ({bookmarks}) => {
  // console.log(bookmarks.lenght)
  return (
    <div className="md:w-1/3">
      <h2 className="text-3xl">Bookmark: {bookmarks.length}</h2>
    </div>
  );
};

export default Bookmarks;