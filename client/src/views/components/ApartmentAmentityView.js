import React from 'react'

/* Refactored Stateful  component to stateless component with destructuring providing default values */
const apartmentAmenityView = ({
  apartment: { amenities },
  limit = 3,
  _id: id
}) =>
  amenities.slice(0, limit).map(item => (
    <span key={`${id}-${item}`} className="_1h9l4w0vvX6d56ZnJ3NLod">
      <i />
      <span>{item}</span>
    </span>
  ))

export default apartmentAmenityView
