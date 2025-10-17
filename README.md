#  App Clima (Desafio de Estágio Ionic + Angular)

Um aplicativo simples que permite consultar o clima atual a partir de um CEP ou nome de cidade.

## APIs Utilizadas 

-   **ViaCEP**: Para converter um CEP em dados de localização (cidade/estado).
    
-   **Open-Meteo Geocoding**: Para converter o nome de uma cidade em coordenadas geográficas (latitude/longitude).
    
-   **Open-Meteo Weather**: Para obter os dados climáticos a partir das coordenadas.

-   **BigData Cloud ReverseGeocode**: Para obter o nome das cidades com suas coordenadas (latitude/longitude)
    
## Como Rodar o Projeto 

1.  Clone o repositório:
    ```bash
    git clone `https://github.com/israelDias-zip/appClima.git`
    ```
2.  Navegue até a pasta do projeto:
    ```bash
    cd app-clima
    ```
3.  Instale as dependências:
    ```bash
    npm install
    ```
4.  Execute o projeto localmente:
    ```bash
    ionic serve
    ```

## Suposições Feitas 

-   A temperatura é exibida em Graus Celsius (°C).
-   A velocidade do vento é exibida em m/s.
-   A umidade é exibida em %
-   O fuso horário para a data/hora da atualização é o local do usuário, conforme retornado pela API.

## Documentações utilizadas

-   Ionic v8 Docs:`https://ionicframework.com/docs`
-   Angular 20 Docs: `https://angular.dev/overview`
-   ViaCEP: `https://viacep.com.br`
-   Open-Meteo GeoCoding: `https://open-meteo.com/en/docs/geocoding-api`
-   Open-Meteo Weather: `https://open-meteo.com/en/docs`
-   BigData Cloud ReverseGeocode `https://www.bigdatacloud.com/reverse-geocoding/reverse-geocode-to-city-api`


## O que Poderia ser Melhorado 

-   Implementar um debounce no campo de busca para evitar chamadas excessivas à API.
-   Adicionar ícones para representar a condição do tempo (ensolarado, nublado, etc.).
-   Adicionar mais informações sobre o clima e uma previsão do tempo para próxomos dias.
-   Salvar a última localização pesquisada no armazenamento local para uma melhor experiência do usuário.
-   Adicionar um plano de fundo interativo que fosse sendo alterado de acordo com a condição do clima ou código do clima (weather code).
-   Relizar uma filtragem melhor das entradas 