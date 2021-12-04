import { useParams } from "react-router";
export default function Proiect(props) {
  let { proiect } = useParams();

  let filter = props.projects.filter((p) => p.nume == proiect);
  let [{ nume, imagine, tecnologii, pages, repository }] = filter;

  console.log(nume);
  return (
    <div className="proiecte">
      <div></div>
      <div className="project-details">
        <div className="img-box2">
          <img src={imagine} className="imagine" />
        </div>
        <div className="detalii">
          <p>Proiect: {nume}</p>
          <p>Tecnologii: {tecnologii}</p>
          <p>
            Git Hub Pages:
            <a target="_blank" href={pages}>
              {pages}
            </a>
          </p>
          <p>
            Git Hub Repository:
            <a target="_blank" href={repository}>
              {repository}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
