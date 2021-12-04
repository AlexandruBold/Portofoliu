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
            <a target="_blank" href={pages}>
              Git Hub Pages
            </a>
          </p>
          <p>
            <a target="_blank" href={repository}>
              Git Hub Repository
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
