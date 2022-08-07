import { Link } from "react-router-dom";
import DataFromApi from "../models/DataFromApi";
import { InvalidRequest } from "./InvalidRequest";

export function HomeRoute() {
  const BASE_URL_API = "http://localhost:5000/api";
  const backendData = DataFromApi(BASE_URL_API);
  function render(backendData) {
    const { id, name, status, Desc: description } = backendData;
    return (
      <>
        <tr>
          <td>
            <Link to={`/api/list/${id}`}>{id}</Link>
          </td>

          <td>{name}</td>
          <td>{description}</td>
          <td>{status}</td>
        </tr>
      </>
    );
  }
  return (
    <div>
      {backendData === "error" ? (
        <InvalidRequest />
      ) : typeof backendData.data === "undefined" ? (
        <h1 className="text-center">Loading.... </h1>
      ) : (
        <div className="container ">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">name</th>
                <th scope="col">description</th>
                <th scope="col">status</th>
              </tr>
            </thead>
            <tbody>{backendData.data.map(render)}</tbody>
          </table>
        </div>
      )}
    </div>
  );
}
