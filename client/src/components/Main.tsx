import React, { useEffect, useState } from 'react';
import { useTheme } from '../hooks/useTheme';
import axios from 'axios';
import { Link } from "react-router-dom";

interface MainProps {
  page: number;
}

interface CustomerProps {
  id: number;
  name: string;
  email: string;
  cellphone: string;
}

const Main: React.FC<MainProps> = ({ page }) => {
  const [opacity, setOpacity] = useState(0);
  const [customer, setCustomer] = useState<CustomerProps | null>(null);

  const { darkMode } = useTheme();

  let title = "";
  let fact = "";

  const printCustomer = (user: { name: string, email: string, cellphone: string; }) => {
    return (
      <div className="flex flex-col items-center gap-2">
        <span className="text-4xl font-bold">{ user.name }</span>
        <div className="flex gap-4 text-sm">
          <span>{ user.email }</span>
          <span>{ user.cellphone }</span>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setOpacity(0);
    setTimeout(() => setOpacity(1), 50);
  }, [page]);

  useEffect(() => {
    if (page === 1) {
      (async () => {
        try {
          const response = await axios.post("http://localhost:3001/login", {
            email: "example@email.com",
            password: "example.password",
          });
          localStorage.setItem("_token-byecar", response.data.token);
        } catch (error) {
          console.error("Erro ao fazer a solicitação:", error);
        }
      })();
    } else if (page === 4) {
      const token = localStorage.getItem("_token-byecar");
      if (token) {
        (async () => {
          try {
            const response = await axios.get("http://localhost:3001/users", {
              headers: {
                "Authorization": `Bearer ${ token }`
              }
            });
            setCustomer(response.data);
          } catch (error) {
            console.error("Erro ao fazer a solicitação:", error);
          }
        })();
      }
    } else {
      setCustomer(null);
    }
  }, [page]);

  switch (page) {
    case 1:
      title = "Página 1";
      fact = "Curiosidade Web: O primeiro website foi publicado em 1991 por Tim Berners-Lee.";
      break;
    case 2:
      title = "Página 2";
      fact = "Curiosidade sobre Carros: O Ford T foi o primeiro carro de produção em massa, lançado em 1908.";
      break;
    case 3:
      title = "Página 3";
      fact = "Curiosidade Web: O termo 'bug' foi popularizado por Grace Hopper em 1947 quando uma mariposa causou um erro em um relé.";
      break;
    case 4:
      title = "Página 4";
      fact = customer ? JSON.stringify(customer) : "Curiosidade sobre Carros: O primeiro carro movido a gasolina foi construído por Karl Benz em 1885.";
      break;
    case 5:
      title = "Página Desconhecida";
      fact = "Curiosidade: A web e os carros transformaram nosso mundo de maneiras que seus inventores nunca poderiam imaginar.";
      break;
  }

  const textColor = darkMode ? 'text-gray-300' : 'text-gray-800';
  const factColor = darkMode ? 'text-gray-400' : 'text-gray-600';

  return (
    <div className={ `flex flex-col items-center justify-between flex-1 h-full py-10 transition-opacity duration-1000 ease-in-out container mx-auto px-4 ${ textColor }` } style={ { opacity } }>
      <div className='flex flex-col items-center justify-center gap-4'>
        { page === 4 && localStorage.getItem("_token-byecar") ? (
          <button className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-2 rounded-md mb-10 hover:from-blue-500 hover:to-purple-700 transition-all duration-300 ease-in-out"
            onClick={ () => {
              localStorage.removeItem("_token-byecar");
              window.location.reload();
            } }>Remover Token e Atualizar a página</button>
        ) : page === 4 && (
          <>
            <p className="text-center text-sm text-gray-500">Faça login na página 1 para ver os dados do usuário.</p>
            <Link to="/" className="bg-gradient-to-r from-blue-400 to-purple-600 text-white px-4 py-2 rounded-md mb-10 hover:from-blue-500 hover:to-purple-700 transition-all duration-300 ease-in-out">
              Ir para a página 1
            </Link>
          </>
        ) }
        <h1 className="text-xl font-bold mb-4 text-gradient bg-clip-text from-blue-400 to-purple-600 animate-pulse">{ title }</h1>
        { customer ? printCustomer(customer) : <p className={ `text-center text-4xl ${ factColor } transition-transform duration-300` }>{ fact }</p> }
      </div>
    </div>
  );
};

export default Main;
