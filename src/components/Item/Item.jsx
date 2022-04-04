export default function Item({ itemInfo }) {
  return (
    <>
      <div className="col-6">
        <p>{itemInfo.title}</p>
        <p>{itemInfo.price}</p>
        <img src={require(`../../utils/articlesImg/${itemInfo.pictureUrl}`)} alt=""  height={"200px"}/>
      </div>
    </>
  );
}
