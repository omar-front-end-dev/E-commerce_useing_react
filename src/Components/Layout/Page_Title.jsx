import { PropTypes } from "prop-types"


export function Page_Title( { title } ) {
  return (
    <h1 className="text-center py-3">
      { title }
    </h1>
  )
}



Page_Title.propTypes = {
  title: PropTypes.string,
}