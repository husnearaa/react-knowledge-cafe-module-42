
import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark'

const Bookmarks = ({bookmarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-gray-200 ml-4 mt-16 pt-2">
            <div>
                <h3 className="text-2xl text-center mt-10 mb-10 text-[#6047EC] font-bold ">Spent time on read: {readingTime}</h3>
            </div>
            <h2 className="text-2xl mt-10 mb-5 text-center font-bold ">Bookmarked Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark> )
            }
        </div>
  )
}

Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}

export default Bookmarks
