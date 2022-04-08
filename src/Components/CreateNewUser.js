import React, { useState } from "react";
import styled from "styled-components";
import data from "./TableData";

function CreateNewUser() {
  const [name, setName] = useState();
  const [id, setId] = useState();
  const [role, setRole] = useState();

  return (
    <NewUser>
      <Title>Create New User</Title>
      <FormFill>
        <form>
          <Name>
            <span> Name:</span>
            <input type="text" onChange={(e) => setName(e.target.value)} />
          </Name>
          <Id>
            docID:
            <input type="text" onChange={(e) => setId(e.target.value)} />
          </Id>
          <FunctionUsr>
            <span>Role:</span>
            <input
              type="text"
              placeholder="doctor/headdoctor"
              onChange={(e) => setRole(e.target.value)}
            />
          </FunctionUsr>
          <Value>
            <Text2>Submit</Text2>
          </Value>
        </form>
      </FormFill>
    </NewUser>
  );
  const email = "test@gmail.com";
  const results = { id, role, name, data };
  data.append(results);
}

export default CreateNewUser;

const NewUser = styled.div`
  background: #f2d2bd;
  border-radius: 25px;
  padding: 15px;
  box-shadow: 0px 18px 53px 0px rgba(0, 0, 0, 0.3);
`;

const Title = styled.div`
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const FormFill = styled.div`
  padding-top: 30px;
  padding-left: 20px;

  input {
    border-radius: 5px;
    border: none;
    font-size: 13px;
    height: 25px;
    width: 214px;
    margin-left: 30px;
  }
  input:focus {
    outline: none;
  }
`;

const Name = styled.div``;

const Id = styled.div`
  margin-top: 20px;
`;

const FunctionUsr = styled.div`
  margin-top: 20px;
`;
const Value = styled.div`
  padding-top: 15px;
  display: flex;
  justify-content: center;
`;
const Text2 = styled.div`
  font-weight: 600;
  background: #007a5a;
  border-radius: 2px;
  width: 64px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
  cursor: pointer;
  :hover {
    background: #148567;
  }
`;
