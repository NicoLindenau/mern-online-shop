export default function Rating({ value, text, color = "#f8e825" }) {
  const star = [1, 2, 3, 4, 5].map((index) => (
    <i
      key={index}
      style={{ color: color }}
      className={
        value >= index
          ? "fas fa-star"
          : value >= index - 0.5
          ? "fas fa-star-half-alt"
          : "far fa-star"
      }
    ></i>
  ))

  return (
    <div className="rating">
      <span>{star}</span>
      <span>{text && text}</span>
    </div>
  )
}
