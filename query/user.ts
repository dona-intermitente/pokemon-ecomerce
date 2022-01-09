import { gql } from "@apollo/client";
import { clientUser } from "../apollo-client";

export async function login(email:string,password:string) {
  console.log('entre en login');
  
	const data = await clientUser.query({
		query: gql
			`mutation login{
                login(input: { identifier: "${email}", password: "${password}" })
                {
                  jwt
                  user{
                    id
                    username
                    email
                  }
                }
            }`
	})
  console.log('data of login');
  console.log(data);
  
	return data
}