import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import DataFromApi from "../models/DataFromApi";
import { InvalidRequest } from "./InvalidRequest";
import { NotFound } from "./NotFound";

export function ListRoute() {
  const navigate = useNavigate();
  const params = useParams();

  const BASE_URL_API_LIST = `http://localhost:5000/api/list/${params.id}`;
  const backendData = DataFromApi(BASE_URL_API_LIST);
  function render(backendData) {
    const { id, name, status, Desc: description, config, value } = backendData;
    return (
      <>
        <tr>
          <td>{id} </td>
          <td>{name}</td>
          <td>{value}</td>
          <td>{config}</td>
          <td>{status}</td>
          <td>{description}</td>
        </tr>
      </>
    );
  }
  return (
    <div>
      {backendData === "404" ? (
        <NotFound />
      ) : backendData === "error" ? (
        <InvalidRequest />
      ) : typeof backendData === "undefined" ? (
        <h1 className="text-center">Loading.... </h1>
      ) : (
        <div className="container ">
          <table className="table table-bordered">
            <thead className="table-dark">
              <tr>
                <th scope="col">id</th>
                <th scope="col">Name</th>
                <th scope="col">Value</th>
                <th scope="col">Config</th>
                <th scope="col">Status</th>
                <th scope="col">Description</th>
              </tr>
            </thead>
            <tbody>{render(backendData)}</tbody>
          </table>
          <button
            type="button"
            className="btn btn-link"
            onClick={() => navigate(-1)}
          >
            Go back
          </button>
        </div>
      )}
    </div>
  );
}
