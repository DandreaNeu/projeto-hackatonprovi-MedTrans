import { useState } from "react";
import { createContext } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [listDoctors, setListDoctors] = useState([]);
  const [listSpecialist, setListSpecialist] = useState([]);

  const navigation = useNavigate();

  const registerUser = (data) => {
    api
      .post("/users", data)
      .then((_) => {
        console.log("usuário logado com sucesso");
        return navigation("/login");
      })
      .catch((_) => console.log("Usuário já cadastrado"));
  };

  const getDoctors = () => {
    api
      .get("/users")
      .then((res) => {
        console.log(res.data);
        setListDoctors(res.data.data);
      })
      .catch((_) =>
        console.log("Não foi possivel carregar a lista de medicos")
      );
  };

  const loginUser = (data) => {
    api
      .post(data)
      .then((res) => {
        console.log(res);
        //implementar
      })
      .catch((_) => console.log("Email ou senha incorreto"));
  };

  const loadUsersById = (especialidade) => {
    api.post(`/especialistas/${especialidade}`).then((res) => {
      //implementar
    });
  };

  const updateUser = (data) => {
    api
      .post(data)
      .then((res) => {
        console.log("Informações atualizadas");
        //implementar
      })
      .catch((_) => console.log("não foi possivel atualizar as informações"));
  };

  return (
    <UserContext.Provider
      value={{
        registerUser,
        getDoctors,
        loginUser,
        loadUsersById,
        updateUser,
        listDoctors,
        setListDoctors,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
